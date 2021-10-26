import { Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import AddNewDatePicker from './AddNewDatePicker';
import CatSelector from './CatSelector';
import { useAtom } from 'jotai'
import { editModal } from '../App';
import { editId } from '../App';

function EditModal() {
    const [editModalstate, setEditModal] = useAtom(editModal);
    const [editIdd] = useAtom(editId);

    function closeModal() {
        setEditModal(false)
    }

    // function openModal() {
    //     setEditModal(true)
    // }

    useEffect(() => {

    }, [])

    return (
        <>
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
                                <Dialog.Title
                                    as="h3"
                                    className="text-2xl font-bold leading-6 text-primary-0 font-primary text-center"
                                >
                                    Edit My Expense{editIdd}
                                </Dialog.Title>
                                <div className="my-5 text-left ml-5">
                                    <div >
                                        <form>
                                            <div className="mt-5">
                                                <h3 className="font-primary text-lg font-semibold" autoFocus >Title</h3>
                                                <input type="text" autoComplete="off" name="name" className={`rounded-lg shadow-lg h-10 w-80 my-2 ml-1`} />
                                            </div>
                                            <div className="mt-2">
                                                <h3 className="font-primary text-lg font-semibold "> Description</h3>
                                                {/* <input type="text" name="name" className={`rounded-lg shadow-lg h-10 w-64 my-2 ml-1`} /> */}
                                                <textarea className="rounded-lg shadow-lg h-16 w-80 mt-2 ml-1" ></textarea>
                                            </div>
                                            <div className="mt-1 mb-12">
                                                <h3 className="font-primary text-lg font-semibold"> Date</h3>
                                                {/* <input type="text" name="name" className={`rounded-lg shadow-lg h-10 w-64 my-2 ml-1`} /> */}
                                                <AddNewDatePicker />
                                            </div>
                                            <div className="mt-1 mb-8">
                                                <h3 className="font-primary text-lg font-semibold"> Category</h3>
                                                <CatSelector />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="mt-0 mb-5">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-base font-semibold text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    >
                                        Add Expense
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default EditModal