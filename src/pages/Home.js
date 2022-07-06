import React, { useEffect } from "react";
import { Carousel, DatePicker, Switch } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getNewsList } from '../store/AuthRedux'
import { Helmet } from "react-helmet";

import Loader from "../components/Loader";
import players from "../assets/image/players.png";


function Home() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const { t } = useTranslation();
    const newsList = useSelector((state) => state.auth.newsList)

    useEffect(() => {
        dispatch(getNewsList())
    }, []);
    
    console.log(newsList)

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="nvbanner-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="bnr-lft">
                                <div className="bnr-lft-title" data-aos="fade-up">
                                    <div className="news-heading">
                                        <h5>Headline</h5>
                                    </div>
                                    <div className="news-slider owl-carousel" data-carousel-loop="true" data-carousel-items="1"
                                        data-carousel-nav="false" data-carousel-dots="false" data-carousel-autoplay="true"
                                        data-carousel-mousedrag="true" data-carousel-animateout="null">
                                        <div className="elepse">
                                            <a href="homepage.html#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
                                                vulputate venenatis facilisi imperdiet lorem ipsum</a>
                                        </div>
                                        <div className="elepse">
                                            <a href="homepage.html#"> is simply dummy text of the printing and typesetting industry.</a>
                                        </div>
                                        <div className="elepse">
                                            <a href="homepage.html#">It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout.</a>
                                        </div>
                                        <div className="elepse">
                                            <a href="homepage.html#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
                                                vulputate venenatis facilisi imperdiet lorem ipsum</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bnr-lft-cnt">
                                    <div className="row">
                                        <div className="col-md-7" data-aos="fade-up" data-aos-delay="50">

                                            <div className="btl-simple-card">
                                                <img src="assets/img/newsvolt/card-mixed/banner-card1.jpg" alt="image" />
                                                <div className="btlc-content-wrapper">
                                                    <a href="single-tag-page.html"><span className="btn">Traveling</span></a>
                                                    <div className="btlc-marking">
                                                        <span className="icofont-star"></span>
                                                    </div>
                                                    <div className="btlc-content">
                                                        <div className="btcl-content-status">
                                                            <span>7:35 AM</span>
                                                            <span>16 Nov, 2020</span>
                                                        </div>
                                                        <h3><a href="single-post-details.html" className="clr-white">A wonderful
                                                            serenity has taken possession</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="bnr-lft-cnt-rgt">

                                                <div href="single-post-details.html" className="btl-simple-card" data-aos="fade-up"
                                                    data-aos-delay="100">
                                                    <img src="assets/img/newsvolt/card-mixed/banner-card2.jpg" alt="image" />
                                                    <div className="btlc-content-wrapper">
                                                        <a href="single-tag-page.html"><span className="btn">Technology</span></a>
                                                        <div className="btlc-marking">
                                                            <span className="icofont-star"></span>
                                                        </div>
                                                        <div className="btlc-content">
                                                            <div className="btcl-content-status">
                                                                <span>7:35 AM</span>
                                                                <span>16 Nov, 2020</span>
                                                            </div>
                                                            <h3><a href="single-post-details.html">I throw myself down among the
                                                                tall grass</a></h3>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div href="single-post-details.html" className="btl-simple-card" data-aos="fade-up"
                                                    data-aos-delay="150">
                                                    <img src="assets/img/newsvolt/card-mixed/banner-card3.jpg" alt="image" />
                                                    <div className="btlc-content-wrapper">
                                                        <a href="single-tag-page.html"><span className="btn">Fashion</span></a>
                                                        <div className="btlc-marking">
                                                            <span className="icofont-star"></span>
                                                        </div>
                                                        <div className="btlc-content">
                                                            <div className="btcl-content-status">
                                                                <span>7:35 AM</span>
                                                                <span>16 Nov, 2020</span>
                                                            </div>
                                                            <h3><a href="single-post-details.html">would I could describe these
                                                                conceptions</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <aside className="header-aside" data-aos="fade-up">
                                <h4>Latest News</h4>
                                <div className="card-list card-counting">
                                    {newsList.map((item, key) => <div key={key} className="single-card-list card-border">
                                        <div className="card-list-img">
                                            <img src="assets/img/newsvolt/card-xs-img/card-xs-1.jpg" alt="image" />
                                        </div>
                                        <div className="card-list-cont">
                                            <div className="card-list-discript">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <div className="card-list-heading">
                                                <h6><NavLink to={`/details/${item.name}`}>{item.title} . . .</NavLink></h6>
                                            </div>
                                        </div>
                                    </div>)}

                                </div>
                                <div className="video-card">
                                    <img src="assets/img/newsvolt/card-mixed/video-card.png" alt="image" />
                                    <a className="video-icon popup-youtube" href="https://www.youtube.com/watch?v=pBFQdxA-apI">
                                        <img src="assets/img/svg/play-btn.svg" alt="image" />
                                    </a>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>

            <section className="newsupdate-area">
                <div className="container">
                    <div className="title-heading" data-title="Daily Update" data-aos="zoom-in">
                        <h2 data-aos="fade-up" data-aos-delay="50">Daily Update News</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-9">
                            <div className="news-lft-wrapper">
                                <div className="news-card-wrapper">
                                    <div className="ns-mini-card">

                                        <div href="single-post-details.html" className="btl-simple-card" data-aos="fade-up">
                                            <img src="assets/img/newsvolt/news-card/card-mini-1.jpg" alt="image" />
                                            <div className="btlc-content-wrapper">
                                                <a href="single-tag-page.html"><span className="btn btn-red">Travel</span></a>
                                                <div className="btlc-content">
                                                    <div className="btcl-content-status">
                                                        <span>7:35 AM</span>
                                                        <span>16 Nov, 2020</span>
                                                    </div>
                                                    <h3>Sorbed in the exquisite sense of mere tranquil</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div href="single-post-details.html" className="btl-simple-card" data-aos="fade-up"
                                            data-aos-delay="50">
                                            <img src="assets/img/newsvolt/news-card/card-mini-2.jpg" alt="image" />
                                            <div className="btlc-content-wrapper">
                                                <a href="single-tag-page.html"><span className="btn btn-red">Technology</span></a>
                                                <div className="btlc-content">
                                                    <div className="btcl-content-status">
                                                        <span>7:35 AM</span>
                                                        <span>16 Nov, 2020</span>
                                                    </div>
                                                    <h3><a href="single-post-details.html">A collection of textile samples lay
                                                        spread</a></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div href="single-post-details.html" className="btl-simple-card" data-aos="fade-up"
                                        data-aos-delay="50">
                                        <img src="assets/img/newsvolt/news-card/card-lg-1.jpg" alt="image" />
                                        <div className="btlc-content-wrapper">
                                            <a href="single-tag-page.html"><span className="btn btn-red">Medicare</span></a>
                                            <div className="btlc-content">
                                                <div className="btcl-content-status">
                                                    <span>7:35 AM</span>
                                                    <span>16 Nov, 2020</span>
                                                </div>
                                                <h3><a href="single-post-details.html">A wonderful serenity has taken
                                                    possession</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ns-card-list" data-aos="fade-up" data-aos-delay="100">

                                    <div className="nsc-list-single">
                                        <div className="nsc-list-img">
                                            <a href="single-post-details.html"><img
                                                src="assets/img/newsvolt/card-xs-img/card-xs-6.jpg" alt="image" /></a>
                                        </div>
                                        <div className="nsc-list-content">
                                            <div className="nsc-list-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">I should be incapable of drawing a single</a>
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="nsc-list-single">
                                        <div className="nsc-list-img">
                                            <a href="single-post-details.html"><img
                                                src="assets/img/newsvolt/card-xs-img/card-xs-4.jpg" alt="image" /></a>
                                        </div>
                                        <div className="nsc-list-content">
                                            <div className="nsc-list-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">A wonderful serenity has taken possession</a>
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="nsc-list-single">
                                        <div className="nsc-list-img">
                                            <a href="single-post-details.html"><img
                                                src="assets/img/newsvolt/card-xs-img/card-xs-5.jpg" alt="image" /></a>
                                        </div>
                                        <div className="nsc-list-content">
                                            <div className="nsc-list-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">I throw myself down among the tall grass</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="news-vcard-wrapper">

                                <div className="news-vcard-single" data-aos="fade-up">
                                    <a href="single-tag-page.html" className="btn-card btn-red">Fashion</a>
                                    <div className="news-vcard-img">
                                        <img src="assets/img/newsvolt/news-card/video-img1.jpg" alt="image" />
                                        <div className="news-vcard-play">
                                            <a className="popup-youtube2" href="https://vimeo.com/67341671"><img
                                                src="assets/img/svg/play-btn.svg" alt="image" /></a>
                                        </div>
                                    </div>
                                    <div className="news-vcard-content">
                                        <div className="news-vcard-title">
                                            <span>7:35 AM</span>
                                            <span>16 Nov, 2020</span>
                                        </div>
                                        <h3><a href="single-post-details.html">A wonderful serenity has taken possession</a>
                                        </h3>
                                    </div>
                                </div>

                                <div className="news-vcard-single" data-aos="fade-up" data-aos-delay="50">
                                    <a href="single-tag-page.html" className="btn-card btn-red">Fashion</a>
                                    <div className="news-vcard-img">
                                        <img src="assets/img/newsvolt/news-card/video-img2.jpg" alt="image" />
                                        <div className="news-vcard-play">
                                            <a className="popup-youtube3" href="https://vimeo.com/61220773"><img
                                                src="assets/img/svg/play-btn.svg" alt="image" /></a>
                                        </div>
                                    </div>
                                    <div className="news-vcard-content">
                                        <div className="news-vcard-title">
                                            <span>7:35 AM</span>
                                            <span>16 Nov, 2020</span>
                                        </div>
                                        <h3><a href="single-post-details.html">like these sweet mornings of spring which </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="weekly-update-area">
                <div className="container">
                    <div className="title-heading" data-title="Weekly Update" data-aos="zoom-in">
                        <h2 data-aos="fade-up" data-aos-delay="50">This Week Update</h2>
                    </div>

                    <div className="weekly-tab-wrapper">
                        <ul className="nav" role="tablist" data-aos="fade-up" data-aos-delay="100">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="pill" data-bs-target="#travel" role="tab"
                                    aria-selected="true">Travel</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#food" role="tab"
                                    aria-selected="false">Food</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="pill" data-bs-target="#medicare" role="tab"
                                    aria-selected="false">Sports</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="pill" data-bs-target="#fashion" role="tab"
                                    aria-selected="false">Fashion</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="pill" data-bs-target="#fitness" role="tab"
                                    aria-selected="false">Fitness</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent" data-aos="fade-up" data-aos-delay="150">
                            <div className="tab-pane fade" id="travel" role="tabpanel">
                                <div className="weekly-list-item">

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/mega-menu-img/travel/travel-1.jpg" alt="image" />
                                            <div className="news-vcard-play">
                                                <a className="vimo1" href="https://vimeo.com/63729905"><img
                                                    src="assets/img/svg/play-btn.svg" alt="image" /></a>
                                            </div>
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">a thousand unknown plants are noticed by
                                                me</a></h3>
                                        </div>
                                    </div>

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/mega-menu-img/travel/travel-2.jpg" alt="image" />
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>10 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">I throw myself down among the tall grass </a>
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/mega-menu-img/travel/travel-3.jpg" alt="image" />
                                            <div className="news-vcard-play">
                                                <a className="vimo2" href="https://vimeo.com/27138679"><img
                                                    src="assets/img/svg/play-btn.svg" alt="image" /></a>
                                            </div>
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">A wonderful serenity has taken possession of
                                                my entire soul,</a></h3>
                                        </div>
                                    </div>

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/mega-menu-img/travel/travel-4.jpg" alt="image" />
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>18 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">ike these sweet mornings of spring which</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show active" id="food" role="tabpanel">
                                <div className="weekly-list-item">

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/newsvolt/tabs/tabs3.jpg" alt="image" />
                                            <div className="news-vcard-play">
                                                <a className="vimo3" href="https://vimeo.com/27138679"><img
                                                    src="assets/img/svg/play-btn.svg" alt="image" /></a>
                                            </div>
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">Of my entire soul, like these sweet mornings
                                                of spring</a></h3>
                                        </div>
                                    </div>

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/newsvolt/tabs/tabs1.jpg" alt="image" />
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">A collection of textile samples lay
                                                spread</a></h3>
                                        </div>
                                    </div>

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/newsvolt/tabs/tabs2.jpg" alt="image" />
                                            <div className="news-vcard-play">
                                                <a className="vimo4" href="https://vimeo.com/27138679"><img
                                                    src="assets/img/svg/play-btn.svg" alt="image" /></a>
                                            </div>
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">I am alone, and feel the charm of
                                                existence</a></h3>
                                        </div>
                                    </div>

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/newsvolt/tabs/tabs4.jpg" alt="image" />
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">This spot, which was created For the
                                                bliss</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="medicare" role="tabpanel">
                                <div className="weekly-list-item">

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/mega-menu-img/sports/sports-1.jpg" alt="image" />
                                            <div className="news-vcard-play">
                                                <a className="vimo5" href="https://vimeo.com/27138679"><img
                                                    src="assets/img/svg/play-btn.svg" alt="image" /></a>
                                            </div>
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">Sorbed in the exquisite sense of mere
                                                tranquil . . .</a></h3>
                                        </div>
                                    </div>

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/mega-menu-img/sports/sports-2.jpg" alt="image" />
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">I am so happy, my dear friend, so absorbed
                                                in</a></h3>
                                        </div>
                                    </div>

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/mega-menu-img/sports/sports-3.jpg" alt="image" />
                                            <div className="news-vcard-play">
                                                <a className="vimo6" href="https://vimeo.com/27138679"><img
                                                    src="assets/img/svg/play-btn.svg" alt="image" /></a>
                                            </div>
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">Sorbed in the exquisite sense of mere</a>
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/mega-menu-img/sports/sports-4.jpg" alt="image" />
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">which I enjoy with my whole heart</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="fashion" role="tabpanel">
                                <div className="weekly-list-item">

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/mega-menu-img/lifestyle/lifestyle-1.jpg" alt="image" />
                                            <div className="news-vcard-play">
                                                <a className="vimo7" href="https://vimeo.com/37658629"><img
                                                    src="assets/img/svg/play-btn.svg" alt="image" /></a>
                                            </div>
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">I am so happy, my dear friend, so absorbed
                                                in</a></h3>
                                        </div>
                                    </div>

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/mega-menu-img/lifestyle/lifestyle-2.jpg" alt="image" />
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">I am alone, and feel the charm of
                                                existence</a></h3>
                                        </div>
                                    </div>

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/mega-menu-img/lifestyle/lifestyle-3.jpg" alt="image" />
                                            <div className="news-vcard-play">
                                                <a className="vimo8" href="https://vimeo.com/10253812"><img
                                                    src="assets/img/svg/play-btn.svg" alt="image" /></a>
                                            </div>
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">This spot, which was created For the bliss of
                                                souls like mine.</a></h3>
                                        </div>
                                    </div>

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/mega-menu-img/lifestyle/lifestyle-4.jpg" alt="image" />
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">Sorbed in the exquisite sense of mere
                                                tranquil</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="fitness" role="tabpanel">
                                <div className="weekly-list-item">

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/mega-menu-img/gym/gym-1.jpg" alt="image" />
                                            <div className="news-vcard-play">
                                                <a className="vimo9" href="https://vimeo.com/192089758"><img
                                                    src="assets/img/svg/play-btn.svg" alt="image" /></a>
                                            </div>
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">This spot, which was created For the bliss of
                                                souls like mine.</a></h3>
                                        </div>
                                    </div>

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/mega-menu-img/gym/gym-2.jpg" alt="image" />
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">I am alone, and feel the charm of
                                                existence</a></h3>
                                        </div>
                                    </div>

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/mega-menu-img/gym/gym-3.jpg" alt="image" />
                                            <div className="news-vcard-play">
                                                <a className="vimo10" href="https://vimeo.com/39829860"><img
                                                    src="assets/img/svg/play-btn.svg" alt="image" /></a>
                                            </div>
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">you can let them write a guest blog on your
                                                website</a></h3>
                                        </div>
                                    </div>

                                    <div className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src="assets/img/mega-menu-img/gym/gym-4.jpg" alt="image" />
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>7:35 AM</span>
                                                <span>16 Nov, 2020</span>
                                            </div>
                                            <h3><a href="single-post-details.html">a blog about your business on their
                                                website</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fd-carousel-wrapper owl-carousel" data-carousel-loop="false" data-carousel-items="3"
                        data-carousel-nav="false" data-carousel-dots="true" data-carousel-md="2" data-carousel-sm="2"
                        data-carousel-lg="3" data-carousel-xl="3" data-aos="fade-up">

                        <div className="fdc-single-item">
                            <div className="fdc-img">
                                <a href="homepage.html#">
                                    <img src="assets/img/newsvolt/food-slide/fdc-img1.jpg" alt="image" />
                                </a>
                            </div>
                            <div className="fdc-content">
                                <div className="fdc-title">
                                    <span>7:35 AM</span>
                                    <span>16 Nov, 2020</span>
                                </div>
                                <h3><a href="single-post-details.html">A collection of textile samples lay spread</a></h3>
                            </div>
                        </div>

                        <div className="fdc-single-item">
                            <div className="fdc-img">
                                <a href="homepage.html#">
                                    <img src="assets/img/newsvolt/food-slide/fdc-img2.jpg" alt="image" />
                                </a>
                            </div>
                            <div className="fdc-content">
                                <div className="fdc-title">
                                    <span>7:35 AM</span>
                                    <span>26 Nov, 2020</span>
                                </div>
                                <h3><a href="single-post-details.html">professional photographers of videographers</a></h3>
                            </div>
                        </div>

                        <div className="fdc-single-item">
                            <div className="fdc-img">
                                <a href="homepage.html#">
                                    <img src="assets/img/newsvolt/food-slide/fdc-img3.jpg" alt="image" />
                                </a>
                            </div>
                            <div className="fdc-content">
                                <div className="fdc-title">
                                    <span>7:35 AM</span>
                                    <span>28 Nov, 2020</span>
                                </div>
                                <h3><a href="single-post-details.html"> if they have good writing skills, you can ask them to
                                    blog</a></h3>
                            </div>
                        </div>

                        <div className="fdc-single-item">
                            <div className="fdc-img">
                                <a href="homepage.html#">
                                    <img src="assets/img/newsvolt/food-slide/fdc-img1.jpg" alt="image" />
                                </a>
                            </div>
                            <div className="fdc-content">
                                <div className="fdc-title">
                                    <span>7:35 AM</span>
                                    <span>28 Nov, 2020</span>
                                </div>
                                <h3><a href="single-post-details.html">You can give guest bloggers the opportunity to experience
                                </a></h3>
                            </div>
                        </div>

                        <div className="fdc-single-item">
                            <div className="fdc-img">
                                <a href="homepage.html#">
                                    <img src="assets/img/newsvolt/food-slide/fdc-img2.jpg" alt="image" />
                                </a>
                            </div>
                            <div className="fdc-content">
                                <div className="fdc-title">
                                    <span>7:35 AM</span>
                                    <span>16 Nov, 2020</span>
                                </div>
                                <h3><a href="single-post-details.html">if they have good writing skills, you can ask them to
                                    blog</a></h3>
                            </div>
                        </div>

                        <div className="fdc-single-item">
                            <div className="fdc-img">
                                <a href="homepage.html#">
                                    <img src="assets/img/newsvolt/food-slide/fdc-img3.jpg" alt="image" />
                                </a>
                            </div>
                            <div className="fdc-content">
                                <div className="fdc-title">
                                    <span>7:35 AM</span>
                                    <span>28 Nov, 2020</span>
                                </div>
                                <h3><a href="single-post-details.html">your newsletter/e-newsletter to visitors</a></h3>
                            </div>
                        </div>

                        <div className="fdc-single-item">
                            <div className="fdc-img">
                                <a href="homepage.html#">
                                    <img src="assets/img/newsvolt/food-slide/fdc-img1.jpg" alt="image" />
                                </a>
                            </div>
                            <div className="fdc-content">
                                <div className="fdc-title">
                                    <span>7:35 AM</span>
                                    <span>16 Nov, 2020</span>
                                </div>
                                <h3><a href="single-post-details.html">Approach relevant travel magazines/e-magazines to see</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="pro-area" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="pro-wrapper">
                            <button className="btn btn-white-outline">Promotional Ad</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="category-area">
                <div className="container">
                    <div className="row">
                        <div className="category-wrapper">
                            <div className="single-category">
                                <div className="category-title" data-aos="fade-up">
                                    <button className="mr-100 mr-lg-50"><img src="assets/img/svg/camera.svg" alt="icon" />
                                        Photography</button>
                                    <a href="single-post-details.html">SEE ALL <i className="icofont-long-arrow-right"></i></a>
                                </div>
                                <div className="category-product" data-aos="fade-up">
                                    <div className="cp-img">
                                        <a href="single-post-details.html"><img src="assets/img/category/ct1.jpg"
                                            alt="image" /></a>
                                    </div>
                                    <div className="cp-content">
                                        <div className="cp-content-title">
                                            <ul>
                                                <li>7:35 AM</li>
                                                <li>16 Nov, 2020</li>
                                            </ul>
                                        </div>
                                        <h3><a href="single-post-details.html">A collection of textile samples lay spread</a>
                                        </h3>
                                        <p> I throw myself down among the tall grass by the trickling stream; and, as I lie
                                            close to the earth, a thousand unknown plants are noticed by me: when I hear the
                                            buzz of the little world among the stalks</p>
                                        <a href="single-post-details.html" className="btn btn-gray">Read More</a>
                                    </div>
                                </div>
                                <div className="category-list-product" data-aos="fade-up" data-aos-delay="50">
                                    <div className="cp-list-img">
                                        <a href="single-post-details.html"><img src="assets/img/category/ct-mini-1.jpg"
                                            alt="image" /></a>
                                    </div>
                                    <div className="cp-list-content">
                                        <div className="cp-content-title">
                                            <ul>
                                                <li>7:35 AM</li>
                                                <li>16 Nov, 2020</li>
                                            </ul>
                                        </div>
                                        <h3><a href="single-post-details.html">when I hear the buzz of the little world</a></h3>
                                        <p>A wonderful serenity has taken possession of my entire soul.</p>
                                    </div>
                                </div>
                                <div className="category-list-product" data-aos="fade-up" data-aos-delay="100">
                                    <div className="cp-list-img">
                                        <a href="single-post-details.html"><img src="assets/img/category/ct-mini-2.jpg"
                                            alt="image" /></a>
                                    </div>
                                    <div className="cp-list-content">
                                        <div className="cp-content-title">
                                            <ul>
                                                <li>7:35 AM</li>
                                                <li>16 Nov, 2020</li>
                                            </ul>
                                        </div>
                                        <h3><a href="single-post-details.html">I enjoy with my whole heart. I am alone</a></h3>
                                        <p>A wonderful serenity has taken possession of my entire soul.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="single-category sc-reverse">
                                <div className="category-title" data-aos="fade-up">
                                    <a href="single-post-details.html"><i className="icofont-long-arrow-left"></i>SEE ALL</a>
                                    <button className="ml-100 ml-lg-50"><img src="assets/img/svg/medicare.svg" alt="icon" />
                                        Medicare</button>
                                </div>
                                <div className="category-product" data-aos="fade-up">
                                    <div className="cp-img">
                                        <a href="single-post-details.html"><img src="assets/img/category/ct2.jpg"
                                            alt="image" /></a>
                                    </div>
                                    <div className="cp-content">
                                        <div className="cp-content-title">
                                            <ul>
                                                <li>7:35 AM</li>
                                                <li>16 Nov, 2020</li>
                                            </ul>
                                        </div>
                                        <h3><a href="single-post-details.html">A wonderful serenity has taken possession of</a>
                                        </h3>
                                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet
                                            mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm
                                            of existence in this spot, which was created for the bliss of souls like mine.</p>
                                        <a href="single-post-details.html" className="btn btn-gray">Read More</a>
                                    </div>
                                </div>
                                <div className="category-list-product" data-aos="fade-up" data-aos-delay="50">
                                    <div className="cp-list-img">
                                        <a href="single-post-details.html"><img src="assets/img/category/ct-mini-3.jpg"
                                            alt="image" /></a>
                                    </div>
                                    <div className="cp-list-content">
                                        <div className="cp-content-title">
                                            <ul>
                                                <li>7:35 AM</li>
                                                <li>16 Nov, 2020</li>
                                            </ul>
                                        </div>
                                        <h3><a href="single-post-details.html">A collection of textile samples lay spread</a>
                                        </h3>
                                        <p>A wonderful serenity has taken possession of my entire soul.</p>
                                    </div>
                                </div>
                                <div className="category-list-product" data-aos="fade-up" data-aos-delay="100">
                                    <div className="cp-list-img">
                                        <a href="single-post-details.html"><img src="assets/img/category/ct-mini-4.jpg"
                                            alt="image" /></a>
                                    </div>
                                    <div className="cp-list-content">
                                        <div className="cp-content-title">
                                            <ul>
                                                <li>7:35 AM</li>
                                                <li>16 Nov, 2020</li>
                                            </ul>
                                        </div>
                                        <h3><a href="single-post-details.html">earth seem to dwell in my soul and absorb its
                                            power</a></h3>
                                        <p>A wonderful serenity has taken possession of my entire soul.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="like-list-area">
                <div className="container">
                    <div className="row">
                        <div className="like-list-wrapper">
                            <div className="list-heading">
                                <h3 data-aos="fade-up">People Also Like</h3>
                                <a data-aos="fade-up" href="homepage.html#">SEE ALL<i className="icofont-long-arrow-right"></i></a>
                            </div>
                            <div className="like-list-content">

                                <div className="single-list-card" data-aos="fade-up">
                                    <div className="slc-img">
                                        <a href="single-post-details.html"><img src="assets/img/mini-img/mini-img1.jpg"
                                            alt="image" /></a>
                                    </div>
                                    <div className="slc-content">
                                        <ul className="slc-title">
                                            <li>7:35 AM</li>
                                            <li>16 Nov, 2020</li>
                                        </ul>
                                        <h4><a href="single-post-details.html">A wonderful serenity has taken possession</a>
                                        </h4>
                                    </div>
                                </div>

                                <div className="single-list-card" data-aos="fade-up" data-aos-delay="50">
                                    <div className="slc-img">
                                        <a href="single-post-details.html"><img src="assets/img/mini-img/mini-img2.jpg"
                                            alt="image" /></a>
                                    </div>
                                    <div className="slc-content">
                                        <ul className="slc-title">
                                            <li>7:35 AM</li>
                                            <li>18 Nov, 2020</li>
                                        </ul>
                                        <h4><a href="single-post-details.html">You only live once, but if you do it right, once
                                            is enough</a></h4>
                                    </div>
                                </div>

                                <div className="single-list-card" data-aos="fade-up" data-aos-delay="100">
                                    <div className="slc-img">
                                        <a href="single-post-details.html"><img src="assets/img/mini-img/mini-img3.jpg"
                                            alt="image" /></a>
                                    </div>
                                    <div className="slc-content">
                                        <ul className="slc-title">
                                            <li>7:35 AM</li>
                                            <li>16 Nov, 2020</li>
                                        </ul>
                                        <h4><a href="single-post-details.html">To live is the rarest thing in the world.</a>
                                        </h4>
                                    </div>
                                </div>

                                <div className="single-list-card" data-aos="fade-up" data-aos-delay="150">
                                    <div className="slc-img">
                                        <a href="single-post-details.html"><img src="assets/img/mini-img/mini-img4.jpg"
                                            alt="image" /></a>
                                    </div>
                                    <div className="slc-content">
                                        <ul className="slc-title">
                                            <li>7:35 AM</li>
                                            <li>26 Nov, 2020</li>
                                        </ul>
                                        <h4><a href="single-post-details.html">It is better to be hated for what you are</a>
                                        </h4>
                                    </div>
                                </div>

                                <div className="single-list-card" data-aos="fade-up" data-aos-delay="200">
                                    <div className="slc-img">
                                        <a href="single-post-details.html"><img src="assets/img/mini-img/mini-img5.jpg"
                                            alt="image" /></a>
                                    </div>
                                    <div className="slc-content">
                                        <ul className="slc-title">
                                            <li>7:35 AM</li>
                                            <li>27 Nov, 2020</li>
                                        </ul>
                                        <h4><a href="single-post-details.html">There are only two ways to live your life</a>
                                        </h4>
                                    </div>
                                </div>

                                <div className="single-list-card" data-aos="fade-up" data-aos-delay="250">
                                    <div className="slc-img">
                                        <a href="single-post-details.html"><img src="assets/img/mini-img/mini-img6.jpg"
                                            alt="image" /></a>
                                    </div>
                                    <div className="slc-content">
                                        <ul className="slc-title">
                                            <li>7:35 AM</li>
                                            <li>28 Nov, 2020</li>
                                        </ul>
                                        <h4><a href="single-post-details.html">It does not do to dwell on dreams and forget to
                                            live.</a></h4>
                                    </div>
                                </div>

                                <div className="single-list-card" data-aos="fade-up" data-aos-delay="300">
                                    <div className="slc-img">
                                        <a href="single-post-details.html"><img src="assets/img/mini-img/mini-img7.jpg"
                                            alt="image" /></a>
                                    </div>
                                    <div className="slc-content">
                                        <ul className="slc-title">
                                            <li>7:35 AM</li>
                                            <li>29 Nov, 2020</li>
                                        </ul>
                                        <h4><a href="single-post-details.html"> the good part is you get to decide how</a></h4>
                                    </div>
                                </div>

                                <div className="single-list-card" data-aos="fade-up" data-aos-delay="350">
                                    <div className="slc-img">
                                        <a href="single-post-details.html"><img src="assets/img/mini-img/mini-img8.jpg"
                                            alt="image" /></a>
                                    </div>
                                    <div className="slc-content">
                                        <ul className="slc-title">
                                            <li>7:35 AM</li>
                                            <li>30 Nov, 2020</li>
                                        </ul>
                                        <h4><a href="single-post-details.html">A wonderful serenity has taken possession</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tags-area">
                <div className="container">
                    <div className="row">
                        <div className="tags-wrapper">
                            <div className="list-heading">
                                <h3 data-aos="fade-up">Filter By Popular Tag</h3>
                                <a data-aos="fade-up" href="homepage.html#">SEE ALL<i className="icofont-long-arrow-right"></i></a>
                            </div>
                            <div className="tags-content">

                                <div className="tags-card" data-aos="fade-up">
                                    <div className="tags-img">
                                        <a href="homepage.html#"><img src="assets/img/tag/tag-img1.jpg" alt="image" /></a>
                                    </div>
                                    <div className="tag-content">
                                        <a href="homepage.html#"># photography</a>
                                    </div>
                                </div>

                                <div className="tags-card" data-aos="fade-up" data-aos-delay="50">
                                    <div className="tags-img">
                                        <a href="homepage.html#"><img src="assets/img/tag/tag-img2.jpg" alt="image" /></a>
                                    </div>
                                    <div className="tag-content">
                                        <a href="homepage.html#"># healthy food</a>
                                    </div>
                                </div>

                                <div className="tags-card" data-aos="fade-up" data-aos-delay="100">
                                    <div className="tags-img">
                                        <a href="homepage.html#"><img src="assets/img/tag/tag-img3.jpg" alt="image" /></a>
                                    </div>
                                    <div className="tag-content">
                                        <a href="homepage.html#">#technology</a>
                                    </div>
                                </div>

                                <div className="tags-card" data-aos="fade-up" data-aos-delay="150">
                                    <div className="tags-img">
                                        <a href="homepage.html#"><img src="assets/img/tag/tag-img4.jpg" alt="image" /></a>
                                    </div>
                                    <div className="tag-content">
                                        <a href="homepage.html#"># trendy fashion</a>
                                    </div>
                                </div>

                                <div className="tags-card" data-aos="fade-up" data-aos-delay="200">
                                    <div className="tags-img">
                                        <a href="homepage.html#"><img src="assets/img/tag/tag-img5.jpg" alt="image" /></a>
                                    </div>
                                    <div className="tag-content">
                                        <a href="homepage.html#"># health tips</a>
                                    </div>
                                </div>

                                <div className="tags-card" data-aos="fade-up" data-aos-delay="250">
                                    <div className="tags-img">
                                        <a href="homepage.html#"><img src="assets/img/tag/tag-img6.jpg" alt="image" /></a>
                                    </div>
                                    <div className="tag-content">
                                        <a href="homepage.html#"># gym for fit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="subscribe-area" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <div className="container">
                    <div className="row">
                        <div className="subscribe-wrapper">
                            <h3>Subscribe Newsletter</h3>
                            <div className="search-box">
                                <span><i className="icofont-envelope"></i></span>
                                <input type="text" placeholder="Enter  your mail" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Home;