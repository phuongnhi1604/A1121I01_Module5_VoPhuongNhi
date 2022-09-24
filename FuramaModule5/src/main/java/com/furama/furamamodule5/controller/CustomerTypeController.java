package com.furama.furamamodule5.controller;

import com.furama.furamamodule5.entity.CustomerType;
import com.furama.furamamodule5.service.CustomerTypeService;
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
@RequestMapping("/api/customerTypes")
public class CustomerTypeController {
    @Autowired
    private CustomerTypeService customerTypeService;

    @GetMapping
    public ResponseEntity<List<CustomerType>> findAll(){
        List<CustomerType> customerTypes = customerTypeService.findAll();
        if (customerTypes.isEmpty()){
            return new ResponseEntity<List<CustomerType>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<CustomerType>>(customerTypes, HttpStatus.OK);
    }
}
