package com.furama.furamamodule5.controller;

import com.furama.furamamodule5.entity.Contract;
import com.furama.furamamodule5.entity.Customer;
import com.furama.furamamodule5.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/contracts")
public class ContractController {
    @Autowired
    private ContractService contractService;

    @GetMapping
    public ResponseEntity<List<Contract>> findAll(){
        List<Contract> contracts = contractService.findAll();
        if (contracts.isEmpty()){
            return new ResponseEntity<List<Contract>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Contract>>(contracts, HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Contract>> findAllPageable(@RequestParam int index){
        List<Contract> contracts = contractService.findAllPageable(index);
        if (contracts.isEmpty()){
            return new ResponseEntity<List<Contract>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Contract>>(contracts, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Contract> saveContract(@RequestBody Contract contract){
        return new ResponseEntity<Contract>(contractService.add(contract), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Contract>> search(@RequestParam(defaultValue = "") String startDay,
                                                 @RequestParam(defaultValue = "") String endDay,
                                                 @RequestParam(defaultValue = "") String customer,
                                                 @RequestParam(defaultValue = "") String service) {
        List<Contract> contracts = contractService.search(startDay, endDay, customer, service);
        if (contracts.isEmpty()){
            return new ResponseEntity<List<Contract>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Contract>>(contracts, HttpStatus.OK);
    }
}
