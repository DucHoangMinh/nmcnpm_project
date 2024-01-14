package com.example.backend.controller;

import com.example.backend.model.ResponseModel;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/statistic")
public class StatisticController {
    private final RoomService roomService;
    private final UserRepository userRepository;
    @GetMapping("/totalRoom")
    public ResponseEntity<ResponseModel> getNumberOfRoom() {
        try {
            int numberOfRoom = roomService.getAllRooms().size();
            return ResponseEntity.ok().body(new ResponseModel(
                    "ok",
                    "Lấy ra tổng số hộ khẩu thành công ",
                    numberOfRoom
            ));
        }
        catch (Exception message) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    message.getMessage(),
                    ""
            ));
        }
    }
    @GetMapping("/totalUser")
    public ResponseEntity<ResponseModel> getNumberOfUser() {
        try {
            int numberOfUser = userRepository.findAll().size();
            return ResponseEntity.ok().body(new ResponseModel(
                    "ok",
                    "Lấy ra tổng số nhân khẩu thành công ",
                    numberOfUser
            ));
        }  catch (Exception message) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    message.getMessage(),
                    ""
            ));
        }
    }
}
