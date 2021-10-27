import axios from 'axios';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react'
import { editModal, modalopen } from '../App';
import { editbudget } from './cards/Card2';
import ExpenditureCards from './ExpenditureCards'

function HomeExpenseContainer(props) {

    const [cards, setCards] = useState([]);
    const [modalOpen] = useAtom(modalopen);
    const [editModalstate] = useAtom(editModal);
    const [edtbudget] = useAtom(editbudget);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/expense/cardsdata`)
            .then(function (response) {
                setCards(response.data.expenses);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [modalOpen, editModalstate, edtbudget])

    return (
        <div className="">
            <header className="px-5 py-4 border-b border-gray-100 flex justify-center">
                <h1 className="text-2xl font-semibold">Last Expenditures</h1>
            </header>
            <div className="p-6 flex flex-col bg-primary-50">
                {cards.map(card =>
                    <ExpenditureCards data={card} key={card.expenseId} />
                )}
            </div>
        </div>
    )
}

export default HomeExpenseContainer

