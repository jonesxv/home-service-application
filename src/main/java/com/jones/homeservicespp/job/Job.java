package com.jones.homeservicespp.job;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document (collection = "jobs")
public class Job {
    @Id
    private String id;
    private String customer_id;
    private String company_id;
    private String service_id;
    private List<String> notes;

    public Job(String customer_id, String company_id, String service_id, List<String> notes) {
        this.customer_id = customer_id;
        this.company_id = company_id;
        this.service_id = service_id;
        this.notes = notes;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(String customer_id) {
        this.customer_id = customer_id;
    }

    public String getCompany_id() {
        return company_id;
    }

    public void setCompany_id(String company_id) {
        this.company_id = company_id;
    }

    public String getService_id() {
        return service_id;
    }

    public void setService_id(String service_id) {
        this.service_id = service_id;
    }

    public List<String> getNotes() {
        return notes;
    }

    public void setNotes(List<String> notes) {
        this.notes = notes;
    }

    @Override
    public String toString() {
        return "Job{" +
                "id='" + id + '\'' +
                ", customer_id='" + customer_id + '\'' +
                ", company_id='" + company_id + '\'' +
                ", service_id='" + service_id + '\'' +
                ", notes=" + notes +
                '}';
    }
}
