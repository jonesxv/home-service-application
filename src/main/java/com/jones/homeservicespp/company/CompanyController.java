package com.jones.homeservicespp.company;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class CompanyController {

    @Autowired
    CompanyRepository companyRepository;

    @GetMapping("/company")
    public List<Company> getAllCompanies() {
        return this.companyRepository.findAll();
    }

    @PostMapping("/company")
    public Company createCompany(@RequestBody Company company) {
        return this.companyRepository.save(company);
    }

    @GetMapping("/company/{id}")
    public Optional<Company> getCompany(@PathVariable("id") String id) {
        System.out.println(this.companyRepository.findById(id));
        return this.companyRepository.findById(id);
    }

    @PatchMapping("/company/{id}")
    public ResponseEntity<Company> updateCompany(@PathVariable("id") String id, @RequestBody Company company) {
        Optional<Company> companyData = companyRepository.findById(id);
        if (companyData.isPresent()) {
            Company savedCompany = companyData.get();
            if (company.getName() != null) savedCompany.setName(company.getName());
            if (company.getImageUrl() != null) savedCompany.setImageUrl(company.getImageUrl());

            Company updatedCompany = companyRepository.save(savedCompany);
            return new ResponseEntity<>(updatedCompany, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/company/{id}")
    public ResponseEntity<String> deleteCompany(@PathVariable("id") String id) {
        System.out.println("Delete Company with ID = " + id + "...");

        try {
            this.companyRepository.deleteById(id);
        } catch (Exception e) {
            return new ResponseEntity<>("Fail to delete!", HttpStatus.EXPECTATION_FAILED);
        }

        return new ResponseEntity<>("Company has been deleted!", HttpStatus.OK);
    }
}