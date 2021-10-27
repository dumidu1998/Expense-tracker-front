import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios';
import { Dialog, Transition } from '@headlessui/react'
import { atom, useAtom } from 'jotai'

export const editbudget = atom(false);

function Card2() {
    const [edtbudget, setedtbudget] = useAtom(editbudget);
    const [budget, setbudget] = useState(0);

    const [editedBudget, setEditedBudget] = useState(0);
    const [editModalstate, setEditModal] = useState(false);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/budget`)
            .then(function (response) {
                setbudget(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [editModalstate])



    function closeModal() {
        setEditModal(false)
    }

    function openModal() {
        setEditModal(true)
    }

    function submitBudget(e) {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/budget`, { budget: editedBudget })
            .then(function (response) {
                //alert(response.data); //TODO Toast 
                setedtbudget(!edtbudget);
                closeModal();
            })
            .catch(function (error) {
                console.log(error);
            })
    }

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
                            <h2 className="text-xl flex justify-center font-semibold mb-2 ml-5">Rs. {budget.toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <button className="btn justify-center items-center" onClick={openModal}>
                    <div className="text-sm  flex flex-row font-semibold text-gray-400 uppercase mb-1 mt-8">
                        <span className="mr-2">Edit</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </div>
                </button>
            </div>

            <Transition appear show={editModalstate} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 w-screen z-40 overflow-y-auto flex items-center justify-center backdrop-filter backdrop-blur-lg"
                    onClose={closeModal}
                >
                    <div className="h-5/6 w-11/12 lg:w-1/3 lg:px-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="flex flex-col w-full p-5 my-10 overflow-hidden text-center items-center transition-all transform bg-gray-100 shadow-xl rounded-2xl ">
                                <form onSubmit={submitBudget}>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-bold leading-6 text-primary-0 font-primary text-center"
                                    >
                                        Edit My Budget
                                    </Dialog.Title>
                                    <div >
                                        <div className="flex flex-col justify-center my-3">
                                            <p>Current Budget - Rs.  {budget.toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</p>
                                        </div>
                                        <div className="my-5 text-left ml-5">
                                            <div className="mt-5">
                                                <h3 className="font-primary text-lg font-semibold" autoFocus >New Budget</h3>
                                                <input type="number" placeholder="Enter your New Budget" onChange={(e) => setEditedBudget(e.target.value)} autoComplete="off" step="0.01" min="100" name="name" className={`rounded-lg px-3 shadow-lg h-10 w-80 my-2 ml-1`} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-0 mb-5">
                                        <button type="submit"
                                            className="btn inline-flex justify-center px-4 py-2 text-base font-semibold text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 ">
                                            Update Budget
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>



        </div >
    )
}

export default Card2
