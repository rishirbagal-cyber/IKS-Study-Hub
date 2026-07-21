# 📚 IKS Study Hub

IKS Study Hub is a production-ready learning platform dedicated to **Indian Knowledge Systems (IKS)**. It provides an interactive curriculum on ancient Indian sciences, an AI-powered doubt solver, quizzes, flashcards, and a secure personal study space for learners.

## 🌐 Live Demo

**🔗 Live Application:** https://iks0study0hub.netlify.app/

---

## ✨ Features

* 📖 **Comprehensive IKS Curriculum** – Explore modules on Ayurveda, Vedic Mathematics, Indian Astronomy, Yoga, and Vastu Shastra.
* 🤖 **AI Doubt Solver** – Get instant answers to questions using Google Gemini / Antigravity AI.
* 📝 **Interactive Quizzes & Flashcards** – Reinforce learning and improve retention.
* 💾 **Personal Study Materials** – Save notes and AI-generated responses to your private dashboard.
* 🔒 **Secure Authentication** – Firebase Email/Password Authentication for personalized access.
* ☁️ **Cloud Storage** – Store and manage study resources with Firebase Firestore.
* 🎨 **Modern Responsive UI** – Built using React, Tailwind CSS, and Framer Motion for a smooth user experience.

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router
* Vite

### Styling

* Tailwind CSS
* Framer Motion

### Backend & Database

* Firebase Authentication
* Firebase Cloud Firestore

### AI Integration

* Google Gemini AI
* Antigravity API

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rishirbagal-cyber/IKS-Study-Hub.git
cd IKS-Study-Hub
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root.

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_AI_API_KEY=your_antigravity_api_key
```

### 4. Start the Development Server

```bash
npm run dev
```

---

## 📂 Project Structure

```text
IKS-Study-Hub/
│
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Application pages
│   ├── services/        # Firebase & AI services
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Helper functions
│   └── assets/          # Images and static assets
│
├── public/
├── App.jsx
├── main.jsx
└── ...
```

---

## 💡 Core Functionality

* Interactive Indian Knowledge Systems curriculum
* AI-powered doubt solving
* Quiz and flashcard-based learning
* Personal study material management
* Secure user authentication
* Cloud-based data storage
* Responsive and modern learning interface

---

## 🌍 Deployment

The project is optimized for deployment on **Netlify**.

1. Connect the repository to Netlify.
2. Set the build command:

```bash
npm run build
```

3. Set the publish directory:

```text
dist
```

4. Add all required environment variables in the Netlify dashboard.
5. Deploy your application.

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

**Rishikesh Bagal**

* GitHub: https://github.com/rishirbagal-cyber
* Live Demo: https://iks0study0hub.netlify.app/
