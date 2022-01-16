import "./e3.css";
import React from "react";
import {AMapScene, LoadImage, LayerEvent, PointLayer} from "@antv/l7-react";
import {Drawer} from "antd";
import airPic from "./flyplace.svg";
import airPic2 from "./fly1.svg";
import airPic3 from "./icons8-flight-64.png";

class E3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentData: {},
            drawerVisible: false
        }
    }

    componentDidMount() {
        fetch("http://flightapi.xiexianbo.xin/airPort/listAll")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data.data.data
                });
            });
    }

    handleClick = (e) => {
        this.setState({
            currentData: e.feature,
            drawerVisible: true
        });
    }

    handleDrawerClose = () => {
        this.setState({
            drawerVisible: false
        });
    }

    render() {
        const {data, currentData, drawerVisible} = this.state;
        console.log(data);

        return (
            <div className="main">
                <AMapScene
                    map={{
                        center: [110.19382669582967, 50.258134],
                        pitch: 40,
                        style: "light",
                        zoom: 10,
                    }}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                >
                    <LoadImage name="00" url={airPic}/>
                    <LoadImage name="01" url={airPic2}/>
                    <LoadImage name="02" url={airPic3}/>
                    {data && (
                        <PointLayer
                            key={"2"}
                            options={{
                                autoFit: true,
                            }}
                            source={{
                                data,
                                parser: {
                                    type: "json",
                                    x: "longitude",
                                    y: "latitude",
                                },
                            }}
                            shape={{
                                field: "flightNumber",
                                values: (flightNumber) => {
                                    if (flightNumber >= 0 && flightNumber < 100) {
                                        return "00";
                                    } else if (flightNumber >= 100 && flightNumber < 300) {
                                        return "01";
                                    } else {
                                        return "02";
                                    }
                                },
                            }}
                            size={{
                                values: 10,
                            }}
                            style={{
                                opacity: 1,
                            }}
                        >
                            <LayerEvent type="click" handler={this.handleClick}/>
                        </PointLayer>
                    )}
                </AMapScene>
                <Drawer title="机场信息" placement="right" onClose={this.handleDrawerClose} visible={drawerVisible}>
                    <p>机场名称：{currentData.aptCname || ""}机场</p>
                    <p>IATA编码：{currentData.IATACode}</p>
                    <p>航班号：{currentData.flightNumber}</p>
                </Drawer>
            </div>
        )
    }
}

export default E3;