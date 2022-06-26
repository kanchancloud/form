import React from 'react';

function Experience() {
    return (
        <div>
            <div className="flex justify-between mt-8 col-span-6 sm:col-span-3">
                <label htmlFor="country"
                       className="block text-md font-medium text-gray-700">Experience Range (year)</label>
                <select id="country" name="country" autoComplete="country-name"
                        className="mt-1 block w-medium py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                </select>
                <select id="country" name="country" autoComplete="country-name"
                        className="mt-1 block w-medium py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>10</option>
                    <option>9</option>
                    <option>8</option>
                </select>
            </div>
        </div>
    );
}

export default Experience;