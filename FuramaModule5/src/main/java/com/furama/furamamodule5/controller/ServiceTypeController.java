package com.furama.furamamodule5.controller;

import com.furama.furamamodule5.entity.ServiceType;
import com.furama.furamamodule5.service.ServiceTypeService;
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
@RequestMapping("/api/serviceTypes")
public class ServiceTypeController {
    @Autowired
    private ServiceTypeService serviceTypeService;

    @GetMapping
    public ResponseEntity<List<ServiceType>> findAll() {
        List<ServiceType> serviceTypes = serviceTypeService.findAll();
        if (serviceTypes.isEmpty()){
            return new ResponseEntity<List<ServiceType>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<ServiceType>>(serviceTypes, HttpStatus.OK);
    }
}
