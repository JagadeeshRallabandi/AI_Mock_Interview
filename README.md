# 🎯 React AI Mock Interview

An AI-powered mock interview web application built using **React.js**, **Google Gemini AI**, and **Firebase Firestore**, designed to help users practice technical interviews in a realistic chat interface. The app uses **Clerk** for secure authentication and **shadcn/ui** for a modern UI experience.

---

---

## 🚀 Key Features

- 🔐 **User Authentication** – Secure sign-up and sign-in using [Clerk](https://clerk.dev).
- 🤖 **AI Interviewer** – Powered by Google Gemini AI for intelligent mock interview simulation.
- 📦 **Chat Interface** – Interactive and user-friendly chat experience using `shadcn/ui` components.
- ☁️ **Realtime Database** – Stores chat history and user data using Firebase Firestore.
- 📝 **Contextual Memory** – Keeps track of conversation history for more coherent interviews.
- 📊 **Performance Insights** – Analyze user responses (planned feature).
- 🖼️ **Responsive Design** – Fully responsive layout optimized for desktop and mobile.

---

## 🛠️ Tech Stack

| Technology           | Description                                 |
|----------------------|---------------------------------------------|
| React.js             | Frontend JavaScript library                 |
| Clerk                | Authentication provider for user login     |
| Shadcn/ui            | Modern UI components for React             |
| Google Gemini AI     | LLM to generate AI-powered interview chats |
| Firebase Firestore   | Realtime NoSQL database                     |
| TailwindCSS          | Utility-first CSS framework (via shadcn/ui)|
| Vite                 | Blazing fast build tool for React           |

---

## 📂 Project Structure

```bash
├── public/
│   └── mock-interview-preview.png
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── .env
├── firebase.config.js
├── vite.config.ts
├── README.md
└── package.json

🔑## Environment Variables
Create a .env file in your project root with the following:

env
Copy
Edit
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_GEMINI_API_KEY=your_google_gemini_api_key

🔗 Reference Links
Clerk Authentication

Shadcn/ui

Google Gemini API

Firebase Firestore

React.js

Vite

👨‍💻 Author
Jagadeesh Rallabandi
Student @ NIT Andhra Pradesh
GitHub: @JagadeeshRallabandi
Email: rjagadeeshnit@gmail.com
Portfolio:https://jagadeeshrportfolio.vercel.app

📜 License
This project is licensed under the MIT License.

Empower your interviews with AI. Practice. Improve. Succeed.
