import * as React from "react";
import { Link } from 'react-router-dom';
import Modal from "../Modal/Modal"
import style from './Head.scss';

const imgs = [
    {
        "compIcon": "./imgs/icon-cloud.jpg",
        "title": "云构件库"
    },
    {
        "uploadIcon":"./imgs/upload.png",
        "title": "我的上传"
    },
    {
        "auditIcon":"./imgs/audit.jpg",
        "title": "我的审核"
    }
];
export class Head extends React.Component{
    constructor (props) {
        super(props);
        this.state = {value:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }
    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        this.props.handleSubmit(this.state.value);
    }

    handleClick(){
        return(
            <Modal />
        )
    }

    render(){
        let picNum = this.props.picNum;
        let img;
        let title;
        if(picNum == 0){
            img = imgs[0].compIcon;
            title = imgs[0].title;
        }
        if(picNum == 1){
            img = imgs[0].compIcon;
            title = imgs[0].title;
        }
        if(picNum == 2){
            img = imgs[1].uploadIcon;
            title = imgs[1].title;
        }
        if(picNum == 3){
            img = imgs[2].auditIcon;
            title = imgs[2].title;
        }
        return(
            <div className="component-logo">
                <div className="component-computer-logo">
                    <div className="logo-icon">
                        <span>
                            <img src={img} />
                             <h1>{title}</h1>
                        </span>
                    </div>
                    <div className="component-search">
                        <form>
                            <input type="text" placeholder="输入构件名称" className="searchtext" value={this.state.value} onChange={this.handleChange}/>
                                <div onClick={this.handleSubmit} className="search-btn" ><img className="icon-search" src="./imgs/icon/icon-search.png" /></div>
                        </form>
                        <div className="upBtn" onClick={this.handleClick}>
                            <span className="icon-tool"></span>上传构件
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

