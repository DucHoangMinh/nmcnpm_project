package com.example.backend.controller;


import com.example.backend.exception.UserException;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class HandleExcptionController {
    @ExceptionHandler(UserException.class)
    public String handleUserException(UserException ux, Model model){
        model.addAttribute("error", ux);
        return "error";
    }
}
