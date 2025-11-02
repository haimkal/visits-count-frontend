# Visits by Countries 🌍

A simple full‑stack application built with **Next.js**, **Node.js**, and **Redis**, designed to track website visits per country.

## 📋 Features

- **Backend (Node.js + Redis)**

  - REST API with two endpoints:
    - `POST /visits` — updates a visit count for a given country code.
    - `GET /visits` — retrieves all visit statistics in JSON format.
  - Handles high load (1,000 requests per second).

- **Frontend (Next.js + Tailwind CSS)**
  - Displays a live table of country visit counts.
  - Provides a simple input to add a visit by country code.
  - Built with reusable components: `StatsTable`, `CountryInput`, `Header`, and `Btn`.

## 🧱 Tech Stack

- **Frontend:** Next.js 14, React, Tailwind CSS
- **Backend:** Node.js, Express, Redis
- **Deployment:** Works with Docker or local Node environment

## ⚙️ Running Locally

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/visits-by-countries.git
cd visits-by-countries
```

### 2. Start the backend

```bash
cd backend
npm install
npm start
```

Backend runs by default at `http://localhost:4000`.

### 3. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:3000`.

## 🌐 Environment Variables

Frontend expects:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
```

Backend expects:

```
REDIS_URL=redis://localhost:6379
PORT=4000
```

## 🧩 Components Overview

- **Header:** Page title and author name.
- **CountryInput:** Input with autocomplete to add new visits.
- **StatsTable:** Displays all countries and counts in a styled table.
- **Btn:** Reusable button with loading and disabled states.

## 📁 Project Structure

```
.
├── backend/
│   ├── server.js
│   └── redis.js
├── frontend/
│   ├── app/
│   │   ├── layout.jsx
│   │   └── page.jsx
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── StatsTable.jsx
│   │   ├── CountryInput.jsx
│   │   └── Btn.jsx
│   └── services/
│       └── visits.service.js
└── README.md
```

## 👨‍💻 Author

Made by **Haim Kalvo**  
Frontend Developer | JavaScript | Next.js | Node.js

---

© 2025 Haim Kalvo. All rights reserved.
