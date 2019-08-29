package com.jones.homeservicespp.job;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class JobController {
    @Autowired
    JobRepository jobRepository;

    @GetMapping("/job")
    public List<Job> getAllJobs() {
        return this.jobRepository.findAll();
    }

    @PostMapping("/job")
    public Job createJob(@RequestBody Job job) {
        return this.jobRepository.save(job);
    }

    @PatchMapping("/job/{id}")
    public ResponseEntity<Job> updateJob(@PathVariable("id") String id, @RequestBody Job job) {
        Optional<Job> jobData = jobRepository.findById(id);
        if (jobData.isPresent()) {
            Job savedJob = jobData.get();
            if (job.getCompany_id() != null) savedJob.setCompany_id(job.getCompany_id());
            if (job.getCustomer_id() != null) savedJob.setCustomer_id(job.getCustomer_id());
            if (job.getService_id() != null) savedJob.setService_id(job.getService_id());
            if (job.getNotes() != null) savedJob.setNotes(job.getNotes());

            Job updatedJob = jobRepository.save(savedJob);
            return new ResponseEntity<>(updatedJob, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/job/{id}")
    public ResponseEntity<String> deleteJob(@PathVariable("id") String id) {
        System.out.println("Delete Job with ID = " + id + "...");

        try {
            this.jobRepository.deleteById(id);
        } catch (Exception e) {
            return new ResponseEntity<>("Fail to delete!", HttpStatus.EXPECTATION_FAILED);
        }

        return new ResponseEntity<>("Job has been deleted!", HttpStatus.OK);
    }

}
