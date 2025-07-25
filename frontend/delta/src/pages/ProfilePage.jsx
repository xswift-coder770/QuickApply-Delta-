// //update kiye hai nhi dikh rha tha profile page isliey  abhi dikh rha hia isme @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import { useEffect, useState } from "react";
// import API from "../services/api";

// export default function ProfilePage() {
//   const [profileData, setProfileData] = useState(null);

//   useEffect(() => {
//     API.get("/user/dashboard").then(res => setProfileData(res.data));
//   }, []);

//   if (!profileData) return <p className="p-4">Loading profile...</p>;

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">Your Profile</h2>

//       <section className="mb-6">
//         <h3 className="text-lg font-semibold">Direct Links</h3>
//         <ul className="list-disc pl-6">
//           {Object.entries(profileData.links.direct || {}).map(([key, value]) => (
//             <li key={key}><strong>{key}:</strong> {value}</li>
//           ))}
//         </ul>
//       </section>

//       <section className="mb-6">
//         <h3 className="text-lg font-semibold">Drive Links</h3>
//         <ul className="list-disc pl-6">
//           {Object.entries(profileData.links.drive || {}).map(([key, value]) => (
//             <li key={key}><strong>{key}:</strong> {value}</li>
//           ))}
//         </ul>
//       </section>

//       <section className="mb-6">
//         <h3 className="text-lg font-semibold">Summaries</h3>
//         <p><strong>Why should we hire you:</strong> {profileData.summaries.whyHire}</p>
//         <p><strong>Best fit for this role:</strong> {profileData.summaries.bestFit}</p>
//         <p><strong>Experience:</strong> {profileData.summaries.experience}</p>
//       </section>

//       <section>
//         <h3 className="text-lg font-semibold">AI Rephrased Summaries</h3>
//         <ul className="list-disc pl-6">
//           {(profileData.summaries.aiRephrased || []).map((item, idx) => (
//             <li key={item._id || idx}>
//               <p>{item.content}</p>
//               <p className="text-sm text-gray-500">Saved on: {new Date(item.createdAt).toLocaleString()}</p>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// }




 





//best after every update@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ originla code 

// import { useEffect, useState } from "react";
// import API from "../services/api";
// import { Copy } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Aurora from "../components/ui/Aurora";
// import "../components/ui/Aurora.css";

// export default function ProfilePage() {
//   const [profileData, setProfileData] = useState(null);
//   const [copiedText, setCopiedText] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     API.get("/user/dashboard").then((res) => setProfileData(res.data));
//   }, []);

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     setCopiedText(text);
//     setTimeout(() => setCopiedText(""), 2000);
//   };

//   if (!profileData)
//     return <div className="text-white p-6">🔄 Loading profile...</div>;

//   return (
//     <div className="min-h-screen bg-[#0d1b2a] text-white relative overflow-hidden">
//       <Aurora />

//       {/* 🟦 Dashboard Button */}
//       <div className="absolute top-4 right-4 z-20">
//         <button
//           onClick={() => navigate("/dashboard")}
//           className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg shadow"
//         >
//           Dashboard
//         </button>
//       </div>

//       <div className="relative z-10 p-6 max-w-5xl mx-auto">
//         <h1 className="text-3xl font-bold mb-8 text-center">👤 Your Profile</h1>

//         <div className="flex flex-col md:flex-row gap-10">
//           <div className="flex-1">
//             {/* ✅ DIRECT LINKS */}
//             <section className="mb-10">
//               <h2 className="text-2xl font-semibold mb-4">🌐 Direct Links</h2>

//               {/* Predefined direct links */}
//               {Object.entries(profileData.links.direct || {}).map(
//                 ([key, value]) => {
//                   if (key === "others") return null;
//                   return (
//                     <div
//                       key={key}
//                       className="flex flex-wrap items-center gap-3 mb-3"
//                     >
//                       <span className="w-48 font-medium">{key}:</span>
//                       <span className="text-cyan-400 bg-gray-900 p-2 rounded break-all w-full md:w-auto">
//                         {value}
//                       </span>
//                       <button
//                         onClick={() => copyToClipboard(value)}
//                         className="text-cyan-300 hover:text-white"
//                       >
//                         <Copy size={18} />
//                       </button>
//                       {copiedText && copiedText === value && (
//                         <span className="text-green-400 text-sm">Copied!</span>
//                       )}
//                     </div>
//                   );
//                 }
//               )}

//               {/* Custom-labeled direct links */}
//               {(profileData.links.direct.others || []).map(
//                 ({ label, value }, idx) => (
//                   <div
//                     key={idx}
//                     className="flex flex-wrap items-center gap-3 mb-3"
//                   >
//                     <span className="w-48 font-medium">{label}:</span>
//                     <span className="text-cyan-400 bg-gray-900 p-2 rounded break-all w-full md:w-auto">
//                       {value}
//                     </span>
//                     <button
//                       onClick={() => copyToClipboard(value)}
//                       className="text-cyan-300 hover:text-white"
//                     >
//                       <Copy size={18} />
//                     </button>
//                     {copiedText && copiedText === value && (
//                       <span className="text-green-400 text-sm">Copied!</span>
//                     )}
//                   </div>
//                 )
//               )}
//             </section>

//             {/* ✅ DRIVE LINKS */}
//             <section className="mb-10">
//               <h2 className="text-2xl font-semibold mb-4">🔗 Drive Links</h2>

//               {/* Predefined drive links */}
//               {Object.entries(profileData.links.drive || {}).map(
//                 ([key, value]) => {
//                   if (key === "others") return null;
//                   return (
//                     <div
//                       key={key}
//                       className="flex flex-wrap items-center gap-3 mb-3"
//                     >
//                       <span className="w-48 font-medium">{key}:</span>
//                       <span className="text-cyan-400 bg-gray-900 p-2 rounded break-all w-full md:w-auto">
//                         {value}
//                       </span>
//                       <button
//                         onClick={() => copyToClipboard(value)}
//                         className="text-cyan-300 hover:text-white"
//                       >
//                         <Copy size={18} />
//                       </button>
//                       {copiedText && copiedText === value && (
//                         <span className="text-green-400 text-sm">Copied!</span>
//                       )}
//                     </div>
//                   );
//                 }
//               )}

//               {/* Custom-labeled drive links */}
//               {(profileData.links.drive.others || []).map(
//                 ({ label, value }, idx) => (
//                   <div
//                     key={idx}
//                     className="flex flex-wrap items-center gap-3 mb-3"
//                   >
//                     <span className="w-48 font-medium">{label}:</span>
//                     <span className="text-cyan-400 bg-gray-900 p-2 rounded break-all w-full md:w-auto">
//                       {value}
//                     </span>
//                     <button
//                       onClick={() => copyToClipboard(value)}
//                       className="text-cyan-300 hover:text-white"
//                     >
//                       <Copy size={18} />
//                     </button>
//                     {copiedText && copiedText === value && (
//                       <span className="text-green-400 text-sm">Copied!</span>
//                     )}
//                   </div>
//                 )
//               )}
//             </section>

//             {/* ✅ TEXT SUMMARIES */}
//             <section className="mb-10">
//               <h2 className="text-2xl font-semibold mb-4">📝 Summary</h2>
//               <div className="grid gap-6">
//                 {[
//                   { title: "Why should we hire you:", key: "whyHire" },
//                   { title: "Best fit for this role:", key: "bestFit" },
//                   { title: "Experience:", key: "experience" },
//                 ].map(({ title, key }) => (
//                   <div
//                     key={key}
//                     className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-xl"
//                   >
//                     <div className="flex justify-between items-center mb-2">
//                       <h3 className="text-lg font-bold">{title}</h3>
//                       <button
//                         onClick={() =>
//                           copyToClipboard(profileData.summaries[key])
//                         }
//                         className="text-cyan-300 hover:text-white text-sm"
//                       >
//                         <Copy size={18} />
//                       </button>
//                     </div>
//                     <p className="text-cyan-300 whitespace-pre-wrap">
//                       {profileData.summaries[key]}
//                     </p>
//                     {copiedText === profileData.summaries[key] && (
//                       <p className="text-green-400 text-sm mt-1">Copied!</p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* ✅ AI REPHRASED */}
//             <section className="mb-10">
//               <h2 className="text-2xl font-semibold mb-4">
//                 🤖 AI Rephrased Summaries
//               </h2>
//               <ul className="list-disc pl-6 space-y-4">
//                 {(profileData.summaries.aiRephrased || []).map((item, idx) => (
//                   <li
//                     key={item._id || idx}
//                     className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-xl relative"
//                   >
//                     <div className="flex justify-between items-center mb-2">
//                       <p className="text-cyan-300 whitespace-pre-wrap flex-1">
//                         {item.content}
//                       </p>
//                       <button
//                         onClick={() => copyToClipboard(item.content)}
//                         className="text-cyan-300 hover:text-white ml-4"
//                       >
//                         <Copy size={18} />
//                       </button>
//                     </div>
//                     {copiedText === item.content && (
//                       <p className="text-green-400 text-sm mt-1">Copied!</p>
//                     )}
//                     <p className="text-sm text-gray-400 mt-1">
//                       Saved on: {new Date(item.createdAt).toLocaleString()}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








































//nice with color ye bhi nice kam kar rha hai but color theme alag hai 

// import { useEffect, useState } from "react";
// import API from "../services/api";
// import { Copy } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Aurora from "../components/ui/Aurora";
// import "../components/ui/Aurora.css";

// export default function ProfilePage() {
//   const [profileData, setProfileData] = useState(null);
//   const [copiedText, setCopiedText] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     API.get("/user/dashboard").then((res) => setProfileData(res.data));
//   }, []);

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     setCopiedText(text);
//     setTimeout(() => setCopiedText(""), 2000);
//   };

//   if (!profileData)
//     return <div className="text-white p-6">🔄 Loading profile...</div>;

//   const Section = ({ title, children }) => (
//     <section className="mb-10">
//       <h2 className="text-2xl font-semibold mb-6 text-cyan-300 border-b border-cyan-800 pb-2">
//         {title}
//       </h2>
//       <div className="space-y-4">{children}</div>
//     </section>
//   );

//   const LinkItem = ({ label, value }) => (
//     <div className="flex flex-wrap items-center justify-between bg-white/5 border border-white/10 p-3 rounded-lg shadow-sm hover:border-cyan-500 transition-all">
//       <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
//         <span className="font-medium text-white w-48">{label}:</span>
//         <span className="text-cyan-400 break-all">{value}</span>
//       </div>
//       <div className="mt-2 sm:mt-0 flex items-center gap-2">
//         <button
//           onClick={() => copyToClipboard(value)}
//           className="text-cyan-300 hover:text-white transition-colors"
//         >
//           <Copy size={18} />
//         </button>
//         {copiedText === value && (
//           <span className="text-green-400 text-sm">Copied!</span>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-[#0d1b2a] text-white relative overflow-hidden">
//       <Aurora />

//       <div className="absolute top-4 right-4 z-20">
//         <button
//           onClick={() => navigate("/dashboard")}
//           className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg shadow"
//         >
//           Dashboard
//         </button>
//       </div>

//       <div className="relative z-10 p-6 max-w-5xl mx-auto">
//         <h1 className="text-4xl font-extrabold mb-10 text-center text-cyan-200">
//           👤 Your Profile
//         </h1>

//         {/* Direct Links */}
//         <Section title="🌐 Direct Links">
//           {Object.entries(profileData.links.direct || {}).map(
//             ([key, value]) =>
//               key !== "others" && <LinkItem key={key} label={key} value={value} />
//           )}
//           {(profileData.links.direct.others || []).map(({ label, value }, idx) => (
//             <LinkItem key={idx} label={label} value={value} />
//           ))}
//         </Section>

//         {/* Drive Links */}
//         <Section title="🔗 Drive Links">
//           {Object.entries(profileData.links.drive || {}).map(
//             ([key, value]) =>
//               key !== "others" && <LinkItem key={key} label={key} value={value} />
//           )}
//           {(profileData.links.drive.others || []).map(({ label, value }, idx) => (
//             <LinkItem key={idx} label={label} value={value} />
//           ))}
//         </Section>

//         {/* Text Summaries */}
//         <Section title="📝 Summary">
//           {[
//             { title: "Why should we hire you:", key: "whyHire" },
//             { title: "Best fit for this role:", key: "bestFit" },
//             { title: "Experience:", key: "experience" },
//           ].map(({ title, key }) => (
//             <div
//               key={key}
//               className="bg-white/5 backdrop-blur border border-white/10 p-4 rounded-xl shadow-sm"
//             >
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="text-lg font-semibold text-white">{title}</h3>
//                 <button
//                   onClick={() => copyToClipboard(profileData.summaries[key])}
//                   className="text-cyan-300 hover:text-white"
//                 >
//                   <Copy size={18} />
//                 </button>
//               </div>
//               <p className="text-cyan-300 whitespace-pre-wrap">
//                 {profileData.summaries[key]}
//               </p>
//               {copiedText === profileData.summaries[key] && (
//                 <p className="text-green-400 text-sm mt-1">Copied!</p>
//               )}
//             </div>
//           ))}
//         </Section>

//         {/* AI Rephrased Summaries */}
//         <Section title="🤖 AI Rephrased Summaries">
//           {(profileData.summaries.aiRephrased || []).map((item, idx) => (
//             <div
//               key={item._id || idx}
//               className="bg-white/5 backdrop-blur border border-white/10 p-4 rounded-xl shadow-sm"
//             >
//               <div className="flex justify-between items-start gap-4">
//                 <p className="text-cyan-300 whitespace-pre-wrap flex-1">
//                   {item.content}
//                 </p>
//                 <button
//                   onClick={() => copyToClipboard(item.content)}
//                   className="text-cyan-300 hover:text-white"
//                 >
//                   <Copy size={18} />
//                 </button>
//               </div>
//               {copiedText === item.content && (
//                 <p className="text-green-400 text-sm mt-1">Copied!</p>
//               )}
//               <p className="text-sm text-gray-400 mt-1">
//                 Saved on: {new Date(item.createdAt).toLocaleString()}
//               </p>
//             </div>
//           ))}
//         </Section>
//       </div>
//     </div>
//   );
// }




























// //diff color

// import { useEffect, useState } from "react";
// import API from "../services/api";
// import { Copy } from "lucide-react";
// import GradientText from "../components/ui/GradientText";
// import { useNavigate } from "react-router-dom";

// const starBorder = "border border-[1px] border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.15)]";

// export default function ProfilePage() {
//   const [profileData, setProfileData] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     API.get("/user/dashboard")
//       .then((res) => {
//         const safeData = {
//           links: {
//             direct: {
//               ...res.data?.links?.direct,
//               others: res.data?.links?.direct?.others || [],
//             },
//             drive: {
//               ...res.data?.links?.drive,
//               others: res.data?.links?.drive?.others || [],
//             },
//           },
//           summaries: {
//             whyHire: res.data?.summaries?.whyHire || "",
//             bestFit: res.data?.summaries?.bestFit || "",
//             experience: res.data?.summaries?.experience || "",
//             aiRephrased: res.data?.summaries?.aiRephrased || [],
//           },
//         };
//         setProfileData(safeData);
//       })
//       .catch((error) => {
//         console.error("Failed to fetch profile data:", error);
//         alert("Session expired. Please login again.");
//         navigate("/auth");
//       });
//   }, []);

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//   };

//   if (!profileData) {
//     return <div className="text-center p-8 text-white">Loading profile...</div>;
//   }

//   const renderLinks = (sectionName) => (
//     <div className={`bg-gray-900/70 backdrop-blur-md p-6 rounded-xl mb-6 ${starBorder}`}>
//       <h2 className="text-lg font-semibold mb-4">{sectionName === "direct" ? "Direct Links" : "Drive Links"}</h2>
//       {["linked", "portfolio", "resumeLink", "githubLink"].map((label) => {
//         const value = profileData.links?.[sectionName]?.[label];
//         if (!value) return null;
//         return (
//           <div key={label} className="mb-3">
//             <div className="flex justify-between items-center">
//               <span className="font-medium capitalize">{label}:</span>
//               <button
//                 onClick={() => copyToClipboard(value)}
//                 className="text-cyan-400 hover:text-white ml-2"
//               >
//                 <Copy size={18} />
//               </button>
//             </div>
//             <input
//               readOnly
//               value={value}
//               className="w-full mt-1 p-2 rounded bg-gray-800 text-white border border-gray-600"
//             />
//           </div>
//         );
//       })}

//       {/* Dynamic fields */}
//       {profileData.links?.[sectionName]?.others?.map((item, index) => (
//         <div key={index} className="mb-3">
//           <div className="flex justify-between items-center">
//             <span className="font-medium capitalize">{item.label}:</span>
//             <button
//               onClick={() => copyToClipboard(item.value)}
//               className="text-cyan-400 hover:text-white ml-2"
//             >
//               <Copy size={18} />
//             </button>
//           </div>
//           <input
//             readOnly
//             value={item.value}
//             className="w-full mt-1 p-2 rounded bg-gray-800 text-white border border-gray-600"
//           />
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-[#0a0a23] text-white p-6">
//       <div className={`shadow-md bg-gray-900 px-6 py-4 rounded-md mb-6 flex justify-between items-center ${starBorder}`}>
//         <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa"]} className="text-4xl font-bold">
//           Profile
//         </GradientText>

//         <button
//           onClick={() => navigate("/dashboard")}
//           className={`bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-sm ${starBorder}`}
//         >
//           Back to Dashboard
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {renderLinks("direct")}
//         {renderLinks("drive")}
//       </div>

//       <div className={`bg-gray-900/70 backdrop-blur-md p-6 mt-6 rounded-xl ${starBorder}`}>
//         <h2 className="text-xl font-semibold mb-4 text-center">Your Summaries</h2>
//         {[
//           { key: "whyHire", label: "Why should we hire you?" },
//           { key: "bestFit", label: "Why are you fit for this role?" },
//           { key: "experience", label: "Tell us about your experience" },
//         ].map(({ key, label }) => (
//           <div key={key} className="mb-5">
//             <div className="flex justify-between items-center">
//               <span className="font-medium">{label}</span>
//               <button
//                 className="text-cyan-400 hover:text-white"
//                 onClick={() => copyToClipboard(profileData.summaries[key])}
//               >
//                 <Copy size={18} />
//               </button>
//             </div>
//             <textarea
//               readOnly
//               value={profileData.summaries[key]}
//               rows={4}
//               className="w-full mt-1 p-3 rounded bg-gray-800 text-white border border-gray-600"
//             />
//           </div>
//         ))}
//       </div>

//       {profileData.summaries.aiRephrased?.length > 0 && (
//         <div className={`bg-gray-900/70 backdrop-blur-md p-6 mt-6 rounded-xl ${starBorder}`}>
//           <h2 className="text-xl font-semibold mb-4 text-center">AI Rephrased Summaries</h2>
//           {profileData.summaries.aiRephrased.map((summary, index) => (
//             <div key={index} className="mb-4">
//               <div className="flex justify-between items-center mb-1">
//                 <span className="font-medium">Rephrased {index + 1}</span>
//                 <button
//                   className="text-cyan-400 hover:text-white"
//                   onClick={() => copyToClipboard(summary)}
//                 >
//                   <Copy size={18} />
//                 </button>
//               </div>
//               <textarea
//                 readOnly
//                 value={summary}
//                 rows={3}
//                 className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
//               />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }















// // //final code best working everygint nice . withd color theme matched with dashbaord page . @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2

// import { useEffect, useState } from "react";
// import API from "../services/api";
// import { Copy } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Aurora from "../components/ui/Aurora";
// import "../components/ui/Aurora.css";

// export default function ProfilePage() {
//   const [profileData, setProfileData] = useState(null);
//   const [copiedText, setCopiedText] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     API.get("/user/dashboard").then((res) => setProfileData(res.data));
//   }, []);

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     setCopiedText(text);
//     setTimeout(() => setCopiedText(""), 2000);
//   };

//   if (!profileData)
//     return <div className="text-white p-6">🔄 Loading profile...</div>;

//   const Section = ({ title, children }) => (
//     <section className="mb-10">
//       <h2 className="text-2xl font-semibold mb-6 text-cyan-300 border-b border-cyan-700 pb-2">
//         {title}
//       </h2>
//       <div className="space-y-4">{children}</div>
//     </section>
//   );

//   const LinkItem = ({ label, value }) => (
//     <div className="flex items-center justify-between bg-[#1e293b] border border-white/10 p-3 rounded-lg shadow hover:border-cyan-500 transition-all">
//       <span className="font-medium text-white w-48 flex-shrink-0">{label}:</span>
//       <span className="text-cyan-400 break-all flex-1 mx-4">{value}</span>
//       <div className="flex items-center gap-2 flex-shrink-0">
//         <button
//           onClick={() => copyToClipboard(value)}
//           className="text-cyan-300 hover:text-white transition-colors"
//         >
//           <Copy size={18} />
//         </button>
//         {copiedText === value && (
//           <span className="text-green-400 text-sm">Copied!</span>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-[#0f172a] text-white relative overflow-hidden">
//       <Aurora />

//       <div className="absolute top-4 right-4 z-20">
//         <button
//           onClick={() => navigate("/dashboard")}
//           className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg shadow"
//         >
//           Dashboard
//         </button>
//       </div>

//       <div className="relative z-10 p-6 max-w-5xl mx-auto">
//         <h1 className="text-4xl font-extrabold mb-10 text-center text-cyan-200">
//           👤 Your Profile
//         </h1>

//         {/* Direct Links */}
//         <Section title="🌐 Direct Links">
//           {Object.entries(profileData.links.direct || {}).map(
//             ([key, value]) =>
//               key !== "others" && <LinkItem key={key} label={key} value={value} />
//           )}
//           {(profileData.links.direct.others || []).map(({ label, value }, idx) => (
//             <LinkItem key={idx} label={label} value={value} />
//           ))}
//         </Section>

//         {/* Drive Links */}
//         <Section title="🔗 Drive Links">
//           {Object.entries(profileData.links.drive || {}).map(
//             ([key, value]) =>
//               key !== "others" && <LinkItem key={key} label={key} value={value} />
//           )}
//           {(profileData.links.drive.others || []).map(({ label, value }, idx) => (
//             <LinkItem key={idx} label={label} value={value} />
//           ))}
//         </Section>

//         {/* Text Summaries */}
//         <Section title="📝 Summary">
//           {[
//             { title: "Why should we hire you:", key: "whyHire" },
//             { title: "Best fit for this role:", key: "bestFit" },
//             { title: "Experience:", key: "experience" },
//           ].map(({ title, key }) => (
//             <div
//               key={key}
//               className="bg-[#1e293b] backdrop-blur border border-white/10 p-4 rounded-xl shadow hover:border-cyan-500 transition-all"
//             >
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="text-lg font-semibold text-white">{title}</h3>
//                 <button
//                   onClick={() => copyToClipboard(profileData.summaries[key])}
//                   className="text-cyan-300 hover:text-white"
//                 >
//                   <Copy size={18} />
//                 </button>
//               </div>
//               <p className="text-cyan-300 whitespace-pre-wrap">
//                 {profileData.summaries[key]}
//               </p>
//               {copiedText === profileData.summaries[key] && (
//                 <p className="text-green-400 text-sm mt-1">Copied!</p>
//               )}
//             </div>
//           ))}
//         </Section>

//         {/* AI Rephrased Summaries */}
//         <Section title="🤖 AI Rephrased Summaries">
//           {(profileData.summaries.aiRephrased || []).map((item, idx) => (
//             <div
//               key={item._id || idx}
//               className="bg-[#1e293b] backdrop-blur border border-white/10 p-4 rounded-xl shadow hover:border-cyan-500 transition-all"
//             >
//               <div className="flex justify-between items-start gap-4">
//                 <p className="text-cyan-300 whitespace-pre-wrap flex-1">
//                   {item.content}
//                 </p>
//                 <button
//                   onClick={() => copyToClipboard(item.content)}
//                   className="text-cyan-300 hover:text-white"
//                 >
//                   <Copy size={18} />
//                 </button>
//               </div>
//               {copiedText === item.content && (
//                 <p className="text-green-400 text-sm mt-1">Copied!</p>
//               )}
//               <p className="text-sm text-gray-400 mt-1">
//                 Saved on: {new Date(item.createdAt).toLocaleString()}
//               </p>
//             </div>
//           ))}
//         </Section>
//       </div>
//     </div>
//   );
// }







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
    return <div className="text-white p-6">🔄 Loading profile...</div>;

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

















 
