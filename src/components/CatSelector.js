import React, { useState } from 'react'

export default function CatSelector() {
    const [selected, setselected] = useState('other');
    return (
        <div className="grid grid-cols-2 ">
            <div onClick={() => setselected('fab')} className={`cursor-pointer rounded-lg shadow-lg  my-3 mx-2 p-2 h-8 flex flex-row items-center justify-center ${selected === 'fab' ? 'bg-blue-600 text-white' : 'border-2 border-gray-400'}`}>Food & Beverages</div>
            <div onClick={() => setselected('healthcare')} className={`cursor-pointer rounded-lg  shadow-lg my-3 mx-2 p-2 h-8 flex flex-row items-center justify-center ${selected === 'healthcare' ? 'bg-blue-600 text-white' : 'border-2 border-gray-400'}`} > HealthCare</div >
            <div onClick={() => setselected('transporatation')} className={`cursor-pointer rounded-lg  shadow-lg my-3 mx-2 p-2 h-8 flex flex-row items-center justify-center ${selected === 'transporatation' ? 'bg-blue-600 text-white' : 'border-2 border-gray-400'}`} > Transporation</div >
            <div onClick={() => setselected('ent')} className={`cursor-pointer rounded-lg border-2g  my-3 mx-2 p-2 h-8 flex flex-row items-center justify-center ${selected === 'ent' ? 'bg-blue-600 text-white' : 'border-2 border-gray-400'}`} > Entertainment</div >
            <div onClick={() => setselected('other')} className={`cursor-pointer rounded-lg  shadow-lg my-3 mx-2 p-2 h-8 flex flex-row items-center justify-center ${selected === 'other' ? 'bg-blue-600 text-white' : 'border-2 border-gray-400'}`} > Other</div >
        </div >
    )
}
