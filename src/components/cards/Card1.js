import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useAtom } from 'jotai'
import { editModal, modalopen } from '../../App';
import { editbudget } from './Card2';

function Card1() {
    const today = new Date()
    const [amnt, setamnt] = useState(0);
    const [precentage, setprecentaget] = useState(0);
    const [modalOpen] = useAtom(modalopen);
    const [editModalstate] = useAtom(editModal);
    const [edtbudget] = useAtom(editbudget);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/expense/cardsdata`)
            .then(function (response) {
                setamnt(response.data.totalSpent);
                setprecentaget(response.data.expenseUsage >= 100 ? 100 : response.data.expenseUsage);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [modalOpen, editModalstate, edtbudget])


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
                            <h2 className="text-xl flex font-semibold text-gray-800 mb-2 ml-1">Total Spent in {today.toLocaleString('default', { month: 'long' })}</h2>
                            <h2 className="text-xl flex justify-center font-semibold mb-2 ml-5">Rs. {amnt.toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</h2>
                        </div>
                    </div>
                    <div className="shadow w-full bg-grey-light border-2 border-gray-300 mt-7 rounded-xl mb-4">
                        <div className="bg-blue-800 text-xs rounded-xl leading-none py-1 text-center text-white" style={{ 'width': `${precentage}%` }}>{precentage}%</div>
                    </div>
                </div>
            </div>
            <div className="flex-grow">

            </div>









        </div >
    )
}

export default Card1
