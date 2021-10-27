import axios from 'axios';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react'
import { editModal, modalopen } from '../../App';
import { Pie } from 'react-chartjs-2'

function PieChart() {

    const [modalOpen] = useAtom(modalopen);
    const [editModalstate] = useAtom(editModal);

    const [cdata, setcdata] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/expense/piechartdata`)
            .then(function (response) {
                setcdata(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [modalOpen, editModalstate])


    const data = {
        labels: ['Food & Beverages', 'Health Care', 'Transportation', 'Entertainment', 'Other'],
        datasets: [
            {
                label: '# of Votes',
                data: cdata.map(item => item),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div className="flex flex-col col-span-full relative h-full md:col-span-2 sm:col-span-4 xl:col-span-1 bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100 flex justify-start items-baseline">
                <h1 className="text-2xl font-semibold">Expenditures by Category</h1>
                <h1 className="text-base font-semibold ml-5">in {new Date().toLocaleString('default', { month: 'long' })}</h1>
            </header>
            <div className="w-2/4 mx-auto mb-5 flex flex-row justify-center">
                <Pie data={data} />
            </div>
        </div>
    )
}

export default PieChart
