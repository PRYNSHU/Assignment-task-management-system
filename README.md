# Task Management System

<img src="https://github.com/user-attachments/assets/e86c2f8a-fd5e-4778-915a-1055abcfd686" width="500" />
<img src="https://github.com/user-attachments/assets/f96baafa-2803-4efe-8b97-0787799e14d0" width="500" />
<img src="https://github.com/user-attachments/assets/4a9141d4-f691-4de2-a4ba-29866b975d21" width="500" />

## Overview

This Task Management System allows users to create, view, delete, and filter tasks. The system includes features for setting task priorities, filtering tasks by their completion status and priority.

## Features

- **Task CRUD Operations**: Create, Read, and Delete tasks.
- **Task Filtering**: Filter tasks by completion status (All, Completed, Pending) and priority (Low, Medium, High).
- **User Interface**: Material-UI for a responsive and modern design.
- **Custom Theme**: Light theme with custom primary color and typography.

## Tech Stack

### Backend

- **Node.js** with **TypeScript**
- **Express.js** for the web framework
- **MongoDB** with **Mongoose** for database

### Frontend

- **Angular** for the frontend framework
- **Angular Material** for UI components and styling

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (MongoDB Compass)
- - **Angular** (v15 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/PRYNSHU/AiToXr-assignment-task-management-system.git

2. **Backend Setup**

   ```bash
   cd task-m-backend
   npm install
   npm start

3. **Frontend Setup**

   ```bash
   cd ../task-m-frontend
   npm install or npm install --force
   ng serve
   
### URL LOCATION

1. **Backend URl**

   ```bash
   http://localhost:3000/

2. **Frontend URl**

   ```bash
   http://localhost:4200/

3. **Data base connection**

   ```bash
   open MongoDB Compass
   url -> mongodb://localhost:27017/
   database name -> Task-management-system
   collection -> tasks
