import React from 'react'

export default function CatSelector() {

    return (
        <div className="grid grid-cols-2 ">
            <div className="rounded-lg bg-blue-600 text-white  my-3 mx-2 p-3 h-8 flex flex-row items-center justify-center">Food & Beverages</div>
            <div className="rounded-lg border-2 border-gray-400 shadow-lg  my-3 mx-2 p-2 h-8 flex flex-row items-center justify-center">Entertainment</div>
            <div className="rounded-lg  border-2 border-gray-400 shadow-lg my-3 mx-2 p-2 h-8 flex flex-row items-center justify-center">Transition</div>
            <div className="rounded-lg  border-2 border-gray-400 shadow-lg my-3 mx-2 p-2 h-8 flex flex-row items-center justify-center">HealthCare</div>
            <div className="rounded-lg  border-2 border-gray-400 shadow-lg my-3 mx-2 p-2 h-8 flex flex-row items-center justify-center">Other</div>
        </div>
    )
}
