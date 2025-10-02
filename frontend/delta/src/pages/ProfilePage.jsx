 



//test





import { useEffect, useState } from "react";
import API from "../services/api";
import { Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Aurora from "../components/ui/Aurora";
import "../components/ui/Aurora.css";

export default function ProfilePage() {
  const [profileData, setProfileData] = useState(null);
  const [copiedText, setCopiedText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/user/dashboard").then((res) => setProfileData(res.data));
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000);
  };

  if (!profileData)
    return <div className="text-white p-6"> Loading profile...</div>;

  const Section = ({ title, children }) => (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-6 text-cyan-300 border-b border-cyan-700 pb-2">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );

  const LinkItem = ({ label, value }) => (
    <div className="flex flex-wrap items-center justify-between bg-[#1e293b] border border-white/10 p-3 rounded-lg shadow hover:border-cyan-500 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
        <span className="font-medium text-white w-48">{label}:</span>
        <span className="text-cyan-400 break-all">{value}</span>
      </div>
      <div className="mt-2 sm:mt-0 flex items-center gap-2">
        <button
          onClick={() => copyToClipboard(value)}
          className="text-cyan-300 hover:text-white transition-colors"
        >
          <Copy size={18} />
        </button>
        {copiedText === value && (
          <span className="text-green-400 text-sm">Copied!</span>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f172a] text-white relative overflow-hidden">
      <Aurora />

      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg shadow"
        >
          Dashboard
        </button>
      </div>

      <div className="relative z-10 p-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-cyan-200">
          👤 Your Profile
        </h1>

        {/* Direct Links */}
        <Section title="🌐 Direct Links">
          {Object.entries(profileData.links.direct || {}).map(
            ([key, value]) =>
              key !== "others" && <LinkItem key={key} label={key} value={value} />
          )}
          {(profileData.links.direct.others || []).map(({ label, value }, idx) => (
            <LinkItem key={idx} label={label} value={value} />
          ))}
        </Section>

        {/* Drive Links */}
        <Section title="🔗 Drive Links">
          {Object.entries(profileData.links.drive || {}).map(
            ([key, value]) =>
              key !== "others" && <LinkItem key={key} label={key} value={value} />
          )}
          {(profileData.links.drive.others || []).map(({ label, value }, idx) => (
            <LinkItem key={idx} label={label} value={value} />
          ))}
        </Section>

        {/* Text Summaries */}
        <Section title="📝 Summary">
          {[
            { title: "Why should we hire you:", key: "whyHire" },
            { title: "Best fit for this role:", key: "bestFit" },
            { title: "Experience:", key: "experience" },
          ].map(({ title, key }) => (
            <div
              key={key}
              className="bg-[#1e293b] backdrop-blur border border-white/10 p-4 rounded-xl shadow hover:border-cyan-500 transition-all"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <button
                  onClick={() => copyToClipboard(profileData.summaries[key])}
                  className="text-cyan-300 hover:text-white"
                >
                  <Copy size={18} />
                </button>
              </div>
              <p className="text-cyan-300 whitespace-pre-wrap">
                {profileData.summaries[key]}
              </p>
              {copiedText === profileData.summaries[key] && (
                <p className="text-green-400 text-sm mt-1">Copied!</p>
              )}
            </div>
          ))}
        </Section>

        {/* AI Rephrased Summaries */}
        <Section title="🤖 AI Rephrased Summaries">
          {(profileData.summaries.aiRephrased || []).map((item, idx) => (
            <div
              key={item._id || idx}
              className="bg-[#1e293b] backdrop-blur border border-white/10 p-4 rounded-xl shadow hover:border-cyan-500 transition-all"
            >
              <div className="flex justify-between items-start gap-4">
                <p className="text-cyan-300 whitespace-pre-wrap flex-1">
                  {item.content}
                </p>
                <button
                  onClick={() => copyToClipboard(item.content)}
                  className="text-cyan-300 hover:text-white"
                >
                  <Copy size={18} />
                </button>
              </div>
              {copiedText === item.content && (
                <p className="text-green-400 text-sm mt-1">Copied!</p>
              )}
              <p className="text-sm text-gray-400 mt-1">
                Saved on: {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </Section>
      </div>
    </div>
  );
}

















 
