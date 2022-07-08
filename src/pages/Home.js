import React, { useEffect } from "react";
import { Carousel, DatePicker, Switch } from 'antd';
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getNewsList } from '../store/AuthRedux'
import { Helmet } from "react-helmet";
import Config from "../common/Config";

import noData from "../assets/img/nodata.jpg";
import videoCard from "../assets/img/newsvolt/card-mixed/video-card.png";
import playBtn from "../assets/img/svg/play-btn.svg";
import camera from "../assets/img/svg/camera.svg";
import promoAdd from "../assets/img/promo-add.png";
import Loader from "../components/Loader";


function Home() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const { t } = useTranslation();
    const newsList = useSelector((state) => state.auth.newsList)

    // Headline
    let headline = newsList.filter(item => item.blog_category === 'news');

    // Latest News
    let latestNews = newsList.filter(item => item.blog_category === 'news');

    // Latest Vedios
    let latestVedios = JSON.parse(JSON.stringify(newsList))
    latestVedios.length = 1

    useEffect(() => {
        dispatch(getNewsList())
    }, []);

    console.log(latestVedios)

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
                                        {headline.map((item, key) => <div key={key} className="elepse">
                                            <NavLink to={`/details/${item.name}`}>{item.title}</NavLink>
                                        </div>)}
                                    </div>
                                </div>
                                <div className="bnr-lft-cnt">
                                    <div className="row">
                                        <div className="col-md-7" data-aos="fade-up" data-aos-delay="50">
                                            {newsList[0] && (<div className="btl-simple-card">
                                                <img src={newsList[0].meta_image ? `${Config.apiURL}${newsList[0].meta_image}` : noData} alt="image" />
                                                <div className="btlc-content-wrapper">
                                                    <NavLink to={`/details/${newsList[0].name}`}><span className="btn">{newsList[0].blog_category}</span></NavLink>
                                                    <div className="btlc-marking">
                                                        <span className="icofont-star"></span>
                                                    </div>
                                                    <div className="btlc-content">
                                                        <div className="btcl-content-status">
                                                            <span>{moment.utc(newsList[0].modified).format('hh:mm A')}</span>
                                                            <span>{moment.utc(newsList[0].modified).format('Do MMM YYYY')}</span>
                                                        </div>
                                                        <h3><NavLink to={`/details/${newsList[0].name}`}>{newsList[0].title}</NavLink></h3>
                                                    </div>
                                                </div>
                                            </div>)}
                                        </div>
                                        <div className="col-md-5">
                                            <div className="bnr-lft-cnt-rgt">
                                                {newsList[1] && (<div className="btl-simple-card" data-aos="fade-up"
                                                    data-aos-delay="100">
                                                    <img src={newsList[1].meta_image ? `${Config.apiURL}${newsList[1].meta_image}` : noData} alt="image" />
                                                    <div className="btlc-content-wrapper">
                                                        <NavLink to={`/details/${newsList[1].name}`}><span className="btn">{newsList[1].blog_category}</span></NavLink>
                                                        <div className="btlc-marking">
                                                            <span className="icofont-star"></span>
                                                        </div>
                                                        <div className="btlc-content">
                                                            <div className="btcl-content-status">
                                                                <span>{moment.utc(newsList[1].modified).format('hh:mm A')}</span>
                                                                <span>{moment.utc(newsList[1].modified).format('Do MMM YYYY')}</span>
                                                            </div>
                                                            <h3><NavLink to={`/details/${newsList[1].name}`}>{newsList[1].title}</NavLink></h3>
                                                        </div>
                                                    </div>
                                                </div>)}
                                                {newsList[2] && (<div className="btl-simple-card" data-aos="fade-up"
                                                    data-aos-delay="100">
                                                    <img src={newsList[2].meta_image ? `${Config.apiURL}${newsList[2].meta_image}` : noData} alt="image" />
                                                    <div className="btlc-content-wrapper">
                                                        <NavLink to={`/details/${newsList[2].name}`}><span className="btn">{newsList[2].blog_category}</span></NavLink>
                                                        <div className="btlc-marking">
                                                            <span className="icofont-star"></span>
                                                        </div>
                                                        <div className="btlc-content">
                                                            <div className="btcl-content-status">
                                                                <span>{moment.utc(newsList[2].modified).format('hh:mm A')}</span>
                                                                <span>{moment.utc(newsList[2].modified).format('Do MMM YYYY')}</span>
                                                            </div>
                                                            <h3><NavLink to={`/details/${newsList[2].name}`}>{newsList[2].title}</NavLink></h3>
                                                        </div>
                                                    </div>
                                                </div>)}
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
                                    {latestNews.map((item, key) => <div key={key} className="single-card-list card-border">
                                        <div className="card-list-img">
                                            <img src={item.meta_image ? `${Config.apiURL}${item.meta_image}` : noData} alt={item.title} />
                                        </div>
                                        <div className="card-list-cont">
                                            <div className="card-list-discript">
                                                <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                            </div>
                                            <div className="card-list-heading">
                                                <h6><NavLink to={`/details/${item.name}`}>{item.title} . . .</NavLink></h6>
                                            </div>
                                        </div>
                                    </div>)}
                                </div>
                                {latestVedios.map((item, key) => <div key={key} className="video-card">
                                    <img src={item.meta_image ? `${Config.apiURL}${item.meta_image}` : noData} alt={item.title} />
                                    <a className="video-icon">
                                        <img src={playBtn} alt="image" />
                                    </a>
                                </div>)}
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

                                        {newsList.map((item, key) => <div key={key} href="single-post-details.html" className="btl-simple-card" data-aos="fade-up">
                                            <img src="assets/img/newsvolt/news-card/card-mini-1.jpg" alt="image" />
                                            <div className="btlc-content-wrapper">
                                                <a href="single-tag-page.html"><span className="btn btn-red">Travel</span></a>
                                                <div className="btlc-content">
                                                    <div className="btcl-content-status">
                                                        <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                                        <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                                    </div>
                                                    <h3>{item.title}</h3>
                                                </div>
                                            </div>
                                        </div>)}


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

                                    {newsList.map((item, key) => <div key={key} className="nsc-list-single">
                                        <div className="nsc-list-img">
                                            <NavLink to={`/details/${item.name}`}><img
                                                src={item.meta_image ? `${Config.apiURL}${item.meta_image}` : noData} alt="image" /></NavLink>
                                        </div>
                                        <div className="nsc-list-content">
                                            <div className="nsc-list-title">
                                                <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/details/${item.name}`}>{item.title}</NavLink>
                                            </h3>
                                        </div>
                                    </div>)}


                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="news-vcard-wrapper">

                                {newsList.map((item, key) => <div key={key} className="news-vcard-single" data-aos="fade-up">
                                    <a href="single-tag-page.html" className="btn-card btn-red">Fashion</a>
                                    <div className="news-vcard-img">
                                        <img src={item.meta_image ? `${Config.apiURL}${item.meta_image}` : noData} alt="image" />
                                        <div className="news-vcard-play">
                                            <a className="popup-youtube2" href="https://vimeo.com/67341671"><img
                                                src="assets/img/svg/play-btn.svg" alt="image" /></a>
                                        </div>
                                    </div>
                                    <div className="news-vcard-content">
                                        <div className="news-vcard-title">
                                            <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                            <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                        </div>
                                        <h3><NavLink to={`/details/${item.name}`}>{item.title}</NavLink>
                                        </h3>
                                    </div>
                                </div>)}


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

                                    {newsList.map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src={item.meta_image ? `${Config.apiURL}${item.meta_image}` : noData} alt="image" />
                                            <div className="news-vcard-play">
                                                <a className="vimo1" href="https://vimeo.com/63729905"><img
                                                    src={playBtn} alt="image" /></a>
                                            </div>
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/details/${item.name}`}>{item.title}</NavLink></h3>
                                        </div>
                                    </div>)}


                                </div>
                            </div>
                            <div className="tab-pane fade show active" id="food" role="tabpanel">
                                <div className="weekly-list-item">

                                    {newsList.map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src={item.meta_image ? `${Config.apiURL}${item.meta_image}` : noData} alt="image" />
                                            <div className="news-vcard-play">
                                                <a className="vimo1" href="https://vimeo.com/63729905"><img
                                                    src={playBtn} alt="image" /></a>
                                            </div>
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/details/${item.name}`}>{item.title}</NavLink></h3>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="medicare" role="tabpanel">
                                <div className="weekly-list-item">

                                    {newsList.map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src={item.meta_image ? `${Config.apiURL}${item.meta_image}` : noData} alt="image" />
                                            <div className="news-vcard-play">
                                                <a className="vimo1" href="https://vimeo.com/63729905"><img
                                                    src={playBtn} alt="image" /></a>
                                            </div>
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/details/${item.name}`}>{item.title}</NavLink></h3>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="fashion" role="tabpanel">
                                <div className="weekly-list-item">

                                    {newsList.map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src={item.meta_image ? `${Config.apiURL}${item.meta_image}` : noData} alt="image" />
                                            <div className="news-vcard-play">
                                                <a className="vimo1" href="https://vimeo.com/63729905"><img
                                                    src={playBtn} alt="image" /></a>
                                            </div>
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/details/${item.name}`}>{item.title}</NavLink></h3>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="fitness" role="tabpanel">
                                <div className="weekly-list-item">

                                    {newsList.map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            <img src={item.meta_image ? `${Config.apiURL}${item.meta_image}` : noData} alt="image" />
                                            <div className="news-vcard-play">
                                                <a className="vimo1" href="https://vimeo.com/63729905"><img
                                                    src={playBtn} alt="image" /></a>
                                            </div>
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/details/${item.name}`}>{item.title}</NavLink></h3>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fd-carousel-wrapper owl-carousel" data-carousel-loop="false" data-carousel-items="3"
                        data-carousel-nav="false" data-carousel-dots="true" data-carousel-md="2" data-carousel-sm="2"
                        data-carousel-lg="3" data-carousel-xl="3" data-aos="fade-up">

                        {newsList.map((item, key) => <div key={key} className="fdc-single-item">
                            <div className="fdc-img">
                                <NavLink to={`/details/${item.name}`}>
                                    <img src={item.meta_image ? `${Config.apiURL}${item.meta_image}` : noData} alt="image" />
                                </NavLink>
                            </div>
                            <div className="fdc-content">
                                <div className="fdc-title">
                                    <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                    <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                </div>
                                <h3><NavLink to={`/details/${item.name}`}>{item.title}</NavLink></h3>
                            </div>
                        </div>)}
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
                                    <button className="mr-100 mr-lg-50"><img src={camera} alt="icon" />
                                        Photography</button>
                                    <a href="single-post-details.html">SEE ALL <i className="icofont-long-arrow-right"></i></a>
                                </div>
                                {newsList.map((item, key) => <div className="category-product" data-aos="fade-up">
                                    <div className="cp-img">
                                        <NavLink to={`/details/${item.name}`}><img src={item.meta_image ? `${Config.apiURL}${item.meta_image}` : noData}
                                            alt="image" /></NavLink>
                                    </div>
                                    <div className="cp-content">
                                        <div className="cp-content-title">
                                            <ul>
                                                <li>7:35 AM</li>
                                                <li>16 Nov, 2020</li>
                                            </ul>
                                        </div>
                                        <h3><NavLink to={`/details/${item.name}`}>{item.title}</NavLink>
                                        </h3>
                                        <p> I throw myself down among the tall grass by the trickling stream; and, as I lie
                                            close to the earth, a thousand unknown plants are noticed by me: when I hear the
                                            buzz of the little world among the stalks</p>
                                        <a href="single-post-details.html" className="btn btn-gray">Read More</a>
                                    </div>
                                </div>)}

                            </div>
                            <div className="single-category sc-reverse">
                                <div className="category-title" data-aos="fade-up">
                                    <a href="single-post-details.html"><i className="icofont-long-arrow-left"></i>SEE ALL</a>
                                    <button className="ml-100 ml-lg-50"><img src="assets/img/svg/medicare.svg" alt="icon" />
                                        Medicare</button>
                                </div>
                                {newsList.map((item, key) => <div className="category-product" data-aos="fade-up">
                                    <div className="cp-img">
                                        <NavLink to={`/details/${item.name}`}><img src={item.meta_image ? `${Config.apiURL}${item.meta_image}` : noData}
                                            alt="image" /></NavLink>
                                    </div>
                                    <div className="cp-content">
                                        <div className="cp-content-title">
                                            <ul>
                                                <li>7:35 AM</li>
                                                <li>16 Nov, 2020</li>
                                            </ul>
                                        </div>
                                        <h3><NavLink to={`/details/${item.name}`}>{item.title}</NavLink>
                                        </h3>
                                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet
                                            mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm
                                            of existence in this spot, which was created for the bliss of souls like mine.</p>
                                        <a href="single-post-details.html" className="btn btn-gray">Read More</a>
                                    </div>
                                </div>)}

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

                                {newsList.map((item, key) => <div key={key} className="single-list-card" data-aos="fade-up">
                                    <div className="slc-img">
                                        <NavLink to={`/details/${item.name}`}>
                                            <img src={item.meta_image ? `${Config.apiURL}${item.meta_image}` : noData} alt="image" />
                                        </NavLink>
                                    </div>
                                    <div className="slc-content">
                                        <ul className="slc-title">
                                            <li>{moment.utc(item.modified).format('hh:mm A')}</li>
                                            <li>{moment.utc(item.modified).format('Do MMM YYYY')}</li>
                                        </ul>
                                        <h4><NavLink to={`/details/${item.name}`}>{item.title}</NavLink></h4>
                                    </div>
                                </div>)}

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
                                {newsList.map((item, key) => <div key={key} className="tags-card" data-aos="fade-up">
                                    <div className="tags-img">
                                        <NavLink to={`/details/${item.name}`}>
                                            <img src={item.meta_image ? `${Config.apiURL}${item.meta_image}` : noData} alt="image" />
                                        </NavLink>
                                    </div>
                                    <div className="tag-content">
                                        <NavLink to={`/details/${item.name}`}>{item.title}</NavLink>
                                    </div>
                                </div>)}
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