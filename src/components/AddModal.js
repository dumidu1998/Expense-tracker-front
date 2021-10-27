import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import AddNewDatePicker from './AddNewDatePicker';
import CatSelector from './CatSelector';
import { useAtom } from 'jotai'
import { editModal, modalopen } from '../App';
import axios from 'axios';
import { editbudget } from './cards/Card2';
import { useHistory } from 'react-router';

function AddModal() {
    const [modalOpen, setModalOpen] = useAtom(modalopen);
    const [editModalstate] = useAtom(editModal);
    const [edtbudget] = useAtom(editbudget);


    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [date, setdate] = useState(null)
    const [cat, setcat] = useState('')
    const [amount, setamount] = useState(0)

    function closeModal() {
        setModalOpen(false)
    }

    // function openModal() {
    //     setModalOpen(true)
    // }

    const history = useHistory();
    function submitExpense(e) {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/expense`, {
            title: title,
            description: description,
            date: date,
            expenseType: cat,
            amount: amount
        })
            .then(function (response) {
                closeModal()
                history.push('/expenses')

            })
            .catch(function (error) {
                console.log(error);
            })

    }

    const [presentage, setpresentage] = useState(0)
    const [presentagev, setpresentagev] = useState(0)

    useEffect(() => {
        var dd = new Date();
        setdate(dd.getFullYear() + "-" + ('0' + (dd.getMonth() + 1)).slice(-2) + "-" + ('0' + dd.getDate()).slice(-2));
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/expense/cardsdata`)
            .then(function (response) {
                setpresentagev(response.data.expenseUsage >= 100 ? 100 : response.data.expenseUsage)
                setpresentage(response.data.remainingBudget);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [modalOpen, editModalstate, edtbudget])

    return (
        <>
            <Transition appear show={modalOpen} as={Fragment}>
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
                                <form onSubmit={submitExpense}>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-bold leading-6 text-primary-0 font-primary text-center"
                                    >
                                        Add New Expense
                                    </Dialog.Title>
                                    <div className="my-5 text-left ml-5">
                                        <div >
                                            <div className="mt-5">
                                                {presentagev >= 80 &&
                                                    <p className="text-red-500">You have Only Rs. {presentage.toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 })} of your budget</p>
                                                }
                                                <h3 className="font-primary text-lg font-semibold" autoFocus >Title</h3>
                                                <input type="text" placeholder="Title for Expense" autoComplete="off" onChange={e => settitle(e.target.value)} name="name" className={` px-3 rounded-lg shadow-lg h-10 w-80 my-2 ml-1`} />
                                            </div>
                                            <div className="mt-2">
                                                <h3 className="font-primary text-lg font-semibold "> Description</h3>
                                                <textarea className="rounded-lg shadow-lg h-16 w-80 mt-2 ml-1 px-1 " onChange={e => setdescription(e.target.value)}></textarea>
                                            </div>
                                            <div className="mt-2">
                                                <h3 className="font-primary text-lg font-semibold" autoFocus >Amount</h3>
                                                <input type="text" placeholder="Enter your Amount" onChange={(e) => setamount(e.target.value)} autoComplete="off" step="0.01" min="100" name="name" className={`rounded-lg px-3 shadow-lg h-10 w-80 my-2 ml-1`} />
                                            </div>
                                            <div className="mt-1 mb-12">
                                                <h3 className="font-primary text-lg font-semibold"> Date</h3>
                                                <AddNewDatePicker cdate={date} setter={setdate} />
                                            </div>
                                            <div className="mt-1 mb-8">
                                                <h3 className="font-primary text-lg font-semibold"> Category</h3>
                                                <CatSelector selected={cat} setselected={setcat} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-0 mb-5">
                                        <button

                                            className="inline-flex justify-center px-4 py-2 text-base font-semibold text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        >
                                            Add Expense
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default AddModal
