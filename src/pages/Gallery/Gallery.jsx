import React, { useState } from "react";

import img1 from "../../assets/Images/photo_13_2025-05-06_15-43-20.jpg";
import img2 from "../../assets/Images/photo_11_2025-05-06_15-43-20.jpg";
import img3 from "../../assets/Images/photo_11_2025-05-06_15-43-20.jpg";
import img4 from "../../assets/Images/photo_10_2025-05-06_15-43-20.jpg";
import img5 from "../../assets/Images/photo_9_2025-05-06_15-43-20.jpg";
import img6 from "../../assets/Images/photo_7_2025-05-06_15-43-20.jpg";
import img7 from "../../assets/Images/photo_6_2025-05-06_15-43-20.jpg";
import img8 from "../../assets/Images/photo_5_2025-05-06_15-43-20.jpg";
import img9 from "../../assets/Images/photo_4_2025-05-06_15-43-20.jpg";
import img10 from "../../assets/Images/photo_2_2025-05-06_15-43-20.jpg";
import img11 from "../../assets/Images/photo_1_2025-05-06_15-43-20.jpg";
import img12 from '../../assets/holy-wooden-christian-cross.jpg'

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const captions = [
  "Innovation in Action",
  "Professional Networking",
  "Tech Conference Moments",
  "Startup Spirit",
  "Leadership & Vision",
  "Growth & Learning",
  "Collaboration",
  "Entrepreneurial Drive",
  "Inspiration",
  "Dedication",
  "Achievement",
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    if (selected === null) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight")
        setSelected((prev) => (prev + 1) % images.length);
      if (e.key === "ArrowLeft")
        setSelected((prev) => (prev - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selected]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181a20] to-[#23272b] text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold mb-12 text-center tracking-tight bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">
          Gallery
        </h1>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 [column-fill:_balance]">
          <div className="w-full flex flex-col gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative mb-6 group rounded-3xl overflow-hidden shadow-2xl hover:shadow-pink-400/30 transition-shadow duration-500 cursor-pointer animate-fadeIn"
                style={{ breakInside: "avoid" }}
                onClick={() => setSelected(idx)}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full object-cover object-center aspect-[4/5] group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500"
                  style={{ minHeight: 260, maxHeight: 420 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-xl font-bold text-white drop-shadow-lg mb-2 animate-fadeInUp">
                    {captions[idx]}
                  </span>
                  <span className="text-sm text-gray-300 animate-fadeInUp delay-100">
                    Click to view
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selected !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl animate-fadeIn"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-8 right-8 text-white text-4xl font-bold bg-black/60 rounded-full px-5 py-2 hover:bg-black/90 transition-colors"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <button
              className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black/60 rounded-full px-4 py-2 hover:bg-black/90 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelected((selected - 1 + images.length) % images.length);
              }}
              aria-label="Previous"
            >
              &#8592;
            </button>
            <img
              src={images[selected]}
              alt={`Gallery Large ${selected + 1}`}
              className="max-h-[80vh] max-w-[90vw] rounded-3xl shadow-2xl border-4 border-white/10 animate-fadeInUp"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black/60 rounded-full px-4 py-2 hover:bg-black/90 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelected((selected + 1) % images.length);
              }}
              aria-label="Next"
            >
              &#8594;
            </button>
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-lg font-semibold text-white bg-black/60 px-6 py-2 rounded-full animate-fadeInUp">
              {captions[selected]}
            </div>
          </div>
        )}
      </div>
      <style>{`
        .animate-fadeIn { animation: fadeIn 1s cubic-bezier(.4,0,.2,1) both; }
        .animate-fadeInUp { animation: fadeInUp 0.7s cubic-bezier(.4,0,.2,1) both; }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease-in-out infinite;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
