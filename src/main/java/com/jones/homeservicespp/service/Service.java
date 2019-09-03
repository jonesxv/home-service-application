package com.jones.homeservicespp.service;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "service")
public class Service {
    @Id
    private String id;
    private String name;
    private String category;
    private Boolean booked;
    private String company;
    private String unit;
    private Integer price_per_unit;

    public Service(String name, String category, Boolean booked, String company, String unit, Integer price_per_unit) {
        this.name = name;
        this.category = category;
        this.booked = booked;
        this.company = company;
        this.unit = unit;
        this.price_per_unit = price_per_unit;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Boolean getBooked() {
        return booked;
    }

    public void setBooked(Boolean booked) {
        this.booked = booked;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public Integer getPrice_per_unit() {
        return price_per_unit;
    }

    public void setPrice_per_unit(Integer price_per_unit) {
        this.price_per_unit = price_per_unit;
    }

    @Override
    public String toString() {
        return "Service{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", category='" + category + '\'' +
                ", booked=" + booked +
                ", company='" + company + '\'' +
                ", unit='" + unit + '\'' +
                ", price_per_unit=" + price_per_unit +
                '}';
    }
}
