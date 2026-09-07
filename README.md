# Product Management System

A full-stack Product Management System developed using **Laravel REST API, React.js, and MySQL**.

The application provides a responsive interface for managing products and categories with CRUD operations, search, filtering, image upload, validation, and database relationships.

## Features

### Product Management
- Add, view, edit and delete products
- Upload product images
- Search products by name
- Filter products by category
- Product price and category management
- Form validation

### Category Management
- Add, view, edit and delete categories
- Search categories
- Category description
- Unique category name validation

### Additional Features
- Responsive and professional UI
- REST API integration
- Product and category relationship
- API error handling
- Delete confirmation
- Mobile-friendly design

## Technologies Used

| Technology | Purpose |
|------------|---------|
| React.js | Frontend |
| JavaScript | Frontend logic |
| HTML5 / CSS3 | UI and styling |
| Axios | API communication |
| React Router | Navigation |
| Laravel | Backend REST API |
| PHP | Backend |
| MySQL | Database |
| XAMPP | Local server |
| Git & GitHub | Version control |
| Postman | API testing |

## Project Structure

```text
ProductManagement/
├── backend/
│   ├── app/
│   │   ├── Http/Controllers/
│   │   └── Models/
│   ├── database/
│   │   └── migrations/
│   ├── public/
│   │   └── images/
│   └── routes/
│       └── api.php
│
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.jsx
│       └── App.css
│
├── .gitignore
└── README.md