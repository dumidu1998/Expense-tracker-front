import React from 'react'
import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/themes/material_blue.css";


function AddNewDatePicker({ cdate, setter }) {
    var options = {
        static: true,
        monthSelectorType: 'static',
        dateFormat: 'M j, Y',
        maxDate: new Date(),
        defaultDate: cdate ? new Date(cdate) : new Date(),
        prevArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
        nextArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
        onChange: (selectedDates, dateStr, instance) => {
            var dd = new Date(dateStr);
            setter(dd.getFullYear() + "-" + ('0' + (dd.getMonth() + 1)).slice(-2) + "-" + ('0' + dd.getDate()).slice(-2));
        },
    }

    return (
        <div>
            <Flatpickr className="form-input px-24 border-2 mr-5 text-gray-500 h-8 hover:text-gray-700 font-medium focus:border-gray-300 w-80" options={options} />
        </div>
    )
}

export default AddNewDatePicker
