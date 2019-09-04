package com.jones.homeservicespp.job;

import com.jones.homeservicespp.company.Company;
import com.jones.homeservicespp.service.Service;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document (collection = "jobs")
public class Job {
    @Id
    private String id;
    private String customerEmail;
    private Company company;
    private Service service;
    private boolean confirmed;
    private List<String> notes;

    public Job(String customerEmail, Company company, Service service, boolean confirmed, List<String> notes) {
        this.customerEmail = customerEmail;
        this.company = company;
        this.service = service;
        this.confirmed = confirmed;
        this.notes = notes;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    public List<String> getNotes() {
        return notes;
    }

    public void setNotes(List<String> notes) {
        this.notes = notes;
    }

    public boolean isConfirmed() {
        return confirmed;
    }

    public void setConfirmed(boolean confirmed) {
        this.confirmed = confirmed;
    }

    @Override
    public String toString() {
        return "Job{" +
                "id='" + id + '\'' +
                ", customerEmail='" + customerEmail + '\'' +
                ", company=" + company +
                ", service=" + service +
                ", confirmed=" + confirmed +
                ", notes=" + notes +
                '}';
    }
}
