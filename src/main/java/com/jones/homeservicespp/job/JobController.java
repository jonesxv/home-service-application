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
    public List<Job> getAllJobs(@RequestParam(required = false) String cid) {
        if (cid != null) {
           return this.jobRepository.findByComp(cid);
        }
        return this.jobRepository.findAll();
    }

    @PostMapping("/confirm/{id}")
    public Job confirmJob(@PathVariable("id") String id) {
        Optional<Job> updateJob = this.jobRepository.findById(id);
        Job job = updateJob.get();
        job.setConfirmed(true);
        return this.jobRepository.save(job);
    };

    @PostMapping("/job")
    public Job createJob(@RequestBody Job job) {
        return this.jobRepository.save(job);
    }

    @PatchMapping("/job/{id}")
    public ResponseEntity<Job> updateJob(@PathVariable("id") String id, @RequestBody Job job) {
        Optional<Job> jobData = jobRepository.findById(id);
        if (jobData.isPresent()) {
            Job savedJob = jobData.get();
            if (job.getCompany() != null) savedJob.setCompany(job.getCompany());
            if (job.getCustomerEmail() != null) savedJob.setCustomerEmail(job.getCustomerEmail());
            if (job.getService() != null) savedJob.setService(job.getService());
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
