package com.example.backend.controller;

import com.example.backend.dto.UserDTO;
import com.example.backend.mapper.UserMapper;
import com.example.backend.model.CustomUserDetail;
import com.example.backend.model.ResponseModel;
import com.example.backend.model.User;
import com.example.backend.payload.LoginRequest;
import com.example.backend.payload.LoginResponse;
import com.example.backend.repository.UserRepository;
import com.example.backend.security.JWTtokenProvider;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class LoginController {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UserRepository userRepository;
    @Autowired
    JWTtokenProvider jwTtokenProvider;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    UserMapper userMapper;

    @GetMapping("/check")
    public String returnTest(){
        System.out.println("Receive check request");
        return "testApiSuccessfully";
    }
    @PostMapping("/login")
    public ResponseEntity<ResponseModel> authenticateUser(@RequestBody LoginRequest loginRequest) {
        // Xác thực từ username và password.
        try{
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getEmail(),
                            loginRequest.getPassword()
                    )
            );
            UserDTO userDTO = userMapper.toUserDTO(((CustomUserDetail)authentication.getPrincipal()).getUser());
            // Nếu không xảy ra exception tức là thông tin hợp lệ
            // Set thông tin authentication vào Security Context
            SecurityContextHolder.getContext().setAuthentication(authentication);
            // Trả về jwt cho người dùng.
            String jwt = jwTtokenProvider.generateToken((CustomUserDetail) authentication.getPrincipal());
            return ResponseEntity.ok().body(
                    new ResponseModel(
                            "ok",
                            "Xác thực đăng nhâp thành công",
                            new LoginResponse(jwt, userDTO)
                    )
            );
        }catch (Exception e){
            System.out.println(e);
            return ResponseEntity.ok().body(
                    new ResponseModel(
                            "error",
                            "Vui lòng kiểm tra lại email hoặc mật khẩu",
                            ""
                    )
            );
        }
    }
    @PostMapping("/register")
    ResponseEntity<ResponseModel> handleRegisterNewAccount(@RequestBody User insertUser){
        System.out.println("Get register request!!");
        Optional<User> new_user = Optional.ofNullable(userRepository.findByEmail(insertUser.getEmail()));
        if(new_user.isPresent()){
            return ResponseEntity.ok().body(
                    new ResponseModel(
                            "error",
                            "Email đã được sử dụng bởi một tài khoản khác !!!",
                            ""
                    )
            );
        }
        else {
            insertUser.setPassword(passwordEncoder.encode(insertUser.getPassword()));
            return ResponseEntity.ok().body(
                    new ResponseModel(
                            "ok",
                            "Register account successfully",
                            userRepository.save(insertUser)
                    )
            );
        }
    }
}
