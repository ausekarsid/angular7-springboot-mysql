package com.example.control;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.User;
import com.example.service.Services;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class Controller {
	Logger logger = LoggerFactory.getLogger(Controller.class);
	
	@Autowired
	private Services serve;
	
	@PostMapping("/user")
	public String adduser(@RequestBody User user) {
		serve.adduser(user);
		logger.info("new user created :" + user  );
		return "user added";
	}
	
	@GetMapping("/user")
	public List<User> userslist(){
		return serve.userslist();
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/user/{user_id}")
	public void deleteuser(@PathVariable int user_id) {
		logger.info("user deleted with user_id"+" "+user_id);
		serve.deleteuser(user_id);
	}

	@GetMapping("/user/{user_id}")
	public User getuser(@PathVariable int user_id) {
		logger.info("user fetced with user_id"+" "+user_id);
		return serve.getuser(user_id);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/user/{user_id}")
	public void updateuser(@PathVariable int user_id, @RequestBody User user) {
		logger.info("User: " + getuser(user_id) + " is updated");
	    serve.updateuser(user_id, user);
	}
}
