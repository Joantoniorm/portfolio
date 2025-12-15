import { useState } from "react";
function Carousel({ items }) {
  const [index, setIndex] = useState(0);
  if (!items || items.length === 0) return null;
  const prev = () =>
    setIndex((index - 1 + items.length) % items.length);

  const next = () =>
    setIndex((index + 1) % items.length);

  return (
      <div className="relative w-[80%] max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow relative group">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((item, i) => (
            <div key={i} className="w-full shrink-0 cursor-pointer" onClick={() => window.open(item.link)}>
              <div className="transition-transform duration-300 ease-out group-hover:scale-105">
                <img src={item.image} alt={item.title} className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg" />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-125">‹</button>
        <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-125">›</button>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`h-2 w-2 rounded-full transition ${i === index ? "bg-black dark:bg-white" : "bg-gray-300"}`} />
        ))}
      </div>
    </div>
  );
}
export default Carousel;