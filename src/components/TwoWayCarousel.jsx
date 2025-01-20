/* eslint-disable react/prop-types */
import { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export function TwoWayCarousel({title,subtitle,filter,handleFilterChange,children}){
    const scrollElement = useRef(null);

    const scrollLeft = () => {
        if (scrollElement.current) {
            scrollElement.current.scrollBy({
            left: -320, 
            behavior: "smooth",
          });
        }
      };
    
      const scrollRight = () => {
        if (scrollElement.current) {
            scrollElement.current.scrollBy({
            left: 320,
            behavior: "smooth",
          });
        }
      };

    return(
        <div className="flex flex-col gap-6">
            <div className="flex justify-between gap-6 px-12 items-center">
                <div>
                    <p className="text-[#1D4363] font-lufga font-medium">
                        {subtitle}
                    </p>
                    <p className="font-lufga text-4xl font-semibold text-[#00033A]">
                        {title}
                    </p>
                </div>
                <div className="flex gap-6">
                    <div className=" bg-white rounded-full drop-shadow-md">
                        <button 
                            className="w-10 h-10 rounded-full flex items-center justify-center"
                            onClick={scrollLeft}
                        >
                            <BsChevronLeft></BsChevronLeft>
                        </button>
                    </div>
                    <div className=" bg-white rounded-full drop-shadow-md">
                        <button 
                            className="w-10 h-10 rounded-full flex items-center justify-center"
                            onClick={scrollRight}
                        >
                            <BsChevronRight></BsChevronRight>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-2 mb-8">
                    {['All', 'Paid', 'Free'].map((type) => (
                        <button
                            key={type}
                            onClick={() => handleFilterChange(type)}
                            className={`px-6 py-2 rounded-full text-sm transition-colors ${filter === type.toLowerCase()
                                ? 'bg-[#014F61] text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
            </div>

            <div className="flex gap-6 overflow-scroll hide-scroll" ref={scrollElement}>
                {children}
            </div>
        </div>
    )
}