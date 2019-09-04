package com.jones.homeservicespp.job;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface JobRepository extends MongoRepository<Job, String> {

    @Query("{ 'company.id' : '?0' }")
    List<Job> findByComp(String cid);
}
