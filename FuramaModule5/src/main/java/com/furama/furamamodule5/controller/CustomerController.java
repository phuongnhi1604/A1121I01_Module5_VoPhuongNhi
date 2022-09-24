package com.furama.furamamodule5.controller;

import com.furama.furamamodule5.entity.Customer;
import com.furama.furamamodule5.entity.CustomerType;
import com.furama.furamamodule5.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @GetMapping
    public ResponseEntity<List<Customer>> findAll(){
        List<Customer> customerList = customerService.findAll();
        if (customerList.isEmpty()) {
            return new ResponseEntity<List<Customer>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Customer>>(customerList, HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Customer>> findAllPageable(@RequestParam int index){
        List<Customer> customers = customerService.findAllPageable(index);
        if (customers.isEmpty()){
            return new ResponseEntity<List<Customer>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Customer>>(customers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> findById(@PathVariable("id") Integer id){
        try{
            Customer customer = customerService.findById(id);
            return new ResponseEntity<Customer>(customer, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<Customer>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<Customer> saveCustomer(@RequestBody Customer customer){
        return new ResponseEntity<Customer>(customerService.add(customer), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable("id") Integer id, @RequestBody Customer customer){
        Customer customerFind = customerService.findById(id);
        try{
            customer.setCustomer_id(customerFind.getCustomer_id());
            return new ResponseEntity<Customer>(customerService.update(customer), HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<Customer>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Customer> deleteCustomer(@PathVariable("id") Integer id){
        try{
            Customer customer = customerService.findById(id);
            customerService.delete(id);
            return new ResponseEntity<Customer>(customer, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<Customer>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/search")
    public ResponseEntity<List<Customer>> search(@RequestParam(defaultValue = "") String name,
                                                 @RequestParam(defaultValue = "") String type) {
        List<Customer> customers = customerService.search(name, type);
        if (customers.isEmpty()){
            return new ResponseEntity<List<Customer>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Customer>>(customers, HttpStatus.OK);
    }

//    @GetMapping("/searchPage")
//    public ResponseEntity<List<Customer>> searchPageable(@RequestParam(defaultValue = "") String name,
//                                                         @RequestParam(defaultValue = "") String type, @RequestParam int page){
//        List<Customer> customers = customerService.searchPageable(name,type,page);
//        if (customers.isEmpty()){
//            return new ResponseEntity<List<Customer>>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<List<Customer>>(customers, HttpStatus.OK);
//    }

}
