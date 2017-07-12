require('./Upload.scss');
import * as React from "react";
import * as ReactDOM from "react-dom";

export class Upload extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {};
    };


    render() {
        return (
            <div className="container">我是我的上传</div>
        )
    }
}