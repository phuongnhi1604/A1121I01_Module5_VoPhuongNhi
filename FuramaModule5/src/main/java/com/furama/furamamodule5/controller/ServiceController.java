package com.furama.furamamodule5.controller;

import com.furama.furamamodule5.entity.Service;
import com.furama.furamamodule5.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/services")
public class ServiceController {
    @Autowired
    private ServiceService serviceService;

    @GetMapping
    public ResponseEntity<List<Service>> findAll() {
        List<Service> services = serviceService.findAll();
        if (services.isEmpty()) {
            return new ResponseEntity<List<Service>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Service>>(services, HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Service>> findAllPageable(@RequestParam int index) {
        List<Service> services = serviceService.findAllPageable(index);
        if (services.isEmpty()) {
            return new ResponseEntity<List<Service>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Service>>(services, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Service> findById(@PathVariable("id") int id){
        try{
            Service service = serviceService.findById(id);
            return new ResponseEntity<Service>(service, HttpStatus.OK);
        }catch (NoSuchElementException e) {
            return new ResponseEntity<Service>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<Service> create(@RequestBody Service service){
        return new ResponseEntity<Service>(serviceService.add(service), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Service> updateService(@PathVariable("id") Integer id, @RequestBody Service service){
        Service serviceFind = serviceService.findById(id);
        try{
            service.setService_id(serviceFind.getService_id());
            return new ResponseEntity<Service>(serviceService.update(service), HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<Service>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Service> deleteService(@PathVariable("id") Integer id){
        try{
            Service service = serviceService.findById(id);
            serviceService.delete(id);
            return new ResponseEntity<Service>(service, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<Service>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/search")
    public ResponseEntity<List<Service>> search(@RequestParam(defaultValue = "") String name,
                                                 @RequestParam(defaultValue = "") String rentType,
                                                 @RequestParam(defaultValue = "") String serviceType) {
        List<Service> services = serviceService.search(name, rentType, serviceType);
        if (services.isEmpty()){
            return new ResponseEntity<List<Service>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Service>>(services, HttpStatus.OK);
    }
}
