EduAI – Student Assistant Chatbot

EduAI is a full-stack AI-powered chatbot designed to assist students with learning, coding, and exam preparation. It acts as a smart virtual tutor that provides clear explanations, structured answers, and instant support.

🔗 Live Demo: https://edu-ai-rust.vercel.app/

🔗 GitHub Repo: https://github.com/infesto05/EduAI

📌 About the Project

EduAI was built to simplify learning by providing quick and understandable responses to student queries. Instead of searching through multiple resources, students can interact with a single AI assistant that explains concepts in a structured and exam-friendly way.

This project focuses not just on functionality, but also on delivering a smooth and modern user experience.

✨ Features
📚 Instant Homework Help
Get quick answers and explanations for academic questions.
🧠 Concept Simplification
Break down complex topics into easy-to-understand explanations.
💻 Code Generation
Generate simple and clean code for programming-related queries.
📝 Exam-Ready Answers
Structured responses suitable for writing in exams.
⚡ Fast AI Responses
Real-time interaction with minimal delay.
🎯 Student-Focused Design
Built specifically for learners with clarity and usability in mind.
🛠️ Tech Stack
Frontend
React.js
CSS (Custom modern UI design)
Backend
Node.js
Express.js
AI Integration
OpenRouter API (GPT-based model)
Deployment
Frontend: Vercel
Backend: Render
⚙️ How It Works
User enters a query in the chat interface
Frontend sends the message to the backend (/chat endpoint)
Backend forwards the request to the AI API
AI generates a response
Backend sends the response back to frontend
Chat UI displays the answer in real-time
🚧 Challenges & Learnings

This project was a major learning experience and involved solving real-world problems:

Handling API errors (401, 404, 400)
Debugging frontend ↔ backend communication
Fixing environment variable issues in deployment
Understanding request/response structure deeply
Managing full deployment workflow (GitHub → Render → Vercel)
Improving UI/UX from basic to modern

💡 While AI tools were used for guidance (vibe coding), the focus was on:

Understanding the logic
Debugging independently
Building the project step by step

This helped in gaining practical knowledge of how real-world applications work in production.

🚀 Installation & Setup
1. Clone the repository
git clone https://github.com/infesto05/EduAI.git
cd EduAI
2. Setup Backend
cd backend
npm install

Create a .env file:

OPENROUTER_API_KEY=your_api_key_here

Run backend:

node server.js
3. Setup Frontend
cd frontend
npm install
npm start
🌐 Deployment
Backend deployed on Render
Frontend deployed on Vercel

Make sure to update the backend URL in frontend before deploying.

📈 Future Improvements
Streaming responses (like ChatGPT typing effect)
Chat history persistence
Authentication (user accounts)
Better UI animations and UX
Multi-subject specialized modes
