package com.example.backend.service.ServiceImpl;

import com.example.backend.dto.RoomDTO;
import com.example.backend.exception.DataNotFoundException;
import com.example.backend.model.Room;
import com.example.backend.repository.RoomRepository;
import com.example.backend.service.RoomService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@Data
public class RoomServiceImpl implements RoomService {
    private final RoomRepository roomRepository;
    private final ModelMapper modelMapper;
    @Override
    public RoomDTO createRoom(RoomDTO roomDTO) {
        Room room = modelMapper.map(roomDTO, Room.class);
        room.setActive(true);
        Room newRoom = roomRepository.save(room);
        roomDTO.setId(newRoom.getId());
        return roomDTO ;
    }

    @Override
    public List<RoomDTO> getAllRooms() {
        List<RoomDTO> roomDTOList = roomRepository.findAll().stream().map(
                room ->  modelMapper.map(room, RoomDTO.class))
                .toList();
        return roomDTOList;
    }

    @Override
    public RoomDTO getRoomById(Long id) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new DataNotFoundException("Cannot find room with id: " + id));
        return modelMapper.map(room, RoomDTO.class);
    }

    @Override
    public RoomDTO getRoomByAddress(String address) {
        Room room = roomRepository.findByAddress(address);
        if (room == null) throw new DataNotFoundException("Cannot find room with address: " + address);
        return modelMapper.map(room, RoomDTO.class);
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
        roomRepository.delete(room);
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
}
