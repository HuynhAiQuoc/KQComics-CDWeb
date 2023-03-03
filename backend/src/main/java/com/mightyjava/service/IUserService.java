package com.mightyjava.service;

import com.mightyjava.domain.User;
import com.mightyjava.dto.CheckUserResponse;
import com.mightyjava.dto.CreateUserDTO;
import com.mightyjava.dto.UserDTO;

import java.util.Optional;

public interface IUserService {
    Optional<User> findById(Long id);

    User saveOrUpdate(User t);

    UserDTO createUser(CreateUserDTO user);

    CheckUserResponse checkExistUser(String email);
}
