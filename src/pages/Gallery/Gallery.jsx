import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { Container } from "../../components/ui";
import img13 from "../../assets/Images/photo_13_2025-05-06_15-43-20.jpg";
import img11 from "../../assets/Images/photo_11_2025-05-06_15-43-20.jpg";
import img10 from "../../assets/Images/photo_10_2025-05-06_15-43-20.jpg";
import img9 from "../../assets/Images/photo_9_2025-05-06_15-43-20.jpg";
import img7 from "../../assets/Images/photo_7_2025-05-06_15-43-20.jpg";
import img5 from "../../assets/Images/photo_5_2025-05-06_15-43-20.jpg";
import img2 from "../../assets/Images/photo_2_2025-05-06_15-43-20.jpg";
import img1 from "../../assets/Images/photo_1_2025-05-06_15-43-20.jpg";

const photos = [
  { src: img9, alt: "Haylemeskel at the Startup Ethiopia booth" },
  { src: img11, alt: "Haylemeskel with another attendee at a conference" },
  { src: img13, alt: "Haylemeskel on campus in a GAIA t-shirt" },
  { src: img10, alt: "Haylemeskel in a conference hall wearing a participant badge" },
  { src: img2, alt: "Haylemeskel with three other attendees at a conference entrance" },
  { src: img5, alt: "Haylemeskel with a speaker at a conference" },
  { src: img7, alt: "Haylemeskel on a campus path" },
  { src: img1, alt: "Close portrait of Haylemeskel at a conference" },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const closeRef = useRef(null);
  const openerRef = useRef(null);

  useEffect(() => {
    if (selected === null) return undefined;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") setSelected((i) => (i + 1) % photos.length);
      if (e.key === "ArrowLeft") setSelected((i) => (i - 1 + photos.length) % photos.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      openerRef.current?.focus();
    };
  }, [selected]);

  return (
    <div className="pt-24 pb-20 sm:pt-32">
      <Container>
        <header className="max-w-3xl">
          <h1 className="text-[2rem] font-bold leading-tight tracking-[-0.02em] sm:text-[2.25rem]">
            Gallery
          </h1>
          <p className="mt-3 max-w-[52ch] text-base text-muted">
            Conferences, startup events and campus. Select a photo to see it full size.
          </p>
        </header>

        <ul className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((p, i) => (
            <li key={p.src} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={(e) => {
                  openerRef.current = e.currentTarget;
                  setSelected(i);
                }}
                className="block w-full overflow-hidden rounded-lg"
              >
                <img src={p.src} alt={p.alt} loading="lazy" className="w-full transition-opacity hover:opacity-90" />
              </button>
            </li>
          ))}
        </ul>
      </Container>

      {selected !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photos[selected].alt}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-night/95 p-4"
          onClick={() => setSelected(null)}
        >
          <img
            src={photos[selected].src}
            alt={photos[selected].alt}
            className="max-h-[86vh] max-w-full rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            ref={closeRef}
            type="button"
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 rounded-full bg-night-raised p-3 text-night-text"
            aria-label="Close photo"
          >
            <FiX size={20} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelected((selected - 1 + photos.length) % photos.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-night-raised p-3 text-night-text"
            aria-label="Previous photo"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelected((selected + 1) % photos.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-night-raised p-3 text-night-text"
            aria-label="Next photo"
          >
            <FiChevronRight size={20} />
          </button>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[0.875rem] text-night-muted">
            {selected + 1} of {photos.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
