package com.mightyjava.security;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class JwtResponse {
    private String token;
    private Long id;
    private String username;
    private String email;
    private List<String> roles;
}
