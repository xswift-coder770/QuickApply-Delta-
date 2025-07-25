

import React from "react";
import ProfileCard from "../components/ui/ProfileCard";
import "../components/ui/ProfileCard.css";

const teamMembers = [
  {
    name: "Gaurav Kr. Baraik",
    title: "Full-Stack Developer",
    handle: "xswift-coder007",
    status: "Online",
 

     avatarUrl: "GauravPic.jpg", // Image from public/
    miniAvatarUrl: "bro1.jpg",
  },
  // You can add more team members here
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white py-10 w-full">
      <h1 className="text-4xl font-bold text-center mb-12">Meet Our Team</h1>

      <div className="w-full px-4 md:px-10 lg:px-20">
        <div className="ml-[31rem] mr-[35rem] grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <ProfileCard
              key={index}
              name={member.name}
              title={member.title}
              handle={member.handle}
              status={member.status}
              avatarUrl={member.avatarUrl}
              miniAvatarUrl={member.miniAvatarUrl}
              contactText="Message"
              enableTilt={true}
               onContactClick={() =>
    window.open("https://wa.me/+916203329104", "_blank") //  helps to open my WhatsApp
  }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;










 
