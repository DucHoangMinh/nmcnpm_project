package com.example.backend.service;

import com.example.backend.exception.DataNotFoundException;
import com.example.backend.exception.UserException;
import com.example.backend.model.CustomUserDetail;
import com.example.backend.model.Room;
import com.example.backend.model.User;
import com.example.backend.payload.UserResponse;
import com.example.backend.repository.RoomRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoomRepository roomRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username);
        if(user == null) throw new UsernameNotFoundException(username);
        return new CustomUserDetail(user);
    }

    public UserDetails loadUserById(Long id) throws UsernameNotFoundException {
        Optional<User> userOptional = userRepository.findById(id);
        if (!userOptional.isPresent()) {
            throw new UsernameNotFoundException("User not found");
        }

        User user = userOptional.get();
        return new CustomUserDetail(user);
    }
    public Set<UserResponse> getUserOfRoom(Long roomId) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new DataNotFoundException("Cannot find room with id: " + roomId));
        Set<User> users = userRepository.findByRoomId(roomId);
        Set<UserResponse> userResponses = users.stream()
                .map(user -> UserResponse.builder()
                        .fullname(user.getFullname())
                        .email(user.getEmail())
                        .phone(user.getPhone())
                        .dob(user.getDob())
                        .sex(user.getSex())
                        .role(user.getRole())
                        .relationship(user.getRelationship())
                        .build())
                .collect(Collectors.toSet());
        return userResponses;
    }
}
