package com.furama.furamamodule5.controller;

import com.furama.furamamodule5.entity.RentType;
import com.furama.furamamodule5.service.RentTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/rentTypes")
public class RentTypeController {
    @Autowired
    private RentTypeService rentTypeService;

    @GetMapping
    public ResponseEntity<List<RentType>> findAll() {
        List<RentType> rentTypes = rentTypeService.findAll();
        if (rentTypes.isEmpty()){
            return new ResponseEntity<List<RentType>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<RentType>>(rentTypes,HttpStatus.OK);
    }
}
