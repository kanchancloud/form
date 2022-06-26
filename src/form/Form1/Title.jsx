import React from 'react';
import Experience from "./Experience";
import JobType from "./JobType";

function Title(props) {
    return (
        <form>
            <div>
                <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-3">
                        <div className="mt-5 md:mt-0 md:col-span-6">
                            <form action="#" method="POST">
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6 ">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="first-name"
                                                       className="block text-md font-medium text-gray-700">Job Post
                                                    Title</label>
                                                <input type="text" name="first-name" id="first-name"
                                                       autoComplete="given-name"
                                                       className="mt-3  h-3 min-h-full focus:ring-indigo-500 focus:border-indigo-500 block w-60 shadow-md sm:text-md border-gray-300 rounded-md"/>
                                            </div>
                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="last-name"
                                                       className=" mt-4 block text-md font-medium text-gray-700">Introduction</label>
                                                <input type="text" name="last-name" id="last-name"
                                                       autoComplete="family-name"
                                                       className="mt-1  h-3 min-h-full focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-md border-gray-300 rounded-md"/>
                                            </div>
                                            <div className="mt-8 col-span-6 sm:col-span-4">
                                                <label
                                                    className="block text-md font-medium text-gray-700">Role &
                                                    Responsibilities</label>
                                                <input type="text"
                                                       autoComplete="text"
                                                       className="mt-1  h-5 min-h-full focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md md:text-md border-gray-300 rounded-md"/>
                                            </div>
                                            <div className="block col-span-6 sm:col-span-3">
                                                <Experience/>
                                            </div>
                                            <div className="col-span-6 sm:col-span-4">
                                                <label
                                                    className="block text-md font-medium text-gray-700">Qualification</label>
                                                <input type="text"
                                                       autoComplete="text"
                                                       className="mt-1 h-5 min-h-full focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md md:text-md border-gray-300 rounded-md"/>
                                            </div>

                                            <div className=" mt-8 gap-6 flex col-span-6  sm:col-span-3">
                                                <label
                                                    className="block text-md font-medium text-gray-700">Salary</label>
                                                <input type="number" name="city" id="city" autoComplete="address-level2"
                                                       className="mt-1 h-5 min-h-full focus:ring-indigo-500 focus:border-indigo-500 block w-md shadow-md md:text-md border-gray-300 rounded-md"/>
                                            </div>

                                            <div className="block mt-8 gap-4 block col-span-6  sm:col-span-4">
                                                <label className="block text-md font-medium text-gray-700">concluding
                                                    statement</label>
                                                <input type="text"
                                                       autoComplete="address-level1"
                                                       className="mt-1 h-7 min-h-full focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md md:text-md border-gray-300 rounded-md"/>
                                            </div>
                                            <div className="block mt-8 col-span-6  sm:col-span-4">
                                                <label className="block text-md font-medium text-gray-700">Company
                                                    Name</label>
                                                <input type="text"
                                                       autoComplete="postal-code"
                                                       className="mt-1 h-5 min-h-full focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md md:text-md border-gray-300 rounded-md"/>
                                            </div>
                                            <div className=" mt-8 gap-6 col-span-6  sm:col-span-4">
                                                <label className="block text-md font-medium text-gray-700">Company
                                                    Location</label>
                                                <input type="text"
                                                       autoComplete="postal-code"
                                                       className="mt-1 h-5 min-h-full focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md md:text-md border-gray-300 rounded-md"/>
                                            </div>
                                            <div className="block col-span-6 sm:col-span-3">
                                                <JobType/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    );
}

export default Title;