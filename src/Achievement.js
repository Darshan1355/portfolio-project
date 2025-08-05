import PageWrapper from "./PageWrapper";
import React, { useState } from "react";

const Achievement = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <PageWrapper>
      <div className="mt-8 grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-3 justify-items-center">
        {/* Card 1 */}
        <div className="card">
          <img
            src="/nptel.jpeg"
            alt="NPTEL"
            className="w-80 h-60 sm:h-72 md:h-48 object-cover p-1 rounded-2xl outline outline-1 outline-white cursor-pointer"
            onClick={() => setFullscreenImage("/nptel.jpeg")}
          />
          <div className="m-4 text-center">
            <span className="font-bold text-white">NPTEL online course</span>
          </div>
          <div className="badge">
            <span>Certificate</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img
            src="/mitu.jpeg"
            alt="Mitu"
            className="w-80 h-60 sm:h-72 md:h-48 object-cover p-1 rounded-2xl outline outline-1 outline-white cursor-pointer"
            onClick={() => setFullscreenImage("/mitu.jpeg")}
          />
          <div className="m-4 text-center">
            <span className="font-bold text-white">Mitu python workshop</span>
          </div>
          <div className="badge">
            <span>Certificate</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img
            src="/mycrave.jpeg"
            alt="MyCrave"
            className="w-80 h-60 sm:h-72 md:h-48 object-cover p-1 rounded-2xl outline outline-1 outline-white cursor-pointer"
            onClick={() => setFullscreenImage("/mycrave.jpeg")}
          />
          <div className="m-4 text-center">
            <span className="font-bold text-white">MyCrave</span>
          </div>
          <div className="badge">
            <span>Certificate</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card">
          <img
            src="/python1.jpeg"
            alt="Python Institute"
            className="w-80 h-60 sm:h-72 md:h-48 object-cover p-1 rounded-2xl outline outline-1 outline-white cursor-pointer"
            onClick={() => setFullscreenImage("/python1.jpeg")}
          />
          <div className="m-4 text-center">
            <span className="font-bold text-white">Python institute-CISCO</span>
          </div>
          <div className="badge">
            <span>Certificate</span>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card">
          <img
            src="/ideation.jpeg"
            alt="Ideation"
            className="w-80 h-60 sm:h-72 md:h-48 object-cover p-1 rounded-2xl outline outline-1 outline-white cursor-pointer"
            onClick={() => setFullscreenImage("/ideation.jpeg")}
          />
          <div className="m-4 text-center">
            <span className="font-bold text-white">Ideation Workshop</span>
          </div>
          <div className="badge">
            <span>Certificate</span>
          </div>
        </div>

        {/* Card 6 */}
        <div className="card">
          <img
            src="/cpp.jpeg"
            alt="CPP"
            className="w-80 h-60 sm:h-72 md:h-48 object-cover p-1 rounded-2xl outline outline-1 outline-white cursor-pointer"
            onClick={() => setFullscreenImage("/cpp.jpeg")}
          />
          <div className="m-4 text-center">
            <span className="font-bold text-white">CPP Training by Spoken tutorial</span>
          </div>
          <div className="badge">
            <span>Certificate</span>
          </div>
        </div>

        {/* Fullscreen Image Viewer */}
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
      </div>
    </PageWrapper>
  );
};

export default Achievement;
