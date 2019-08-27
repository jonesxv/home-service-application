package com.jones.homeservicespp.company;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/company")
public class CompanyController {

    @Autowired
    CompanyRepository companyRepository;

    @GetMapping("")
    public List<Company> getAllCompanies() {
        return this.companyRepository.findAll();
    }

    @PostMapping("")
    public Company createCompany(@RequestBody Company company) {
        return this.companyRepository.save(company);
    }

    @PatchMapping("/{id}")
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
}