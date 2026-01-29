# Migros Shopping Cart (React + Redux Toolkit)

A modern e-commerce shopping cart application inspired by Migros, built with React, Redux Toolkit, and Vite.

## Live Demo
- Frontend: https://migros-shop.vercel.app
- Backend: Hosted on Render (REST API)

## Tech Stack
- React 19
- Redux Toolkit (state management)
- React Router v7
- Axios (API communication)
- Vite
- JSON Server (backend simulation)
- Vercel (frontend deployment)
- Render (backend deployment)

## Features
- Product listing from backend API
- Add / remove items from cart
- Quantity management
- Favorites system
- Toast notifications
- Responsive UI
- Environment-based API configuration
- Clean service layer architecture

## Project Structure
src/
├─ features/
│ ├─ cart/ (cartSlice - Redux Toolkit)
│ ├─ favoritesSlice
│ └─ toastSlice
├─ pages/
├─ services/
│ └─ blockService.js
└─ App.jsx

## Backend
- Backend is hosted separately on **Render**
- API base URL is managed via environment variables:
```js
const API_URL = import.meta.env.VITE_API_URL;
