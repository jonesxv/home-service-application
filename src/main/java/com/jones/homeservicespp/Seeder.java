package com.jones.homeservicespp;

import com.jones.homeservicespp.company.Company;
import com.jones.homeservicespp.company.CompanyRepository;
import com.jones.homeservicespp.job.Job;
import com.jones.homeservicespp.job.JobRepository;
import com.jones.homeservicespp.service.Service;
import com.jones.homeservicespp.service.ServiceRepository;
import com.jones.homeservicespp.user.User;
import com.jones.homeservicespp.user.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class Seeder implements CommandLineRunner {
    private UserRepository userRepository;
    private CompanyRepository companyRepository;
    private ServiceRepository serviceRepository;
    private JobRepository jobRepository;

    public Seeder(UserRepository userRepository, CompanyRepository companyRepository, ServiceRepository serviceRepository, JobRepository jobRepository) {
        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
        this.serviceRepository = serviceRepository;
        this.jobRepository = jobRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        this.companyRepository.deleteAll();
        this.jobRepository.deleteAll();
        this.serviceRepository.deleteAll();
        this.userRepository.deleteAll();

        User james = new User("James","Milner", "j@j.co");
        this.userRepository.save(james);

        Company help = new Company("Mountain Home Service","https://www.brandcrowd.com/gallery/brands/pictures/picture13391782322.png");
        this.companyRepository.save(help);

        Service cleaning = new Service("House Cleaning", "Cleaning", false, help.getId(), "sq ft", 200);
        this.serviceRepository.save(cleaning);

        Job clean = new Job(james.getId(), help.getId(), cleaning.getId(), Arrays.asList("Note"));
        this.jobRepository.save(clean);
    }
}
