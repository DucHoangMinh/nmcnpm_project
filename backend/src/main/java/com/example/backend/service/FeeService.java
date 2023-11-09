package com.example.backend.service;

import com.example.backend.dto.FeeDTO;
import com.example.backend.model.ResponseModel;

import java.util.List;

public interface FeeService {
    List<FeeDTO> getAllFees();
    FeeDTO getFeeById(Long id);
    FeeDTO createFee(FeeDTO feeDTO);
    FeeDTO updateFee(Long id, FeeDTO newFeeDTO);
    void deleteFee(Long id);
}
