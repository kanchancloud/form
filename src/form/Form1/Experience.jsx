import React from 'react';

function Experience({HandleMinExperience, HandleMaxExperience,updateShowHide,currentTab}) {
    return (
        <div>
            <div className="flex justify-between mt-8 col-span-6 sm:col-span-3">
                <div className="flex gap-4">
                    <input type="checkbox"
                           className="mt-0 h-3 min-h-full w-5"
                           onChange={e => updateShowHide("UserMinExperience", e.target.checked)}
                           checked={currentTab.conditions.UserMinExperience ? true : false}/>
                    <label className="mt4 block text-md font-medium text-gray-700">Experience Range (year)</label>
                </div>
                <select className="mt-1 block w-medium py-2 px-3 border border-gray-300
                        bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500
                        focus:border-indigo-500 sm:text-sm" onChange={HandleMinExperience}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10+</option>
                </select>
                <select className="mt-1 block w-medium py-2 px-3 border border-gray-300
                        bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500
                        focus:border-indigo-500 sm:text-sm" onChange={HandleMaxExperience}>
                    <option>10+</option>
                    <option>9</option>
                    <option>8</option>
                    <option>7</option>
                    <option>6</option>
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
            </div>
        </div>
    );
}

export default Experience;