const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

// ✅ Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// ✅ Root route (prevents "Cannot GET /")
app.get("/", (req, res) => {
  res.send("EduAI Backend Running 🚀");
});

// ✅ Chat route
app.post("/chat", async (req, res) => {
  const messages = req.body.messages;

  if (!messages) {
    return res.status(400).json({ reply: "No messages provided" });
  }

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a smart engineering tutor. Explain concepts clearly, give examples, and help with exam answers and code.",
          },
          ...messages,
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const reply =
      response.data.choices?.[0]?.message?.content ||
      "No response from AI";

    res.json({ reply });
  } catch (error) {
    console.error("🔥 ERROR:", error.response?.data || error.message);

    res.status(500).json({
      reply: "Error connecting to AI",
    });
  }
});

// ✅ PORT FIX (IMPORTANT FOR RENDER)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});