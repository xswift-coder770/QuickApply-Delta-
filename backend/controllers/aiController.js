 
 


// @@@@@@@@@@@@ 

const axios = require("axios");
const User = require("../models/User.js");  

// here we are Rephrasing  text using Cohere AI
const rephraseText = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await axios.post(
      "https://api.cohere.ai/v1/generate",
      {
        model: "command",
        prompt: prompt,
        max_tokens: 100,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const generated = response.data.generations[0]?.text?.trim();
    res.json({ rephrased: generated || "No output generated." });

  } catch (err) {
    console.error("AI error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to get rephrased output" });
  }
};

// HERE we are Saveing  AI-rephrased summary to the user's data
const saveRephrased = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Text is required" });
    }


    const userId = req.user.id;  
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.summaries) user.summaries = {};
    if (!Array.isArray(user.summaries.aiRephrased)) {
      user.summaries.aiRephrased = [];
    }

    user.summaries.aiRephrased.push({ content: text });
    await user.save();

    res.json({ message: "Summary saved successfully" });

  } catch (err) {
    console.error("Save error:", err.message);
    res.status(500).json({ message: "Failed to save summary" });
  }
};

// Delete AI-rephrased summary by ID
const deleteRephrased = async (req, res) => {
  try {
    const userId = req.user.id;  
    const { id } = req.params;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.summaries || !Array.isArray(user.summaries.aiRephrased)) {
      return res.status(404).json({ message: "No AI summaries found" });
    }

    const beforeCount = user.summaries.aiRephrased.length;
    user.summaries.aiRephrased = user.summaries.aiRephrased.filter(
      (entry) => entry._id.toString() !== id
    );
    const afterCount = user.summaries.aiRephrased.length;

    if (beforeCount === afterCount) {
      return res.status(404).json({ message: "Summary not found" });
    }

    await user.save();
    res.json({ message: "Summary deleted successfully" });

  } catch (err) {
    console.error("Delete error:", err.message);
    res.status(500).json({ message: "Failed to delete summary" });
  }
};

module.exports = { rephraseText, saveRephrased, deleteRephrased };


 
 
