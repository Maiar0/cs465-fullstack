# Full Stack Web Application - CS465  

## Overview  
This project is a **full stack web application** that serves both **customer** and **administrative** sides. The final iteration focused on implementing **secure authentication for admin login** to enhance security. This README reflects on the **architecture, functionality, testing, and professional growth** gained through the development process.  

---

## 📌 Architecture  

### Frontend Development  
The frontend was developed using **Angular**, a TypeScript-based **Single Page Application (SPA) framework**. Angular was chosen for its:  

- **Component-based architecture**, making UI development modular and reusable.  
- **Built-in dependency injection**, simplifying service management.  
- **Powerful routing and state management**, ensuring smooth navigation between views.  

### Backend & Database  
The backend was built using **Node.js with Express** and a **NoSQL MongoDB database**. The choice of MongoDB was due to:  

- **Scalability**: NoSQL databases handle large datasets efficiently.  
- **Flexibility**: JSON-like documents allow easy integration with frontend components.  
- **Speed**: Fast read/write operations support **real-time** interactions.  

---

## ⚙️ Functionality  

### JSON vs JavaScript  
- **JavaScript** is a programming language used to build the frontend logic.  
- **JSON (JavaScript Object Notation)** is a **lightweight data format** used to exchange data between the **frontend** and **backend**.  

JSON played a crucial role in **sending and receiving API requests** between the client-side Angular application and the Express backend, ensuring smooth communication.  

### Code Refactoring & Reusability  
Throughout development, several improvements were made to **enhance functionality** and **efficiency**:  
- **Refactored API calls**: Centralized HTTP requests using Angular services.  
- **Modular UI Components**: Created reusable components for **forms, buttons, and navigation**, improving maintainability.  
- **Optimized Authentication Flow**: Ensured **secure login sessions** by implementing **token-based authentication** (JWT).  

These enhancements improved **code clarity**, **performance**, and **reusability** across different parts of the application.  

---

## 🛠️ Testing  

### API Testing & Security Challenges  
Testing involved validating **API endpoints**, ensuring data integrity, and handling authentication mechanisms securely. Key considerations included:  

- **Methods & Endpoints**:  
  - **GET**: Retrieve data (e.g., fetching user details).  
  - **POST**: Send data (e.g., submitting login credentials).  
  - **PUT/PATCH**: Update existing data (e.g., modifying user roles).  
  - **DELETE**: Remove records securely.  

- **Security Measures**:  
  - **Token-based Authentication (JWT)**: Secured admin access.  
  - **Role-based Access Control (RBAC)**: Prevented unauthorized users from accessing admin functionalities.  
  - **CORS & Input Validation**: Protected against **cross-site attacks** and **injection vulnerabilities**.  

Testing was conducted using **Postman**, **Jest**, and manual API validation to ensure **reliable data flow** between the frontend and backend.  

---

## 🎯 Reflection  

This course has significantly contributed to my **professional growth** by reinforcing key **full stack development** concepts. Through this project, I have:  

- **Strengthened my expertise** in Angular, Express, and MongoDB.  
- **Increased secure authentication techniques** (JWT, hashing, and authorization layers).  
- **Enhanced my ability to build scalable APIs** and **optimize frontend performance**.  
- **Gained hands-on experience in debugging** and **testing APIs effectively**.  

These skills position me as a **more competitive full stack developer**, equipping me with real-world knowledge essential for modern web applications.  

---

## 🚀 Conclusion  

This **full stack web application** demonstrates my ability to design, develop, and secure **end-to-end** solutions. By integrating **frontend and backend technologies**, ensuring **secure authentication**, and applying **testing best practices**, this project showcases my **technical proficiency** and **problem-solving skills** in software development.  

---
