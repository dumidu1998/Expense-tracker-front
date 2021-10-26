import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { editModal } from '../App';
import { editId } from '../App';


export default function ExpenditureCards(props) {
    // eslint-disable-next-line
    const [editModalstate, setEditModal] = useAtom(editModal);
    // eslint-disable-next-line
    const [editIdd, setEditId] = useAtom(editId);
    const [imga, setimg] = useState('/fab.png');

    useEffect(() => {
        switch (props.extype) {
            case 'fab':
                setimg('/fab.png');
                break;
            case 'health':
                setimg('/health.png');
                break;
            case 'transport':
                setimg('/trans.png');
                break;
            case 'entertainment':
                setimg('/entert.png');
                break;
            case 'other':
                setimg('/other.png');
                break;
            default:
                setimg('/other.png');
                break;
        }
    }, [props.extype])

    return (
        <div className="rounded-xl bg-blue-50 shadow-lg p-3 mb-1 my-1 ">
            <div className="grid grid-cols-3 gap-1 md:-ml-8">

                <div className="col-span-full flex justify-center md:col-span-1 lg:justify-start lg:ml-16 md:-mx-32 lg:-mx-32 xl:justify-start xl::ml-16">
                    <img src={imga} alt="badge" className="w-24" />
                </div>

                <div className="col-span-full md:col-span-1 md:flex md:items-start md:flex-col md:justify-center lg:justify-start xl:justify-start lg:items-start">
                    <div className="text-3xl font-bold md:text-2xl">Dinner at Avenra</div>
                    <div className="text-lg text-gray-900">Dinner with friends</div>
                    <div className="text-base text-gray-800">2018-10-25</div>
                </div>

                <div className="px-3 col-span-full md:col-span-1 md:justify-center md:flex md:flex-col md:items-end">
                    <div className="text-3xl font-bold">Rs. 1,500.00</div>
                    <button className="float-right" onClick={() => { setEditId(12); setEditModal(true); }}>
                        <div className="text-gray-800 text-lg flex flex-row mt-5 items-center">
                            Edit
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    )
}
