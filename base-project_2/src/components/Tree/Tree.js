require("./Tree.scss");
import React from 'react';
import ReactDOM from 'react-dom';
import ReactZtree from 'ztree-for-react/lib/ztree-for-react';

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



export class Tree extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
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
        event.target.style={
            background: "#4990e2"
        }
    }

    render(){
        return (
            <div className="treeSlider">
                <ReactZtree nodes={nodes} events={this.getEvents()} view={view} data={data} ref="ztree"/>
            </div>
        );
    }
}