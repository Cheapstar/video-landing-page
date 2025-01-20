/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Tag } from "./CourseCard";

export function LessonCard({ lesson }) {
    const [completedWidth, setCompleteWidth] = useState(0);

    const visibleTags = lesson.tags.slice(0, 3);
    const extraTagsCount = lesson.tags.length > 3 ? lesson.tags.length - 3 : 0;

    useEffect(() => {
        if (lesson.watched && lesson.duration) {
        const watchedPercent = Math.round((Number(lesson.watched) / Number(lesson.duration)) * 100);
        setCompleteWidth(watchedPercent);
        }
    }, [lesson.watched, lesson.duration]);

    return (
        <div className="flex flex-col min-w-75 max-w-72 md:min-w-80">
            <div className="relative">
                <img
                src={lesson.image}
                className="w-full h-48 object-cover rounded-t-md rounded-tr-md"
                />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-2 mt-3">
                        
                    {visibleTags.map((tag, index) => {
                        return <Tag key={index} name={tag} />;
                    })}

                    {extraTagsCount > 0 && <Tag name={`+${extraTagsCount}`} />}
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-lufga text-[#191D23] text-lg font-semibold text-ellipsis line-clamp-1">
                            {lesson.title}
                        </p>
                        <p className="font-poppins text-[#1D4363] text-sm">
                        <span className="text-[#1D4363] font-semibold">
                            Lecture: {"  "}
                        </span>
                            {lesson.duration} mins
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <div
                        className="absolute h-[6px] top-[11px] bg-[#D9D9D9]"
                        style={{ width: `${completedWidth}%` }} 
                    ></div>
                    <input
                        type="range"
                        min="0"
                        max={Number(lesson.duration)}
                        value={Number(lesson.watched)}
                        className="w-full h-2 appearance-none"
                        readOnly
                    />
                </div>
            </div>
            <div className="rounded-md">
                    <button className="bg-[#1D4363] font-poppins font-semibold py-3 w-full rounded text-white mt-2">
                        {
                            Number(lesson.duration) === Number(lesson.watched) ? 
                            "Completed" : "Continue"
                        }
                    </button>
            </div>
        </div>
    );
}
