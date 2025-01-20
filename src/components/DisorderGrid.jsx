import { OneWayCarousel } from "./OneWayCarousel";
import { mentalHealthVideos } from "../DummyData";
import { useEffect, useState } from "react";
import { VideoCard } from "./VideoCard";
import { LoadingVideoCard } from "./LoadingVideoCard";

export function DisorderGrid(){
    const [topic,settopic] = useState(1);
    const [videos,setVideos] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        async function fetchVideos(){
            try {
                setLoading(true);
                await new Promise(resolve => setTimeout(resolve, 500));

                let newVideos = [];
                mentalHealthVideos.forEach((videoDetails)=>{
                    if(videoDetails.id === topic){
                        newVideos = videoDetails.videos;
                    }
                });
                setVideos(newVideos);

            } catch (error) {
                setError(true);
                console.log(error);
            }
            finally{
                setLoading(false);
            }
        }

        fetchVideos();

    },[topic]);

    if (error) {
        return (
            <div className="text-center text-red-600 py-8">
                {error}
            </div>
        );
    }

    return(
        <div>
            <OneWayCarousel>
                {
                    mentalHealthVideos.map(({id,disorder})=>{
                        return (
                            <div 
                                className="w-max text-[#000] font-poppins font-medium px-1 text-nowrap"
                                key={id}
                            >
                                <button className={`px-4 py-2 hover:text-white hover:bg-[#1D4363]
                                        ${topic === id ? "bg-[#1D4363] text-white" : ""}
                                    `}
                                    onClick={()=>settopic(id)}
                                >
                                    {disorder}
                                </button>
                            </div>
                        )
                    })
                }
            </OneWayCarousel>
            <div className="px-20 pt-14 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16">
                {
                    loading ? 
                    (
                        [...Array(3)].map((_,index)=>{
                            return(
                                <LoadingVideoCard key={index}></LoadingVideoCard>
                            )
                        })
                    )
                    :
                    (
                        videos.map((video,index)=>{
                            return (
                                <VideoCard key={index} video={video}>
                                </VideoCard>
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}