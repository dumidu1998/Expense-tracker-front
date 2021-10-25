import React from 'react'
import Card1 from '../components/cards/Card1'
import Card2 from '../components/cards/Card2'
import Card3 from '../components/cards/Card3'
import Card4 from '../components/cards/Card4'
import LineGraph from '../components/graphs/LineGraph'
import PieChart from '../components/graphs/PieChart'
import HomeExpenseContainer from '../components/HomeExpenseContainer'
import WelcomeBanner from '../components/WelcomeBanner'

function Dashboard() {
    return (
        <>
            {/* Welcome Banner */}
            <WelcomeBanner />
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                {/* Card container */}
                <div className="grid grid-cols-4 gap-6">
                    <Card1 />
                    <Card2 />
                    <Card3 />
                    <Card4 />
                </div>
                <div className="grid grid-cols-2 gap-6 mt-5 h-52">
                    <LineGraph />
                    <PieChart />
                </div>
                {/* Home expenditures container */}
                <div className="mx-1 my-5 border-2">
                    <HomeExpenseContainer />
                </div>
            </div>
        </>
    )
}

export default Dashboard
