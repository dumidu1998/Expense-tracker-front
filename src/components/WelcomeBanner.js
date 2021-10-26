import React from 'react'

function WelcomeBanner() {
    return (
        <div className="relative bg-blue-400 p-4 sm:p-6 rounded-sm overflow-hidden mb-2">
            {/* Content */}
            <div className="relative">
                <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">Hello Dumidu Kasun👋</h1>
                <div className="flex flex-col justify-end -mt-3">
                    <button className="flex flex-row justify-end items-center">
                        <span className="hidden md:block">Edit Name</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WelcomeBanner
