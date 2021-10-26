import React from 'react'
import ListAndFilter from '../components/ListAndFilter'

function Expenses() {
    return (
        <div>
            <header className="shadow-xl border-b-2">
                <h1 className="text-2xl font-semibold my-5">My Expenses</h1>
            </header>
            <ListAndFilter />
        </div>
    )
}

export default Expenses
