import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import moment from "moment";
import Config from '../../common/Config'
import Flags from "../../common/Flags";
import { Col, Row, Image } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import SocketApis from '../../utility/socket-apis'
import { getHomeFixtures } from "../../store/ScoreRedux";
import Flag from '../../assets/image/flag.png';

const responsive = {
    0: {
        items: 1.5,
    },
    480: {
        items: 1.5,
    },
    768: {
        items: 3,
    }
}

function HomeSlider(props) {
    const { navigate } = props
    const dispatch = useDispatch()
    const fixtures = useSelector((state) => state.score.fixtures)

    useEffect(() => {
        let date = new Date()
        let toDate = `${date.getFullYear()}-${date.getMonth() < 9 ? "0" + (Number(date.getMonth()) + 1) : date.getMonth()}-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`
        date.setDate(date.getDate() - 1);
        let fromDate = `${date.getFullYear()}-${date.getMonth() < 9 ? "0" + (Number(date.getMonth()) + 1) : date.getMonth()}-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`
        dispatch(getHomeFixtures({ filters: [["Live Score Fixtures", "date", "Between", [fromDate, toDate]]] }))
        return () => {
            for (let item of fixtures) {
                if (item.status === 'Fixture') {
                    SocketApis.unSubscribe(item.name)
                }
            }
        }
    }, []);

    useEffect(() => {
        for (let item of fixtures) {
            if (item.status === 'Fixture' && Config.checkTime(item.datetime)) {
                SocketApis.subscribe(item.name)
            }
        }
    }, [fixtures]);


    const checkImg = (name) => {
        return <img src={Flags[name] ? Flags[name] : Flags['NoImg']} className="flagimg" />
    }

    if (fixtures.length === 0) {
        return null
    }


    return (<OwlCarousel className='owl-theme' responsive={responsive} margin={9} autoplay={true} nav={false}>
        {fixtures.map((item, key) => {
            let score = null
            return <div key={key} id={`live_home_${item.name}`} className='item'>
                {/* <div className="trending_news">
                    <div className="lanka" onClick={() => navigate(`/match-news/${item.name}`)}>
                        <h6>{Config.checkDate(item.date)} At {moment.utc(item.datetime).format('hh:mm A')} . <span> {item.match_subtitle} .</span> {item.status}</h6>
                        <div className='srilanka'>
                            {checkImg(item?.home?.name)} <span> {item?.home?.name}</span> <span id="live_home" className="red">{score ? score?.match_summary?.home_scores : ''}</span>
                        </div>
                        <div className='srilanka'>
                            {checkImg(item?.away?.name)}  <span>{item?.away?.name} </span> <span id="live_away" className="red">{score ? score?.match_summary?.away_scores : ''}</span>
                        </div>
                        <span id="live_result">{item.status === 'Complete' ? <p>{item.result} - <span>{moment.utc(item.datetime).format('Do MMM YYYY')}</span></p> : <p>Match starts in <span>{moment.utc(item.date).format('Do MMM YYYY hh:mm A')}</span></p>}</span>
                        <div className="lanka-border"></div>
                        <ul>
                            <li>{item.venue}</li>
                        </ul>
                    </div>
                </div> */}
                <div className="finshed">
                    <div className="lanka">
                        <Row>
                            <Col span={9}>
                                <h5>FINISHED</h5>
                            </Col>
                            <Col span={7} offset={8}>
                                <h6>Today 07:03 am</h6>
                            </Col>
                        </Row>
                        <div className="border-box"></div>
                        <div className="false">
                            <div className="false">
                                <Image preview={false} src={Flag} />
                                <h6>NZ</h6>
                            </div>
                            <h6><span>(ov 20/20)</span>280/5</h6>
                        </div>

                        <div className="false">
                            <div className="false">
                                <Image preview={false} src={Flag} />
                                <h6>BAN</h6>
                            </div>
                            <h6><span>(ov 20/20)</span>160/7</h6>
                        </div>
                        <h5>New Zealand bate Bangladesh by 48 runs</h5>
                    </div>

                    <div className="false-zealand">
                        <Row>
                            <Col span={12}>
                                <h5>View Details</h5>
                            </Col>
                            <Col span={12} >
                                <h6>New Zealand T20 Tri-Series</h6>
                            </Col>
                        </Row>
                    </div>

                </div>


            </div>
        })}
    </OwlCarousel>);
}

export default HomeSlider;