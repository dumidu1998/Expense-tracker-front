import React from 'react'
import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/themes/material_blue.css";
export default function DatePicker() {

    const options = {
        mode: 'range',
        static: true,
        monthSelectorType: 'static',
        dateFormat: 'M j, Y',
        maxDate: new Date(),
        defaultDate: [new Date(), new Date()],
        prevArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
        nextArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
        onReady: (selectedDates, dateStr, instance) => {
            instance.element.value = dateStr.replace('to', '-');
        },
        onChange: (selectedDates, dateStr, instance) => {
            instance.element.value = dateStr.replace('to', '-');
        },
    }


    return (
        <div className="relative flex flex-col justify-center items-center sm:flex-row ">
            <p className="font-semibold mx-5 flex flex-row items-center">Filter Expenses <button className="btn text-gray-400 ml-5 text-lg md:text-base" onClick={() => { alert("aaa"); }}>Clear</button></p>
            <Flatpickr className="form-input px-4 border-2 mr-5 text-gray-500 h-8 hover:text-gray-600 font-medium focus:border-gray-300 w-60" options={options} />
        </div >
    )
}
