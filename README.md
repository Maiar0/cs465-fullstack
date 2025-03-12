

# **Full Stack Web Application – Professional Overview**  

## 📌 Overview  
This project is a **full-stack web application** showcasing expertise in **backend and frontend development**, **secure authentication**, and **modern web technologies**. It is designed using **Node.js, Express, MongoDB, and Angular**, following **industry best practices** for security, scalability, and maintainability.

This repository contains a **Node.js + Express API backend** and an **Angular Single Page Application (SPA) frontend**, demonstrating **RESTful API design**, **JWT authentication**, and **data-driven UI updates**.

---

## 🛠️ Technologies Used  

### **Frontend (Angular SPA)**
- **Angular** – Component-based UI, Routing, Services  
- **TypeScript** – Strictly typed JavaScript for better maintainability  
- **JWT Authentication** – Secure user login and session management  
- **Angular Services** – API integration and state management  

### **Backend (Node.js + Express API)**
- **Node.js & Express.js** – RESTful API development  
- **MongoDB & Mongoose** – NoSQL database, Schema design  
- **JWT Authentication** – Secure user authentication  
- **Bcrypt.js** – Password hashing for security  

### **Development & Testing**
- **Postman** – API endpoint testing  
- **Git & GitHub** – Version control  
- **Docker** – Optional deployment support  

---

## ⚙️ Features & Implementation  

### ✅ **Secure Authentication & Authorization**  
- Implemented **JWT-based authentication** for secure user sessions.  
- Enforced **role-based access control (RBAC)** to restrict access.  
- Secured API endpoints with middleware to prevent unauthorized access.  

### ✅ **RESTful API Development**  
- Developed a **modular API** using **Express.js** for efficient routing.  
- Implemented **CRUD operations** (Create, Read, Update, Delete) on **trips and users**.  
- Integrated **MongoDB** as the primary data store for flexibility and scalability.  

### ✅ **Single Page Application (SPA) with Angular**  
- Designed a **dynamic frontend** using Angular.  
- Utilized **Angular Services** for API calls and **state management**.  
- Implemented **data-driven UI updates** without full-page reloads.  

### ✅ **Security Enhancements**  
- **Data validation** using Mongoose schemas.  
- **Hashed passwords** using **bcrypt.js** for encryption.  
- **CORS policies** to prevent cross-origin vulnerabilities.  

---

## 📂 Project Structure  

```plaintext
cs465-fullstack/
│── app_api/              # Backend API (Node.js, Express, MongoDB)
│   ├── controllers/      # API route handlers
│   ├── models/           # Database schemas (Mongoose)
│   ├── routes/           # API endpoints
│── app_server/           # Backend server (MVC routing)
│── app_admin/            # Frontend (Angular)
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── services/     # API integration services
│   ├── assets/           # Static assets and styles
│── data/                 # Sample seed data
│── public/               # Static frontend files
│── package.json          # Dependencies and scripts
│── README.md             # Project documentation
```

---

## 🚀 Deployment & Setup  

### **1️⃣ Clone Repository**  
```bash
git clone https://github.com/Maiar0/cs465-fullstack.git
cd cs465-fullstack
```

### **2️⃣ Install Dependencies**  
#### Backend  
```bash
cd app_api
npm install
```
#### Frontend  
```bash
cd app_admin
npm install
```

### **3️⃣ Configure Environment Variables**  
Create a `.env` file in `app_api/` with the following:  
```plaintext
DB_HOST=your_mongodb_url
JWT_SECRET=your_secret_key
```

### **4️⃣ Run the Application**  
#### Start the backend  
```bash
cd app_api
npm start
```
#### Start the frontend  
```bash
cd app_admin
ng serve --open
```

---

## 🔍 API Endpoints  

### **Testing with Postman or cURL**  
**Base API URL:** `http://localhost:3000/api`  

#### **Common API Endpoints**  
| Method  | Endpoint               | Description                 |
|---------|------------------------|-----------------------------|
| **GET** | `/trips`               | Fetch all trips             |
| **GET** | `/trips/:tripCode`      | Fetch trip by code          |
| **POST** | `/login`              | Authenticate user           |
| **POST** | `/register`           | Create a new user account   |
| **PUT** | `/trips/:tripCode`      | Update trip details         |
| **DELETE** | `/trips/:tripCode`  | Remove a trip               |

Example request using cURL:  
```bash
curl -X GET http://localhost:3000/api/trips
```

---

## 📈 Key Takeaways  

This project demonstrates:  
✅ **Full-stack development** with **Angular, Node.js, Express, and MongoDB**.  
✅ **Building scalable APIs** with **secure authentication (JWT)**.  
✅ **Creating modular and reusable UI components** in Angular.  
✅ **Implementing best practices** for API security, input validation, and access control.  
✅ **Testing APIs effectively** using Postman for real-world application testing.  

---

## 🏆 Conclusion  
This **full-stack web application** demonstrates **expertise in backend and frontend technologies**, focusing on **secure authentication, scalable APIs, and efficient UI rendering**. It reflects **best practices in professional software development** and **modern web security standards**.

---
```

### **What’s Included?**
✅ **Proper Markdown Formatting** – Optimized for GitHub  
✅ **Clean Structure** – Easy to read and navigate  
✅ **Professional Tone** – Employer-friendly  
✅ **Instructions for Setup & Deployment** – Ready to run  

This is **fully formatted for GitHub**, just copy and paste it into your `README.md` file, and it will display properly on your repository page. 🚀 Let me know if you need any refinements!
