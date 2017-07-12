require('../../css/style.scss');
require('./index.scss');
require('../global/global');

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Head } from "../components/Head/Head"
import { Siderbar } from "../components/Siderbar/Siderbar"
import { Component } from  "../components/Component/Component"
import { Upload } from  "../components/Upload/Upload"
import { Audit } from "../components/Audit/Audit"

export class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            slide: 0,
            searchTex:'',
            status: null
        }
    }
    slide(){
        $(".main-siderbar .source>li").removeClass("btnActive");
        $(event.target).parent().addClass("btnActive");
        let slides = event.target.innerText;
        if(slides == "公共库"){
            slides = 0
        };
        if(slides == "企业库"){
            slides = 1
        };
        if(slides == "我的上传"){
            slides = 2
        };
        if(slides == "我的审核"){
            slides = 3
        };
        this.setState({
            slide: slides
        });
    }
    getComponent(){
        $(".menusName").removeClass("side-active")
        $(event.target).addClass("side-active");
        let text = event.target.innerText;
        if(text == "全部"){
            status = null;
        }
        if(text == "待审核"){
            status = 1;
        }
        if(text == "已通过"){
            status = 2;
        }
        if(text == "未通过"){
            status = 3;
        }
        this.setState({
            status: status
        });
    }
    /*头部搜索框*/
    handleSubmit(even){
        console.log(even);
        this.setState({
            searchTex: event.target.value
        });
    }

    render(){
        let rslider = this.state.slide;
        return <div id='wrap'>
            <Head name='首页' picNum={rslider} handleSubmit={this.handleSubmit.bind(this)}/>
            <Siderbar slide={this.slide.bind(this)} data={rslider} getComponent={this.getComponent.bind(this)}/>
            <div className='componet-base-main'>
                <div className='component-container'>
                    {rslider == 0?<Component />:(rslider == 1?<Component />:(rslider == 2?<Upload />:<Audit />))}
                </div>
            </div>
        </div>
    }
}

