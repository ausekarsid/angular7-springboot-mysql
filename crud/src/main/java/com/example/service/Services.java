package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.User;
import com.example.repository.UserRepository;

@Service
public class Services {

	@Autowired
	private UserRepository repo;
	
	public void adduser(User user) {
		repo.save(user);		
	}
	public List<User> userslist() {
		return repo.findAll();
	}
	public void deleteuser(int user_id) {
		repo.deleteById(user_id);
	}
	public User getuser(int user_id) {
		return repo.findById(user_id);
	}
	public void updateuser(int user_id, User user) {
		repo.save(user);
	}

}
