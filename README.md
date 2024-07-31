# FormWebsite

This is a full-stack restaurant website developed using HTML, CSS, JavaScript, React.js (with Axios) for the frontend, and Java, Spring Boot, and MySQL for the backend.

## Introduction

It consists of a Registration page, login page and a success page.

## Features

- Login/Registration

## Video

https://www.loom.com/share/9dd5a195c2284b4f9696372a90e23d70?sid=1d6792bc-a9ee-4de6-88d2-d8eae979f4bf

## Technologies Used

### Frontend
- HTML
- CSS
- JavaScript
- React.js (Axios for API calls)

### Backend

- Java
- Spring Boot
- MySQL

## Installation

### Prerequisites

- Node.js
- npm
- Java (JDK 17)
- MySQL

### Frontend Setup

1. Install the dependencies:

    
sh
    npm install


2. Start the frontend development server:

    
sh
    npm start


### Backend Setup

1. Clone the repository:
   sh
    git clone https://github.com/YourUsername/FormBackend.git
    cd FormBackend

2. Set up MySQL database:

sql
    CREATE DATABASE spicesherbs_db;

3. Update application.properties file with your MySQL credentials:

properties
    spring.datasource.url=jdbc:mysql://localhost:3306/spicesherbs_db
    spring.datasource.username=YOUR_DB_USERNAME
    spring.datasource.password=YOUR_DB_PASSWORD
    spring.jpa.hibernate.ddl-auto=update

4. Build and run the backend:

sh
    cd backend
    mvn clean package
    java -jar target/FormBackend-0.0.1-SNAPSHOT.jar

The application should now be running with the frontend accessible at http://localhost:3000 and the backend accessible at http://localhost:8080.

## Usage
Register a new user or log in with existing credentials.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit them (git commit -m 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Create a new Pull Request.

## Contact

- **Paarth Chandan** - [GitHub](https://github.com/Paarth-Chandan)

Feel free to reach out if you have any questions or suggestions!
