import React, { useState, useEffect } from "react";
import { Tabs, Row, Col, Button, } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Config from "../common/Config";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import india from "../assets/image/india.png";
import afghanistan from "../assets/image/afghanistan.png";

function LiveScore(props) {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const homeSettings = useSelector((state) => state.auth.homeSettings)
    const token = Config.token
    const [tab, setTab] = useState(1)
    const { TabPane } = Tabs;
    let liveData = [{}, {}, {}, {}, {}, {}]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    const [size, setSize] = useState('small');
    const onChange = (key) => {
        setTab(key);
    };

    const onAction = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <>
            <Helmet>
                <title>{homeSettings?.meta_title}</title>
                <meta name="description" content={homeSettings?.meta_description} />
            </Helmet>
            <div className="tab-sec">
                <Row>
                    <Col xs={{ span: 22, offset: 1 }} lg={{ span: 22, offset: 1 }}>
                        {/* <Live data={liveData} /> */}
                        <div className="tab">
                            <Tabs defaultActiveKey="1" onChange={onChange} >
                                <TabPane tab="Current Matches" key="1">
                                    <h2>Live Cricket Score</h2>
                                    <Tabs defaultActiveKey="1" onChange={onChange} >
                                        <TabPane tab="Live" key="2">
                                            {/* <Button className="tab-btn" type="primary" shape="round" size={size}> </Button> */}

                                            <div className="tab-bar">
                                                <Tabs defaultActiveKey="1" onChange={onChange} >
                                                    <TabPane tab=" International" key="1">
                                                        <h3>SOUTH AFRICA TOUR OF ENGLAND, 2022</h3>
                                                        <div className="africa">
                                                            <h5> <a href="#"> South Africa vs England,</a><span>   2nd Test</span></h5>
                                                            <h6>Today - Aug 29  •  3:30 PM at Manchester, Emirates Old Trafford</h6>
                                                        </div>
                                                        <div className="match">
                                                            <div class="vl">
                                                                <h5>RSA <span>50-3</span></h5>
                                                                <h5>ENG</h5>
                                                                <h6>Day 1:1st Session</h6>
                                                            </div>
                                                        </div>
                                                        <div className="runs">
                                                            <h6>Live Score</h6>
                                                            <div class="score-border"></div>
                                                            <h6 >Scorecard</h6>
                                                            <div class="score-border"></div>
                                                            <h6>Full Commentary</h6>
                                                            <div class="score-border"></div>
                                                            <h6>News</h6>
                                                        </div>
                                                        <h3>SOUTH AFRICA TOUR OF ENGLAND, 2022</h3>
                                                    </TabPane>
                                                </Tabs>
                                            </div>
                                        </TabPane>
                                        <TabPane tab="Recent" key="3">
                                            <Button className="tab-btn" type="primary" shape="round" size={size}> International </Button>
                                            <Button className="tab-btn" shape="round" size={size}> league </Button>
                                            <Button className="tab-btn" shape="round" size={size}> Domestic</Button>
                                            <Button className="tab-btn" shape="round" size={size}> Women </Button>
                                            <h3>SOUTH AFRICA TOUR OF ENGLAND, 2022</h3>
                                            <div className="africa">
                                                <h5> <a href="#">southu Africa Tour Of England 2022, </a> <span>4-day Practice Match</span></h5>
                                                <h6>Aug 9 Aug-12 . 3:30 PM at Canterbury, St Lawrence Ground</h6>
                                            </div>
                                            <div className="match">
                                                <div class="vl">
                                                    <h5>RSA <span>433 & 183 </span></h5>
                                                    <h5>ENGA <span>672 </span></h5>
                                                    <h6>England Lions Won by an innings and 56 runs</h6>
                                                </div>
                                            </div>
                                            <div className="runs">
                                                <h6>Live Score</h6>
                                                <div class="score-border"></div>
                                                <h6 onChange={onChange}>Scorecard</h6>
                                                <div class="score-border"></div>
                                                <h6>Full Commentary</h6>
                                                <div class="score-border"></div>
                                                <h6>News</h6>
                                            </div>
                                            <h3>NEW ZEALAND TOUR OF WEST INDIES. 2022</h3>
                                            <div className="africa">
                                                <h5>New Zealand vs West Indies, <span>3rd T201</span></h5>
                                                <h6>Aug 15• 12:00 AM at Kingston, Jamaica, Sabina Park</h6>
                                            </div>
                                        </TabPane>
                                        <TabPane tab="Upcoming" key="4">
                                            <Button className="tab-btn" type="primary" shape="round" size={size}> International </Button>
                                            <Button className="tab-btn" shape="round" size={size}> league </Button>
                                            <Button className="tab-btn" shape="round" size={size}> Domestic</Button>
                                            <Button className="tab-btn" shape="round" size={size}> Women </Button>
                                            <h3>SOUTH AFRICA TOUR OF ENGLAND, 2022</h3>
                                            <div className="africa">
                                                <h5> <a href="#">England vs South Africa, </a> <span>2nd Test</span></h5>
                                                <h6>Today - Aug 29  •  3:30 PM at Manchester, Emirates Old Trafford</h6>
                                                <div class="read-preview">
                                                    <h5>Read Preview  <RightOutlined /></h5>
                                                </div>
                                                <div className="runs">
                                                    <h6>Match Factse</h6>
                                                    <div class="score-border"></div>
                                                    <h6>News</h6>
                                                </div>
                                            </div>
                                            <div className="match-border"></div>
                                        </TabPane>
                                    </Tabs>
                                </TabPane>
                                <TabPane tab="Current & Future Series" key="2">
                                    <h2>Cricket Schedule</h2>
                                    <Button className="tab-btn" type="primary" shape="round" size={size}> International </Button>
                                    <Button className="tab-btn" shape="round" size={size}> Domestic & Others </Button>
                                    <Button className="tab-btn" shape="round" size={size}> T20 Leagues</Button>
                                    <Button className="tab-btn" shape="round" size={size}> Women </Button>
                                    <div className="month">
                                        <Row>
                                            <Col span={4}><h6>Month</h6></Col>
                                            <Col span={20} ><h6>Series Name</h6></Col>
                                        </Row>
                                    </div>
                                    <div className="series">
                                        <Row>
                                            <Col span={4}>
                                                <h5>August 2019</h5>
                                            </Col>
                                            <Col span={20} >
                                                <a href="#">ICC Cricket World Cup League Two 2019-23</a>
                                                <h6>Aug 14 - Sep 21</h6>
                                                <div className="match-border"></div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="series">
                                        <Row>
                                            <Col span={4}>
                                                <h5>July 2022</h5>
                                            </Col>
                                            <Col span={20} >
                                                <a href="#">South Africa tour of England, 2022</a>
                                                <h6>Jul 12 - Sep 12</h6>
                                                <div className="match-border"></div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="series">
                                        <Row>
                                            <Col span={4}>
                                                <h5>August 2022</h5>
                                            </Col>
                                            <Col span={20} >
                                                <a href="#">Nepal tour of Kenya, 2022</a>
                                                <h6>Aug 25 - Sep 05</h6>
                                                <div className="match-border"></div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="series">
                                        <Row>
                                            <Col span={4}></Col>
                                            <Col span={20} >
                                                <a href="#">Asia Cup 2022</a>
                                                <h6>Aug 27 - Sep 11</h6>
                                                <div className="match-border"></div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="series">
                                        <Row>
                                            <Col span={4}></Col>
                                            <Col span={20} >
                                                <a href="#">Zimbabwe tour of Australia, 2022</a>
                                                <h6>Aug 28 - Sep 03</h6>
                                                <div className="match-border"></div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="series">
                                        <Row>
                                            <Col span={4}>
                                                <h5>September 2022</h5>
                                            </Col>
                                            <Col span={20} >
                                                <a href="#">New Zealand tour of Australia, 2022</a>
                                                <h6>Sep 06 - Sep 11</h6>
                                                <div className="match-border"></div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="series">
                                        <Row>
                                            <Col span={4}></Col>
                                            <Col span={20} >
                                                <a href="#">Australia tour of India, 2022</a>
                                                <h6>Sep 20 - Sep 25</h6>
                                                <div className="match-border"></div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="series">
                                        <Row>
                                            <Col span={4}></Col>
                                            <Col span={20} >
                                                <a href="#">England tour of Pakistan, 2022</a>
                                                <h6>Sep 20 - Dec 21</h6>
                                                <div className="match-border"></div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="series">
                                        <Row>
                                            <Col span={4}></Col>
                                            <Col span={20} >
                                                <a href="#">South Africa tour of India, 2022</a>
                                                <h6>Sep 28 - Oct 11</h6>
                                                <div className="match-border"></div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="series">
                                        <Row>
                                            <Col span={4}>
                                                <h5>October 2022</h5>
                                            </Col>
                                            <Col span={20} >
                                                <a href="#">West Indies tour of Australia, 2022</a>
                                                <h6>Oct 05 - Dec 12</h6>
                                                <div className="match-border"></div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="series">
                                        <Row>
                                            <Col span={4}></Col>
                                            <Col span={20} >
                                                <a href="#">New Zealand T20I Tri-Series 2022</a>
                                                <h6>Oct 07 - Oct 14</h6>
                                                <div className="match-border"></div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="series">
                                        <Row>
                                            <Col span={4}></Col>
                                            <Col span={20} >
                                                <a href="#">England tour of Australia, 2022</a>
                                                <h6>Oct 09 - Nov 22</h6>
                                                <div className="match-border"></div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="series">
                                        <Row>
                                            <Col span={4}></Col>
                                            <Col span={20} >
                                                <a href="#">ICC Mens T20 World Cup 2022</a>
                                                <h6>Oct 16 - Nov 13</h6>
                                                <div className="match-border"></div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="series">
                                        <Row>
                                            <Col span={4}>
                                                <h5>November 2022</h5>
                                            </Col>
                                            <Col span={20} >
                                                <a href="#">India tour of New Zealand, 2022</a>
                                                <h6>Nov 18 - Nov 30</h6>
                                                <div className="match-border"></div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="series">
                                        <Row>
                                            <Col span={4}>
                                                <h5>December 2022</h5>
                                            </Col>
                                            <Col span={20} >
                                                <a href="#">South Africa tour of Australia, 2022-23</a>
                                                <h6>Dec 17 - Jan 17</h6>
                                                <div className="match-border"></div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="series">
                                        <Row>
                                            <Col span={4}>
                                                <h5>February 2023</h5>
                                            </Col>
                                            <Col span={20} >
                                                <a href="#">England tour of New Zealand, 2023</a>
                                                <h6>Feb 16 - Feb 28</h6>
                                                <div className="match-border"></div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="series">
                                        <Row>
                                            <Col span={4}>
                                                <h5>March 2023</h5>
                                            </Col>
                                            <Col span={20} >
                                                <a href="#">Sri Lanka tour New Zealand, 2023</a>
                                                <h6>Mar 09 - Apr 08</h6>
                                                <div className="match-border"></div>
                                            </Col>
                                        </Row>
                                    </div>
                                </TabPane>
                                <TabPane tab="Matches By Day" key="3">
                                    <h2>Cricket Schedule</h2>
                                    <Button className="tab-btn" type="primary" shape="round" size={size}> International </Button>
                                    <Button className="tab-btn" shape="round" size={size}> Domestic & Others </Button>
                                    <Button className="tab-btn" shape="round" size={size}> T20 Leagues</Button>
                                    <Button className="tab-btn" shape="round" size={size}> Women </Button>
                                    <Button className="tab-btn" shape="round" size={size}> All Matches </Button>
                                    <div className="friday">
                                        <h2>THU, AUG 25 2022</h2>
                                    </div>
                                    <div className="nepal">
                                        <Row>
                                            <Col span={7}>
                                                <h5> Nepal tour of Kenya, 2022</h5>
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <h5>South Africa tour of England, 2022</h5>
                                            </Col>
                                            <Col span={7} offset={2}>
                                                <h6>Kenya vs Nepal, 1st T20I</h6>
                                                <p>Gymkhana Club Ground, Nairobi</p>
                                                <br />
                                                <br />
                                                <h6>England vs South Africa, 2nd Test, Day 1</h6>
                                                <p>Emirates Old Trafford, Manchester</p>
                                            </Col>
                                            <Col span={6} offset={2}>
                                                <h6>3:30 PM</h6>
                                                <p>10:00 AM GMT / 01:00 PM LOCAL</p>
                                                <br />
                                                <br />
                                                <h6>3:30 PM</h6>
                                                <p>10:00 AM GMT / 11:00 AM LOCAL</p>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="friday">
                                        <h2>FRI, AUG 26 2022</h2>
                                    </div>
                                    <div className="nepal">
                                        <Row>
                                            <Col span={7}>
                                                <h5> Nepal tour of Kenya, 2022</h5>
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <h5>South Africa tour of England, 2022</h5>
                                            </Col>
                                            <Col span={7} offset={2}>
                                                <h6>Kenya vs Nepal, 1st T20I</h6>
                                                <p>Gymkhana Club Ground, Nairobi</p>
                                                <br />
                                                <br />
                                                <h6>England vs South Africa, 2nd Test, Day 1</h6>
                                                <p>Emirates Old Trafford, Manchester</p>
                                            </Col>
                                            <Col span={6} offset={2}>
                                                <h6>3:30 PM</h6>
                                                <p>10:00 AM GMT / 01:00 PM LOCAL</p>
                                                <br />
                                                <br />
                                                <h6>3:30 PM</h6>
                                                <p>10:00 AM GMT / 11:00 AM LOCAL</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </TabPane>
                                <TabPane tab="Teams" key="4">
                                    <h2>Cricket Teams</h2>
                                    <Button className="tab-btn" type="primary" shape="round" size={size}> International </Button>
                                    <Button className="tab-btn" shape="round" size={size}> Domestic & Others </Button>
                                    <Button className="tab-btn" shape="round" size={size}> T20 Leagues</Button>
                                    <Button className="tab-btn" shape="round" size={size}> Women </Button>
                                    <hr />
                                    <div className="flg-sec">
                                        <Row>
                                            <Col span={6}>
                                                <img width={70} src={india} /> <span>India</span>
                                            </Col>
                                            <Col span={6}>
                                                <img width={70} src={afghanistan} /> <span>Afghanistan</span>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Row>
                                        <Col span={6}>
                                            <img width={70} src={india} /> <span>India</span>
                                        </Col>
                                        <Col span={6}>
                                            <img width={70} src={afghanistan} /> <span>Afghanistan</span>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tab="Series Archive" key="5">
                                    <Row>
                                        <Col span={17}>
                                            <div className="tour">
                                                <h5>International</h5>
                                                <p><a href="#">Nepal tour of Kenya, 2022</a> <span>Aug 25 - Sep 05</span></p>
                                            </div>
                                        </Col>
                                        <div className="tour-bordrt"></div>
                                        <Col span={6}>
                                            Calendar
                                        </Col>
                                    </Row>

                                </TabPane>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default LiveScore;
