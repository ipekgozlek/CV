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
- JSON Server (mock backend API)
- Vercel (frontend deployment)
- Render (backend deployment)

## Features
- Product listing from backend REST API
- Add / remove items from cart
- Quantity management
- Favorites system
- Toast notifications
- Checkout flow with cart guard (prevents empty cart checkout)
- Responsive UI
- Environment-based API configuration
- Clean service layer architecture


## Architecture & Deployment
The project is split into two parts:

- **Frontend**: React application built with Vite and deployed on **Vercel**
- **Backend**: Mock REST API built with **json-server**, deployed separately on **Render**

During local development, both frontend and backend can run together.  
In production, they are deployed separately because Vercel hosts static frontend builds, while json-server requires a running server process.

## Environment Configuration
The frontend reads the API base URL from an environment variable:

```js
const API_URL = import.meta.env.VITE_API_URL;

VITE_API_URL=https://migros-backend-1.onrender.com

The same variable is configured in Vercel → Project Settings → Environment Variables.

Local Development
Frontend
npm install
npm run dev

Backend (optional local mock)
npm run server


In production, the backend runs on Render, so running the local mock server is not required.

Backend (Render Compatibility)

Render assigns the service port dynamically.
The backend server listens to the environment port:

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});


This setup is required for successful deployment on Render.

Bugfix Notes – React Hooks Order Crash (#300)

While implementing the Favorites badge in the header, the application occasionally crashed with a white screen and the following production error:

Minified React error #300
Rendered fewer hooks than expected

Root Cause

The issue was caused by calling React hooks (useSelector) inside JSX conditionals.
This resulted in hooks being executed in different orders between renders, violating the Rules of Hooks.

Incorrect usage:

{useSelector(state => state.favorites.items.length) > 0 && (
  <span>{useSelector(state => state.favorites.items.length)}</span>
)}


When the favorites count changed from 0 to 1, an additional hook call occurred, causing the application to crash.

Solution

All hooks were moved to the top level of the component, and JSX now only consumes plain variables:

const favoritesCount = useSelector(
  state => state.favorites.items.length
);

{favoritesCount > 0 && (
  <span className="badge">{favoritesCount}</span>
)}


This guarantees that hooks are always called in the same order on every render, preventing runtime crashes.

Summary

Clear separation of frontend and backend

Production-ready deployment with Vercel and Render

Defensive React patterns to prevent runtime errors

Scalable Redux Toolkit state management
