
---

# 📚 DevTracker

**DevTracker** is a fullstack web application built with [Next.js](https://nextjs.org/) to demonstrate my ability to develop and deploy modern fullstack software. It enables users to log technologies they're learning, rate their confidence, write notes, and visualize progress over time.

---

## 🚀 Features

### 🌐 Frontend
- Responsive home dashboard with dark/light mode
- Form for logging new skills with rating and notes
- Real-time updates using local state management
- Data visualization with charts (e.g. radar or bar graphs)

### 🔧 Backend
- PostgreSQL database configured via Prisma
- RESTful API for Create / Read / Update / Delete operations
- Secure handling of user data tied to authenticated sessions

### 🔐 Authentication
- Integrated with [Auth.js](https://authjs.dev/)
- Login/signup flow with protected routes
- Each user's skills and logs are scoped to their account

### ☁️ Deployment
- Live deployment via [Vercel](https://vercel.com/)
- Environment configuration handled securely with `.env` files

---

## 🧰 Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Prisma, PostgreSQL, REST API (Next.js routes)
- **Authentication**: Auth.js
- **Data Visualization**: Recharts or Chart.js
- **Deployment**: Vercel

---

## 📦 Local Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/devtracker.git
   cd devtracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file using `.env.example` as a template and fill in the required environment variables:
   ```bash
   cp .env.example .env
   ```

4. Set up authentication by following the [Auth.js docs](https://authjs.dev/)

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

---

## 📝 Extras

- Input validation and form feedback
- Toast notifications for actions like save/update
- Mobile-responsive layout
- Future plans: offline support, custom tags, learning streak tracker

---

## 📸 Screenshots & Demo (Coming Soon)

Live demo: *[devtracker.hasalidev.online](https://devtracker.hasalidev.online)*  
Screenshots of key features and UI will be added once MVP is complete.

---
