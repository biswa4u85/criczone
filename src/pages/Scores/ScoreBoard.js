import React, { useState, useEffect } from "react";
import { Tabs, Row, Col, Table, Button, Image } from 'antd';
import Config from "../../common/Config";
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getHighlights } from "../../store/ScoreRedux";
import { ShareAltOutlined, TrademarkOutlined } from '@ant-design/icons';
import ArchiveSeries from "./ArchiveSeries";
import Live from "./Live";
import SocketApis from '../../utility/socket-apis'
import flag from '../../assets/image/flag.png'
import cricketer from '../../assets/image/cricketer.png'

function ScoreBoard(props) {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    let { name } = useParams();
    const highlights = useSelector((state) => state.score.highlights)
    const token = Config.token
    const [tab, setTab] = useState(1)
    const [subtab, setSubTab] = useState(1)
    const { TabPane } = Tabs;

    let commentary = highlights.commentary ? highlights.commentary : {}
    // let scorecard = highlights.scorecard ? highlights.scorecard : {}

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getHighlights(name))
        SocketApis.subscribe(name)
    }, [name]);

    const onChange = (key) => {
        console.log(key);
    }

    console.log(commentary)

    const columns = [
        {
            title: 'BATTERS',
            dataIndex: 'player_name',
            key: 'name',
            width: 100

        },
        {
            title: 'R',
            dataIndex: 'runs',
            width: 30
        },
        {
            title: 'B',
            dataIndex: 'balls',
            width: 30
        },
        {
            title: '4s',
            dataIndex: 'fours',
            width: 30
        },
        {
            title: '6s',
            dataIndex: 'sixes',
            width: 30
        },
        {
            title: 'SR',
            dataIndex: 'strike_rate',
            width: 30
        },
        // {
        //     title: 'This Bowler',
        //     dataIndex: 'Bowler',
        //     width: 30
        // },
        // {
        //     title: 'Last 5 Balls',
        //     dataIndex: 'Balls',
        //     width: 30
        // },
        {
            title: 'Mat',
            dataIndex: 'minutes',
            width: 30
        },
        // {
        //     title: 'Runs',
        //     dataIndex: 'Runs',
        //     width: 30
        // },
        // {
        //     title: 'HS	',
        //     dataIndex: 'HS',
        //     width: 30
        // },
        // {
        //     title: 'Ave	',
        //     dataIndex: 'Ave',
        //     width: 30
        // },



    ];

    const battingcolumns = [
        {
            title: 'BATTING',
            dataIndex: 'player_name',
            key: 'name',
            width: 400

        },

        {
            title: '',
            dataIndex: 'how_out',
            key: 'name',
            width: 400,

        },

        {
            title: 'R',
            dataIndex: 'runs',
            width: 30
        },
        {
            title: 'B',
            dataIndex: 'balls',
            width: 30
        },
        {
            title: '4s',
            dataIndex: 'fours',
            width: 30
        },
        {
            title: '6s',
            dataIndex: 'sixes',
            width: 30
        },
        {
            title: 'SR',
            dataIndex: 'strike_rate',
            width: 30
        },




    ];

    const bolingcolumns = [
        {
            title: 'BOWLING',
            dataIndex: 'player_name',
            key: 'name',
            width: 400

        },

        {
            title: 'O',
            dataIndex: 'overs',
            width: 30
        },

        {
            title: 'M',
            dataIndex: 'maidens',
            width: 30
        },

        {
            title: 'R',
            dataIndex: 'runs_conceded',
            width: 30
        },
        {
            title: 'W',
            dataIndex: 'wickets',
            width: 30
        },
        {
            title: 'ECON',
            dataIndex: 'economy',
            width: 30
        },
        {
            title: '0s',
            dataIndex: 'dot_balls',
            width: 30
        },
        {
            title: '4s',
            dataIndex: 'fours',
            width: 30
        },
        {
            title: '6s',
            dataIndex: 'sixes',
            width: 30
        },
        {
            title: 'EX',
            dataIndex: 'extras',
            width: 30
        },






    ];

    const womencolumns = [
        {
            title: 'BATTING',
            dataIndex: 'player_name',
            key: 'name',
            width: 400

        },
        {
            title: '',
            dataIndex: 'how_out',
            key: 'name',
            width: 400

        },

        {
            title: 'R',
            dataIndex: 'runs',
            width: 30
        },

        {
            title: 'B',
            dataIndex: 'balls',
            width: 30
        },

        {
            title: 'M',
            dataIndex: 'minutes',
            width: 30
        },
        {
            title: '4s',
            dataIndex: 'fours',
            width: 30
        },
        {
            title: '6s',
            dataIndex: 'sixes',
            width: 30
        },
        {
            title: 'sr',
            dataIndex: 'strike_rate',
            width: 30
        },







    ];

    const bolingwomencolumns = [
        {
            title: 'BOWLING',
            dataIndex: 'player_name',
            key: 'name',
            width: 400

        },

        {
            title: 'O',
            dataIndex: 'overs',
            width: 30
        },

        {
            title: 'M',
            dataIndex: 'maidens',
            width: 30
        },

        {
            title: 'R',
            dataIndex: 'runs_conceded',
            width: 30
        },
        {
            title: 'W',
            dataIndex: 'wickets',
            width: 30
        },
        {
            title: 'ECON',
            dataIndex: 'economy',
            width: 30
        },
        {
            title: '0s',
            dataIndex: 'dot_balls',
            width: 30
        },
        {
            title: '4s',
            dataIndex: 'fours',
            width: 30
        },
        {
            title: '6s',
            dataIndex: 'sixes',
            width: 30
        },
        {
            title: 'EX',
            dataIndex: 'extras',
            width: 30
        },
    ];

    const matchcolumns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },

        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
    ];

    // console.log(highlights)

    let still_to_bat_ins1 = highlights?.live_details?.scorecard[0]?.still_to_bat ? highlights?.live_details?.scorecard[0]?.still_to_bat : []
    let still_to_bat_ins2 = highlights?.live_details?.scorecard[1]?.still_to_bat ? highlights?.live_details?.scorecard[1]?.still_to_bat : []
    let tournaments = highlights?.tournaments ? highlights.tournaments : {}
    let events = highlights?.events ? highlights.events : {}

    return (
        <>
            <div class="container">
                <div className="score-board">

                    <Row className="scores">
                        <Col span={20} >
                            <h5>RESULT</h5>
                            <h6>{moment.unix(events.START_TIME).format('Do MMM YYYY hh:mm A')}, {tournaments.NAME} {tournaments.TOURNAMENT_IMAGE && (<img src={tournaments.TOURNAMENT_IMAGE} className="flagimg" />)}</h6>
                            <p>{events.CRICKET_LIVE_SENTENCE}</p>
                        </Col>
                        <Col span={4}>
                            <ShareAltOutlined className="shree" />
                        </Col>
                    </Row>
                    <div className="score"></div>

                    <Row>
                        <Col span={16} >
                            <div className="wickets">
                                <div className="match-board">
                                    <div>
                                        {events.HOME_IMAGES && (<img src={events.HOME_IMAGES[0]} className="flagimg" />)}
                                        <a href="">{events.HOME_NAME}</a>
                                    </div>
                                    <div className="score-number">
                                        <h6>{`${events?.HOME_SCORE_CURRENT}/${events?.HOME_SCORE_PART_2_OVERS_OUTS_WICKETS}`}</h6>
                                    </div>
                                </div>
                                <div className="match-board">
                                    <div>
                                        {events.AWAY_IMAGES && (<img src={events.AWAY_IMAGES[0]} className="flagimg" />)}
                                        <a href="">{events.AWAY_NAME}</a>
                                    </div>
                                    <div className="score-number">
                                        <h6>{`${events?.AWAY_SCORE_CURRENT}/${events?.AWAY_SCORE_PART_2_OVERS_OUTS_WICKETS}`}</h6>
                                    </div>
                                </div>
                                <p >{events?.CRICKET_SENTENCE ? (events?.CRICKET_SENTENCE).replaceAll(';', ', ') : ''}</p>
                            </div>
                        </Col>

                        <div class="vl"></div>
                        <Col span={7}>
                            <div className="match-player">
                                <p>PLAYER OF THE MATCH</p>
                                <a href="#">Natthakan Chantham </a><span>, THI-W 61 (51)</span>
                            </div>
                        </Col>
                    </Row>
                    <div className="score"></div>
                    <div className="wickets">

                        <h5>{commentary?.matchHeader?.team1?.name} vs  {commentary?.matchHeader?.team2?.name}, 2nd ODI - Live Cricket Score, {commentary?.page}</h5>
                        <span>Series: <a href="#">{commentary?.matchHeader?.seriesName} </a></span>
                        <span>Venue:  <a href="#">Sydney Cricket Ground, Sydney </a></span>
                        <span>Date & Time: <a href="#">Nov 19, 02:20 PM LOCAL </a></span>

                        <Tabs defaultActiveKey="1" onChange={setTab} >
                            {/* Commentary */}
                            <TabPane tab="Commentary" key="1">
                                <Tabs defaultActiveKey="1" onChange={setTab} >
                                    <TabPane tab={highlights?.live_details?.scorecard?.[0]?.title} key="1">
                                        <h5 className="tem-scro">{commentary?.miniscore?.matchScoreDetails?.inningsScoreList?.[1]?.batTeamName} /{commentary?.miniscore?.matchScoreDetails?.inningsScoreList?.[1]?.wickets} (50)</h5>
                                        <h5>{commentary?.miniscore?.matchScoreDetails?.inningsScoreList?.[0]?.batTeamName} {commentary?.miniscore?.matchScoreDetails?.inningsScoreList?.[0]?.score} {commentary?.miniscore?.matchScoreDetails?.inningsScoreList?.[0]?.overs}</h5>

                                        <p className="australia-tem">{commentary?.miniscore?.status}</p>
                                        <p>PLAYER OF THE MATCH</p>
                                        <span><a href="#" color="black">{commentary?.matchHeader?.playersOfTheMatch?.[0]?.fullName} </a></span>
                                        <div className="score"></div>
                                        <p className="closer"><a href="#">Stay closer to Cricket, always! Get the cricbuzz app for your mobile</a></p>
                                        <div className="score"></div>

                                        <div className="comprehensive">
                                            <p>Another comprehensive win for Australia as they seal the series with a game to spare. England were right in it for a large part of their chase, but then just collapsed in a heap. So that's all we have from this one. Until next time, it's goodbye!</p>
                                            <p><span>Hazlewood:</span> It looks easy to bat on when a partnership is going. But only a wicket away from causing a collapse on such a pitch. Very happy with 280. It's good fun having captaincy. WIll obviously hand it back to Pat for the last game. Will see what Melbourne dishes out. He said he's back (Smith). Summer looks good for him.</p>
                                            <p><span>Moeen Ali:</span> Were in a good position with the bat but we lost wickets. Rash bowled well in the middle phase. We pulled it back nicely. The wicket actually got easier to bat on but we lost wickets. It's just one of those things. They bowled well in that phase. Pressure got to us. If you lose wickets regularly, not going to win many games. Will just try to win (in the third ODI), and get on the flight on a positive note.</p>
                                            <p><span>Mitchell Starc -</span> (On Josh Hazlewood) We saw through the first innings, the wicket was slow, we needed to be accurate, he is one of the best in this format and he showed as to why he's so highly regarded. (On Adam Zampa) He's so clinical in pressure situations, brings up back into the game time and again, it was nice for him to snare 4 wickets, he's been so wonderful for us.</p>
                                            <p><span>21:38 Local Time, 10:38 GMT, 16:08 IST:</span> Quite a collapse from England, losing 7 for 52. They seemed to be cruising with Vince and Billings out there - both on fifties. But a poor slog from Vince sent the whole innings into a death spiral. Zampa bowled beautifully from thereon, finishing with four wickets as the game turned on its head. Starc started the damage with a double-strike in a brutal first over, and he came back to wrap things up with two more. It wasn't the easiest pitch for strokeplay today. Australia got to 280 after a workmanlike innings from Smith along with fifties from Labuschagne and Marsh. It seemed to be a good score but Billings and Vince had the hosts worried for a while, only for England to implode later on..</p>

                                            <Row>
                                                <Col span={2}>
                                                    <h5>38.5</h5>
                                                </Col>
                                                <Col span={20}>
                                                    Zampa to Dawson, <span>out Lbw!</span>! Dawson misses a full toss and is hit right in front of middle. <span>That's the game and the series for Australia.</span>  There's a review from Dawson but ball-tracking shows it's clipping leg stump. <span>Dawson lbw b Zampa 20(21) [4s-1 6s-1]</span>
                                                </Col>
                                            </Row>
                                            Zampa to Dawson, <span>THATS OUT!! Lbw!!</span>

                                            <Row>
                                                <Col span={2}>
                                                    <h5>38.4</h5>
                                                </Col>
                                                <Col span={20}>
                                                    Zampa to Dawson, no run, 93.5kph full delivery on off, Dawson defends in front of point
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={2}>
                                                    <h5>38.3</h5>
                                                </Col>
                                                <Col span={20} >
                                                    Zampa to Dawson, no run, floated up on off, Dawson drives to cover
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={2}>
                                                    <h5>38.2</h5>
                                                </Col>
                                                <Col span={20}>
                                                    Zampa to Dawson, no run, flat length ball turning away outside off, steered to backward point
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={2}>
                                                    <h5>38.2</h5>
                                                </Col>
                                                <Col span={20} >
                                                    Zampa to Dawson, <span>3 wides,</span> drifting down leg, Dawson misses the sweep and Carey fumbles as well
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={2}>
                                                    <h5>38.1</h5>
                                                </Col>
                                                <Col span={20} >
                                                    Zampa to Dawson, 2 runs, tossed up and turning away outside off, Dawson goes reverse and paddles it past short third
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="cost">
                                            <Row >
                                                <Col span={20} >
                                                    <p>The cost</p>
                                                </Col>
                                                <Col span={4}>
                                                    <ShareAltOutlined className="shree" />
                                                </Col>
                                            </Row>
                                            <div className="score"></div>
                                            <Row>
                                                <Col span={2}>
                                                    <h5>38.1</h5>
                                                </Col>
                                                <div className="score"></div>
                                                <Col span={4} offset={1}>
                                                    <p>Runs Scored: 0</p>
                                                    <h5>0 0 0 0 0 0</h5>
                                                </Col>
                                                <div className="score"></div>
                                                <Col span={4} offset={1}>
                                                    <p>Score after 37 overs</p>
                                                    <h5>ENG 203-9</h5>
                                                </Col>
                                                <div className="score"></div>
                                                <Col span={4} offset={1}>
                                                    <p>Adil Rashid <span>3(4)</span></p>
                                                    <h5>Liam Dawson <span>3(4)</span></h5>
                                                </Col>
                                                <div className="score"></div>
                                                <Col span={4} offset={1}>
                                                    <p>Runs Scored: 0</p>
                                                    <h5>0 0 0 0 0 0</h5>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="comprehensive">
                                            <Row>
                                                <Col span={2}>
                                                    <h5>38.5</h5>
                                                </Col>
                                                <Col span={20} >
                                                    Zampa to Dawson, <span>out Lbw!</span>! Dawson misses a full toss and is hit right in front of middle. <span>That's the game and the series for Australia.</span>  There's a review from Dawson but ball-tracking shows it's clipping leg stump. <span>Dawson lbw b Zampa 20(21) [4s-1 6s-1]</span>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={2}>
                                                    <h5>38.4</h5>
                                                </Col>
                                                <Col span={20} >
                                                    Zampa to Dawson, no run, 93.5kph full delivery on off, Dawson defends in front of point
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={2}>
                                                    <h5>38.3</h5>
                                                </Col>
                                                <Col span={20} >
                                                    Zampa to Dawson, no run, floated up on off, Dawson drives to cover
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={2}>
                                                    <h5>38.2</h5>
                                                </Col>
                                                <Col span={20} >
                                                    Zampa to Dawson, no run, flat length ball turning away outside off, steered to backward point
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={2}>
                                                    <h5>38.2</h5>
                                                </Col>
                                                <Col span={20} >
                                                    Zampa to Dawson, <span>3 wides,</span> drifting down leg, Dawson misses the sweep and Carey fumbles as well
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={2}>
                                                    <h5>38.1</h5>
                                                </Col>
                                                <Col span={20} >
                                                    Zampa to Dawson, 2 runs, tossed up and turning away outside off, Dawson goes reverse and paddles it past short third
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="cost">
                                            <Row >
                                                <Col span={20} >
                                                    <p>The cost</p>
                                                </Col>
                                                <Col span={4}>
                                                    <ShareAltOutlined className="shree" />
                                                </Col>
                                            </Row>
                                            <div className="score"></div>
                                            <Row>
                                                <Col span={2}>
                                                    <h5>38.1</h5>
                                                </Col>
                                                <div className="score"></div>
                                                <Col span={4} offset={1}>
                                                    <p>Runs Scored: 0</p>
                                                    <h5>0 0 0 0 0 0</h5>
                                                </Col>
                                                <div className="score"></div>
                                                <Col span={4} offset={1}>
                                                    <p>Score after 37 overs</p>
                                                    <h5>ENG 203-9</h5>
                                                </Col>
                                                <div className="score"></div>
                                                <Col span={4} offset={1}>
                                                    <p>Adil Rashid <span>3(4)</span></p>
                                                    <h5>Liam Dawson <span>3(4)</span></h5>
                                                </Col>
                                                <div className="score"></div>
                                                <Col span={4} offset={1}>
                                                    <p>Runs Scored: 0</p>
                                                    <h5>0 0 0 0 0 0</h5>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="comprehensive">

                                            <Row>
                                                <Col span={2}>
                                                    <h5>38.2</h5>
                                                </Col>
                                                <Col span={20} >
                                                    Zampa to Dawson, <span>3 wides,</span> drifting down leg, Dawson misses the sweep and Carey fumbles as well
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={2}>
                                                    <h5>38.1</h5>
                                                </Col>
                                                <Col span={20} >
                                                    Zampa to Dawson, 2 runs, tossed up and turning away outside off, Dawson goes reverse and paddles it past short third
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="match-btn">
                                            <Button block>
                                                Lode
                                            </Button>
                                        </div>
                                    </TabPane>
                                </Tabs>


                            </TabPane>

                            {/* Scorecard */}
                            <TabPane tab="Scorecard" key="2">
                                <Tabs defaultActiveKey="1" onChange={setTab} >
                                    <TabPane tab={highlights?.live_details?.scorecard?.[0]?.title} key="1">
                                        <div className="scorecard-tab">
                                            {/* <h5>{highlights?.live_details?.scorecard?.[0]?.title}</h5> */}
                                            <Table pagination={false} columns={battingcolumns} dataSource={highlights?.live_details?.scorecard?.[0]?.batting} size="middle" />
                                            <div className="total-scre">
                                                <h6>TOTAL</h6>
                                                <spcn>{highlights?.live_details?.match_summary?.home_scores}</spcn>
                                                <h6>{highlights?.live_details?.match_summary?.away_scores}</h6>
                                            </div>
                                            <div>
                                                <h6>{still_to_bat_ins1.map((item, key) => <a key={key} href="#">{item.player_name}</a>)}</h6>
                                                <p>{highlights?.live_details?.scorecard?.[0]?.fow}</p>
                                            </div>
                                            <Table pagination={false} columns={bolingcolumns} dataSource={highlights?.live_details?.scorecard?.[0]?.bowling} size="middle" />
                                        </div>

                                        <div className="scorecard-tab">
                                            <h5>{highlights?.live_details?.scorecard?.[0]?.title}</h5>
                                            <Table pagination={false} columns={womencolumns} dataSource={highlights?.live_details?.scorecard?.[1]?.batting} size="middle" />
                                            <div className="total-scre">
                                                <h6>TOTAL</h6>
                                                <spcn>{highlights?.live_details?.match_summary?.home_scores}</spcn>
                                                <h6>{highlights?.live_details?.match_summary?.away_scores}</h6>
                                            </div>

                                            <div>
                                                <p>{highlights?.live_details?.scorecard?.[1]?.fow}</p>
                                            </div>
                                            <Table pagination={false} columns={bolingwomencolumns} dataSource={highlights?.live_details?.scorecard?.[1]?.bowling} size="middle" />
                                        </div>
                                    </TabPane>

                                    <TabPane tab={highlights?.live_details?.scorecard?.[1]?.title}>
                                        <div className="scorecard-tab">
                                            <h5>{highlights?.live_details?.scorecard?.[1]?.title}</h5>
                                            <Table pagination={false} columns={battingcolumns} dataSource={highlights?.live_details?.scorecard?.[1]?.batting} size="middle" />
                                            <div className="total-scre">
                                                <h6>TOTAL</h6>
                                                <spcn>{highlights?.live_details?.match_summary?.home_scores}</spcn>
                                                <h6>{highlights?.live_details?.match_summary?.away_scores}</h6>
                                            </div>
                                            <div>
                                                <h6>{still_to_bat_ins2.map((item, key) => <a key={key} href="#">{item.player_name}</a>)}</h6>
                                                <p>{highlights?.live_details?.scorecard?.[1]?.fow}</p>
                                            </div>
                                            <Table pagination={false} columns={bolingcolumns} dataSource={highlights?.live_details?.scorecard?.[1]?.bowling} size="middle" />
                                        </div>

                                        <div className="scorecard-tab">
                                            <h5>{highlights?.live_details?.scorecard?.[1]?.title}</h5>
                                            <Table pagination={false} columns={womencolumns} dataSource={highlights?.live_details?.scorecard?.[1]?.batting} size="middle" />
                                            <div className="total-scre">
                                                <h6>TOTAL</h6>
                                                <spcn>{highlights?.live_details?.match_summary?.home_scores}</spcn>
                                                <h6>{highlights?.live_details?.match_summary?.away_scores}</h6>
                                            </div>

                                            <div>

                                                <p>{highlights?.live_details?.scorecard?.[1]?.fow}</p>
                                            </div>
                                            <Table pagination={false} columns={bolingwomencolumns} dataSource={highlights?.live_details?.scorecard?.[1]?.bowling} size="middle" />
                                        </div>

                                    </TabPane>

                                    <TabPane tab="Match Details" key="3">
                                        <h5>MATCH DETAILS</h5>
                                        <Table pagination={false} columns={matchcolumns} dataSource={data} size="small" />

                                    </TabPane>
                                </Tabs>


                            </TabPane>

                            {/*  Highlights */}
                            <TabPane tab=" Highlights" key="3">
                                <Tabs defaultActiveKey="3" onChange={setTab} >
                                    <Tabs.TabPane tab="AUS 1st Inns" key="1">
                                        <div className="comprehensive">
                                            <Row>
                                                <Col span={2}>
                                                    <h5>49.1</h5>
                                                </Col>
                                                <Col span={22}>
                                                    Sam Curran to Agar, <span>SIX,</span> wow he's nailed this! Full into the pads, and Agar smokes it over midwicket. Goes deep into the stands
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={2}>
                                                    <h5>49</h5>
                                                </Col>
                                                <Col span={20}>
                                                    Willey to Starc, <span>out</span> Caught by Woakes!! Short of length into the hip, Starc pulls it crisply in the air but it's straight to deep backward square. Australia not getting the flourish they're looking for towards the end. Wickets are tumbling instead. <span>Starc c Woakes b Willey 0(1)</span>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={2}>
                                                    <h5>48.2</h5>
                                                </Col>
                                                <Col span={20} >
                                                    Willey to Mitchell Marsh, 1 run, steps across the stumps and drives this wide yorker to deep cover. That brings up his <span>fifty</span>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={2}>
                                                    <h5>47.1</h5>
                                                </Col>
                                                <Col span={20}>
                                                    Woakes to Stoinis, <span>out</span> Bowled!! Big swing from Stoinis but this slower ball stays a touch low. It scratches the toe-end of his bat before hitting middle stump less than halfway up. Good bit of deception from Woakes, holding it back in his fingers while floating it up. <span>Stoinis b Woakes 13(14) [6s-1]</span>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={2}>
                                                    <h5>46.1</h5>
                                                </Col>
                                                <Col span={20} >
                                                    Willey to Stoinis, <span>SIX,</span> crunched over long-on! In the slot from Willey, and Stoinis clears the front leg for a clean swing
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={2}>
                                                    <h5>44.4</h5>
                                                </Col>
                                                <Col span={20} >
                                                    Sam Curran to Mitchell Marsh, <span>SIX, just about clears the ropes!</span> It's a full delivery on middle, Marsh swipes across the line, doesn't really middle it, but it's not the longest boundary there
                                                </Col>
                                            </Row>
                                        </div>
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="ENG 1st Inns" key="2"></Tabs.TabPane>
                                </Tabs>
                            </TabPane>

                            {/*  Full Commentary */}
                            <TabPane tab="Full Commentary" key="4">
                                <Tabs defaultActiveKey="4" onChange={setTab} >
                                    <Tabs.TabPane tab="Preview" key="1">
                                        <div className="maych-info">
                                            <Row>
                                                <Col span={4}>
                                                    <h5>MATCH INFO</h5>
                                                </Col>
                                                <Col span={19} offset={1}>
                                                    The players are out in the middle - Woakes is back and he'll take the new ball for England. Two slips in place..
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={4}>
                                                    <Row>
                                                        <Col span={2}>
                                                            <h6>Match</h6>
                                                        </Col>
                                                        <Col span={15} offset={7}>
                                                            <p>AUS v ENG,</p>
                                                            <p>England tour of</p>
                                                            <p>Australia, 2022</p>
                                                        </Col>
                                                    </Row>
                                                    <div className="change"></div>
                                                </Col>
                                                <Col span={19} offset={1}>
                                                    One change for Australia with Pat Cummins being rested, the surprise though is that Josh Hazlewood has been handed over the captaincy duties. England have brought back their big guns - Moeen Ali, Sam Curran, Chris Woakes and Adil Rashid are all back. Moeen is leading today with Jos Buttler rested
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={4}>
                                                    <Row>
                                                        <Col span={1}>
                                                            <h6>Date</h6>
                                                        </Col>
                                                        <Col span={15} offset={7}>
                                                            <p>Nov 19, 2022</p>
                                                        </Col>
                                                    </Row>
                                                    <div className="change"></div>
                                                </Col>
                                                <Col span={19} offset={1}>
                                                    <h4>Teams:</h4>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={4}>
                                                    <Row>
                                                        <Col span={1}>
                                                            <h6>Toss</h6>
                                                        </Col>
                                                        <Col span={15} offset={7}>
                                                            <p>Australia (Batting)</p>
                                                        </Col>
                                                    </Row>
                                                    <div className="change"></div>
                                                </Col>
                                                <Col span={19} offset={1}>
                                                    <p><span>England</span> (Playing XI): Jason Roy, Philip Salt, Dawid Malan, James Vince, Sam Billings(w), Moeen Ali(c), Chris Woakes, Sam Curran, Liam Dawson, David Willey, Adil Rashid</p>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={4}>
                                                    <Row>
                                                        <Col span={1}>
                                                            <h6>Time</h6>
                                                        </Col>
                                                        <Col span={15} offset={7}>
                                                            <p>8:50 AM GMT</p>
                                                        </Col>
                                                    </Row>
                                                    <div className="change"></div>
                                                </Col>
                                                <Col span={19} offset={1}>

                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col span={4}>
                                                    <Row>
                                                        <Col span={1}>
                                                            <h6>Venue</h6>
                                                        </Col>
                                                        <Col span={15} offset={7}>
                                                            <p>Sydney Cricket</p>
                                                            <p>Ground,Sydney</p>
                                                        </Col>
                                                    </Row>
                                                    <div className="change"></div>
                                                </Col>
                                                <Col span={19} offset={1}>

                                                </Col>
                                            </Row>

                                        </div>
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="AUS Inns" key="2"></Tabs.TabPane>
                                    <Tabs.TabPane tab="ENG Inns" key="3"></Tabs.TabPane>
                                </Tabs>
                            </TabPane>

                            {/*  Live Blog */}
                            <TabPane tab=" Live Blog" key="5">
                                There is no live blog for this match.
                            </TabPane>


                            {/* Match Facts */}
                            <TabPane tab="Match Facts" key="6">

                                <div className="maych-info">
                                    <h5>Match Info</h5>
                                    <Row>
                                        <Col span={4}>
                                            <h6>Match: INFO</h6>
                                        </Col>
                                        <Col span={20} >
                                            The players are out in the middle - Woakes is back and he'll take the new ball for England. Two slips in place..
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={4}>
                                            <h6>Date:</h6>
                                        </Col>
                                        <Col span={20} >
                                            Saturday, November 19, 2022
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={4}>
                                            <h6>2022Toss:</h6>
                                        </Col>
                                        <Col span={20} >
                                            Australia won the toss and opt to bat
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={4}>
                                            <h6>Time:</h6>
                                        </Col>
                                        <Col span={20} >
                                            8:50 AM
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={4}>
                                            <h6>Venue:</h6>
                                        </Col>
                                        <Col span={20} >
                                            Sydney Cricket Ground, Sydney
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={4}>
                                            <h6>Umpires:</h6>
                                        </Col>
                                        <Col span={20} >
                                            Rod Tucker, Sam Nogajski
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={4}>
                                            <h6>Third Umpire:</h6>
                                        </Col>
                                        <Col span={20} >
                                            Paul Reiffel
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={4}>
                                            <h6>Match Referee:</h6>
                                        </Col>
                                        <Col span={20} >
                                            David Boon
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={4}>
                                            <h6>Australia Squad:</h6>
                                        </Col>
                                        <Col span={20} ></Col>
                                    </Row>

                                    <Row>
                                        <Col span={4}>
                                            <h6>Playing:</h6>
                                        </Col>
                                        <Col span={20} >
                                            <span><a href="#">David Warner, Travis Head, Steven Smith, Marnus Labuschagne, Alex Carey (wk), Mitchell Marsh, Marcus Stoinis, Ashton Agar, Mitchell Starc, Adam Zampa, Josh Hazlewood (c) </a></span>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={4}>
                                            <h6>Bench:</h6>
                                        </Col>
                                        <Col span={20} >
                                            <span><a href="#">Sean Abbott, Pat Cummins, Josh Inglis</a></span>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={4}>
                                            <h6>England Squad:</h6>
                                        </Col>
                                        <Col span={20} ></Col>
                                    </Row>

                                    <Row>
                                        <Col span={4}>
                                            <h6>Playing:</h6>
                                        </Col>
                                        <Col span={20} >
                                            <span><a href="#">Jason Roy, Philip Salt, Dawid Malan, James Vince, Sam Billings (wk), Moeen Ali (c), Chris Woakes, Sam Curran, Liam Dawson, David Willey, Adil Rashid</a></span>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={4}>
                                            <h6>Bench:</h6>
                                        </Col>
                                        <Col span={20} >
                                            <span><a href="#">Jos Buttler, Chris Jordan, Luke Wood, Olly Stone</a></span>
                                        </Col>
                                    </Row>

                                </div>

                                <div className="maych-info">
                                    <h5>Venue Guide</h5>
                                    <Row>
                                        <Col span={4}>
                                            <h6>Stadium:</h6>
                                        </Col>
                                        <Col span={20} >
                                            Sydney Cricket Ground
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={4}>
                                            <h6>City:</h6>
                                        </Col>
                                        <Col span={20} >
                                            Sydney
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={4}>
                                            <h6>Capacity:</h6>
                                        </Col>
                                        <Col span={20} >
                                            48,000
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={4}>
                                            <h6>Measures:</h6>
                                        </Col>
                                        <Col span={20} >
                                            154m square, 156m straight
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={4}>
                                            <h6>Ends:</h6>
                                        </Col>
                                        <Col span={20} >
                                            Paddington End, Randwick End
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={4}>
                                            <h6>Hosts to:</h6>
                                        </Col>
                                        <Col span={20} >
                                            New South Wales, Sydney Sixers
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={4}>
                                            <h6>Also Hosts:</h6>
                                        </Col>
                                        <Col span={20} >
                                            Australian Rules Football (Sydney Swans)
                                        </Col>
                                    </Row>
                                </div>
                            </TabPane>

                            {/*  News*/}
                            <TabPane tab=" News" key="7">
                                <Row>
                                    <Col span={5}>
                                        <Image preview={false}
                                            width={200}
                                            src={cricketer}
                                        />
                                    </Col>
                                    <Col span={19} >
                                        <p>ENGLAND TOUR OF AUSTRALIA 2022</p>
                                        <span><a href="#">Australia secure series win with commanding all-round display</a></span>
                                        <p>Half centuries by Sam Billings and James Vince went in vain as Australia won the second ODI by 72 runs</p>
                                        <p>2d ago</p>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col span={5}>
                                        <Image preview={false}
                                            width={200}
                                            src={cricketer}
                                        />
                                    </Col>
                                    <Col span={19} >
                                        <p>ENGLAND TOUR OF AUSTRALIA, 2022</p>
                                        <span><a href="#">Middle order stands tall as Australia post 280</a></span>
                                        <p>While Steve Smith missed his century by six runs, Marnus Labuschagne and Mitchell Marsh hit fifties</p>
                                        <p>Nov 19 2022</p>
                                    </Col>
                                </Row>
                            </TabPane>

                            {/* Photos */}
                            <TabPane tab="  Photos" key="8">
                                There is no live blog for this match.
                            </TabPane>





                        </Tabs>

                    </div>
                </div>

            </div >
        </>
    );
}

export default ScoreBoard;
