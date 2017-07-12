/**
 * Created by Administrator on 2017/7/3.
 */
require('./Filter.scss');
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Glyphicon } from "react-bootstrap";
import { Button } from  "react-bootstrap";

export class Filter extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="component-filter">
                <div className="filter-status">
                    <div className="filter-ele"><div onClick={this.source} className="filter-first-ele">公共库</div></div>
                    <span onClick={this.cancelFilter}>清空筛选</span>
                </div>
                {/*筛选大类*/}
                <div className="filter-infoList">
                    <p><b>大类:</b></p>
                    <div className="filter-condition">
                        <div className="filter-ele">
                            <span title="" onClick={this.isTypeFilter}>软装</span>
                        </div>
                    </div>
                </div>
                {/*筛选小类*/}
                <div className="filter-infoList">
                    <p><b>小类:</b></p>
                    <div className="filter-condition">
                        <div className="filter-ele">
                            <span onClick={this.isSTypeFilter}>沙发</span>
                        </div>
                    </div>
                </div>
                {/*筛选类型*/}
                <div className="filter-infoList">
                    <p className="selectTitle"><b>类型:</b></p>
                    <div className="filter-condition">
                        <div className="filter-ele">
                            <span title="" onClick={this.seltypes}>
                                <label className="check-box">
                                    <input type="checkbox" />
                                        <div className="simulated-box"></div>
                                </label>
                                <i>踢脚线</i>
                            </span>
                        </div>

                        <div className="filter-tool">
                            <span className="filter-more + ' ' + showMore"><i className="moreBtn"><Glyphicon glyph="menu-up" />更多</i>  </span>
                            <span data-type='types' data-switch='off' className="checkMore"><b>+</b>多选</span>
                        </div>
                        <div className="btns-item">
                            <button type="button"  data-type='types' className="btn + ' ' + btn-danger + ' ' + btn-ok">确定</button>
                            <button type="button"  data-type='types' className="btn + ' ' + btn-default + ' ' + btn-cancel">取消</button>
                        </div>

                    </div>
                </div>
                {/*筛选风格*/}
                <div className="filter-infoList">
                    <p className="styleLable + ' ' + selectTitle"><b>风格:</b></p>
                    <div className="filter-condition">
                        <div className="filter-ele">
                            <span title="" onClick={this.isStyleFilter}>
                                <label className="check-box">
                                    <input type="checkbox" />
                                        <div className="simulated-box"></div>
                                </label>
                                <i>中式</i>
                            </span>
                        </div>

                        <div className="filter-tool">
                            <span className="filter-more + ' ' + showMore"><i className="moreBtn"><Glyphicon glyph="menu-up" />更多</i> </span>
                            <span  data-type='style' data-switch='off' className="checkMore"><b>+</b>多选</span>
                        </div>
                        <div className="btns-item">
                            <button type="button"  data-type='style' className="btn + ' ' + btn-danger + ' ' + btn-ok">确定</button>
                            <button type="button"  data-type='style' className="btn + ' ' + btn-default + ' ' + btn-cancel">取消</button>
                        </div>
                    </div>
                </div>
                {/*筛选品牌*/}
                <div className="filter-brand + ' ' + filter-infoList">
                    <p className="brandLable + ' ' + selectTitle"><b>品牌:</b></p>
                    <div className="filter-condition">
                        <div className="filter-ele" onClick={this.isBrandFilter}>
                            <span title="">
                                <label className="check-box">
                                    <input type="checkbox" />
                                        <div className="simulated-box"></div>
                                </label>
                                <i data-id="brandId">圣地亚哥</i>
                            </span>
                        </div>
                        <div className="filter-tool">
                            <span className="filter-more + ' ' + showMore"><i className="moreBtn"><Glyphicon glyph="menu-up" />更多</i> </span>
                            <span data-type='brand'  data-switch='off' className="checkMore"><b>+</b>多选</span>
                        </div>
                        <div className="btns-item">
                            <button type="button" data-type='brand' className="btn + '' + btn-danger + ' ' + btn-ok">确定</button>
                            <button type="button" data-type='brand' className="btn + '' + btn-default + '' + btn-cancel">取消</button>
                        </div>
                    </div>
                </div>
                <p className="filter-down + ' ' + activeShow"><i className="moreSelect"><Glyphicon glyph="menu-down" /><Glyphicon glyph="menu-up" />更多选项</i> </p>
            </div>
        )
    }
}
