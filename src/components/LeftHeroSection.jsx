import { MdArrowForward } from "react-icons/md";


export function LeftHeroSection(){
    return(
        <div className="">
                <div className="text-[#E3E3E3] font-semibold font-poppins mb-2">
                    Anywhere Access Easy Learning
                </div>
                <h1 className="font-lufga text-[#FFF] font-semibold text-6xl leading-tight mb-8">
                    The Best Platform<br />
                    for Enhancing Skills
                </h1>
                <p className="text-[#D9D9D9] font-poppins text-wrap pr-[120px]">
                    It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout.
                </p>
                <div className="flex font-semibold mt-10">
                    <input type="text" placeholder="Search" className="font-light px-5 py-4 outline-none"/>
                    <button className="flex items-center bg-[#FFBA08] gap-2 py-4 px-5 hover:text-white group">
                        <p>
                            Get Started
                        </p>
                        <span className="transition-transform group-hover:translate-x-1">
                            <MdArrowForward className="text-lg font-semibold" />
                        </span>
                    </button>
                </div>
        </div>
    )
}