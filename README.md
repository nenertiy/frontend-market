# Frontend Market

Frontend Market is the client-side application for an online marketplace, developed using [Next.js](https://nextjs.org/). It interacts with the backend application, [backend-market](https://github.com/nenertiy/backend-market), to provide users with a seamless shopping experience.

## Features

- User authentication and authorization
- Product listing and search functionality
- Shopping cart and order management
- Review and rating system for products
- Seller dashboard for product creation and management

## Technologies

- **Next.js** – A React framework for server-side rendering and static site generation.
- **TypeScript** – Ensures static typing and code reliability.
- **Tailwind CSS** – A utility-first CSS framework for styling.
- **Zustand** – Manages application state efficiently.
- **Tanstack/Query** – For server-state management and data fetching.
- **JWT** – Handles authentication and authorization.
- **Js-cookie** – Manages cookies for session storage.
- **Axios** – Handles API requests to communicate with the backend.

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nenertiy/frontend-market.git
   cd frontend-market
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env` file based on `.env.example` and configure the necessary environment variables such as API base URL.

4. **Start the application:**

   - **Development mode:**
     ```bash
     npm run dev
     ```

## Backend Integration

This frontend application communicates with the backend available at [backend-market](https://github.com/nenertiy/backend-market). Ensure the backend is running and properly configured to handle API requests.

