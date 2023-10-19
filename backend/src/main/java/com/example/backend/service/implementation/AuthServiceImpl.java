package com.example.backend.service.implementation;

import com.example.backend.dto.LoginDto;
import com.example.backend.dto.RegisterDto;

import com.example.backend.entity.Role;
import com.example.backend.entity.User;
import com.example.backend.exception.APIException;
import com.example.backend.repository.RoleRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.security.JwtTokenProvider;
import com.example.backend.service.AuthService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;
@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;
    private JwtTokenProvider jwtTokenProvider;
    @Override
    public String register(RegisterDto registerDto) {
        // Check if this account has already been taken
        if (userRepository.existsByUsername(registerDto.getUsername())) {
            throw new APIException(HttpStatus.BAD_REQUEST, "Username has already been taken");
        }
        // Check if this email has already been taken
        if (userRepository.existsByEmail(registerDto.getEmail()))  {
            throw new APIException(HttpStatus.BAD_REQUEST, "Email has already been taken");
        }

        // Create new user
        User user = new User();
        user.setName(registerDto.getName());
        user.setEmail(registerDto.getEmail());
        user.setUsername(registerDto.getUsername());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        // Add role user
        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName("ROLE_USER");
        roles.add(userRole);
        user.setRoles(roles);
        userRepository.save(user);
        return "Registered successfully";
    }

    @Override
    public String login(LoginDto loginDto) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getUsernameOrEmail(),
                loginDto.getPassword()
        ));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtTokenProvider.generateToken(authentication);
        return token;
    }
}
