import { TwoWayCarousel } from "./TwoWayCarousel";
import { WATCHED_LESSONS } from "../DummyData";
import { useState,useEffect } from "react";
import { LoadingCard } from "./LoadingCard";
import { LessonCard } from "./LessonCard";

export function WatchedHistory(){
    const [filter,setFilter] = useState("all");
    const [lessons,setLessons] = useState([])
    const [error, setError] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setIsLoading(true);
                await new Promise(resolve => setTimeout(resolve, 500));

                let filteredLessons = [...WATCHED_LESSONS];
                if (filter !== 'all') {
                    filteredLessons = WATCHED_LESSONS.filter(
                        course => course.type === filter
                    );
                }

                setLessons(filteredLessons);
                setError(null);
            } catch (err) {
                setError('Failed to fetch courses. Please try again later.');
                console.log(err)
            } 
            finally{
                setIsLoading(false);
            }
        };

        fetchCourses();
    }, [filter]);



    function handleFilterChange(newFilter){
        setFilter(newFilter.toLowerCase());
    }

    if (error) {
        return (
            <div className="text-center text-red-600 py-8">
                {error}
            </div>
        );
    }

    return(
        <div>
            <TwoWayCarousel subtitle={"Our New Courses"} title={"Watching History"} 
                    filter={filter} handleFilterChange={handleFilterChange}
            >
                { isLoading ? 
                    (
                        [...Array(4)].map((_,index)=>{
                            return(
                                <LoadingCard key={index}></LoadingCard>
                            )
                        })
                    )
                    :
                    (
                        lessons.map((lesson,index)=>{
                        return( 
                            <LessonCard key={index} lesson={lesson} />
                        );
                        })
                    )
                }
            </TwoWayCarousel>
        </div>
    )
}