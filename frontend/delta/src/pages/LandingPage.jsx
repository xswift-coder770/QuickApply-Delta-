//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import { useNavigate } from "react-router-dom";

// export default function LandingPage() {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
//       <h1 className="text-4xl font-bold mb-4">Welcome to Project Delta</h1>
//       <p className="mb-6 text-lg text-gray-700">Organize your links, summaries & profiles in one place</p>
//       <div className="space-x-4">
//         <button onClick={() => navigate("/auth")} className="bg-blue-600 text-white px-6 py-2 rounded-md">Get Started</button>
//         <button onClick={() => navigate("/auth")} className="bg-green-600 text-white px-6 py-2 rounded-md">Login</button>
//         <button onClick={() => alert("Project Delta helps you store and access all your career content in one place.")} className="bg-gray-600 text-white px-6 py-2 rounded-md">About Us</button>
//       </div>
//     </div>
//   );
// }




//after design  nice  finall code very fine and best code @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
import { useNavigate } from "react-router-dom";
import StarBorder from "../components/ui/StarBorder";
import ChromaGrid from "../components/ui/ChromaGrid";
import { BgCollision as BackgroundBeamsWithCollision } from "../components/ui/BgCollision";

const items = [
  {
    title: "Easy Store and Copy",
    subtitle: "Save resumes effortlessly",
    handle: "@storage",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg, #4F46E5, #000)",
    url: "#",
  },
  {
    title: "Organized",
    subtitle: "Keep applications sorted",
    handle: "@organize",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg, #F59E0B, #000)",
    url: "#",
  },
  {
    title: "AI Rephrase",
    subtitle: "Smarter edits with AI",
    handle: "@ai",
    borderColor: "#EF4444",
    gradient: "linear-gradient(195deg, #EF4444, #000)",
    url: "#",
  },
];

export default function LandingPage() {
  const navigate = useNavigate();

  const handleLogin = () => navigate("/auth");
  const handleAboutUs = () => navigate("/aboutus");

  return (
    <BackgroundBeamsWithCollision className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-black shadow-lg z-50">
        <h1 className="text-white font-extrabold text-2xl">QuickApply</h1>
        <div className="flex gap-4">
          <StarBorder color="cyan">
            <button
              onClick={handleAboutUs}
              className="px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-cyan-400 transition"
            >
              About Us
            </button>
          </StarBorder>
          <StarBorder color="cyan">
            <button
              onClick={handleLogin}
              className="px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-cyan-400 transition"
            >
              Login
            </button>
          </StarBorder>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-40 px-6 md:px-24 z-10 relative">
        {/* Heading */}
        <h1 className="text-center text-5xl md:text-6xl font-extrabold mb-6">
          QuickApply
        </h1>

        {/* Subheading */}
        <p className="text-center text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Organize your links, summaries, and profile data in one place. Save
          resumes, track career docs, and get AI help instantly.
        </p>

        {/* Get Started Button */}
        <div className="flex justify-center mb-16">
          <StarBorder color="cyan">
            <button
              onClick={handleLogin}
              className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-cyan-400 transition"
            >
              Get Started
            </button>
          </StarBorder>
        </div>

        {/* Chroma Grid */}
        <div className="flex justify-center mb-24">
          <div className="bg-black p-4 rounded-xl w-full max-w-5xl">
            <ChromaGrid items={items} />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 mt-12">
          Made with ❤️ by Gaurav
        </footer>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
