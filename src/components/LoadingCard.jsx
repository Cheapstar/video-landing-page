export function LoadingCard(){
    return(
        <div className="md:max-w-72 h-[432px] min-w-80">
                <div  className="animate-pulse">
                    <div className="bg-gray-300 h-48  mb-4"></div>
                    <div className="space-y-3">
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    </div>
                </div>
        </div>
    )
}