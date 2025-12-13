import { useState } from "react";
function Carousel({ items }) {
  const [index, setIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const prev = () =>
    setIndex((index - 1 + items.length) % items.length);

  const next = () =>
    setIndex((index + 1) % items.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Slide */}
      <div className="overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow">
        <img
          src={items[index].image}
          alt={items[index].title}
          className="w-full h-56 md:h-80 object-cover transition duration-700"
        />

        {/* Text */}
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold">
            {items[index].title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {items[index].description}
          </p>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/60 transition"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/60 transition"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-black dark:bg-white" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
export default Carousel;