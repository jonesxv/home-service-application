package com.jones.homeservicespp.service;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ServiceRepository extends MongoRepository<Service, String> {
    public List<Service> findServiceByCompany(String company);
    public List<Service> findServiceByCategory(String category);
    public List<Service> findServiceByCategoryAndCompany(String category, String company);
    public List<Service> findServicesByCompany(String company);
}
