package com.jones.homeservicespp.job;

public class JobResponse {
    private String customerEmail;
    private String companyId;
    private String serviceId;

    public JobResponse(String customerEmail, String companyId, String serviceId) {
        this.customerEmail = customerEmail;
        this.companyId = companyId;
        this.serviceId = serviceId;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public String getCompanyId() {
        return companyId;
    }

    public void setCompanyId(String companyId) {
        this.companyId = companyId;
    }

    public String getServiceId() {
        return serviceId;
    }

    public void setServiceId(String serviceId) {
        this.serviceId = serviceId;
    }
}
