package com.jones.homeservicespp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ServiceController {
    @Autowired
    ServiceRepository serviceRepository;

    @GetMapping("/service")
    public List<Service> getAllServices(@RequestParam(required = false) String cat) {
        if (cat != null) {
            return this.serviceRepository.findServiceByCategory(cat);
        }
        return this.serviceRepository.findAll();
    }

    @GetMapping("/service/c/{cid}")
    public List<Service> getServiceByCompany(@PathVariable("cid") String cid) {
        return this.serviceRepository.findServicesByCompany(cid);
    }


    @PostMapping("/service")
    public Service addService(@RequestBody Service service) {
        return this.serviceRepository.save(service);
    }

    @PatchMapping("/service/{id}")
    public ResponseEntity<Service> updatedService(@PathVariable("id") String id, @RequestBody Service service) {
        Optional<Service> serviceData = serviceRepository.findById(id);
        if (serviceData.isPresent()) {
            System.out.println(service);
            Service savedService = serviceData.get();
            if (service.getName() != null) savedService.setName(service.getName());
            if (service.getCategory() != null) savedService.setCategory(service.getCategory());
            if (service.getCompany() != null) savedService.setCompany(service.getCompany());
            if (service.getPrice_per_unit() != null) savedService.setPrice_per_unit(service.getPrice_per_unit());
            if (service.getUnit() != null) savedService.setUnit(service.getUnit());
            if (service.getBooked() != null) savedService.setBooked(service.getBooked());


            Service updatedService = serviceRepository.save(savedService);
            return new ResponseEntity<>(updatedService, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/service/{id}")
    public ResponseEntity<String> deleteService(@PathVariable("id") String id) {
        System.out.println("Delete Service with ID = " + id + "...");

        try {
            this.serviceRepository.deleteById(id);
        } catch (Exception e) {
            return new ResponseEntity<>("Fail to delete!", HttpStatus.EXPECTATION_FAILED);
        }

        return new ResponseEntity<>("Service has been deleted!", HttpStatus.OK);
    }
}
