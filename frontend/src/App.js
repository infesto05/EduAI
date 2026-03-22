import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fullscreen, setFullscreen] = useState(false); // ✅ NEW

  const go = (p) => setPage(p);
  const clearChat = () => setChat([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const updatedChat = [...chat, { role: "user", content: message }];
    setChat(updatedChat);
    setLoading(true);

    const res = await fetch("https://eduai-44we.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: updatedChat }),
    });

    const data = await res.json();

    setChat([...updatedChat, { role: "assistant", content: data.reply }]);
    setLoading(false);
    setMessage("");
  };

  const Navbar = () => (
    <div className="nav">
      <div className="logo">EduAI</div>
      <div className="links">
        <button onClick={() => go("home")}>Home</button>
        <button onClick={() => go("about")}>About</button>
        <button onClick={() => go("features")}>Features</button>
      </div>
    </div>
  );

  const Section = ({ children }) => (
    <div className="section fade-in">
      <div className="glass">{children}</div>
    </div>
  );

  // ===== HOME =====
  if (page === "home") {
    return (
      <div className="page">
        <Navbar />
        <Section>
          <h1>EduAI Student Assistant</h1>
          <p>Your AI-powered study companion</p>
          <button className="cta" onClick={() => go("chat")}>
            Start Chatting →
          </button>
        </Section>
      </div>
    );
  }

  // ===== ABOUT =====
  if (page === "about") {
    return (
      <div className="page">
        <Navbar />
        <Section>
          <h2>About EduAI</h2>
          <p>
            EduAI is a smart AI-powered student assistant designed to make learning easier,
            faster, and more effective. It acts like a personal tutor that is available 24/7
            to help you understand concepts, solve problems, and prepare for exams.
          </p>

          <p>
            Whether you're struggling with a difficult subject, need quick explanations,
            or want structured answers for exams, EduAI simplifies complex topics into
            easy-to-understand explanations. It adapts to your learning needs and helps
            you build strong fundamentals.
          </p>

          <p>
            The goal of EduAI is to reduce confusion, save time, and improve your confidence
            in learning by providing instant, reliable, and structured responses.
          </p>

          <button className="cta" onClick={() => go("chat")}>
            Start Chatting →
          </button>
        </Section>
      </div>
    );
  }

  // ===== FEATURES =====
  if (page === "features") {
    return (
      <div className="page">
        <Navbar />
        <Section>
          <h2>Features</h2>
          <ul className="list">
            <li>
              📚 <strong>Instant Homework Help:</strong> Get quick and accurate solutions
              for your academic problems without wasting time searching.
            </li>
            <li>
              🧠 <strong>Concept Simplification:</strong> Understand complex topics with
              clear, step-by-step explanations designed for students.
            </li>
            <li>
              💻 <strong>Code Generation:</strong> Generate clean and simple code for
              programming subjects, perfect for learning and practical exams.
            </li>
            <li>
              📝 <strong>Exam-Ready Answers:</strong> Receive well-structured answers
              that are easy to write in exams (definitions, explanations, examples).
            </li>
            <li>
              ⚡ <strong>Fast Responses:</strong> Get answers instantly, helping you
              save time and stay productive.
            </li>
            <li>
              🎯 <strong>Student-Focused:</strong> Designed specifically for learners,
              focusing on clarity, simplicity, and usefulness.
            </li>
          </ul>

          <button className="cta" onClick={() => go("chat")}>
            Start Chatting →
          </button>
        </Section>
      </div>
    );
  }
  // ===== CHAT =====
  return (
    <div className="page">
      <Navbar />

      <div className={fullscreen ? "chat-full" : "chat-wrap fade-in"}>
        <div className="chat-card">
          
          <div className="chat-head">
            <span>EduAI Assistant</span>

            <div className="actions">
              <button onClick={() => go("home")}>←</button>
              <button onClick={clearChat}>⟳</button>
              <button onClick={() => setFullscreen(!fullscreen)}>
                ⛶
              </button>
            </div>
          </div>

          <div className="chat-body">
            {chat.map((m, i) => (
              <div
                key={i}
                className={`bubble ${m.role === "user" ? "user" : "bot"}`}
              >
                {m.content}
              </div>
            ))}
            {loading && <div className="bubble bot">Typing...</div>}
          </div>

          <div className="chat-input">
            <input
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  }}
  placeholder="Ask anything..."
/>
            <button className="send" onClick={sendMessage}>
              ➤
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;