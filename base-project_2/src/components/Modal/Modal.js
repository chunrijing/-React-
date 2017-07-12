/**
 * Created by Administrator on 2017/6/23.
 */
import * as React from "react";
class Modal extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            hide: true
        }
    }
    render(){
        if(this.state.hide){
            return;
        }else{
            return(
                <div className="modal-window">
                    <div className="modal-container">
                        <div className="modal-header">
                            <h3>我是头部</h3>
                        </div>
                        <div className="modal-body">
                            <h4>我是内容</h4>
                        </div>
                        <div className="modal-footer">
                            <button>确定</button>
                            <button>取消</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default Modal;