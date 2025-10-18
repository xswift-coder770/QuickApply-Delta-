

// backend/controllers/aiController.js

const axios = require("axios");
const User = require("../models/User.js");

/**
 * Rephrase text using Cohere Chat API (command-r-plus-08-2024)
 */
const rephraseText = async (req, res) => {
  try {
    let { prompt } = req.body;

     
    if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
      return res.status(400).json({ error: "Prompt is required and cannot be empty." });
    }
    prompt = prompt.trim();
 
    if (prompt.length < 10) {
      return res.status(400).json({ error: "Prompt must be at least 10 characters long." });
    }

    
    const payload = {
      model: "command-r-plus-08-2024",  
      messages: [
        {
          role: "user",
          content: prompt,  
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    };
    console.log("Sending to Cohere:", JSON.stringify(payload, null, 2));

    // Call Cohere Chat API
    const response = await axios.post(
      "https://api.cohere.com/v2/chat",  
      payload,
      {
        headers: {
          Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
          "Content-Type": "application/json",
        },
        timeout: 30000,  
      }
    );

    console.log("Cohere response:", JSON.stringify(response.data, null, 2));
 
    let generated;
    
     
    if (response.data.message?.content) {
    
      //formate
      if (Array.isArray(response.data.message.content)) {
        generated = response.data.message.content
          .map(item => item.text)
          .join('')
          .trim();
      } else if (typeof response.data.message.content === 'string') {
        generated = response.data.message.content.trim();
      }
    } else if (response.data.text) {
    
      generated = response.data.text.trim();
    }

    if (!generated) {
      console.error("No output in response:", response.data);
      return res.status(500).json({ error: "No output generated from AI." });
    }

    return res.json({ rephrased: generated });
  } catch (err) {
    console.error("Full AI error:", err.response ? err.response.data : err.message);
    
    
    if (err.response?.data) {
      return res.status(err.response.status || 500).json({ 
        error: err.response.data.message || "Failed to get rephrased output",
        details: err.response.data
      });
    }
    
    return res.status(500).json({ 
      error: "Failed to get rephrased output",
      message: err.message 
    });
  }
};

/**
 * Save AI-rephrased summary to user's account
 */
const saveRephrased = async (req, res) => {
  try {
    const { text, option } = req.body;

    if (!text || typeof text !== "string" || !text.trim()) {
      return res.status(400).json({ message: "Text is required." });
    }

    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    if (!user.summaries) user.summaries = {};
    if (!Array.isArray(user.summaries.aiRephrased)) {
      user.summaries.aiRephrased = [];
    }

    user.summaries.aiRephrased.push({ 
      content: text.trim(),
      option: option || "general",
      createdAt: new Date()
    });
    await user.save();

    return res.json({ message: "Summary saved successfully." });
  } catch (err) {
    console.error("Save error:", err.message);
    return res.status(500).json({ message: "Failed to save summary." });
  }
};

/**
 * Delete AI-rephrased summary by ID
 */
const deleteRephrased = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { id } = req.params;

    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found." });

    if (!user.summaries || !Array.isArray(user.summaries.aiRephrased)) {
      return res.status(404).json({ message: "No AI summaries found." });
    }

    const beforeCount = user.summaries.aiRephrased.length;
    user.summaries.aiRephrased = user.summaries.aiRephrased.filter(
      (entry) => entry._id.toString() !== id
    );
    const afterCount = user.summaries.aiRephrased.length;

    if (beforeCount === afterCount) {
      return res.status(404).json({ message: "Summary not found." });
    }

    await user.save();
    return res.json({ message: "Summary deleted successfully." });
  } catch (err) {
    console.error("Delete error:", err.message);
    return res.status(500).json({ message: "Failed to delete summary." });
  }
};

module.exports = { rephraseText, saveRephrased, deleteRephrased };
