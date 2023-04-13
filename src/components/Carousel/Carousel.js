import { useEffect, useState } from "react";

const Carousel = ({items}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(index < items.length - 1 ? index + 1 : 0);
    }, 3000);
    return () => clearInterval(timer);
  }, [index, items.length]);

  return (
    <div className="sm:top-[400px] sm:h-[500px] 
                    md:static md:h-full"
    >
      <img className="sm:h-full md:h-auto md:-ml-8 xl:-ml-12" src={items[index].image} alt={items[index]} />
    </div>
  )
}

export default Carousel