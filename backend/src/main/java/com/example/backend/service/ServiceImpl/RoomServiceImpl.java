package com.example.backend.service.ServiceImpl;

import com.example.backend.dto.FeeDTO;
import com.example.backend.dto.RoomDTO;
import com.example.backend.exception.DataNotFoundException;
import com.example.backend.model.Room;
import com.example.backend.model.User;
import com.example.backend.payload.UserResponse;
import com.example.backend.repository.PaymentRepository;
import com.example.backend.repository.RoomRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.RoomService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Data
public class RoomServiceImpl implements RoomService {
    private final RoomRepository roomRepository;
    private final PaymentRepository paymentRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    @Override
    public RoomDTO createRoom(RoomDTO roomDTO) {
        if (roomRepository.existsByAddress(roomDTO.getAddress())) {
            throw new RuntimeException("Phòng này đã tồn tại");
        } else {
            Room room = modelMapper.map(roomDTO, Room.class);
            room.setActive(true);
            Room newRoom = roomRepository.save(room);
            roomDTO.setId(newRoom.getId());
            return roomDTO ;
        }
    }
    @Override
    public List<RoomDTO> getAllRooms() {
        List<RoomDTO> roomDTOList = roomRepository.findAll().stream().map(
                room ->  modelMapper.map(room, RoomDTO.class))
                .toList();
        for (int i = 0; i < roomDTOList.size(); i++) {
            int number_of_mem = getNumberOfMembers(roomDTOList.get(i).getId());
            roomDTOList.get(i).setNumberOfMem(number_of_mem);
        }
        return roomDTOList;
    }

    @Override
    public RoomDTO getRoomById(Long id) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new DataNotFoundException("Cannot find room with id: " + id));
        return modelMapper.map(room, RoomDTO.class);
    }

    public List<RoomDTO> getRoomsByAddress(String address) {
        List<Room> rooms = roomRepository.findByAddresses(address);
        if (rooms.isEmpty()) {
            throw new DataNotFoundException("Cannot find any room with address: " + address);
        }
        return rooms.stream()
                .map(room -> modelMapper.map(room, RoomDTO.class))
                .collect(Collectors.toList());
    }


    @Override
    public RoomDTO updateRoom(Long id, RoomDTO roomDTO) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new DataNotFoundException("Cannot find room with id: " + id));
        room.setAddress(roomDTO.getAddress());
        room.setTypeRoom(roomDTO.getTypeRoom());
        room.setArea(roomDTO.getArea());
        roomRepository.save(room);
        roomDTO.setId(id);
        return roomDTO;
    }

    @Override
    public void deleteRoomById(Long id) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new DataNotFoundException("Cannot find room with id: " + id));
        room.setActive(false);
    }

    @Override
    public RoomDTO activateRoom(Long id, boolean active) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new DataNotFoundException("Cannot find room with id: " + id));
        room.setActive(active);
        roomRepository.save(room);
        RoomDTO roomDTO = modelMapper.map(room, RoomDTO.class);
        return roomDTO;
    }

    @Override
    public List<RoomDTO> findListOfIncompleteRooms(Long feeId) {
        List<Room> rooms = paymentRepository.findListOfIncompleteRooms(feeId);
        List<RoomDTO> roomDTOS = rooms.stream().map(room ->  modelMapper.map(room, RoomDTO.class)).collect(Collectors.toList());
        return roomDTOS;
    }

    @Override
    public List<Object[]> findIncompletedFee(Long roomId) {
        List<Object[]> fees = paymentRepository.findIncompletedFee(roomId);
        //List<FeeDTO> feeDTOS = fees.stream().map(fee -> modelMapper.map(fee, FeeDTO.class)).collect(Collectors.toList());
        return fees;
    }

    @Override
    public List<Object[]> findCompletedFee(Long roomId) {
        List<Object[]> fees = paymentRepository.findCompletedFee(roomId);
        return fees;
    }
    public Set<UserResponse> getUserOfRoom(Long roomId) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new DataNotFoundException("Cannot find room with id: " + roomId));
        Set<User> users = userRepository.findByRoomId(roomId);
        Set<UserResponse> userResponses = users.stream()
                .map(user -> UserResponse.builder()
                        .id(user.getId())
                        .fullname(user.getFullname())
                        .email(user.getEmail())
                        .phone(user.getPhone())
                        .dob(user.getDob())
                        .sex(user.getSex())
                        .role(user.getRole())
                        .relationship(user.getRelationship())
                        .identity(user.getIdentity())
                        .build())
                .collect(Collectors.toSet());
        return userResponses;
    }
    @Override
    public int getNumberOfMembers(Long roomId) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new DataNotFoundException("Cannot found room with id: " + roomId));
        Set<User> members = userRepository.findByRoomId(roomId);
        return members.size();
    }
}
