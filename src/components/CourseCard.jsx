import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Price } from "./Price"

/* eslint-disable react/prop-types */
export function CourseCard({course}){
    const visibleTags = course.tags.slice(0, 3);
    const extraTagsCount = course.tags.length > 3 ? course.tags.length - 3 : 0;
    return(
        <div className="flex flex-col min-w-80 md:max-w-72 ">
            <div className="relative">
                <img src={course.image} className="w-full h-48 object-cover rounded-t-md rounded-tr-md"></img>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-2 mt-3">
                    {visibleTags.map((tag,index)=>{
                        return(
                            <Tag key={index} name={tag}></Tag>
                        )
                    })}
                    {
                        extraTagsCount > 0 && (
                            <Tag name={`+${extraTagsCount}`}></Tag>
                        )
                    }
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-lufga text-[#191D23] text-lg font-semibold text-ellipsis line-clamp-1">
                            {course.title}
                        </p>
                        <p className="font-poppins text-[#1D4363] text-sm">
                            {course.duration}
                        </p>
                    </div>
                    <Price>
                        {course.price}
                    </Price>
                </div>
                <div className="text-[#191D23] font-normal text-ellipsis leading-relaxed line-clamp-2">
                    {course.description}
                </div>   
                <div className="flex gap-2 items-center">
                    <button className="bg-[#F7F8F9] px-3 py-3 rounded-md">
                        <MdOutlineAddShoppingCart className="text-[#014F61] text-2xl"></MdOutlineAddShoppingCart>
                    </button>
                    <button className="text-white flex-grow font-poppins font-semibold text-center bg-[#1D4363] py-3 px-3 rounded-md">
                        Explore Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export function Tag({name}){
    return(
        <div className="w-max py-1 px-2 bg-[#F7F8F9] rounded-md">
            <span className="text-[#4B5768] text-[12px]">{name}</span>
        </div>
    )
}