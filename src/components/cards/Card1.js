import React from 'react'

function Card1() {
    return (
        <div className="flex flex-col col-span-full md:col-span-2 sm:col-span-4 xl:col-span-1 bg-white shadow-lg rounded-sm border border-gray-200">
            <div className="px-5 pt-5">
                <div className="flex flex-col items-start">
                    <div className="flex flex-row items-center">
                        <h2 className="text-3xl flex font-semibold text-gray-800 mb-2 bg-blue-200 p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </h2>
                        <div className="flex flex-col ml-4">
                            <h2 className="text-xl flex font-semibold text-gray-800 mb-2 ml-1">Expenditures in October</h2>
                            <h2 className="text-xl flex justify-center font-semibold mb-2 ml-5">Rs. 25,000.00</h2>
                        </div>
                    </div>
                    <div className="shadow w-full bg-grey-light border-1 mt-7 rounded-lg">
                        <div className="bg-blue-800 text-xs rounded-lg leading-none py-1 text-center text-white" style={{ 'width': '65%' }}>65%</div>
                    </div>
                </div>
            </div>
            {/* Chart built with Chart.js 3 */}
            <div className="flex-grow">
                {/* <h2 className="text-lg font-semibold text-gray-800 mb-2">1</h2> */}
                {/* <div className="text-xs font-semibold text-gray-400 uppercase mb-1">2</div> */}
                {/* Change the height attribute to adjust the chart height */}
                {/* <LineChart data={chartData} width={389} height={128} />dumidu kasun bandara */}
            </div>
        </div >
    )
}

export default Card1
