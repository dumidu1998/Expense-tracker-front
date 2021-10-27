import React, { useEffect, useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useAtom } from 'jotai'
import { editModal, modalopen } from '../App'
import { editbudget } from './cards/Card2'
import axios from 'axios'

function WelcomeBanner() {

    const [username, setusername] = useState('')
    const [newusername, setnewusername] = useState('')
    const [editmodal, seteditmodal] = useState(false)
    const [precentage, setprecentaget] = useState(0);
    const [modalOpen] = useAtom(modalopen);
    const [editModalstate] = useAtom(editModal);
    const [edtbudget] = useAtom(editbudget);

    useEffect(() => {
        if (localStorage.getItem('username') == null) {
            localStorage.setItem('username', 'New User')
            setusername('New User')
        } else {
            setusername(localStorage.getItem('username'));
        }

    }, [newusername])


    function closeModal() {
        seteditmodal(false)
    }

    function openModal() {
        seteditmodal(true)
    }


    function submitName(e) {
        e.preventDefault();
        localStorage.setItem('username', newusername)
        setusername(newusername)
        setnewusername('')
        closeModal()
    }


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/expense/cardsdata`)
            .then(function (response) {
                setprecentaget(response.data.expenseUsage >= 100 ? 100 : response.data.expenseUsage);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [modalOpen, editModalstate, edtbudget])

    return (
        <div>
            <div className="relative bg-blue-400 p- sm:p-2 rounded-sm overflow-hidden">
                <div className="relative">
                    <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">Hello {username}👋</h1>
                    <div className="flex flex-col justify-end -mt-3">
                        <button className="flex flex-row justify-end items-center" onClick={openModal}>
                            <span className="hidden md:block">Edit Name</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </button>
                    </div>
                </div>


                <Transition appear show={editmodal} as={Fragment}>
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
                                    <form onSubmit={submitName}>
                                        <Dialog.Title
                                            as="h3"
                                            className="text-2xl font-bold leading-6 text-primary-0 font-primary text-center"
                                        >
                                            Edit My Name
                                        </Dialog.Title>
                                        <div >
                                            <div className="my-5 text-left ml-5">
                                                <div className="mt-5">
                                                    <h3 className="font-primary text-lg font-semibold" autoFocus >New Name</h3>
                                                    <input type="text" placeholder="Enter your Name" onChange={(e) => setnewusername(e.target.value)} autoComplete="off" step="0.01" min="100" name="name" className={`rounded-lg px-3 shadow-lg h-10 w-80 my-2 ml-1`} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-0 mb-5">
                                            <button type="submit"
                                                className="btn inline-flex justify-center px-4 py-2 text-base font-semibold text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 ">
                                                Update Name
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition >

            </div >
            {
                precentage > 90 &&

                <div className="bg-red-700 text-white p-2 sm:p-6 rounded-sm overflow-hidden mb-2" >
                    Your Expenditures Reached {precentage}% of your Budget
                </div>
            }
        </div >
    )
}

export default WelcomeBanner
