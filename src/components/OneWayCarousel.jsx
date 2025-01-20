/* eslint-disable react/prop-types */
import { useRef } from "react";
import { BsChevronRight } from "react-icons/bs";

export function OneWayCarousel({children}){
    const scrollElement = useRef(null);

    const scrollLeft = () => {
        if (scrollElement.current) {
            scrollElement.current.scrollBy({
            left: 100, 
            behavior: "smooth",
          });
        }
      };

    return (
        <div className="bg-[#EAEFFF] py-5 relative">
            <div ref={scrollElement} className="flex hide-scroll overflow-scroll">
                {children}
            </div>
            <div className="absolute rounded-full bg-white drop-shadow-md top-1/4 right-[-20px]">
                <button onClick={scrollLeft} className="rounded-full w-10 h-10 flex  items-center justify-center ">
                    <BsChevronRight></BsChevronRight>
                </button>
            </div>
        </div>
    )
}