package com.mightyjava.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;


@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false)
	private String username;
	@Column(unique=true)
	@Email
	private String email;
	@Column(nullable = false)
	private String password;
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "user_roles",
			joinColumns = @JoinColumn(name="user_id"),
			inverseJoinColumns = @JoinColumn(name="role_id")
	)
	private Set<Role> roles;
}