import React,{Component} from 'react';
import Title from "./Title";
import {Tab} from "react-bootstrap";

class DynamicTab extends Component {

    state = {
        tabs: [
            {name: "Add job 1", content: "Look at me, it's Tab 2", title:"Nitin"},
            {name: "Add job 2", content: "Look at me, it's Tab 2", title: "kanchan"}
        ],
        currentTab: {name: "Tab 1", content: "Wow this is tab 1", title:"Nitin"}
    };

    // useEffect() {
    //     setAllState();
    // }



    createTabs = () => {
        const {tabs, currentTab} = this.state;

        const allTabs = tabs.map(tab => {
            return (
                <div>
                    <li>
                        <button
                            className={currentTab.name == tab.name ? "tab  active" : "tab"}
                            onClick={() => this.handleSelectTab(tab)}
                        >
                            {tab.name}
                        </button>
                    </li>
                </div>
            );
        });

        return <ul className="nav nav-tabs">{allTabs}</ul>;
    };

    handleSelectTab = tab => {
        this.setState({
            currentTab: tab
        });
    };

    handleAddTab = () => {
        const {tabs} = this.state;
        const newTabObject = {
            name: `Add job ${tabs.length + 1}`,
            content: `This is Tab ${tabs.length + 1}`
        };
        this.setState({
            tabs: [...tabs, newTabObject],
            currentTab: newTabObject
        });
    };

    render() {
        const {currentTab} = this.state;
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <column>
                    {/*<div className="container">*/}
                    <div className="well">
                        <button className="add-tab-button" onClick={this.handleAddTab}>
                            <i className="text-primary "/> New job+
                        </button>
                        {this.createTabs()}
                        <div className="tab-content">{currentTab.content}, here is title: {currentTab.title}</div>
                    </div>
                    {/*</div>*/}
                </column>
            </Tab.Container>
        );
    }
}

export default DynamicTab;