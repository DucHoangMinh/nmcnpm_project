package com.example.backend.service;

import com.example.backend.dto.FeeDTO;
import com.example.backend.model.ResponseModel;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FeeService {
    List<FeeDTO> getAllFees();
    FeeDTO getFeeById(Long id);
    FeeDTO createFee(FeeDTO feeDTO);
    FeeDTO updateFee(Long id, FeeDTO newFeeDTO);
    void deleteFee(Long id);
}
