 


import { useEffect, useState } from "react";
import API from "../services/api";
import { Copy, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AiRephrasePage() {
  const [prompt, setPrompt] = useState("");
  const [rephrased, setRephrased] = useState("");
  const [option, setOption] = useState("whyHire");
  const [savedSummaries, setSavedSummaries] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const options = {
    whyHire: "Why should we hire you?",
    bestFit: "Why are you the best fit for this role?",
    experience: "Tell us about your work experience.",
    general: "General rephrase:",
  };

  useEffect(() => {
    fetchSaved();
  }, []);

  const fetchSaved = async () => {
    try {
      const res = await API.get("/user/dashboard");
      setSavedSummaries(res.data.summaries.aiRephrased || []);
    } catch (err) {
      console.error("Failed to load saved summaries:", err);
    }
  };

  const handleRephrase = async () => {
    if (!prompt.trim()) {
      alert("Please enter some text to rephrase.");
      return;
    }

    setIsLoading(true);
    let fullPrompt;

    if (option === "general") {
      fullPrompt = `Please rephrase this text in a professional, concise manner from first person perspective: ${prompt}`;
    } else {
      const questionText = options[option];
      fullPrompt = `Question: ${questionText}\nMy response: ${prompt}\n\nPlease rephrase my response to be professional, confident, and direct from first person perspective in 2-3 sentences.`;
    }

    try {
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timeout")), 30000)
      );

      const apiPromise = API.post("/ai/rephrase", { prompt: fullPrompt });

      const res = await Promise.race([apiPromise, timeoutPromise]);

      if (res.data && res.data.rephrased) {
        setRephrased(res.data.rephrased);
        setIsSaved(false);
      } else {
        alert("Received unexpected response format from server.");
      }
    } catch (err) {
      if (err.message === "Request timeout") {
        alert("Request timed out. Please check your backend AI service.");
      } else {
        alert(`Failed to get rephrased output: ${err.response?.data?.message || err.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    if (!rephrased) return;

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to save summaries.");
      return;
    }

    try {
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Save request timeout")), 15000)
      );

      const apiPromise = API.post(
        "/ai/save",
        { text: rephrased },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const res = await Promise.race([apiPromise, timeoutPromise]);
      alert("Summary saved!");
      setIsSaved(true);
      await fetchSaved();
    } catch (err) {
      if (err.message === "Save request timeout") {
        alert("Save request timed out. Please check your backend save service.");
      } else {
        alert(`Failed to save summary: ${err.response?.data?.message || err.message}`);
      }
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to delete summaries.");
      return;
    }

    try {
      await API.delete(`/ai/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Summary deleted!");
      fetchSaved();
    } catch (err) {
      alert("Failed to delete summary.");
    }
  };

  const handleDeleteCurrent = async () => {
    const currentSummary = savedSummaries.find((summary) => summary.content === rephrased);
    if (currentSummary) {
      await handleDelete(currentSummary._id);
      setIsSaved(false);
      setRephrased("");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Copied to clipboard!"))
      .catch((err) => console.error("Copy failed", err));
  };

  return (
    <div className="min-h-screen bg-[#0d1b2a] text-white p-6 md:p-10 relative">
      {/* Top-left Dashboard button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="absolute top-6 right-6 bg-white/10 backdrop-blur border border-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition"
      >
        ← Dashboard
      </button>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center"> AI Rephrase </h1>

        <textarea
          className="w-full bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl mb-4 text-white placeholder-gray-300"
          rows="4"
          placeholder="Enter your text..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <div className="relative mb-4">
          <select
            value={option}
            onChange={(e) => setOption(e.target.value)}
            className="w-full appearance-none bg-white/10 text-gray-200 p-3 pr-10 rounded-xl border border-white/20 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            <option style={{ backgroundColor: "#1e293b" }} value="whyHire">
              Why should we hire you?
            </option>
            <option style={{ backgroundColor: "#1e293b" }} value="bestFit">
              Why are you the best fit for this role?
            </option>
            <option style={{ backgroundColor: "#1e293b" }} value="experience">
              Tell us about your work experience
            </option>
            <option style={{ backgroundColor: "#1e293b" }} value="general">
              General rephrase
            </option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <button
          className={`w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600 transition text-white px-4 py-3 rounded-xl font-bold shadow-lg mb-4 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleRephrase}
          disabled={isLoading}
        >
          {isLoading ? "Rephrasing..." : " Rephrase with AI"}
        </button>

        {rephrased && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Rephrased Text:</h2>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl text-cyan-300 whitespace-pre-wrap">
              {rephrased}
            </div>

            <div className="flex gap-3 mt-4">
              {!isSaved ? (
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-xl transition flex items-center gap-2"
                  onClick={handleSave}
                >
                   Save
                </button>
              ) : (
                <>
                  <button
                    className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-xl transition flex items-center gap-2"
                    onClick={() => copyToClipboard(rephrased)}
                  >
                    <Copy size={18} /> Copy
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-xl transition flex items-center gap-2"
                    onClick={handleDeleteCurrent}
                  >
                    <Trash2 size={18} /> Delete
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {savedSummaries.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">💾 Saved Summaries</h2>
            {savedSummaries.map((summary) => (
              <div
                key={summary._id}
                className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl mb-4"
              >
                <div className="flex justify-between mb-2 items-center">
                  <span className="text-white font-bold capitalize">{option}</span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => copyToClipboard(summary.content)}
                      className="bg-cyan-600 hover:bg-cyan-700 px-3 py-1 rounded flex items-center gap-1 text-sm text-white"
                    >
                      <Copy size={16} /> Copy
                    </button>
                    <button
                      onClick={() => handleDelete(summary._id)}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded flex items-center gap-1 text-sm text-white"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                </div>
                <p className="text-cyan-200 whitespace-pre-wrap">{summary.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
