import React, { useState} from 'react';
import './App.css';
import Title from "./form/Form1/Title";
import JobInfo from "./form/From2/JobInfo";

function App() {
    const [currentTab, setCurrentTab] = useState({
        id: (new Date().getTime()),
        name: `job 1`,
        title: ``,
        UserIntro: ``,
        Responsibilities: ``,
        UserMinExperience: ``,
        UserMaxExperience: ``,
        UserQualification: ``,
        userConcluding: ``,
        userSalary: ``,
        UserCompanyName: ``,
        UserCompanyLocation: ``,
        value: ``,
        day: ``,
        conditions: {
            title: true,
            UserIntro: true,
            Responsibilities: true,
            UserMinExperience: true,
            UserMaxExperience: true,
            UserQualification: true,
            userConcluding: true,
            userSalary: true,
            UserCompanyName: true,
            UserCompanyLocation: true,
            value: true,
            day: true
        }
    });

    const [tabs, setTabs] = useState([currentTab]);

    const updateValues = (id, value) => {
        const updatingValue = {};
        updatingValue[id] = value;
        const newValue = {...currentTab, ...updatingValue}
        setCurrentTab(newValue)

        const otherTabs = tabs.filter((e) => e.id !== currentTab.id)
        setTabs([...otherTabs, newValue]);
    }

    const updateShowHide = (key, value) => {
        const updatingValue = {
            conditions: {
                ...currentTab.conditions,
                [key]: value
            }
        };

        const newValue = {...currentTab, ...updatingValue}

        const otherTabs = tabs.filter((e) => e.id !== currentTab.id)
        setTabs([...otherTabs, newValue]);

        setCurrentTab(newValue)
    }

    const createTabs = () => {
        return tabs.map(tab => {
            return (
                <li className="relative">
                    <a className={"flex items-center text-2xl py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"}
                       href={"#!"}
                       onClick={() => handleSelectTab(tab)}
                       data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        {tab.name}
                    </a>
                </li>

            );
        });
    };

    const handleSelectTab = tab => {
        setCurrentTab({
            id: tab.id,
            name: tab.name,
            title: tab.title,
            UserIntro: tab.UserIntro,
            Responsibilities: tab.Responsibilities,
            UserMinExperience: tab.UserMinExperience,
            UserMaxExperience: tab.UserMaxExperience,
            UserQualification: tab.UserQualification,
            userConcluding: tab.userConcluding,
            userSalary: tab.userSalary,
            UserCompanyName: tab.UserCompanyName,
            UserCompanyLocation: tab.UserCompanyLocation,
            value: tab.value,
            day: tab.day,
            conditions: {
                title: tab.conditions.title,
                UserIntro: tab.conditions.UserIntro,
                Responsibilities: tab.conditions.Responsibilities,
                UserMinExperience: tab.conditions.UserMinExperience,
                UserMaxExperience: tab.conditions.UserMaxExperience,
                UserQualification: tab.conditions.UserQualification,
                userConcluding: tab.conditions.userConcluding,
                userSalary: tab.conditions.userSalary,
                UserCompanyName: tab.conditions.UserCompanyName,
                UserCompanyLocation: tab.conditions.UserCompanyLocation,
                value: tab.conditions.value,
                day: tab.conditions.day
            }
        });
    };

    const handleAddTab = () => {
        const newTabObject = {
            id: (new Date().getTime()),
            name: `job ${tabs.length + 1}`,
            title: ``,
            UserIntro: ``,
            Responsibilities: ``,
            UserMinExperience: ``,
            UserMaxExperience: ``,
            UserQualification: ``,
            userConcluding: ``,
            userSalary: ``,
            UserCompanyName: ``,
            UserCompanyLocation: ``,
            value: ``,
            day: ``,
            conditions: {
                title: true,
                UserIntro: true,
                Responsibilities: true,
                UserMinExperience: true,
                UserMaxExperience: true,
                UserQualification: true,
                userConcluding: true,
                userSalary: true,
                UserCompanyName: true,
                UserCompanyLocation: true,
                value: true,
                day: true
            }
        };
        setTabs([...tabs, newTabObject]);
        setCurrentTab(newTabObject);
    };

    const createDuplicate = (e) => {
        e.preventDefault();
        const newTabObject = {};
        Object.assign(newTabObject, currentTab, {
            id: (new Date().getTime()),
            name: `${currentTab.name} Duplicate`
        })

        setTabs([...tabs, newTabObject]);
        setCurrentTab(newTabObject);
    }

    const deleteTab = (e) => {
        e.preventDefault();
        const otherTabs = tabs.filter((e) => e.id !== currentTab.id)
        setTabs([...otherTabs]);

        if (tabs.length > 0) {
            setCurrentTab(tabs[0])
        } else {
            setCurrentTab({})
        }
    }

    return (
        <div className="flex  ">
            <div className="w-60 h-full shadow-md bg-white px-1 absolute">
                <ul className="relative">
                    <li className="relative">
                        <a className="flex items-center text-2xl py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                           href={"#!"}
                           onClick={handleAddTab}>New job+</a>
                    </li>
                    {createTabs()}
                </ul>
            </div>
            <div className="flex grid-cols-2 ml-60">
                <div className="grid gap-8 grid-cols-2 grid-rows-2 ">
                    <Title
                        currentTab={currentTab}
                        createDuplicate={createDuplicate}
                        deleteTab={deleteTab}
                        updateValues={updateValues}
                        updateShowHide={updateShowHide}
                    />
                    <JobInfo currentTab={currentTab}/>
                </div>
            </div>
        </div>
    )
}

export default App;
