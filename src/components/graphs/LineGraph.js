import React from 'react'
import { Line } from 'react-chartjs-2'

function LineGraph() {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };
    return (
        <div className="flex flex-col w-auto col-span-full md:col-span-2 sm:col-span-4 xl:col-span-1 bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100 flex justify-start">
                <h1 className="text-2xl font-semibold">Expenditure Overview</h1>
            </header>
            <div className="px-5 py-4">
                <Line data={data} options={options} />
            </div>
        </div>
    )
}
export default LineGraph
