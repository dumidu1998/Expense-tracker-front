import React from 'react'

export default function CatSelector({ selected, setselected }) {
    return (
        <div className="grid grid-cols-2 ">
            <div onClick={() => setselected('Food and Beverages')} className={`cursor-pointer rounded-lg shadow-lg  my-3 mx-2 p-2 h-8 flex flex-row items-center justify-center ${selected === 'Food and Beverages' ? 'bg-blue-600 text-white' : 'border-2 border-gray-300'}`}>Food & Beverages</div>
            <div onClick={() => setselected('Health Care')} className={`cursor-pointer rounded-lg  shadow-lg my-3 mx-2 p-2 h-8 flex flex-row items-center justify-center ${selected === 'Health Care' ? 'bg-blue-600 text-white' : 'border-2 border-gray-300'}`} > HealthCare</div >
            <div onClick={() => setselected('Transportation')} className={`cursor-pointer rounded-lg  shadow-lg my-3 mx-2 p-2 h-8 flex flex-row items-center justify-center ${selected === 'Transportation' ? 'bg-blue-600 text-white' : 'border-2 border-gray-300'}`} > Transporation</div >
            <div onClick={() => setselected('Entertainment')} className={`cursor-pointer rounded-lg border-2g  my-3 mx-2 p-2 h-8 flex flex-row items-center justify-center ${selected === 'Entertainment' ? 'bg-blue-600 text-white' : 'border-2 border-gray-300'}`} > Entertainment</div >
            <div onClick={() => setselected('Other')} className={`cursor-pointer rounded-lg  shadow-lg my-3 mx-2 p-2 h-8 flex flex-row items-center justify-center ${selected === 'Other' ? 'bg-blue-600 text-white' : 'border-2 border-gray-300'}`} > Other</div >
        </div >
    )
}
