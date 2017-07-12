require('./style.scss')

import * as React from "react";

export class Loading extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let _parentDom = document.querySelector('.loading').parentNode;
        if (!_parentDom.style.position) {
            _parentDom.style.position = 'relative'
        }
    }

    display(display) {
        if (this.displayTime) {
            clearTimeout(this.displayTime);
        }
        this.displayTime = setTimeout(() => {
            let _dom = this.refs.loading;
            if (display) {
                if (_dom.className.search('hide') < 0) {
                    _dom.className = _dom.className + ' hide';
                }

            } else {
                _dom.className = 'loading';
            }
        }, 20)

        setTimeout(() => {
            this.display(true)
        }, 2000)
    }


    render() {
        //point
        let _point = [];
        if (this.props.type == 'point') {
            for (let i = 0; i < 6; i++) {
                _point.push(<div className="loading_point" style={{animationDelay:i*0.2+'s'}}>
                        <i></i>
                    </div>)
            }
        }
        let _pointBox = <div className="loading_point_box">
            {_point.map((item)=>{
                return item
            })}
        </div>


        //show&hide
        this.display(this.props.hide);

        //tip
        let _tip = '';
        if (this.props.tip) {
            _tip = <div className='loading_tip'>
                {this.props.tip}
            </div>
        }


        return (
            <div className={"loading "} ref="loading" style={{background:this.props.bgColor}}>
                {(this.props.type=='point')?_pointBox:''}
                {_tip}
            </div>
        )
    }
}