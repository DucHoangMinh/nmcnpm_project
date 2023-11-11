package com.example.backend.payload;

import com.example.backend.dto.UserDTO;
import lombok.Data;
@Data
public class LoginResponse {
    private String accessToken;
    private String tokenType = "Bearer";
    private UserDTO userDTO;
    public LoginResponse(String accessToken) {
        this.accessToken = accessToken;
    }
    public LoginResponse(String accessToken, UserDTO userDTO) {
        this.accessToken = accessToken;
        this.userDTO = userDTO;
    }
}