import { useRef, useEffect } from "react";
import PageWrapper from "./PageWrapper";

const Home = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-slide-in");
            observer.unobserve(entry.target); // play once
          }
        });
      },
      { threshold: 0.3 }
    );

    if (card) observer.observe(card);

    return () => {
      if (card) observer.unobserve(card);
    };
  }, []);

  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12">
        {/* Card Container */}
        <div
          ref={cardRef}
          className="max-w-5xl w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl 
                     shadow-[0_0_25px_rgba(255,255,255,0.15)] p-6 sm:p-6 
                     flex flex-col lg:flex-row items-center gap-10 opacity-0"
        >
          {/* Text Section */}
          <div className="flex-1 flex flex-col items-start text-left space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Hello <span className="animate-wave inline-block">👋</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200">
              I am Darshan, a
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold animate-typing-loop">
              <span className="text-pink-400 ">
                Software
              </span>{" "}
              <span className="text-blue-400 ">
                Engineer
              </span>
            </p>
          </div>

          {/* Emoji Image Section */}
          <div className="flex flex-col items-center text-center">
            <span
              role="img"
              aria-label="man working on laptop"
              className="flex items-center justify-center rounded-full 
                         bg-gradient-to-br from-gray-700 via-gray-800 to-black 
                         shadow-[0_0_25px_rgba(255,255,255,0.15)] 
                         text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] 
                         w-36 sm:w-48 md:w-60 lg:w-72 xl:w-80 h-36 sm:h-48 md:h-60 lg:h-72 xl:h-80"
            >
              👨🏻‍💻
            </span>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl font-bold text-white animate-typing-loop">
              Darshan Amane
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
