import { TwoWayCarousel } from "./TwoWayCarousel";
import { CourseCard } from "./CourseCard";
import { DUMMY_COURSES } from "../DummyData";
import { useState,useEffect } from "react";
import { LoadingCard } from "./LoadingCard";

export function BestSellingCourses(){
    const [filter,setFilter] = useState("all");
    const [courses,setCourses] = useState([])
    const [error, setError] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setIsLoading(true);
                await new Promise(resolve => setTimeout(resolve, 500));

                let filteredCourses = [...DUMMY_COURSES];
                if (filter !== 'all') {
                    filteredCourses = DUMMY_COURSES.filter(
                        course => course.type === filter
                    );
                }

                setCourses(filteredCourses);
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
            <TwoWayCarousel subtitle={"Our New Courses"} title={"Best Selling / Other learners are Watching"} 
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
                        courses.map((course,index)=>{
                        return( 
                            <CourseCard key={index} course={course}></CourseCard>
                        );
                        })
                    )
                }
            </TwoWayCarousel>
        </div>
    )
}