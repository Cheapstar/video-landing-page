/* eslint-disable react/prop-types */
export function Price({children}){
    return(
        <div className="text-[#137287] font-semibold text-xl w-max">
            ${children}/-
        </div>
    )
}