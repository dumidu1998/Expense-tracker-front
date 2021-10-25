import React from 'react'

export default function ExpenditureCards() {
    return (
        <div className="flex flex-row items-center justify-between rounded-xl bg-blue-400 p-3">
            <div className="flex flex-row items-center">
                <div className="mr-4">
                    <img src="/fab.png" alt="badge" className="" width="100" />
                </div>
                <div className="flex flex-col justify-start items-start">
                    <div className="text-3xl font-bold">Dinner at Avenra</div>
                    <div className="text-lg text-gray-900">Dinner with friends</div>
                    <div className="text-base text-gray-800">2018-10-25</div>
                </div>
            </div>
            <div className="px-3 mr-10">
                <div className="text-4xl font-bold">Rs. 1,500.00</div>
                <button className="float-right">
                    <div className="text-gray-800 text-lg flex flex-row   mt-5 items-center">
                        Edit
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    )
}
