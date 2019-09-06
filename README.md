# Home Service Management and Booking Application

This project was built with  
**Back End:** Java Spring, MongoDB  
**Front End:** React, Redux, Bootstrap  

## Getting Started

Start the Java API server...
1. Clone this repository and start the Java Spring application
**API: http://localhost:8080**

Start the Front End...
From the root directory of this repository

### `cd client`
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## About

This application is intended for companies who may offer a variety of services and customers looking to book a service to be completed at their home. Categories are pre set and companies can manage what services they offer. Each service unit and cost per unit can be set. A customer can see all services and filter by categories or company.

### API

#### Company

| Route Name           | Request Method | Example Request URL | Route                          |
| -------------------- | -------------- | ------------------- | ------------------------------ |
| company index        | `GET`          | `/api/company`      | `/api/company`                 |
| single company       | `GET`          | `/api/company/1`    | `/api/company/{cid}`           |
| company add          | `POST`         | `/api/company/`     | `/api/company`                 |
| company update       | `PATCH`        | `/api/company/1`    | `/api/companies/{cid}`         |
| company delete       | `DELETE`       | `/api/company/1`    | `/api/companies/{cid}`         |

#### Jobs

| Route Name       | Request Method | Example Request URL | Route                        |
| ---------------- | -------------- | ------------------- | ---------------------------- |
| job index        | `GET`          | `/api/job`          | `/api/job`                   |
| company jobs     | `GET`          | `/api/job?cid=1`    | `/api/job?cid="cid"`         |
| job add          | `POST`         | `/api/job/`         | `/api/job`                   |
| job update       | `PATCH`        | `/api/job/1`        | `/api/job/{id}`              |
| job confirm      | `PATCH`        | `/api/confirm/1`    | `/api/confirm/{id}`          |
| job delete       | `DELETE`       | `/api/job/1`        | `/api/job/{id}`              |

#### Services

| Route Name           | Request Method | Example Request URL         | Route                               |
| -------------------- | -------------- | --------------------------- | ----------------------------------- |
| service index        | `GET`          | `/api/service`              | `/api/service`                      |
| single service       | `GET`          | `/api/service?cat=1&cid=1`  | `/api/service?cat="cat"&cid="cid"`  |
| single service       | `GET`          | `/api/service/1`            | `/api/service/{sid}`                |
| service add          | `POST`         | `/api/service/`             | `/api/service`                      |
| service update       | `PATCH`        | `/api/service/1`            | `/api/service/{sid}`                |
| service delete       | `DELETE`       | `/api/service/1`            | `/api/service/{sid}`                |

#### Users

| Route Name           | Request Method | Example Request URL | Route                          |
| -------------------- | -------------- | ------------------- | ------------------------------ |
| user index           | `GET`          | `/api/user`         | `/api/user`                    |
| user add             | `POST`         | `/api/user/`        | `/api/user`                    |
| user update          | `PATCH`        | `/api/user/1`       | `/api/user/{id}`               |
| user delete          | `DELETE`       | `/api/user/1`       | `/api/user/{id}`               |
