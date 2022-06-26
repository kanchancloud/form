import React from 'react';


function JobType({select, jopType, updateShowHide, currentTab}) {

    return (
        <div>
            <div className="flex gap-4 flex justify-between mt-8 col-span-6 sm:col-span-3 ">
                <input type="checkbox"
                       className="mt-4 h-3 min-h-full w-5"
                       onChange={e => updateShowHide("value", e.target.checked)}
                       checked={currentTab.conditions.value ? true : false}/>
                <label className="mt-3 block text-md font-medium text-gray-700">Job Type</label>

                <select id="country" name="country" autoComplete="country-name"
                        className="mt-1 block w-medium py-2 px-3 border border-gray-300 bg-white
                        rounded-md shadow-sm focus:outline-none focus:ring-indigo-500
                        focus:border-indigo-500 sm:text-sm" onChange={select}>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                </select>
                <select id="country" name="country" autoComplete="country-name"
                        className="mt-1 block w-medium py-2 px-3 border border-gray-300
                        bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500
                        focus:border-indigo-500 sm:text-sm" onChange={jopType}>
                    <option>Remote</option>
                    <option>5 Day week</option>
                </select>
            </div>
        </div>
    );
}

export default JobType;