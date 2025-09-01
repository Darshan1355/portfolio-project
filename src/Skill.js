import PageWrapper from "./PageWrapper";
import React, { useState, useRef, useEffect } from "react";

const Skill = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const cardRefs = useRef([]);

useEffect(() => {
  const cards = cardRefs.current; // copy current refs once

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-once");
          observer.unobserve(entry.target); // play only once
        }
      });
    },
    { threshold: 0.3 }
  );

  cards.forEach((card) => {
    if (card) observer.observe(card);
  });

  return () => {
    cards.forEach((card) => {
      if (card) observer.unobserve(card);
    });
  };
}, []);

  const cards = [
    { src: "/c.jpg", title: " ", badges: ["basics", "functions", "structure", "pointer"] },
    { src: "/java.jpg", title: " ", badges: ["OOP", "Exception Handling", "Java Swing", "Collections", "Multithreading", "JDBC"] },
    { src: "/python.webp", title: " ", badges: ["OOP", "Libraries", "Numpy", "matplotlib", "tkinter", "Pandas"] },
    { src: "/react.png", title: " ", badges: ["JSX", "Hooks", "State", "Props", "Components"] },
    { src: "/nextjs.png", title: " ", badges: ["Pages", "Routing", "API Routes", "SSR", "ISR"] },
    { src: "/sql.jpg", title: " ", badges: ["Select", "Join", "Subqueries", "Constraints", "Indexes"] },
  ];

  return (
    <PageWrapper>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-3 justify-center">
        <div className="h-10 col-span-full">
          <p
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center"
            style={{
              textShadow: "0 0 8px #c82909, 0 0 12px #c82909, 0 0 16px #c82909",
            }}
          >
            Skills
          </p>
        </div>

        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="card w-full mx-auto p-4 text-center border border-gray-700 shadow-lg bg-black bg-opacity-30"
          >
            <img
              src={card.src}
              alt={card.title}
              className="w-80 h-60 sm:h-72 md:h-48 object-cover p-1 outline outline-2 outline-orange-400 cursor-pointer mx-auto"
              onClick={() => setFullscreenImage(card.src)}
            />
            <div className="mt-3 mb-2 text-center">
              <span className="font-bold text-white">{card.title}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {card.badges.map((badge, i) => (
                <div
                  key={i}
                  className="badge-base bg-yellow-300 text-black px-2 py-1 rounded-lg text-sm font-semibold shadow"
                >
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {fullscreenImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <button
              onClick={() => setFullscreenImage(null)}
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

        <div className="h-1 col-span-full"></div>
      </div>
    </PageWrapper>
  );
};

export default Skill;
