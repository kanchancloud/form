import React from 'react';


function JobInfo({currentTab}) {
    return (
        <div>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="mb-10 text-3xl font-bold flex justify-center">
                    <h2>post Job manager</h2>
                </div>
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-4 gap-6 ">
                        <div className="block gap-5 col-span-6 sm:col-span-3 border-solid border-b-2 border-black"
                             style={{"display": currentTab.conditions?.title ? "block" : "none"}}>
                            <label className="block text-lg font-medium text-black-700">Job Post
                                Title</label>
                            {currentTab.title}
                        </div>
                        <div className="block gap-6 col-span-6 sm:col-span-6 border-solid border-b-2 border-black"
                             style={{"display": currentTab.conditions?.UserIntro ? "block" : "none"}}>
                            <label className=" mt-4 block text-lg font-medium text-black-700">Introduction</label>
                            {currentTab.UserIntro}
                        </div>
                        <div className="block mt-8 col-span-6 sm:col-span-4 border-solid border-b-2 border-black"
                             style={{"display": currentTab.conditions?.Responsibilities ? "block" : "none"}}>
                            <label className="block text-md font-medium text-black-700">Role &
                                Responsibilities</label>
                            {currentTab.Responsibilities}
                        </div>
                        <div className="block col-span-6 text-lg sm:col-span-3 text-black-700"
                             style={{"display": currentTab.conditions?.UserMinExperience ? "block" : "none"}}>
                            min: {currentTab.UserMinExperience} to max: {currentTab.UserMaxExperience}

                        </div>
                        <div className="block col-span-6 sm:col-span-4 border-solid border-b-2 border-black"
                             style={{"display": currentTab.conditions?.UserQualification ? "block" : "none"}}>
                            <label className="block text-md font-medium text-black-700">Qualification</label>
                            {currentTab.UserQualification}
                        </div>

                        <div
                            className="block mt-8 gap-4 block col-span-6  sm:col-span-4 border-solid border-b-2 border-black"
                            style={{"display": currentTab.conditions?.userConcluding ? "block" : "none"}}>
                            <label className="block text-md font-medium text-black-700">Concluding
                                statement</label>
                            {currentTab.userConcluding}
                        </div>
                        <div className="block mt-8 gap-6 col-span-6  sm:col-span-4 border-solid border-b-2 border-black"
                             style={{"display": currentTab.conditions?.UserCompanyName ? "block" : "none"}}>
                            <label className="block text-md font-medium text-black-700">Company Name</label>
                            {currentTab.UserCompanyLocation}
                        </div>
                        <div className="block mt-8 gap-6 col-span-6  sm:col-span-4 border-solid border-b-2 border-black"
                             style={{"display": currentTab.conditions?.UserCompanyLocation ? "block" : "none"}}>
                            <label className="block text-md font-medium text-black-700">Company
                                Location</label>
                            {currentTab.UserCompanyLocation}
                        </div>
                        <div className="flex col-span-6 sm:col-span-3"
                             style={{"display": currentTab.conditions?.value ? "flex" : "none"}}>
                            <div className="flex mt-8 gap-6 flex col-span-6  sm:col-span-3">
                                <label className="block text-md font-medium text-black-700">Job Type </label>
                                <div className="border-solid border-b-2 border-black">
                                    {currentTab.value}  &  {currentTab.day}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobInfo;