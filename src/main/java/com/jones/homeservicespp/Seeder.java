package com.jones.homeservicespp;

import com.jones.homeservicespp.categories.Category;
import com.jones.homeservicespp.categories.CategoryRepository;
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

import javax.naming.CompositeName;
import java.util.Arrays;

@Component
public class Seeder implements CommandLineRunner {
    private UserRepository userRepository;
    private CompanyRepository companyRepository;
    private ServiceRepository serviceRepository;
    private JobRepository jobRepository;
    private CategoryRepository categoryRepository;

    public Seeder(UserRepository userRepository, CompanyRepository companyRepository, ServiceRepository serviceRepository, JobRepository jobRepository, CategoryRepository categoryRepository) {
        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
        this.serviceRepository = serviceRepository;
        this.jobRepository = jobRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        this.companyRepository.deleteAll();
        this.jobRepository.deleteAll();
        this.serviceRepository.deleteAll();
        this.userRepository.deleteAll();
        this.categoryRepository.deleteAll();

        Category homeCleaning = new Category("Home Cleaning");
        Category junkRemoval = new Category("Junk Removal");
        Category carMaintenance = new Category("Car Maintenance");
        Category poolCleaning = new Category("Pool Cleaning");
        Category HVAC = new Category("A/C Maintenance");
        Category electrical = new Category("Electrical");
        Category roofing = new Category("Roofing");
        Category plumbing = new Category("Plumbing");

        this.categoryRepository.save(homeCleaning);
        this.categoryRepository.save(junkRemoval);
        this.categoryRepository.save(carMaintenance);
        this.categoryRepository.save(poolCleaning);
        this.categoryRepository.save(HVAC);
        this.categoryRepository.save(electrical);
        this.categoryRepository.save(roofing);
        this.categoryRepository.save(plumbing);

        Company help = new Company("Mountain Home Service","https://www.brandcrowd.com/gallery/brands/pictures/picture13391782322.png");
        Company c2 = new Company("Lorem Ipsum Home Service","http://geekchicpro.com/wp-content/uploads/ho/thumb-house-work-maintenance-logo-vector.jpg");
        Company c3 = new Company("Casa Bella LLC","https://www.48hourslogo.com/48hourslogo_data/2017/01/24/57561_1485230625.png");
        this.companyRepository.save(help);
        this.companyRepository.save(c2);
        this.companyRepository.save(c3);

        User james = new User("James","Milner", "j@j.co", help.getId());
        this.userRepository.save(james);

        Service cleaning = new Service("House Cleaning", homeCleaning.getId(), false, help.getId(), help.getName(), "sq ft", 200);
        Service junk = new Service("Get Rid of Junk", junkRemoval.getId(), false, help.getId(), help.getName(), "50 lbs", 20);
        this.serviceRepository.save(junk);
        this.serviceRepository.save(cleaning);

        Job clean = new Job(james.getEmail(), help, cleaning, false, Arrays.asList("Note"));
        Job junkJob = new Job(james.getEmail(), help, junk, false, Arrays.asList("Note"));
        this.jobRepository.save(junkJob);
        this.jobRepository.save(clean);
    }
}
