package com.mightyjava.service.impl;

import com.mightyjava.domain.Role;
import com.mightyjava.domain.User;
import com.mightyjava.dto.CheckUserResponse;
import com.mightyjava.dto.CreateUserDTO;
import com.mightyjava.dto.UserDTO;
import com.mightyjava.repository.UserRepository;
import com.mightyjava.service.IRoleService;
import com.mightyjava.service.IUserService;
import com.mightyjava.utils.ConstantUtils;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class UserServiceImpl implements IUserService{
	private final UserRepository userRepository;
	private final PasswordEncoder encoder;
	private final ModelMapper modelMapper;
	private final IRoleService roleService;

	public UserServiceImpl(UserRepository userRepository, PasswordEncoder encoder, ModelMapper modelMapper, IRoleService roleService) {
		this.userRepository = userRepository;
		this.encoder = encoder;
		this.modelMapper = modelMapper;
		this.roleService = roleService;
	}


	@Override
	public Optional<User> findById(Long id) {
		return userRepository.findById(id);
	}

	@Override
	public  User saveOrUpdate(User user) {
		return userRepository.saveAndFlush(user);
	}

	@Override
	public UserDTO createUser(CreateUserDTO newUser) {
		Role role = this.roleService.findByName(ConstantUtils.USER.toString());
		Set<Role> roles = new HashSet<>();
		roles.add(role);
		User user = new User();
		user.setUsername(newUser.getUsername());
		user.setEmail(newUser.getEmail());
		user.setPassword(encoder.encode(newUser.getPassword()));
		user.setRoles(roles);
		User result = this.saveOrUpdate(user);
		return this.modelMapper.map(result, UserDTO.class);
	}

	@Override
	public CheckUserResponse checkExistUser(String email) {
		CheckUserResponse result = new CheckUserResponse();
		Optional<User> user = this.userRepository.findByEmail(email);
		 if(user.isPresent()){
			 result.setMessage("exist");
			 result.setUsername(user.get().getUsername());
		 }else{
			 result.setMessage("empty");
		 }
		return result;
	}


}