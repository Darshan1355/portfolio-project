import { useRef, useEffect } from "react";
import PageWrapper from "./PageWrapper";

const About = () => {
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
      <div className="min-h-screen flex items-center justify-center px-4 py-3">
        <section
          ref={cardRef}
          className="max-w-4xl w-full bg-gray-900 rounded-2xl shadow-[0_0_20px_#808080] p-8 opacity-0"
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-green-400 text-center mb-6">
            About Me
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Avatar / Emoji */}
            <div className="flex flex-col items-center">
              <span
                role="img"
                aria-label="student working on laptop"
                className="text-[8rem] lg:text-[10rem] rounded-full p-6 
                           bg-gradient-to-br from-gray-800 via-gray-900 to-black 
                           shadow-[0_0_20px_#22d3ee,0_0_40px_#0ea5e9]"
              >
                👨🏻‍💻
              </span>
            </div>

            {/* Info */}
            <div className="flex-1 text-white space-y-4">
              <p className="text-lg leading-relaxed">
                Hi! I’m{" "}
                <span className="text-yellow-400 font-bold">Darshan Amane</span>,  
                a passionate{" "}
                <span className="text-pink-400 font-bold">Software Engineer</span>  
                and an undergraduate student pursuing{" "}
                <span className="text-blue-400 font-bold">
                  B.Tech in Artificial Intelligence & Data Science
                </span>.
              </p>

              <p className="text-lg leading-relaxed">
                Currently studying at{" "}
                <span className="text-green-400 font-bold">
                  DKTE College of Textile & Engineering, Ichalkaranji
                </span>,  
                I enjoy solving problems, building projects, and exploring emerging technologies.
              </p>

              <p className="text-lg leading-relaxed">
                My interests lie in{" "}
                <span className="text-purple-400 font-semibold">
                  Data Science, AI, Cloud Computing, Web & App Development
                </span>.  
                I love creating practical solutions with modern tools and constantly improving my skills.
              </p>

              <p className="text-lg leading-relaxed italic text-gray-300">
                🚀 Goal: To become a skilled software engineer & AI specialist,  
                contributing to innovative and impactful projects.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default About;
