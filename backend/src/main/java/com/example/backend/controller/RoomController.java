package com.example.backend.controller;

import com.example.backend.dto.RoomDTO;
import com.example.backend.model.ResponseModel;
import com.example.backend.model.User;
import com.example.backend.payload.RoomResponse;
import com.example.backend.payload.UserResponse;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.ServiceImpl.RoomServiceImpl;
import com.example.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/v1/room")
@RequiredArgsConstructor
public class RoomController {
    @Autowired
    private final RoomServiceImpl roomService;
    private final UserRepository userRepository;
    @Autowired
    private UserService userService;
    @PostMapping()
    public ResponseEntity<ResponseModel> createRoom(@RequestBody RoomDTO roomDTO) {
        try{
            RoomDTO newRoom = roomService.createRoom(roomDTO);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Tạo phòng thành công",
                    newRoom
            ));
        } catch (Exception message) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    message.getMessage(),
                    ""
            ));
        }
    }
    @GetMapping()
    public ResponseEntity<ResponseModel> getAllRooms() {
        try {
            List<RoomResponse> roomResponses = roomService.getAllRooms();
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Xem tất cả phòng",
                    roomResponses
            ));
        } catch (Exception message) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    message.getMessage(),
                    ""
            ));
        }
    }
    @GetMapping("/find")
    //http://localhost:8080/api/v1/room/find?id=2
    //http://localhost:8080/api/v1/room/find?address=B500
    public ResponseEntity<ResponseModel> getRoom(@RequestParam(value = "id", required = false) Long roomId, @RequestParam(value = "address",required = false) String address) {
        try {
            if (roomId != null) {
                RoomDTO roomDTO = roomService.getRoomById(roomId);
                return ResponseEntity.ok(new ResponseModel(
                        "ok",
                        "Xem phòng",
                        roomDTO
                ));
            }
            if (address != null) {
                List<RoomDTO> roomDTOs = roomService.getRoomsByAddress(address);
                return ResponseEntity.ok(new ResponseModel(
                        "ok",
                        "Xem phòng",
                        roomDTOs
                ));
            }
            return null;
        } catch (Exception message) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    message.getMessage(),
                    ""
            ));
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseModel> updateRoom(@PathVariable Long id, @RequestBody RoomDTO roomDTO) {
        try{
            RoomDTO newRoom = roomService.updateRoom(id, roomDTO);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Cập nhật thành công",
                    newRoom
            ));
        } catch (Exception message) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    message.getMessage(),
                    ""
            ));
        }
    }

    @PatchMapping("/{id}")
    //http://localhost:8080/api/v1/room/3?active=false
    public ResponseEntity<ResponseModel> setActivate(@PathVariable Long id, @RequestParam("active") boolean active) {
        try{
            RoomDTO newRoom = roomService.activateRoom(id, active);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Cập nhật trạng thái phòng thành công",
                    newRoom
            ));
        } catch (Exception message) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    message.getMessage(),
                    ""
            ));
        }
    }

    // Xóa mềm: chỉ set inactive chứ không xóa khỏi DB
    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseModel> deleteRoom(@PathVariable Long id) {
        try {
            roomService.deleteRoomById(id);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Xóa phòng thành công",
                    ""
            ));
        } catch (Exception message) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    message.getMessage(),
                    ""
            ));
        }
    }
    // Xem tất cả thành viên trong căn hộ
    @GetMapping("/{id}/users")
    public ResponseEntity<ResponseModel> getALlUsers(@PathVariable Long id) {
        try {
            Set<UserResponse> users = userService.getUserOfRoom(id);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Xem tất cả thành viên trong phòng",
                    users
            ));
        } catch (Exception message) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    message.getMessage(),
                    ""
            ));
        }
    }
}
