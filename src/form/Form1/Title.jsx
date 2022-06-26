import React from 'react';
import Experience from "./Experience";
import JobType from "./JobType";

function Title({currentTab, createDuplicate, deleteTab, updateValues, updateShowHide}) {
    return (
        <form action="#" method="POST">
            <div className="mb-10 text-3xl font-bold flex justify-center">
                <h2>post Job manager</h2>
            </div>
            <div className="shadow overflow-hidden sm:rSounded-md">
                <div className="px-4 py-5 bg-white sm:p-2">
                    <div className="flex gap-4 justify-end">
                        <button onClick={createDuplicate} className="mt-1 bg-blue-500 hover:bg-blue-400 text-white
                            font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Duplicate
                        </button>
                        <br/>
                        <button onClick={deleteTab} className="mt-1 mt-1 bg-red-500 hover:bg-red-400 text-white
                            font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">Delete
                        </button>
                    </div>
                    <div className="grid grid-cols-6 gap-6 ">
                        <div className="col-span-4 sm:col-span-3">
                            <div className="flex gap-4">
                                <input type="checkbox"
                                       className="h-10 min-h-full w-5"
                                       onChange={e => updateShowHide("title", e.target.checked)}
                                       checked={currentTab.conditions.title ? true : false}/>
                                <div className="col-span-3 sm:col-span-3">
                                    <label className="block text-md font-medium text-black-700">Job Post
                                        Title</label>
                                    <input type="text"
                                           className="mt-3  h-3 min-h-full focus:ring-indigo-500
                                           focus:border-indigo-500 block w-60 shadow-md
                                           sm:text-md border-gray-300 rounded-md"
                                           onChange={e => updateValues("title", e.target.value)}
                                           value={currentTab.title}/>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 col-span-2 sm:col-span-6">
                            <div className="flex gap-4 ">
                                <input type="checkbox"
                                       className="mt-3 h-3 min-h-full w-5"
                                       onChange={e => updateShowHide("UserIntro", e.target.checked)}
                                       checked={currentTab.conditions.UserIntro ? true : false}/>
                                <label
                                    className="mt-1 block text-md font-medium text-black-700">Introduction</label>
                            </div>
                            <input type="text"
                                   className="mt-1  h-3 min-h-full focus:ring-indigo-500
                                            focus:border-indigo-500 block w-full shadow-md sm:text-md
                                            border-gray-300 rounded-md"
                                   onChange={e => updateValues("UserIntro", e.target.value)}
                                   value={currentTab.UserIntro}/>
                        </div>

                        <div className="mt-8 col-span-2 sm:col-span-4">
                            <div className="flex gap-4 ">
                                <input type="checkbox"
                                       className="mt-3 h-3 min-h-full w-5"
                                       onChange={e => updateShowHide("Responsibilities", e.target.checked)}
                                       checked={currentTab.conditions.Responsibilities ? true : false}/>
                                <label className="mt-1 block text-md font-medium text-black-700">Role &
                                    Responsibilities</label>
                            </div>
                            <input type="text"
                                   className="mt-1  h-5 min-h-full focus:ring-indigo-500
                                           focus:border-indigo-500 block w-full shadow-md md:text-md
                                           border-gray-300 rounded-md"
                                   onChange={e => updateValues("Responsibilities", e.target.value)}
                                   value={currentTab.Responsibilities}/>

                        </div>
                        <div className="block col-span-6 sm:col-span-3">
                            <Experience HandleMinExperience={e => updateValues("UserMinExperience", e.target.value)}
                                        HandleMaxExperience={e => updateValues("UserMaxExperience", e.target.value)}
                                        currentTab={currentTab}
                                        updateShowHide={updateShowHide}/>
                        </div>
                        <div className="col-span-6 sm:col-span-4">
                            <div className="flex gap-4 ">
                                <input type="checkbox"
                                       className="mt-3 h-3 min-h-full w-5"
                                       onChange={e => updateShowHide("UserQualification", e.target.checked)}
                                       checked={currentTab.conditions.UserQualification ? true : false}/>
                                <label className="mt-1 block text-md font-medium text-black-700">Qualification</label>
                            </div>
                            <input type="text"
                                   autoComplete="text"
                                   className="mt-1 h-5 min-h-full focus:ring-indigo-500
                                           focus:border-indigo-500 block w-full shadow-md md:text-md border-gray-300
                                           rounded-md"
                                   onChange={e => updateValues("UserQualification", e.target.value)}
                                   value={currentTab.UserQualification}/>
                        </div>
                        <div className=" mt-8 gap-6 flex col-span-6  sm:col-span-3">
                            <div className="flex gap-4 ">
                                <input type="checkbox"
                                       className="mt-3 h-3 min-h-full w-5"
                                       onChange={e => updateShowHide("userSalary", e.target.checked)}
                                       checked={currentTab.conditions.userSalary ? true : false}/>
                                <label className="mt-5 block text-md font-medium text-black-700">Salary</label>
                                <input type="number" name="city" id="city" autoComplete="address-level2"
                                       className="mt-5 h-5 min-h-full focus:ring-indigo-500
                                           focus:border-indigo-500 block w-md shadow-md md:text-md
                                           border-gray-300 rounded-md"
                                       onChange={e => updateValues("userSalary", e.target.value)}
                                       value={currentTab.userSalary}/>
                            </div>
                        </div>
                        <div className="block mt-8 gap-4 block col-span-6  sm:col-span-4">
                            <div className="flex gap-4 ">
                                <input type="checkbox"
                                       className="mt-3 h-3 min-h-full w-5"
                                       onChange={e => updateShowHide("userConcluding", e.target.checked)}
                                       checked={currentTab.conditions.userConcluding ? true : false}/>
                                <label className="mt-1 block text-md font-medium text-black-700">Concluding
                                    statement</label>
                            </div>
                            <input type="text"
                                   className="mt-1 h-5 min-h-full focus:ring-indigo-500
                                           focus:border-indigo-500 block w-full shadow-md md:text-md
                                           border-gray-300 rounded-md"
                                   onChange={e => updateValues("userConcluding", e.target.value)}
                                   value={currentTab.userConcluding}/>
                        </div>
                        <div className="block mt-8 col-span-6  sm:col-span-4">
                            <div className="flex gap-4 ">
                                <input type="checkbox"
                                       className=" h-3 min-h-full w-5"
                                       onChange={e => updateShowHide("UserCompanyName", e.target.checked)}
                                       checked={currentTab.conditions.UserCompanyName ? true : false}/>
                                <label className="mb-3 block text-md font-medium text-black-700">Company
                                    Name</label>
                            </div>
                            <input type="text"
                                   autoComplete="postal-code"
                                   className=" h-3 min-h-full focus:ring-indigo-500
                                           focus:border-indigo-500 block w-full shadow-md md:text-md border-gray-300
                                           rounded-md" onChange={e => updateValues("UserCompanyName", e.target.value)}
                                   value={currentTab.UserCompanyName}/>
                        </div>
                        <div className=" mt-8 gap-6 col-span-6  sm:col-span-4">
                            <div className="flex gap-4 ">
                                <input type="checkbox"
                                       className="mt-3 h-3 min-h-full w-5"
                                       onChange={e => updateShowHide("UserCompanyLocation", e.target.checked)}
                                       checked={currentTab.conditions.UserCompanyLocation ? true : false}/>
                                <label className="mt-1 block text-md font-medium text-black-700">Company
                                    Location</label>
                            </div>
                            <input type="text"
                                   className="mt-1 h-5 min-h-full focus:ring-indigo-500
                                           focus:border-indigo-500 block w-full shadow-md md:text-md border-gray-300
                                           rounded-md"
                                   onChange={(e) => updateValues("UserCompanyLocation",
                                       e.target.value)} value={currentTab.UserCompanyLocation}/>
                        </div>
                        <div className="block col-span-6  text-black-700">
                            <JobType select={(e) => updateValues("value", e.target.value)}
                                     jopType={(e) => updateValues("day", e.target.value)}
                                     currentTab={currentTab}
                                     updateShowHide={updateShowHide}

                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
        ;
}

export default Title;