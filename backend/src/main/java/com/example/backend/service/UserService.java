package com.example.backend.service;

import com.example.backend.dto.UserDTO;
import com.example.backend.exception.DataNotFoundException;
import com.example.backend.exception.UserException;
import com.example.backend.model.CustomUserDetail;
import com.example.backend.model.Room;
import com.example.backend.model.User;
import com.example.backend.payload.UpdateUserRequest;
import com.example.backend.payload.UserResponse;
import com.example.backend.repository.RoomRepository;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;
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
    public UpdateUserRequest updateInfo(Long userId, UpdateUserRequest updateUserRequest) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new DataNotFoundException("Cannot found user with id: " + userId));
        if (updateUserRequest.getFullname() != null) {
            user.setFullname(updateUserRequest.getFullname());
        }
        if (updateUserRequest.getSex() != null) user.setSex(updateUserRequest.getSex());
        if (updateUserRequest.getPhone() != null) user.setPhone(updateUserRequest.getPhone());
        if (updateUserRequest.getDob() != null) user.setDob(updateUserRequest.getDob());
        if (updateUserRequest.getIdentity() != null) user.setIdentity(updateUserRequest.getIdentity());
        if (updateUserRequest.getRelationship() != null) user.setRelationship(updateUserRequest.getRelationship());
        userRepository.save(user);
        return updateUserRequest;
    }
}
