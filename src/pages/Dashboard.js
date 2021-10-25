import React from 'react'
import Statcard from '../components/Statcard'
import WelcomeBanner from '../components/WelcomeBanner'

function Dashboard() {
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome Banner */}
            <WelcomeBanner />
            {/* Card container */}
            <div className="grid grid-cols-3 gap-6">
                <Statcard />
                <Statcard />
                <Statcard />
            </div>
        </div>
    )
}

export default Dashboard
