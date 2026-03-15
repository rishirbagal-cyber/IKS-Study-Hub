# IKS Study Hub

A production-ready platform dedicated to the Indian Knowledge Systems (IKS). This application offers an interactive curriculum on ancient Indian sciences, integrated with an AI-powered doubt-solver and a Firebase-backed study material storage system.

## 🚀 Features
- **Comprehensive IKS Curriculum:** Modules covering Ayurveda, Vedic Mathematics, Indian Astronomy, Yoga, and Vastu Shastra.
- **Interactive Quizzes & Flashcards:** Test understanding and memorize key terms easily.
- **AI Doubt Solver (Antigravity/Gemini Integration):** Real-time AI chat assistant trained on Indian Knowledge Systems to solve user queries.
- **Study Materials Storage:** Users can save important notes and AI responses directly to their personal dashboard.
- **Secure Authentication:** Firebase Email/Password Authentication ensures that each user has a private study environment.
- **Modern UI:** Built with React, Tailwind CSS, and Framer Motion for a stunning, responsive experience.

## 🛠️ Technology Stack
- **Frontend:** React, React Router
- **Styling:** Tailwind CSS
- **Backend/Database:** Firebase Authentication & Cloud Firestore
- **AI Integration:** Google GenAI / Antigravity API
- **Build Tool:** Vite

## ⚙️ Getting Started

### Prerequisites
- Node.js installed on your machine.
- A Firebase project with **Authentication (Email/Password)** and **Firestore Database** enabled.
- An API Key for Gemini/Antigravity AI.

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/rishirbagal-cyber/IKS-Study-Hub.git
   cd IKS-Study-Hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root of the project and add your keys:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   VITE_AI_API_KEY=your_antigravity_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

Your app will be accessible at `http://localhost:3000/`.

## 🌐 Deployment
This project is configured to be easily deployed on **Netlify**.
1. Connect this repository to your Netlify account.
2. Set the build command to `npm run build` and the publish directory to `dist/`.
3. Add the environment variables from your `.env` file into the Netlify site settings.
4. Deploy!

## 📝 License
This project is open-source and available under the MIT License.
