 








// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2222


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../services/api";

// export default function DashboardPage() {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState({
//     links: { direct: {}, drive: {} },
//     summaries: { whyHire: "", bestFit: "", experience: "", aiRephrased: [] },
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     API.get("/user/dashboard")
//       .then((res) => {
//         console.log("API Response:", res.data); // Debug log
        
//         // Handle null response or missing structure
//         const safeUserData = {
//           links: {
//             direct: res.data?.links?.direct || {},
//             drive: res.data?.links?.drive || {}
//           },
//           summaries: {
//             whyHire: res.data?.summaries?.whyHire || "",
//             bestFit: res.data?.summaries?.bestFit || "",
//             experience: res.data?.summaries?.experience || "",
//             aiRephrased: res.data?.summaries?.aiRephrased || []
//           }
//         };
        
//         setUserData(safeUserData);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("API Error:", error); // Debug log
//         alert("Session expired. Please login again.");
//         navigate("/auth");
//       });
//   }, []);

//   const handleChange = (type, key, value, section = "direct") => {
//     setUserData((prev) => {
//       if (type === "links") {
//         return {
//           ...prev,
//           links: {
//             ...prev.links,
//             [section]: {
//               ...prev.links[section],
//               [key]: value,
//             },
//           },
//         };
//       } else {
//         return {
//           ...prev,
//           summaries: {
//             ...prev.summaries,
//             [key]: value,
//           },
//         };
//       }
//     });
//   };

//   const handleSave = () => {
//     API.put("/user/dashboard", userData).then(() => alert("Saved!"));
//   };

//   if (loading) return <div className="text-center p-8">Loading...</div>;

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold">Dashboard</h2>
//         <div className="space-x-2">
//           <button onClick={() => navigate("/airephrase")} className="bg-indigo-600 text-white px-4 py-2 rounded">AI Rephrase</button>
//           <button onClick={() => navigate("/profile")} className="bg-green-600 text-white px-4 py-2 rounded">Profile</button>
//           <button onClick={() => { localStorage.clear(); navigate("/auth"); }} className="bg-red-600 text-white px-4 py-2 rounded">Logout</button>
//         </div>
//       </div>

//       <h3 className="font-semibold mt-4">Direct Links</h3>
//       {["linked", "portfolio", "resumeLink", "githubLink"].map((label) => (
//         <input
//           key={label}
//           value={userData.links?.direct?.[label] || ""}
//           onChange={(e) => handleChange("links", label, e.target.value, "direct")}
//           placeholder={label}
//           className="w-full p-2 border rounded my-1"
//         />
//       ))}

//       <h3 className="font-semibold mt-4">Drive Links</h3>
//       {["linked", "portfolio", "resumeLink", "githubLink"].map((label) => (
//         <input
//           key={label}
//           value={userData.links?.drive?.[label] || ""}
//           onChange={(e) => handleChange("links", label, e.target.value, "drive")}
//           placeholder={label}
//           className="w-full p-2 border rounded my-1"
//         />
//       ))}

//       <h3 className="font-semibold mt-4">Summary Section</h3>
//       {["whyHire", "bestFit", "experience"].map((key) => (
//         <div key={key} className="mb-2">
//           <label className="block font-medium mb-1 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</label>
//           <textarea
//             value={userData.summaries?.[key] || ""}
//             onChange={(e) => handleChange("summaries", key, e.target.value)}
//             placeholder={key}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//       ))}

//       <button onClick={handleSave} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">Save</button>
//     </div>
//   );
// }





//after applying design only @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2




// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Copy } from "lucide-react";
// import GradientText from "../components/ui/GradientText";
// import API from "../services/api";

// const starBorder = "border border-[1px] border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.15)]";

// export default function DashboardPage() {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState({
//     links: { direct: {}, drive: {} },
//     summaries: { whyHire: "", bestFit: "", experience: "", aiRephrased: [] },
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     API.get("/user/dashboard")
//       .then((res) => {
//         const safeUserData = {
//           links: {
//             direct: res.data?.links?.direct || {},
//             drive: res.data?.links?.drive || {}
//           },
//           summaries: {
//             whyHire: res.data?.summaries?.whyHire || "",
//             bestFit: res.data?.summaries?.bestFit || "",
//             experience: res.data?.summaries?.experience || "",
//             aiRephrased: res.data?.summaries?.aiRephrased || []
//           }
//         };
//         setUserData(safeUserData);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("API Error:", error);
//         alert("Session expired. Please login again.");
//         navigate("/auth");
//       });
//   }, []);

//   const handleChange = (type, key, value, section = "direct") => {
//     setUserData((prev) => {
//       if (type === "links") {
//         return {
//           ...prev,
//           links: {
//             ...prev.links,
//             [section]: {
//               ...prev.links[section],
//               [key]: value,
//             },
//           },
//         };
//       } else {
//         return {
//           ...prev,
//           summaries: {
//             ...prev.summaries,
//             [key]: value,
//           },
//         };
//       }
//     });
//   };

//   const handleSave = () => {
//     API.put("/user/dashboard", userData).then(() => alert("Saved!"));
//   };

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//   };

//   if (loading) return <div className="text-center p-8 text-white">Loading...</div>;

//   return (
//     <div className="min-h-screen bg-[#0a0a23] text-white p-6">
//       <div className={`shadow-md bg-gray-900 px-6 py-4 rounded-md mb-6 flex justify-between items-center ${starBorder}`}>
//         <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa"]} className="text-4xl font-bold">
//           Dashboard
//         </GradientText>

//         <div className="flex gap-3">
//           <button onClick={() => navigate("/airephrase")} className={`bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-sm ${starBorder}`}>
//             AI Rephrase
//           </button>
//           <button onClick={() => navigate("/profile")} className={`bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-sm ${starBorder}`}>
//             Profile
//           </button>
//           <button onClick={() => { localStorage.clear(); navigate("/"); }} className={`bg-red-600 hover:bg-red-700 px-4 py-2 rounded-sm ${starBorder}`}>
//             Logout
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
//         {/* Direct Links */}
//         <section className={`bg-gray-900/70 backdrop-blur-md rounded-xl p-6 ${starBorder}`}>
//           <h2 className="text-xl font-semibold mb-6 text-center">Direct Links</h2>
//           {["linked", "portfolio", "resumeLink", "githubLink"].map((label) => (
//             <div key={label} className="flex items-center gap-2 mb-4">
//               <span className="w-32 font-medium capitalize">{label}:</span>
//               <input
//                 className="w-[13rem] p-2 rounded bg-gray-800 text-white border border-gray-600"
//                 value={userData.links?.direct?.[label] || ""}
//                 onChange={(e) => handleChange("links", label, e.target.value, "direct")}
//               />
//               <button
//                 className="text-cyan-400 hover:text-white"
//                 onClick={() => copyToClipboard(userData.links?.direct?.[label] || "")}
//               >
//                 <Copy size={18} />
//               </button>
//             </div>
//           ))}
//         </section>

//         {/* Drive Links */}
//         <section className={`bg-gray-900/70 backdrop-blur-md rounded-xl p-6 ${starBorder}`}>
//           <h2 className="text-xl font-semibold mb-6 text-center">Drive Links</h2> 
//           {["linked", "portfolio", "resumeLink", "githubLink"].map((label) => (
//             <div key={label} className="flex items-center gap-2 mb-4">
//               <span className="w-32 font-medium capitalize">{label}:</span>
//               <input
//                 className="w-[13rem] p-2 rounded bg-gray-800 text-white border border-gray-600"
//                 value={userData.links?.drive?.[label] || ""}
//                 onChange={(e) => handleChange("links", label, e.target.value, "drive")}
//               />
//               <button
//                 className="text-cyan-400 hover:text-white"
//                 onClick={() => copyToClipboard(userData.links?.drive?.[label] || "")}
//               >
//                 <Copy size={18} />
//               </button>
//             </div>
//           ))}
//         </section>

//         {/* Summaries */}
//         <section className={`bg-gray-900/70 backdrop-blur-md rounded-xl p-6 col-span-full ${starBorder}`}>
//           <h2 className="text-xl font-semibold mb-6 text-center">Your Summary</h2>
//           {[
//             { key: "whyHire", label: "Why should we hire you?" },
//             { key: "bestFit", label: "Why are you fit for this role?" },
//             { key: "experience", label: "Tell us about your experience" },
//           ].map(({ key, label }) => (
//             <div key={key} className="mb-6">
//               <label className="block mb-1 font-medium">{label}</label>
//               <textarea
//                 rows="4"
//                 className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
//                 value={userData.summaries[key]}
//                 onChange={(e) => handleChange("summaries", key, e.target.value)}
//               />
//               <button
//                 className="mt-2 text-cyan-400 hover:text-white"
//                 onClick={() => copyToClipboard(userData.summaries[key])}
//               >
//                 <Copy size={18} /> Copy
//               </button>
//             </div>
//           ))}
//         </section>
//       </div>

//       <div className="mt-10 flex justify-center">
//         <button
//           className={`px-6 py-2 bg-green-600 hover:bg-green-700 rounded-sm ${starBorder}`}
//           onClick={handleSave}
//         >
//           Save All Data
//         </button>
//       </div>
//     </div>
//   );
// }




//very finall code every things is working nice and fine @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Copy } from "lucide-react";
import GradientText from "../components/ui/GradientText";
import API from "../services/api";

const starBorder = "border border-[1px] border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.15)]";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    links: { direct: {}, drive: {} },
    summaries: { whyHire: "", bestFit: "", experience: "", aiRephrased: [] },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/user/dashboard")
      .then((res) => {
        const safeUserData = {
          links: {
            direct: {
              ...res.data?.links?.direct,
              others: res.data?.links?.direct?.others || [],
            },
            drive: {
              ...res.data?.links?.drive,
              others: res.data?.links?.drive?.others || [],
            }
          },
          summaries: {
            whyHire: res.data?.summaries?.whyHire || "",
            bestFit: res.data?.summaries?.bestFit || "",
            experience: res.data?.summaries?.experience || "",
            aiRephrased: res.data?.summaries?.aiRephrased || []
          }
        };
        setUserData(safeUserData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        alert("Session expired. Please login again.");
        navigate("/auth");
      });
  }, []);

  const handleChange = (type, key, value, section = "direct", index = null) => {
    setUserData((prev) => {
      if (type === "links") {
        if (index !== null) {
          const updatedOthers = [...prev.links[section].others];
          updatedOthers[index].value = value;
          return {
            ...prev,
            links: {
              ...prev.links,
              [section]: {
                ...prev.links[section],
                others: updatedOthers,
              },
            },
          };
        } else {
          return {
            ...prev,
            links: {
              ...prev.links,
              [section]: {
                ...prev.links[section],
                [key]: value,
              },
            },
          };
        }
      } else {
        return {
          ...prev,
          summaries: {
            ...prev.summaries,
            [key]: value,
          },
        };
      }
    });
  };

  const handleSave = () => {
    API.put("/user/dashboard", userData).then(() => alert("Saved!"));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const addNewField = (section) => {
    const label = prompt("Enter label for the new field:");
    if (!label) return;

    setUserData((prev) => ({
      ...prev,
      links: {
        ...prev.links,
        [section]: {
          ...prev.links[section],
          others: [
            ...(prev.links[section].others || []),
            { label, value: "" }
          ]
        }
      }
    }));
  };

  if (loading) return <div className="text-center p-8 text-white">Loading...</div>;

  const renderLinks = (sectionName) => (
    <section className={`bg-gray-900/70 backdrop-blur-md rounded-xl p-6 ${starBorder}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">{sectionName === "direct" ? "Direct Links" : "Drive Links"}</h2>
        <button
          onClick={() => addNewField(sectionName)}
          className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded text-sm"
        >
          + Add New
        </button>
      </div>

      {["linked", "portfolio", "resumeLink", "githubLink"].map((label) => (
        <div key={label} className="flex items-center gap-2 mb-4">
          <span className="w-32 font-medium capitalize">{label}:</span>
          <input
            className="w-[13rem] p-2 rounded bg-gray-800 text-white border border-gray-600"
            value={userData.links?.[sectionName]?.[label] || ""}
            onChange={(e) => handleChange("links", label, e.target.value, sectionName)}
          />
          <button
            className="text-cyan-400 hover:text-white"
            onClick={() => copyToClipboard(userData.links?.[sectionName]?.[label] || "")}
          >
            <Copy size={18} />
          </button>
        </div>
      ))}

      {/* Dynamic Others */}
      {userData.links?.[sectionName]?.others?.map((item, index) => (
        <div key={index} className="flex items-center gap-2 mb-4">
          <span className="w-32 font-medium capitalize">{item.label}:</span>
          <input
            className="w-[13rem] p-2 rounded bg-gray-800 text-white border border-gray-600"
            value={item.value}
            onChange={(e) => handleChange("links", "others", e.target.value, sectionName, index)}
          />
          <button
            className="text-cyan-400 hover:text-white"
            onClick={() => copyToClipboard(item.value)}
          >
            <Copy size={18} />
          </button>
        </div>
      ))}
    </section>
  );

  return (
    <div className="min-h-screen bg-[#0a0a23] text-white p-6">
      <div className={`shadow-md bg-gray-900 px-6 py-4 rounded-md mb-6 flex justify-between items-center ${starBorder}`}>
        <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa"]} className="text-4xl font-bold">
          Dashboard
        </GradientText>

        <div className="flex gap-3">
          <button onClick={() => navigate("/airephrase")} className={`bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-sm ${starBorder}`}>
            AI Rephrase
          </button>
          <button onClick={() => navigate("/profile")} className={`bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-sm ${starBorder}`}>
            Profile
          </button>
          <button onClick={() => { localStorage.clear(); navigate("/"); }} className={`bg-red-600 hover:bg-red-700 px-4 py-2 rounded-sm ${starBorder}`}>
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        {renderLinks("direct")}
        {renderLinks("drive")}

        {/* Summaries */}
        <section className={`bg-gray-900/70 backdrop-blur-md rounded-xl p-6 col-span-full ${starBorder}`}>
          <h2 className="text-xl font-semibold mb-6 text-center">Your Summary</h2>
          {[
            { key: "whyHire", label: "Why should we hire you?" },
            { key: "bestFit", label: "Why are you fit for this role?" },
            { key: "experience", label: "Tell us about your experience" },
          ].map(({ key, label }) => (
            <div key={key} className="mb-6">
              <label className="block mb-1 font-medium">{label}</label>
              <textarea
                rows="4"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
                value={userData.summaries[key]}
                onChange={(e) => handleChange("summaries", key, e.target.value)}
              />
              <button
                className="mt-2 text-cyan-400 hover:text-white"
                onClick={() => copyToClipboard(userData.summaries[key])}
              >
                <Copy size={18} /> Copy
              </button>
            </div>
          ))}
        </section>
      </div>

      <div className="mt-10 flex justify-center">
        <button
          className={`px-6 py-2 bg-green-600 hover:bg-green-700 rounded-sm ${starBorder}`}
          onClick={handleSave}
        >
          Save All Data
        </button>
      </div>
    </div>
  );
}
