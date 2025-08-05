import PageWrapper from "./PageWrapper";
import React, { useState } from "react";

const Skill = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [hiddenOverlays, setHiddenOverlays] = useState({});

  const cards = [
    {
      src: "/c.jpg",
      title: "C language",
      badges: ["basics","functions","structure","pointer"],
    },
    {
      src: "/java.jpg",
      title: "Java",
      badges: ["OOP", "Exception Handling", "Java Swing", "Collections", "Multithreading", "JDBC"],
    },
    {
      src: "/python.webp",
      title: "Python",
      badges: ["OOP", "Libraries", "Numpy", "matplotlib", "tkinter", "Pandas"],
    },
    {
      src: "/react.png",
      title: "React-js",
      badges: ["JSX", "Hooks", "State", "Props", "Components"],
    },
    {
      src: "/nextjs.png",
      title: "Next-js",
      badges: ["Pages", "Routing", "API Routes", "SSR", "ISR"],
    },
    {
      src: "/sql.jpg",
      title: "My-SQL",
      badges: ["Select", "Join", "Subqueries", "Constraints", "Indexes"],
    },
  ];

  const handleImageClick = (src) => {
   setFullscreenImage(src);
     setTimeout(() => {
     setHiddenOverlays((prev) => ({ ...prev, [src]: true }));
     }, 50);
  };

  return (
    <PageWrapper>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-3 justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative card w-full max-w-sm rounded-2xl overflow-hidden shadow-lg mx-auto"
          >
            {/* Image with overlay */}
            <div className="relative">
              <img
                src={card.src}
                alt={card.title}
                className="w-full h-48 object-cover p-1 rounded-2xl outline outline-1 outline-white cursor-pointer"
                onClick={() => handleImageClick(card.src)}
              />

              {/* Dark overlay with badges */}
{!hiddenOverlays[card.src] && (
  <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl pointer-events-none">
    <div className="flex flex-wrap justify-center items-center gap-2 p-3 pointer-events-auto">
      {card.badges.map((badge, i) => (
        <div key={i} className="badge-base">
          <span>{badge}</span>
        </div>
      ))}
    </div>
  </div>
)}

            </div>

            {/* Language title below the image */}
            <div className="mt-2 mb-4 text-center">
              <span className="font-bold text-white">{card.title}</span>
            </div>
          </div>
        ))}

        {/* Fullscreen Image Viewer */}
        {fullscreenImage && (
  <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
    <button
      onClick={() => {
        setFullscreenImage(null);
        setHiddenOverlays((prev) => ({ ...prev, [fullscreenImage]: false }));
      }}
      className="absolute top-5 right-5 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
    >
      ✕
    </button>
    <img
      src={fullscreenImage}
      alt="Fullscreen"
      className="max-w-full max-h-full rounded-lg shadow-2xl"
    />
  </div>
)}

      </div>
    </PageWrapper>
  );
};

export default Skill;
