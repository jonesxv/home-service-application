package com.jones.homeservicespp.company;

import com.jones.homeservicespp.company.Company;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CompanyRepository extends MongoRepository<Company, String> {
}
