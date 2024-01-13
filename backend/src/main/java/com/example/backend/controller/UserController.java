package com.example.backend.controller;

import com.example.backend.dto.UserDTO;
import com.example.backend.mapper.UserMapper;
import com.example.backend.model.ResponseModel;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/user")
@RequiredArgsConstructor
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserMapper userMapper;
    @GetMapping("/all")
    public ResponseEntity<ResponseModel> getAllUser(){
        try{
            List<User> users = userRepository.findAll();
            List<UserDTO> userDTOS = new ArrayList<>();;
            for (User user : users){
                userDTOS.add(userMapper.toUserDTO(user));
            }
            return ResponseEntity.ok().body(
                    new ResponseModel(
                            "ok",
                            "Get all user success",
                            userDTOS
                    )
            );
        }catch (Exception error){
            return ResponseEntity.badRequest().body(
                    new ResponseModel(
                            "failed",
                            error.getMessage(),
                            ""
                    )
            );
        }
    }
}
