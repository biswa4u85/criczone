import React, { useState, useEffect } from "react";
import { Tabs, Row, Col, Button, Carousel } from 'antd';
import Config from "../common/Config";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Live from "./Scores/Live";
import Upcoming from "./Scores/Upcoming";
import Result from "./Scores/Result";
import { Image } from 'antd';
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

                                            <Button className="tab-btn" type="primary" shape="round" size={size}> International </Button>
                                            <Button className="tab-btn" shape="round" size={size}> league </Button>
                                            <h3>SOUTH AFRICA TOUR OF ENGLAND, 2022</h3>
                                            <div className="africa">
                                                <h5>Zimbabwe vs India,<span> 1st ODI</span></h5>
                                                <h6>Today  •  12:45 PM at Harare, Harare Sports Club</h6>
                                            </div>
                                            <div className="match">
                                                <Carousel afterChange={onAction}>
                                                    <div class="vl">
                                                        <h5>ZIM <span>1-0 (0.3 Ovs)</span></h5>
                                                        <h5>IND</h5>
                                                        <h6>India opt to bowl</h6>
                                                    </div>

                                                    <div class="vl">
                                                        <h5>RSA <span>433 & 183 </span></h5>
                                                        <h5>ENGA <span>672 </span></h5>
                                                        <h6>England Lions Won by an innings and 56 runs</h6>
                                                    </div>


                                                    <div class="vl">
                                                        <h5>RSA <span>433 & 183 </span></h5>
                                                        <h5>ENGA <span>672 </span></h5>
                                                        <h6>England Lions Won by an innings and 56 runs</h6>
                                                    </div>

                                                </Carousel>
                                            </div>



                                            <div className="runs">
                                                <h6>Live Score</h6>
                                                <div class="score-border"></div>
                                                <h6>Scorecard</h6>
                                                <div class="score-border"></div>
                                                <h6>Full Commentary</h6>
                                                <div class="score-border"></div>
                                                <h6>News</h6>
                                            </div>
                                            <h3>SOUTH AFRICA TOUR OF ENGLAND, 2022</h3>
                                            <div className="africa">
                                                <h5>England vs South Africa,<span> 1st Test</span></h5>
                                                <h6>Aug 17 - Aug 21  •  3:30 PM at London, Lord's</h6>
                                            </div>
                                            <div className="match">
                                                <Carousel afterChange={onAction}>
                                                    <div class="vl">
                                                        <h5>ENG <span>1-0 (0.3 Ovs)</span></h5>
                                                        <h5>RSA<span>672 </span></h5>
                                                        <h6>Day 1: Stumps</h6>
                                                    </div>

                                                    <div class="vl">
                                                        <h5>ENG <span>1-0 (0.3 Ovs)</span></h5>
                                                        <h5>RSA<span>672 </span></h5>
                                                        <h6>Day 1: Stumps</h6>
                                                    </div>

                                                    <div class="vl">
                                                        <h5>ENG <span>1-0 (0.3 Ovs)</span></h5>
                                                        <h5>RSA<span>672 </span></h5>
                                                        <h6>Day 1: Stumps</h6>
                                                    </div>
                                                </Carousel>
                                            </div>

                                            <div className="runs">
                                                <h6>Live Score</h6>
                                                <div class="score-border"></div>
                                                <h6>Scorecard</h6>
                                                <div class="score-border"></div>
                                                <h6>Full Commentary</h6>
                                                <div class="score-border"></div>
                                                <h6>News</h6>
                                            </div>
                                            <h3>NEW ZEALAND TOUR OF WEST INDIES. 2022</h3>
                                            <div className="africa">
                                                <h5>West Indies vs New Zealand,  <span>1st ODI</span></h5>
                                                <h6>Aug 17•  11:30 PM at Bridgetown, Barbados, Kensington Oval</h6>
                                            </div>
                                            <div className="match">
                                                <Carousel afterChange={onAction}>
                                                    <div class="vl">
                                                        <h5>ZIM <span>1-0 (0.3 Ovs)</span></h5>
                                                        <h5>IND<span>672 </span></h5>
                                                        <h6>India opt to bowl</h6>
                                                    </div>

                                                    <div class="vl">
                                                        <h5>ZIM <span>1-0 (0.3 Ovs)</span></h5>
                                                        <h5>IND<span>672 </span></h5>
                                                        <h6>India opt to bowl</h6>
                                                    </div>

                                                    <div class="vl">
                                                        <h5>ZIM <span>1-0 (0.3 Ovs)</span></h5>
                                                        <h5>IND<span>672 </span></h5>
                                                        <h6>India opt to bowl</h6>
                                                    </div>
                                                </Carousel>
                                            </div>

                                            <div className="runs">
                                                <h6>Live Score</h6>
                                                <div class="score-border"></div>
                                                <h6>Scorecard</h6>
                                                <div class="score-border"></div>
                                                <h6>Full Commentary</h6>
                                                <div class="score-border"></div>
                                                <h6>News</h6>
                                            </div>

                                        </TabPane>
                                        <TabPane tab="Recent" key="3">
                                            <Button className="tab-btn" type="primary" shape="round" size={size}> International </Button>
                                            <Button className="tab-btn" shape="round" size={size}> league </Button>
                                            <Button className="tab-btn" shape="round" size={size}> Domestic</Button>
                                            <Button className="tab-btn" shape="round" size={size}> Women </Button>
                                            <h3>SOUTH AFRICA TOUR OF ENGLAND, 2022</h3>
                                            <div className="africa">
                                                <h5>southu Africa Tour Of England 2022, <span>4-day Practice Match</span></h5>
                                                <h6>Aug 9 Aug-12 . 3:30 PM at Canterbury, St Lawrence Ground</h6>
                                            </div>


                                            <div className="match">
                                                <Carousel afterChange={onAction}>
                                                    <div class="vl">
                                                        <h5>RSA <span>433 & 183 </span></h5>
                                                        <h5>ENGA <span>672 </span></h5>
                                                        <h6>England Lions Won by an innings and 56 runs</h6>
                                                    </div>

                                                    <div class="vl">
                                                        <h5>RSA <span>433 & 183 </span></h5>
                                                        <h5>ENGA <span>672 </span></h5>
                                                        <h6>England Lions Won by an innings and 56 runs</h6>
                                                    </div>


                                                    <div class="vl">
                                                        <h5>RSA <span>433 & 183 </span></h5>
                                                        <h5>ENGA <span>672 </span></h5>
                                                        <h6>England Lions Won by an innings and 56 runs</h6>
                                                    </div>

                                                </Carousel>
                                            </div>

                                            <div className="runs">
                                                <h6>Live Score</h6>
                                                <div class="score-border"></div>
                                                <h6>Scorecard</h6>
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
                                            <h3>INDIA TOUR OF ZIMBABWE, 2022</h3>
                                            <div className="africa">
                                                <h5>Zimbabwe vs India, <span>2nd ODI</span></h5>
                                                <h6>Aug 20  • 12:45 PM at Harare, Harare Sports Club</h6>
                                            </div>
                                            {/* <DOUBT></DOUBT> */}
                                            <div className="match">
                                                <Carousel afterChange={onAction}>
                                                    <div class="vl">
                                                        <h6>Match Facts</h6>
                                                    </div>
                                                    <div class="vl">
                                                        <h6>Match Facts</h6>
                                                    </div>
                                                    <div class="vl">
                                                        <h6>Match Facts</h6>
                                                    </div>
                                                </Carousel>
                                            </div>

                                            <div className="runs">
                                                <h6>Match Facts</h6>
                                                <div class="score-border"></div>
                                                <h6>News</h6>
                                            </div>


                                            <div className="africa">
                                                <h5>Zimbabwe vs India, <span>2nd ODI</span></h5>
                                                <h6>Aug 20  • 12:45 PM at Harare, Harare Sports Club</h6>
                                            </div>

                                            <div className="match">
                                                <Carousel afterChange={onAction}>
                                                    <div class="vl">
                                                        <h6>Match Facts</h6>
                                                    </div>
                                                    <div class="vl">
                                                        <h6>Match Facts</h6>
                                                    </div>
                                                    <div class="vl">
                                                        <h6>Match Facts</h6>
                                                    </div>
                                                </Carousel>
                                            </div>

                                            <div className="runs">
                                                <h6>Match Facts</h6>
                                                <div class="score-border"></div>
                                                <h6>News</h6>
                                            </div>


                                            <h3>SOUTH AFRICA TOUR OF ENGLAND, 2022</h3>
                                            <div className="africa">
                                                <h5>England vs South Africa, <span>2nd Test</span></h5>
                                                <h6>Aug 25 - Aug 29  • 3:30 PM at Manchester, Emirates Old Trafford</h6>
                                            </div>
                                            {/* <DOUBT></DOUBT> */}
                                            <div className="match">
                                                <Carousel afterChange={onAction}>
                                                    <div class="vl">
                                                        <h6>Match Facts</h6>
                                                    </div>
                                                    <div class="vl">
                                                        <h6>Match Facts</h6>
                                                    </div>
                                                    <div class="vl">
                                                        <h6>Match Facts</h6>
                                                    </div>
                                                </Carousel>
                                            </div>

                                            <div className="runs">
                                                <h6>Match Facts</h6>
                                                <div class="score-border"></div>
                                                <h6>News</h6>
                                            </div>


















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
                                            <Col span={7}>Month</Col>
                                            <Col span={7}>Series Name</Col>
                                        </Row>

                                    </div>

                                    <div className="series">
                                        <Row>
                                            <Col span={7}>July 2022</Col>
                                            <Col span={12}>
                                                <a href="#">South Africa tour of England, 2022</a>
                                                <h6>Jul 12 - Sep 12</h6>
                                                <hr />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col span={7}>August 2022</Col>
                                            <Col span={12}>
                                                <a href="#">New Zealand tour of West Indies, 2022</a>
                                                <h6>Aug 10 - Aug 21</h6>
                                                <hr />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col span={7}></Col>
                                            <Col span={12}>
                                                <a href="#">Pakistan tour of Netherlands, 2022</a>
                                                <h6>Aug 16 - Aug 21</h6>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={7}></Col>
                                            <Col span={12}>
                                                <a href="#">India tour of Zimbabwe, 2022</a>
                                                <h6>Aug 18 - Aug 22</h6>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={7}></Col>
                                            <Col span={12}>
                                                <a href="#">Asia Cup Qualifier 2022</a>
                                                <h6>Aug 20 - Aug 24</h6>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={7}></Col>
                                            <Col span={12}>
                                                <a href="#">Nepal tour of Kenya, 2022</a>
                                                <h6>Aug 25 - Sep 05</h6>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={7}></Col>
                                            <Col span={12}>
                                                <a href="#">Asia Cup 2022</a>
                                                <h6>Aug 27 - Sep 11</h6>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={7}></Col>
                                            <Col span={12}>
                                                <a href="#">Zimbabwe tour of Australia, 2022</a>
                                                <h6>Aug 28 - Sep 03</h6>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={7}>September 2022</Col>
                                            <Col span={12}>
                                                <a href="#">New Zealand tour of Australia, 2022</a>
                                                <h6>Sep 06 - Sep 11</h6>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={7}></Col>
                                            <Col span={12}>
                                                <a href="#">England tour of Pakistan, 2022</a>
                                                <h6>Sep 20 - Oct 02</h6>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={7}></Col>
                                            <Col span={12}>
                                                <a href="#">Australia tour of India, 2022</a>
                                                <h6>Sep 20 - Sep 25</h6>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={7}></Col>
                                            <Col span={12}>
                                                <a href="#">South Africa tour of India, 2022</a>
                                                <h6>Sep 28 - Oct 11</h6>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={7}>October 2022</Col>
                                            <Col span={12}>
                                                <a href="#">West Indies tour of Australia, 2022</a>
                                                <h6>Oct 05 - Oct 07</h6>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={7}></Col>
                                            <Col span={12}>
                                                <a href="#">New Zealand T20I Tri-Series 2022</a>
                                                <h6>Oct 07 - Oct 14</h6>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={7}></Col>
                                            <Col span={12}>
                                                <a href="#">England tour of Australia, 2022</a>
                                                <h6>Oct 09 - Nov 22</h6>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={7}></Col>
                                            <Col span={12}>
                                                <a href="#">ICC Mens T20 World Cup 2022</a>
                                                <h6>Oct 16 - Nov 13</h6>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={7}>November 2022</Col>
                                            <Col span={12}>
                                                <a href="#">India tour of New Zealand, 2022</a>
                                                <h6>Nov 18 - Nov 30</h6>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={7}>December 2022</Col>
                                            <Col span={12}>
                                                <a href="#">South Africa tour of Australia, 2022-23</a>
                                                <h6>Dec 17 - Jan 17</h6>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={7}>February 2023</Col>
                                            <Col span={12}>
                                                <a href="#">England tour of New Zealand, 2023</a>
                                                <h6>Feb 16 - Feb 28</h6>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={7}>March 2023</Col>
                                            <Col span={12}>
                                                <a href="#">Sri Lanka tour New Zealand, 2023</a>
                                                <h6>Mar 09 - Apr 08</h6>
                                                <hr />
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
                                        <h2>FRI, AUG 19 2022</h2>

                                    </div>



                                    <Row>
                                        <Col span={10}>West Indies vs New Zealand, 2nd ODI</Col>
                                        <Col span={10}>New Zealand tour of West Indies, 2022
                                            <h6>Kensington Oval, Bridgetown, Barbados</h6>
                                        </Col>
                                        <Col span={10}>11:30 PM
                                            <h6>06:00 PM GMT / 02:00 PM LOCAL</h6>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={8}>West Indies vs New Zealand, 2nd ODI</Col>
                                        <Col span={8}>New Zealand tour of West Indies, 2022</Col>
                                        <Col span={8}>11:30 PM</Col>
                                    </Row>


















                                </TabPane>
                                <TabPane tab="Teams" key="4">
                                    <h2>Cricket Teams</h2>
                                    <Button className="tab-btn" type="primary" shape="round" size={size}> International </Button>
                                    <Button className="tab-btn" shape="round" size={size}> Domestic & Others </Button>
                                    <Button className="tab-btn" shape="round" size={size}> T20 Leagues</Button>
                                    <Button className="tab-btn" shape="round" size={size}> Women </Button>
                                    <hr />
                                    <Row>
                                        <Col span={3} order={1}>
                                            <img width={70} src={india} />
                                        </Col>
                                        <Col span={6} order={2}>
                                            India
                                        </Col>
                                        <Col span={6} order={3}>
                                            <img width={70} src={afghanistan} />
                                        </Col>
                                        <Col span={6} order={4}>
                                            Afghanistan
                                        </Col>

                                    </Row>



























                                </TabPane>
                                <TabPane tab="Series Archive" key="5">

                                    {/* <Row>
                                        <Col span={12}><h2>Cricket Match Archives</h2></Col>
                                        <Col span={12}><h2>ALL SEASONS</h2></Col>
                                    </Row> */}
                                    <Row>
                                        <div>
                                            <Col flex="1 1 200px">
                                                <h2>Cricket Match Archives</h2>
                                                <h2>2022</h2>
                                                <hr />

                                                <Row>
                                                    <Col span={6} pull={18}>
                                                        <h2>International</h2>
                                                    </Col>

                                                    <Row>
                                                        <Col span={18} push={9}>
                                                            Asia Cup Qualifier 2022 Aug 20 - Aug 24
                                                        </Col>
                                                        <Col span={6} pull={22}>
                                                            International
                                                        </Col>
                                                    </Row>

                                                    <Col span={18} push={6}>
                                                        <a href="#">Asia Cup Qualifier 2022 <span> Aug 20 - Aug 24</span></a>
                                                    </Col>
                                                </Row>











                                            </Col>
                                            <div className="season_border"></div>
                                            <Col flex="0 1 300px"><h2>ALL SEASONS</h2>
                                                <hr /></Col>
                                        </div>
                                    </Row>


                                    {/* <h2>Cricket Match Archives</h2>
                                    <h2>2022</h2> */}
                                    {/* <hr /> */}

                                    {/* <h2>International</h2>
                                    <a href="#">Asia Cup Qualifier 2022 <span> Aug 20 - Aug 24</span></a> */}










                                </TabPane>
                            </Tabs>
                        </div>





                    </Col>
                </Row >

            </div >

        </>
    );
}

export default LiveScore;
