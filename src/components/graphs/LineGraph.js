import axios from 'axios';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { editModal, modalopen } from '../../App';

function LineGraph() {
    const [modalOpen] = useAtom(modalopen);
    const [editModalstate] = useAtom(editModal);

    const [cdata, setcdata] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/expense/linechartdata`)
            .then(function (response) {
                setcdata(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [modalOpen, editModalstate])


    const data = {
        labels: cdata.map(item => item.day),
        datasets: [
            {
                label: 'Expenses in ' + new Date().toLocaleString('default', { month: 'long' }),
                data: cdata.map(item => item.daySum),
                fill: false,
                backgroundColor: 'rgba(54, 162, 255)',
                borderColor: 'rgba(54, 162, 235, 0.6)',
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
