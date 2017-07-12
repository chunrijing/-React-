/**
 * Created by Administrator on 2017/7/3.
 */
require('./Siderbar.scss');
import * as React from "react";
import * as ReactDOM from "react-dom";
//import { Tree } from "../Tree/Tree";
import ReactZtree from 'ztree-for-react/lib/ztree-for-react';

class Tree extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.refs.ztree.ztreeObj.expandAll(true);
    }
    getEvents(){
        return {
            onClick:(event,treeId,treeNode)=>{
                this.handleClick(event,treeId,treeNode)
            }
        }
    }
    handleClick(event,treeId,treeNode){
        console.log(event,treeNode);
    }

    render(){
        const nodes = [
            {
                "isDept" : 0,
                "orgId" : 426,
                "orgName" : "只有班筑套餐公司",
                "parentId" : 426
            },
            {
                "isDept" : 0,
                "orgId" : 428,
                "orgName" : "初始化分公司",
                "parentId" : 426
            },
            {
                "isDept" : 0,
                "orgId" : 432,
                "orgName" : "班筑软件",
                "parentId" : 428
            },
            {
                "isDept" : 0,
                "orgId" : 438,
                "orgName" : "北京分公司",
                "parentId" : 432
            }
        ];
        const view = {
            showIcon: false,
            showLine: false
        }

        const data = {
            simpleData: {
                enable: true,
                idKey: "orgId",
                pIdKey: "parentId"
            },
            key: {
                name: "orgName"
            }
        }
        return (
            <ReactZtree nodes={nodes} events={this.getEvents()} view={view} data={data} ref="ztree"/>
        );
    }
}
export class Siderbar extends React.Component  {
    /*const sideActive = {
        background: rgb(73, 144, 226),
        color: white
    }*/
    constructor(props) {
        super(props);
        this.state = {};
    };
    render() {
        return (
            <aside className="main-siderbar">
                <ul className="source">
                    <li className="btnActive">
                        <p onClick={this.props.slide}><span className="hoverSpan"></span>公共库</p>
                    </li>
                    <li>
                        <p onClick={this.props.slide}><span className="hoverSpan"></span>企业库</p>
                        {this.props.data==1?<Tree data={this.props.data}/>:''}
                    </li>
                    <li>
                        <p onClick={this.props.slide}><span className="hoverSpan"></span>我的上传</p>
                        {this.props.data==2?<ul>
                            <li><span className="menusName side-active" onClick={this.props.getComponent}>全部</span></li>
                            <li><span className="menusName" onClick={this.props.getComponent}>待审核</span></li>
                            <li><span className="menusName" onClick={this.props.getComponent}>已通过</span></li>
                            <li><span className="menusName" onClick={this.props.getComponent}>未通过</span></li>
                        </ul>:''
                        }
                    </li>
                    <li>
                        <p onClick={this.props.slide}><span className="hoverSpan"></span>我的审核</p>
                        {this.props.data==3?<ul>
                            <li><span className="menusName side-active" onClick={this.props.getComponent}>全部</span></li>
                            <li><span className="menusName" onClick={this.props.getComponent}>待审核</span></li>
                            <li><span className="menusName" onClick={this.props.getComponent}>已通过</span></li>
                            <li><span className="menusName" onClick={this.props.getComponent}>未通过</span></li>
                        </ul>:''
                        }

                    </li>
                </ul>
            </aside>
        )
    }
}
