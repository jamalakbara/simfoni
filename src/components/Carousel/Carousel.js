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
    <div className="absolute left-0 top-1/2 translate-y-[-50%]">
      <img src={items[index].image} alt={items[index]} />
    </div>
  )
}

export default Carousel