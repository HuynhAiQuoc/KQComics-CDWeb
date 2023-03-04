package com.mightyjava.controller;

import com.mightyjava.dto.CheckUserResponse;
import com.mightyjava.dto.CreateUserDTO;
import com.mightyjava.dto.LoginDTO;
import com.mightyjava.dto.UserDTO;
import com.mightyjava.security.JwtResponse;
import com.mightyjava.security.jwt.JwtUtils;
import com.mightyjava.security.services.UserDetailsImpl;
import com.mightyjava.service.IUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {
    private final AuthenticationManager authenticationManager;
    private final IUserService userService;
    private final JwtUtils jwtUtils;


    public UserController(AuthenticationManager authentication, IUserService userService, JwtUtils jwtUtils) {
        this.authenticationManager = authentication;
        this.userService = userService;
        this.jwtUtils = jwtUtils;
    }


    @PostMapping(value = "/register")
    public ResponseEntity<UserDTO> register(@RequestBody CreateUserDTO newUser) {
        UserDTO user = userService.createUser(newUser);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PostMapping(value = "/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody LoginDTO user) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority).toList();

        String jwt = jwtUtils.generateJwtToken(userDetails.getEmail(), roles);

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

    @PostMapping(value = "/check_user")
    public ResponseEntity<CheckUserResponse> checkUser(@RequestBody Map<String, Object> emailObject) {
        String email = (String) emailObject.get("email");
        CheckUserResponse result = this.userService.checkExistUser(email);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}