package com.example.backend;

import com.example.backend.controller.LoginController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan("com.example.backend.repository")
@ComponentScan(basePackageClasses = LoginController.class)
@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class BackendApplication{
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
}
