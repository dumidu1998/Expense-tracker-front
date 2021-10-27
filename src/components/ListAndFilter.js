import React, { Fragment, useEffect, useState } from 'react'
import DatePicker from './DatePicker'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import ExpenditureCards from './ExpenditureCards'
import { useAtom } from 'jotai'
import { editModal, modalopen } from '../App'
import { editbudget } from './cards/Card2'
import axios from 'axios'

const people = [
    { name: 'All', value: '0' },
    { name: 'Food and Beverages', value: 'Food and Beverages' },
    { name: 'Health Care', value: 'Health Care' },
    { name: 'Transportation', value: 'Transportation' },
    { name: 'Entertainment', value: 'Entertainment' },
    { name: 'Other', value: 'Other' },
]
export default function ListAndFilter() {

    const [selected, setSelected] = useState(people[0])
    const [cards, setCards] = useState([]);
    const [modalOpen] = useAtom(modalopen);
    const [editModalstate] = useAtom(editModal);
    const [edtbudget] = useAtom(editbudget);

    const [sdate, setsdate] = useState(0)
    const [edate, setedate] = useState(0);

    useEffect(() => {
        if (selected.value === '0' && sdate !== 0 && edate !== 0) {
            axios.post(`${process.env.REACT_APP_API_BASE_URL}/expense/bydaterange`, {
                startDate: sdate,
                endDate: edate
            })
                .then(function (response) {
                    setCards(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else if (selected.value !== '0' && sdate !== 0 && edate !== 0) {
            axios.post(`${process.env.REACT_APP_API_BASE_URL}/expense/bydatetype`, {
                startDate: sdate,
                endDate: edate,
                type: selected.value
            })
                .then(function (response) {
                    setCards(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else if (selected.value !== '0' && sdate === 0 && edate === 0) {
            axios.get(`${process.env.REACT_APP_API_BASE_URL}/expense/bytype/${selected.value}`)
                .then(function (response) {
                    setCards(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else if (selected.value === '0' && sdate === 0 && edate === 0) {
            axios.get(`${process.env.REACT_APP_API_BASE_URL}/expense`)
                .then(function (response) {
                    setCards(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }, [sdate, edate, selected, modalOpen, editModalstate, edtbudget])

    return (
        <div>
            <header className="flex flex-col justify-center md:justify-end mx-8 mt-4 md:flex-row">
                <DatePicker setday1={setsdate} setday2={setedate} />
                <div className="w-11/12 mx-auto mt-3 md:-mt-0 md:w-48">
                    <Listbox value={selected} onChange={setSelected}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                <span className="block truncate">{selected.name}</span>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <SelectorIcon
                                        className="w-5 h-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {people.map((person, personIdx) => (
                                        <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) =>
                                                `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                                            }
                                            value={person}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span
                                                        className={`${selected ? 'font-medium' : 'font-normal'
                                                            } block truncate`}
                                                    >
                                                        {person.name}
                                                    </span>
                                                    {selected ? (
                                                        <span
                                                            className={`${active ? 'text-amber-600' : 'text-amber-600'
                                                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                                        >
                                                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                </div>
            </header>

            <div>
                <div className="flex flex-row justify-between mx-8 mt-4">
                    <div className="w-full">
                        {cards.map(card =>
                            <ExpenditureCards data={card} key={card.expenseId} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
