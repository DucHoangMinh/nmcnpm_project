package com.example.backend.controller;

import com.example.backend.dto.UserDTO;
import com.example.backend.exception.DataNotFoundException;
import com.example.backend.mapper.UserMapper;
import com.example.backend.model.ResponseModel;
import com.example.backend.model.User;
import com.example.backend.payload.ChangePasswordRequest;
import com.example.backend.payload.UpdateUserRequest;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.hibernate.sql.Update;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController()
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {
    private final UserRepository userRepository;
    @Autowired
    private final UserService userService;
    @Autowired
    UserMapper userMapper;
    @Autowired
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/{id}/changePassword")
    public ResponseEntity<ResponseModel> changePassword(@PathVariable("id") Long id, @RequestBody ChangePasswordRequest passwordRequest) {
        try {
            User user = userRepository.findById(id)
                    .orElseThrow(() -> new DataNotFoundException("Cannot found user with id: " + id));
            BCryptPasswordEncoder bcryptEncoder = new BCryptPasswordEncoder();
            boolean isPasswordMatched = bcryptEncoder.matches(passwordRequest.getOldPassword(), user.getPassword());
            if (isPasswordMatched) {
                if (passwordRequest.getOldPassword().equals(passwordRequest.getNewPassword())) {
                    return ResponseEntity.ok().body(
                            new ResponseModel(
                                    "error",
                                    "Mật khẩu mới không được trùng với mật khẩu cũ  !!!",
                                    ""
                            )
                    );
                } else {
                    user.setPassword(passwordEncoder.encode(passwordRequest.getNewPassword()));
                    userRepository.save(user);
                    return ResponseEntity.ok().body(
                            new ResponseModel(
                                    "ok",
                                    "Thay đổi mật khẩu thành công  !!!",
                                    ""
                            )
                    );
                }
            } else {
                return ResponseEntity.ok().body(
                        new ResponseModel(
                                "error",
                                "Không đúng mật khẩu   !!!",
                                ""
                        )
                );
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    new ResponseModel(
                            "error",
                            e.getMessage(),
                            ""
                    )
            );
        }

    }

    @GetMapping("/all")
    public ResponseEntity<ResponseModel> getAllUser() {
        try {
            List<User> users = userRepository.findAll();
            List<UserDTO> userDTOS = new ArrayList<>();
            ;
            for (User user : users) {
                userDTOS.add(userMapper.toUserDTO(user));
            }
            return ResponseEntity.ok().body(
                    new ResponseModel(
                            "ok",
                            "Get all user success",
                            userDTOS
                    )
            );
        } catch (Exception error) {
            return ResponseEntity.badRequest().body(
                    new ResponseModel(
                            "failed",
                            error.getMessage(),
                            ""
                    )
            );
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseModel> updateInfor(@PathVariable("id") Long userId, @RequestBody UpdateUserRequest updateUserRequest) {
        try {
            UpdateUserRequest newInfo = userService.updateInfo(userId, updateUserRequest);
            return ResponseEntity.ok().body(new ResponseModel(
                    "ok",
                    "Cập nhật dữ liệu cư dân thành công",
                    newInfo
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    new ResponseModel(
                            "error",
                            e.getMessage(),
                            ""
                    ));
        }
    }
}