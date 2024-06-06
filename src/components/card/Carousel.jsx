import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Tag from "../tag/Tag";
import Card from "./Card";

const Carousel = ({ cards }) => {
  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
      <button
        className="absolute left-0 z-10 p-2 bg-white shadow-md rounded-full -translate-y-1/2 top-1/2"
        onClick={scrollLeft}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div
        className="flex overflow-x-scroll scrollbar-hide space-x-4 p-4"
        ref={scrollRef}
      >
        {cards.map((card, index) => (
          <div key={index} className="min-w-[300px] flex-shrink-0">
            <Card {...card} />
          </div>
        ))}
      </div>
      <button
        className="absolute right-0 z-10 p-2 bg-white shadow-md rounded-full -translate-y-1/2 top-1/2"
        onClick={scrollRight}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Carousel;
