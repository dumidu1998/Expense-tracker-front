import React from 'react'

export default function Statcard() {
    return (
        <div className="flex flex-col col-span-full sm:col-span-1 xl:col-span-1 bg-white shadow-lg rounded-sm border border-gray-200">
            <div className="px-5 pt-5">
                <h2 className="text-3xl font-semibold text-gray-800 mb-2">Acme Plus</h2>
                <div className="text-xs font-semibold text-gray-400 uppercase mb-1">Sales</div>
                {/* <div className="flex items-start">
                    <div className="text-3xl font-bold text-gray-800 mr-2">$24,780</div>
                    <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div>
                </div> */}
            </div>
            {/* Chart built with Chart.js 3 */}
            <div className="flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Acme Plus</h2>
                <div className="text-xs font-semibold text-gray-400 uppercase mb-1">Sales</div>
                {/* Change the height attribute to adjust the chart height */}
                {/* <LineChart data={chartData} width={389} height={128} />dumidu kasun bandara */}
            </div>
        </div>
    )
}
