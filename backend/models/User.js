


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,

  links: {
    direct: {
      linked: String,
      portfolio: String,
      resumeLink: String,
      githubLink: String,
      others: [
        {
          label: String,
          value: String
        }
      ]
    },
    drive: {
      linked: String,
      portfolio: String,
      resumeLink: String,
      githubLink: String,
      others: [
        {
          label: String,
          value: String
        }
      ]
    }
  },

  summaries: {
    whyHire: String,
    bestFit: String,
    experience: String,
    aiRephrased: [
      {
        content: String,
        createdAt: { type: Date, default: Date.now }
      }
    ]
  }
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
