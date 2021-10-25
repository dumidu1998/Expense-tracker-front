import React from 'react'
import ExpenditureCards from './ExpenditureCards'

function HomeExpenseContainer(props) {
    return (
        <div>
            <header className="px-5 py-4 border-b border-gray-100 flex justify-center">
                <h1 className="text-2xl font-semibold">Last Expenditures</h1>
            </header>
            <div className="p-6 flex flex-col bg-primary-100">
                <ExpenditureCards />
                <ExpenditureCards />
            </div>
        </div>
    )
}

export default HomeExpenseContainer

