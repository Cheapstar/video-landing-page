import { LeftHeroSection } from "./LeftHeroSection";

export function HeroSection(){
    return(
        <div className="flex">
            <div className="md:w-1/2 bg-[#1D4363] flex justify-center items-center pl-[50px] pr-[100px] py-[68px]">
                <LeftHeroSection></LeftHeroSection>
            </div>
            <div className="hidden md:block md:w-1/2">
                <img src="/src/assets/CoursesHero.png" alt="" className="w-full h-full object-cover"/>
            </div>
        </div>
    )
}