package com.mightyjava.service;

import com.mightyjava.domain.Role;
import com.mightyjava.domain.User;

import java.util.List;
import java.util.Optional;

public interface IRoleService  {

	List<Role> findAll();

	Optional<Role> findById(Long id);

	Role saveOrUpdate(Role t);

	 Role findByName(String name);
}
