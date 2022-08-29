import React, { useState, useEffect } from "react";
import { Tabs, Space, Table, Tag, Tooltip, Row, Col, Button, Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from "react-router-dom";
import { CopyrightOutlined, RightOutlined } from '@ant-design/icons';
import { Helmet } from "react-helmet";
import HomeSlider from './Scores/HomeSlider';


function LiveScoretab(props) {
    const { TabPane } = Tabs;
    let navigate = useNavigate();
    const homeSettings = useSelector((state) => state.auth.homeSettings)
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    const onChange = (key) => {
        console.log(key);
    };

    const columns = [
        {
            title: 'Batter',
            dataIndex: 'name',
            key: 'name',
            width: 300,
            render: (text) => <a>{text}</a>,
        },
        {
            title: '',
            dataIndex: 'age',
            key: 'age',
            width: 600,
        },
        {
            title: '',
            key: 'address',
        },
        {
            title: 'R',
            dataIndex: 'address',
            dataIndex: 'tags',
            key: 'tags',
        },
        {
            title: '4s',
            dataIndex: 'address',
            key: 'action',
        },
        {
            title: '6s',
            dataIndex: 'address',
            key: 'action',
        },
        {
            title: 'SR',
            dataIndex: 'address',
            key: 'action',
        },

    ];
    const data = [
        {
            key: '1',
            name: 'Leah Paul',
            age: 'batting',
            tags: "137",
            address: '138',
        },
        {
            key: '2',
            name: 'Gaby Lewis',
            age: 'lbw b Frederique Overdijk',
            tags: '15',
            address: '19',
        },
        {
            key: '3',
            name: 'Amy Hunter',
            age: 'lbw b Silver Siegers',
            tags: '22',
            address: '23',

        },
        {
            key: '4',
            name: 'Laura Delany (c)',
            age: 'batting',
            tags: '109',
            address: '102',
        },
        {
            key: '5',
            name: 'Extras',
            tags: '27 (b 0, lb 4, w 22, nb 1, p 0)',
            address: '9',
        },
        {
            key: '6',
            name: 'Total',
            tags: '325 (6 wkts, 48.5 Ov)',
            address: '1',
        },
        {
            key: '7',
            name: 'Yet to Bat',
            age: 'Orla Prendergast , Shauna Kavanagh , Mary Waldron (wk) , Rachel Delaney , Georgina Dempsey , Arlene Kelly , Cara Murray',
            tags: '',
            address: '',
        },
    ];
    const match = [
        {
            title: 'Batter',
            dataIndex: 'name',
            key: 'name',
            width: 300,
            render: (text) => <a>{text}</a>,
        },
        {
            title: '',
            dataIndex: 'age',
            key: 'age',
            width: 600,
        },


    ];
    const info = [
        {
            key: '1',
            name: 'Match',
            age: 'SIN vs KUW, 5th Match, Asia Cup Qualifier 2022',

        },
        {
            key: '2',
            name: 'Date',
            age: 'Wednesday, August 24, 2022',

        },
        {
            key: '3',
            name: 'Toss',
            age: 'Singapore won the toss and opt to bat',


        },
        {
            key: '4',
            name: 'Time',
            age: '5:30 PM',

        },
        {
            key: '5',
            name: 'Venue',
            age: 'Al Amerat Cricket Ground (Ministry Turf 1), Al Amerat',

        },
        {
            key: '6',
            name: 'Umpires',
            age: 'Harikrishna Pillai, Tabarak Dar',

        },
        {
            key: '7',
            name: 'Third Umpire',
            age: 'Shiju Sam',
        },
        {
            key: '8',
            name: 'Match Referee',
            age: 'Sarika Prasad',
        },
        {
            key: '9',
            name: 'Singapore Squad',
        },
        {
            key: '10',
            name: 'Playing',
            age: 'Aritra Dutta, Surendran Chandramohan, Rezza Gaznavi, Janak Prakash, Aman Desai (wk), Avi Dixit, Aryaman Sunil, Amjad Mahboob (c), Vinoth Baskaran, Adwitya Bhargava, Akshay Puri',
        },
        {
            key: '11',
            name: 'Bench',
            age: 'Neil Karnik, Navin Param, Arjun Mutreja, Manpreet Singh, Anantha Krishna, Rohan Rangarajan',
        },
        {
            key: '12',
            name: 'Kuwait Squad',
        },
        {
            key: '13',
            name: 'Playing',
            age: 'Ravija Sandaruwan, Meet Bhavsar, Usman Patel (wk), Shiraz Khan, Bilal Tahir, Mohammed Aslam (c), Edson Silva, Yasin Patel, Ali Zaheer, Sayed Monib, Mohamed Shafeeq',
        },
        {
            key: '14',
            name: 'Bench',
            age: 'Adnan Idrees, Mohammad Amin, Muhammad Kashif, Haroon Shahid, Nawaf Ahmed, Shahrukh Quddus',
        },

    ];

    return (
        <>
            <Helmet>
                <title>{homeSettings?.meta_title}</title>
                <meta name="description" content={homeSettings?.meta_description} />
            </Helmet>
            <Row>
                <Col xs={{ span: 22, offset: 1 }} lg={{ span: 22, offset: 1 }}>
                    <div className="tab">
                        <h5>Netherlands Women vs Ireland Women, 2nd ODI - Live Cricket Score, Commentary</h5>
                        <div className="ireland">
                            <h6>Series:<a href="#"> Ireland Women tour of Netherlands, 2022</a> </h6>
                            <h6>Venue:<a href="#"> VRA Cricket Ground, Amstelveen </a> </h6>
                            <h6>Date & Time:<a href="#"> Aug 24, 11:00 AM LOCAL</a> </h6>
                        </div>

                        <Tabs defaultActiveKey="1" onChange={onChange}>
                            <TabPane tab="Commentary" key="1" className="farooqi">
                                <h5>SL 105 (19.4)</h5>
                                <h6>AFG 106/2 (10.1)</h6>
                                <p>Afghanistan won by 8 wkts</p>
                                <div className="plya">PLAYER OF THE MATCH</div>
                                <a href="#">Fazalhaq Farooqi</a>
                                <div className="player-border"></div>
                                <div className="surprise">
                                    <h6>Hair Transplant Cost Outside India Might Surprise you </h6>
                                    <CopyrightOutlined />
                                </div>
                                <div className="player-border"></div>
                                <div className="videosse">
                                    <h6>Match Videos</h6>
                                    <p>VIEW ALL <RightOutlined /></p>
                                </div>

                                {/* <div className="nvbanner-area">
                                    <HomeSlider />
                                    <div className="viewAllMatch"><button onClick={() => navigate('/live-score')}>View all Matches</button></div>
                                </div> */}
                                <h3>youtube box</h3>
                                <div>
                                    <p>That’s all from the presentations. A thumping statement of intent from Afghanistan! Let’s see if they can build on this momentum. Join us now for the big one tomorrow - India vs Pakistan. We’ll be ready nice and early for that one, hopefully the game lives up to that rivalry! See you then, it’s a wrap for now!</p>
                                    <p><span>Fazalhaq Farooqi, Man of the Match: </span>I was trying to make a breakthrough for my team, that was the simple plan today. With the new ball, I am trying to bowl good deliveries, but I can also bowl at the death. I am comfortable doing both.</p>
                                </div>
                                <h3>youtube box</h3>
                                <div className="crazy">
                                    <div className="surprise">
                                        <h6>Hair Transplant Cost Outside India Might Surprise you </h6>
                                        <CopyrightOutlined />
                                    </div>
                                    <div className="player-border"></div>
                                    <div className=""></div>

                                    <h4>10</h4>
                                </div>
                            </TabPane>
                            <TabPane tab="Scorecard " key="2">
                                <h6 className="nether">Netherlands Women opt to bowl</h6>
                                <div className="wickets">
                                    <div className="run">
                                        <h5>Ireland Women Innings</h5>
                                        <h5>225-2 (37 Ov)</h5>
                                    </div>
                                    <Table columns={columns} dataSource={data} />
                                    <div className="run">
                                        <h5>Fall of Wickets</h5>
                                    </div>
                                    <p>38-1 ( <a href="#">Gaby Lewis,</a>  7.1), 68-2 (<a href="#">Amy Hunter,</a> 13.1), 304-3 (<a href="#">Laura Delany,</a> 46.1), 319-4 (<a href="#">Leah Paul,</a> 48), 319-5 (<a href="#">Shauna Kavanagh,</a> 48.1), 325-6 (<a href="#">Orla Prendergast,</a> 48.5) 330-7 (<a href="#">Rachel Delaney,</a> 49.4), 337-8 (<a href="#">Mary Waldron,</a> 50)</p>
                                    <Table columns={columns} dataSource={data} />
                                    <div className="run">
                                        <h5>Match Info</h5>
                                    </div>
                                    <Table columns={match} dataSource={info} />
                                </div>
                            </TabPane>
                            <TabPane tab="Tab 3" key="3">
                                Content of Tab Pane 3
                            </TabPane>
                        </Tabs>

                    </div>
                </Col>
            </Row>

        </>
    );
}

export default LiveScoretab;