import React from 'react'

function Card3() {
    return (
        <div className="flex flex-col col-span-full md:col-span-2 sm:col-span-4 xl:col-span-1 bg-white shadow-lg rounded-sm border border-gray-200">
            <div className="px-5 pt-5">
                <div className="flex flex-col items-start">
                    <div className="flex flex-row items-center">
                        <h2 className="text-3xl flex font-semibold text-gray-800 mb-2 bg-blue-200 p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </h2>
                        <div className="flex flex-col ml-4">
                            <h2 className="text-2xl flex font-semibold text-gray-800 mb-2 ml-5">Top Spent Category</h2>
                            <h2 className="text-xl flex justify-center font-semibold text-gray-600 mb-2 ml-5">Food and Beverages</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-grow">
                <div className="font-semibold text-gray-400 mb-4 mt-2">Last Month: Utilities</div>
            </div>
        </div >
    )
}

export default Card3
