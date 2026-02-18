import { useState } from "react";

const images = [
  "/images/gallery1.webp",
  "/images/gallery2.webp",
  "/images/gallery3.webp",
  "/images/gallery4.webp",
  "/images/gallery5.webp",
  "/images/gallery6.webp",
  "/images/gallery7.webp",
  "/images/gallery8.webp",
  "/images/gallery9.webp",
  "/images/gallery10.webp",

];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="py-16 px-6 md:px-20 bg-gray-50">

      <h1 className="text-4xl font-bold text-center mb-12">
        Gallery
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
            onClick={() => setSelected(img)}
          >
            <img
              src={img}
              alt="Gallery"
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="Preview"
            className="max-h-[90%] max-w-[90%] rounded-lg"
          />
        </div>
      )}
    </div>
  );
}