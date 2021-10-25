import React from 'react'

function Card2() {
    return (
        <div className="flex flex-col col-span-full md:col-span-2 sm:col-span-4 xl:col-span-1 bg-white shadow-lg rounded-sm border border-gray-200">
            <div className="px-5 pt-5">
                <div className="flex flex-col items-start">
                    <div className="flex flex-row items-center">
                        <h2 className="text-3xl flex font-semibold text-gray-800 mb-2 bg-blue-200 p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </h2>
                        <div className="flex flex-col ml-4">
                            <h2 className="text-2xl flex font-semibold text-gray-800 mb-2 ml-5">My Budget</h2>
                            <h2 className="text-xl flex justify-center font-semibold mb-2 ml-5">Rs. 120,000.00</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <button className="btn justify-center items-center">
                    <div className="text-sm  flex flex-row font-semibold text-gray-400 uppercase mb-1 mt-8">
                        <span className="mr-2">Edit</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </div>
                </button>
            </div>
        </div >
    )
}

export default Card2
