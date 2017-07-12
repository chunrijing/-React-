require('./Component.scss');
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Filter } from  "../Filter/Filter"

export class Component extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {};
    };


    render() {
        return (
            <div>
                <Filter />
                <div className="container">我是云构件库</div>
            </div>
        )
    }
}