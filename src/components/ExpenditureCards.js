import React from 'react'

export default function ExpenditureCards() {
    return (
        <div className="rounded-xl bg-blue-400 p-3 mb-5 my-3 ">
            <div className="grid grid-cols-3 gap-1 md:-ml-8">

                <div className="col-span-full flex justify-center md:col-span-1">
                    <img src="/fab.png" alt="badge" className="w-40" />
                </div>

                <div className="col-span-full md:col-span-1 md:flex md:items-start md:flex-col md:justify-center">
                    <div className="text-3xl font-bold md:text-2xl">Dinner at Avenra</div>
                    <div className="text-lg text-gray-900">Dinner with friends</div>
                    <div className="text-base text-gray-800">2018-10-25</div>
                </div>

                <div className="px-3 col-span-full md:col-span-1 md:justify-center md:flex md:flex-col md:items-end">
                    <div className="text-3xl font-bold">Rs. 1,500.00</div>
                    <button className="float-right">
                        <div className="text-gray-800 text-lg flex flex-row mt-5 items-center">
                            Edit
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    )
}
