<div align="center">

# 🌐 NIJA WORLD

### *Building the Distributed Economy of Tomorrow*

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0050?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

<br/>

> **Nija World** is an enterprise-grade platform at the convergence of **AI**, **Blockchain**, and **Cybersecurity** — pioneering solutions for the distributed economy.

<br/>

</div>

---

## ✨ Highlights

| | Feature | Description |
|---|---|---|
| 🤖 | **AI & Automation** | Intelligent infrastructure, automation, and digitisation solutions |
| ⛓️ | **Blockchain** | Tokenisation, smart contracts, provenance, and identity management |
| 🛡️ | **Cybersecurity** | Threat detection, incident response, policy compliance & identity security |
| 🌙 | **Dark / Light Mode** | Seamless theme toggling with stunning UI in both modes |
| 🎨 | **Micro-Animations** | Smooth Framer Motion transitions across every page |
| 📱 | **Fully Responsive** | Pixel-perfect on desktop, tablet, and mobile devices |
| 📝 | **Blog / CMS** | Admin dashboard with rich text editor for insights & blog management |
| 🔐 | **Auth System** | JWT-based authentication with password reset via email |

---

## 🏗️ Architecture

```
nijaworld/
├── frontend/              # React + Vite SPA
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── Navbar         # Navigation with dark mode toggle
│   │   │   ├── Hero           # Animated landing hero
│   │   │   ├── Pillars        # Enterprise pillars showcase
│   │   │   ├── Solutions      # Industry solutions grid
│   │   │   ├── Footer         # Site-wide footer
│   │   │   └── ...
│   │   ├── pages/         # 40+ page components
│   │   │   ├── Home           # Landing page
│   │   │   ├── About          # Company overview
│   │   │   ├── Partners       # Strategic partners & founders
│   │   │   ├── Media          # Events & speaking engagements
│   │   │   ├── Insights       # Blog listing
│   │   │   ├── Contact        # Contact form
│   │   │   ├── Technologies   # Tech stack showcase
│   │   │   ├── EcosystemPage  # Nija ecosystem overview
│   │   │   └── ...
│   │   └── App.jsx        # Routes & layout
│   ├── public/            # Static assets & partner logos
│   └── vite.config.js     # Vite configuration
│
├── backend/               # Express.js REST API
│   ├── server.js          # Entry point
│   ├── config/            # Database & environment config
│   ├── controllers/       # Route handlers
│   ├── middleware/        # Auth & validation middleware
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API route definitions
│   ├── seed/              # Admin seeding script
│   └── utils/             # Helpers & email utilities
│
└── package.json           # Root workspace with concurrently
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 18.x
- **MongoDB** (local or Atlas)
- **npm** ≥ 9.x

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/NIJA-WORLD/New-NijaWorld-Website.git
cd NijaWorld-Website
```

### 2️⃣ Install Dependencies

```bash
# Install root dependencies (concurrently)
npm install

# Install frontend dependencies
cd frontend && npm install && cd ..

# Install backend dependencies
cd backend && npm install && cd ..
```

### 3️⃣ Environment Setup

Create a `.env` file in `backend/` (use `.env.example` as reference):

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/nijaworld
JWT_SECRET=your_jwt_secret_here
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password
```

### 4️⃣ Seed Admin User

```bash
npm run seed
```

### 5️⃣ Run Development Servers

```bash
# Run both frontend & backend concurrently
npm run dev
```

| Service | URL |
|---------|-----|
| 🖥️ Frontend | `http://localhost:5173` |
| ⚙️ Backend API | `http://localhost:5000` |

---

## 📄 Pages Overview

<details>
<summary><b>🏠 Core Pages</b></summary>

| Page | Description |
|------|-------------|
| **Home** | Hero, pillars, solutions, case studies, security & insights |
| **About** | Company story, team, and mission |
| **Partners** | Strategic partners (BluBird, Ginserv, IBA, TRON) & founder profiles |
| **Contact** | Contact form with validation |
| **Join** | Careers and opportunities |

</details>

<details>
<summary><b>🤖 AI Pages</b></summary>

| Page | Description |
|------|-------------|
| **AI** | AI solutions overview |
| **Automation** | AI-driven automation |
| **Digitisation** | Digital transformation |
| **Infrastructure Intelligence** | Smart infrastructure |

</details>

<details>
<summary><b>⛓️ Blockchain Pages</b></summary>

| Page | Description |
|------|-------------|
| **Blockchain** | Blockchain solutions overview |
| **Tokenisation** | Asset tokenisation |
| **Smart Contracts** | Contract automation |
| **Supply Chain** | Traceability & provenance |
| **RWA Liquidity** | Real-world asset liquidity |
| **TokeniZ** | Tokenisation platform |

</details>

<details>
<summary><b>🛡️ Cybersecurity Pages</b></summary>

| Page | Description |
|------|-------------|
| **Cybersecurity** | Security solutions overview |
| **Threat Detection** | AI-powered threat monitoring |
| **Incident Response** | Rapid response protocols |
| **Policy Compliance** | Regulatory compliance |
| **Identity Security** | Digital identity protection |

</details>

<details>
<summary><b>📰 Content Pages</b></summary>

| Page | Description |
|------|-------------|
| **Insights** | Blog & article listing |
| **Media** | Events, summits & speaking engagements |
| **Case Studies** | Real-world project showcases |
| **Technologies** | Tech stack & capabilities |
| **Ecosystem** | Nija ecosystem & product suite |

</details>

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
| Technology | Purpose |
|:---:|:---:|
| **React 19** | Component-based UI |
| **Vite 5** | Lightning-fast bundler |
| **Tailwind CSS 3** | Utility-first styling |
| **Framer Motion 12** | Fluid animations |
| **React Router 7** | Client-side routing |
| **Lucide React** | Beautiful iconography |

### Backend
| Technology | Purpose |
|:---:|:---:|
| **Express.js** | REST API framework |
| **MongoDB + Mongoose** | NoSQL database & ODM |
| **JWT** | Authentication tokens |
| **bcrypt.js** | Password hashing |
| **Nodemailer** | Email services |
| **express-validator** | Input validation |

</div>

---

## 🤝 Strategic Partners

<div align="center">

| Partner | Domain |
|:---:|:---:|
| 🔵 **BluBird** | Management Services |
| 🟢 **Ginserv** | Nurturing Ventures |
| 🟣 **India Blockchain Alliance** | Blockchain Research & Development |
| ⚡ **TRON** | Data Centre |

</div>

---

## 👥 Founded By

<div align="center">

| | Founder | Role |
|---|---|---|
| 🟩 | **Nanjunda Pratap Palecanda** | Founder — Futurist, Tokenisation Evangelist, Author |
| 🟪 | **Achyutha Anantha Murthy** | Co-Founder — Blockchain Evangelist, Cybersecurity Expert |

</div>

---

## 📜 Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both frontend & backend concurrently |
| `npm run dev:frontend` | Start frontend dev server only |
| `npm run dev:backend` | Start backend dev server only |
| `npm run build` | Build frontend for production |
| `npm run seed` | Seed admin user in database |

---

## 🚢 Deployment

The frontend is configured for **Vercel** deployment with `vercel.json` and client-side routing support via `_redirects`.

```bash
# Build for production
npm run build
```

---

<div align="center">

### 🌟 *Innovating at the intersection of AI, Blockchain & Cybersecurity*

**© 2026 Nija World. All rights reserved.**

<br/>

Made with ❤️ by the **Nija World Team**

</div>
