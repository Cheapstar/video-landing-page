/* eslint-disable react/prop-types */

import { Flag } from "./Flag";
import { Price } from "./Price";

export function CourseSpotlight({course}){
    return(
        <div className="flex flex-col justify-center gap-5 md:flex-row md:gap-9">
            <Flag type="success" className="md:hidden">Best Selling</Flag>
            <div className="basis-3/5">
                <iframe src={course.image} className="w-full h-[250px] md:h-full "></iframe>
            </div>
            <div className="basis-2/5 flex flex-col gap-7">
                <div>
                    <Flag type="success" className="hidden md:flex">Best Selling</Flag>
                    <h3 className="text-4xl font-lufga font-semibold mt-3">
                        Our Best Pick For You
                    </h3>
                </div>
                <p className="font-poppins font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                    ea commodo consequat. Duis aute irure .
                </p>
                <div>
                    <Price>
                        {course.price}
                    </Price>
                </div>
                <div>
                    <button className="font-poppins font-normal text-sm px-6 py-3 bg- bg-[#FFBA08]">
                        Explore Now
                    </button>
                </div>
            </div>
        </div>
    )
}