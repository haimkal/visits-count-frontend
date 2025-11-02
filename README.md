# 🖥️ Visits Count Web (Next.js)

A minimal frontend for the **Visits Count API**.  
Built with **Next.js + React + (optional) Tailwind**. Lets you increment visits by country and view aggregated stats.

---

## 🔌 Services

- **Frontend:** http://localhost:3000
- **Backend (required):** http://localhost:4000

> Make sure the backend is running and reachable from the frontend.  
> The frontend only talks to the API (not directly to Redis).

---

## 🐳 Run

### 1) Clone the repo

```bash
git clone https://github.com/haimkal/visits-count-frontend.git
```

### 2) Enter folder

```bash
cd visits-count-frontend
```

### 3) Install deps

```bash
npm install
```

### 4) Configure env

Create a file named **.env.local** in the project root:

```env
# URL of your backend API
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### 5) Start dev server

```bash
npm run dev
```

Frontend is now available at: **http://localhost:3000**

---

## 🧑‍💻 Local Development

### Requirements

- Node.js **v18+** (recommended v20)
- A running backend at `NEXT_PUBLIC_API_URL` (default: `http://localhost:4000`)

### Common scripts

```bash
npm run dev     # Start Next.js in dev mode
npm run build   # Production build
npm run start   # Start production server (after build)
npm run lint    # Lint (if configured)
```

---

## 🧩 Environment Variables

| Variable              | Default                 | Description                 |
| --------------------- | ----------------------- | --------------------------- |
| `NEXT_PUBLIC_API_URL` | `http://localhost:4000` | Base URL of the backend API |

> `NEXT_PUBLIC_*` vars are exposed to the browser—ideal for API base URLs.

---

## 🧱 Project Structure (example)

```
app/
  layout.jsx         # Root layout
  page.jsx           # Home page (renders the UI)
components/
  Header.jsx
  CountryInput.jsx   # Form to submit a country code (e.g., "us")
  StatsTable.jsx     # Displays aggregated visit counts
lib/
  api.js             # fetch helpers (GET /visits, POST /visits)
public/
styles/
  globals.css
package.json
.eslintrc.*
README.md
```

> Your exact file names may vary; adapt the example to your structure.

---

## 🔗 API Contract (used by the frontend)

The frontend expects the backend described in your API README:

- `POST /visits` — body: `{ "country": "us" }` → response: `{ "country": "us", "count": 42 }`
- `GET /visits` — response: `{ "us": 2, "cy": 1 }`
- `GET /health` — response: `{ "ok": true }`

Configure the base URL via `NEXT_PUBLIC_API_URL`.

## 🛠️ Troubleshooting

- **CORS error in the browser**  
  Ensure your backend allows the frontend origin:
  - Backend env: `CORS_ORIGIN=http://localhost:3000` (or `*` for dev)
- **404/Network error**  
  Check `NEXT_PUBLIC_API_URL` is set correctly and backend is running.
- **Port conflict on 3000**  
  Start Next.js on a different port:
  ```bash
  PORT=3002 npm run dev
  ```
  And visit http://localhost:3002

---
