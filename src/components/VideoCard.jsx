/* eslint-disable react/prop-types */
export function VideoCard({video}){
    return (
        <div className="flex flex-col gap-3">
            <div className="min-h-48">
                <iframe src={video.videoUrl} className="w-full h-full"></iframe>
            </div>

                <p className="text-center font-poppins text-[#00033A] leading-6 font-medium">
                    {video.title}
                </p>
                <p className="text-[#B3B3B3] text-sm font-poppins text-center ">
                    {video.description}
                </p>
        </div>
    )
}