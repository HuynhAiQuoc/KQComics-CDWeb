package com.mightyjava.service.impl;

import com.mightyjava.domain.Role;
import com.mightyjava.repository.RoleRepository;
import com.mightyjava.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleServiceImpl implements IRoleService {

	@Autowired
	private RoleRepository roleRepository;

	@Override
	public List<Role> findAll() {
		return roleRepository.findAll();
	}

	@Override
	public Optional<Role> findById(Long id) {
		return roleRepository.findById(id);
	}
	
	@Override
	public  Role findByName(String name) {
		return roleRepository.findByName(name).orElse(null);
	}

	@Override
	public Role saveOrUpdate(Role role) {
		return roleRepository.saveAndFlush(role);
	}



}