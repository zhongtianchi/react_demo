import './e2.css';
import React from 'react';
import {Button,Input} from 'antd';
import { Row, Col } from 'antd';

class E2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            inputValue:"",
        }
    }

    add = () => {
        let obj = {
            count: this.state.count + 1
        };
        this.setState(obj);
    }
    handleBtnClick=(e)=>{
        console.log(e.target.innerText);
        this.setState({
            inputValue:this.state.inputValue+e.target.innerText,
        })
    }
    Clear=()=>{
        this.setState({
            inputValue:"",
        })
    }
    Back=()=>{
        this.setState({
            inputValue:this.state.inputValue.slice(0,this.state.inputValue.length- 1)
        });
    }
    end=()=>{
        let expression=this.state.inputValue;
        let result=eval(expression);
        localStorage.setItem("fuck",expression+"="+result)
        this.setState({
            inputValue:result
        });
    }
    History=()=>{

        this.setState({
            inputValue:localStorage.getItem("fuck")
        });
    }
    render() {
        return (
            <div className="Main">
                <div className="div_cal">
                    <div id="div_row1">
                        <Input  id="style1" value={this.state.inputValue}/>
                    </div>
                    <div id="div_row2">
                        <Row>
                            {/*<Col span={12}>col</Col>*/}
                            {/*<Col span={12}>col</Col>*/}
                            <Col span={6}>
                            <Button className="style2" onClick={this.Clear} block>AC</Button>
                            </Col>


                            <Col span={6}>
                                <Button className="style2" onClick={this.Back} block>Back</Button>
                            </Col>


                            <Col span={6}>
                                <Button className="style2" onClick={this.handleBtnClick} block>%</Button>
                            </Col>


                            <Col span={6}>
                                <Button className="style3" onClick={this.handleBtnClick} block>/</Button>
                            </Col>
                        </Row>
                        {/*<Button className="style2" onClick={this.Clear}>AC</Button>*/}
                        {/*<Button className="style2" onClick={this.Back}>Back</Button>*/}
                        {/*<Button className="style2" onClick={this.handleBtnClick}>%</Button>*/}
                        {/*<Button className="style3" onClick={this.handleBtnClick}>/</Button>*/}
                    </div>
                    <div className="div_row3">
                        <Button className="style4" onClick={this.handleBtnClick} block>1</Button>
                        <Button className="style4" onClick={this.handleBtnClick} block>2</Button>
                        <Button className="style4" onClick={this.handleBtnClick} block>3</Button>
                        <Button className="style3" onClick={this.handleBtnClick} block>*</Button>
                    </div>
                    <div id="div_row4">
                        <Button className="style4" onClick={this.handleBtnClick} block>4</Button>
                        <Button className="style4" onClick={this.handleBtnClick} block>5</Button>
                        <Button className="style4" onClick={this.handleBtnClick} block>6</Button>
                        <Button className="style3" onClick={this.handleBtnClick} block>+</Button>
                    </div>
                    <div id="div_row5">
                        <Button className="style4" onClick={this.handleBtnClick} block>7</Button>
                        <Button className="style4" onClick={this.handleBtnClick} block>8</Button>
                        <Button className="style4" onClick={this.handleBtnClick} block>9</Button>
                        <Button className="style3" onClick={this.handleBtnClick} block>-</Button>
                    </div>
                    <div id="div_row6">
                    <Row>
                        <Col span={12}>
                            <Button className="style4" onClick={this.handleBtnClick} block>0</Button>
                        </Col>
                        <Col span={6}>
                            <Button className="style4" onClick={this.handleBtnClick} block>.</Button>
                        </Col>
                        <Col span={6}>
                            <Button className="style3" onClick={this.end} block>=</Button>
                        </Col>
                    </Row>

                        {/*<Button className="style2" onClick={this.handleBtnClick} block>0</Button>*/}
                        {/*<Button className="style2" onClick={this.handleBtnClick} block>.</Button>*/}
                        {/*<Button className="style3" onClick={this.end} block>=</Button>*/}

                    </div>
                    <div id="div_row7">
                        <Button className="style3" onClick={this.History} block>History</Button>

                    </div>
                </div>
            </div>
        )
    }
}

export default E2;