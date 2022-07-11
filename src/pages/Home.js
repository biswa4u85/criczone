import React, { useEffect } from "react";
import { Carousel, DatePicker, Switch } from 'antd';
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getHeadlineList, getNewsCategory, getNewsList } from '../store/AuthRedux'
import { Helmet } from "react-helmet";
import Config from "../common/Config";

import noData from "../assets/img/nodata.jpg";
import playBtn from "../assets/img/svg/play-btn.svg";


function Home() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const { t } = useTranslation();
    const liveData = [{}, {}, {}, {}, {}, {}, {}, {}, {}]
    const headlines = useSelector((state) => state.auth.headlines)
    const categorys = useSelector((state) => state.auth.categorys)
    const newsList = useSelector((state) => state.auth.newsList)


    // Latest News
    let latestNews = newsList.filter(item => item.news_category === 'NC-007 (News)');
    latestNews.length = 5

    // Today News
    let todayNews = newsList.filter(item => item.news_category === 'NC-007 (News)');
    todayNews.length = 3

    // Latest Vedios
    let latestVedios = JSON.parse(JSON.stringify(newsList))
    latestVedios.length = 1

    useEffect(() => {
        dispatch(getHeadlineList())
        dispatch(getNewsCategory())
        dispatch(getNewsList())
    }, []);

    const filterBtWeek = (cat) => {
        let dataList = newsList.filter(item => item.news_category === cat);
        dataList.length = 4
        return dataList
    }

    console.log(categorys)

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="nvbanner-area">
                <div style={{ textAlign: "center", marginBottom: 20 }}>
                    {/* <ins class="adsbygoogle"
                        style={{ display: 'inline-block', width: 728, height: 90 }}
                        data-ad-client="ca-pub-1234567890123456"
                        data-ad-slot="1234567890"></ins>
                    <script>
                        (adsbygoogle = window.adsbygoogle || []).push({ });
                    </script> */}
                    <img src="https://tpc.googlesyndication.com/simgad/14556471411178073418?" width="900" height="120" alt="Advertiser" border="0" />
                </div>
                <div style={{ display: 'none' }} className="rpt-wrapper" data-aos="fade-up">
                    <button className="prev-one"><i className="icofont-simple-left"></i></button>
                    <button className="next-one"><i className="icofont-simple-right"></i></button>

                    <div className="rpt-carousel owl-carousel" data-carousel-loop="true" data-carousel-items="3" data-carousel-lg="2" data-carousel-xl="2" data-carousel-md="2" data-carousel-nav="false" data-carousel-dots="false" data-carousel-margin="30">

                        {liveData.map((item, key) => <div key={key} className="nsc-list-single">
                            <div data-index="4" className="slick-slide slick-active" tabindex="-1" aria-hidden="false">
                                <div>
                                    <div className="ds-p-2 ds-bg-fill-hsb-scorecell ds-text-compact-2xs ds-rounded-xl ds-h-[146px]" tabindex="-1"><a
                                        href="#"
                                        className="">
                                        <div className="ds-text-compact-xxs">
                                            <div className="ds-w-[288px] card scorecard">
                                                <div className="ds-flex ds-justify-between">
                                                    <div className="ds-truncate ds-w-[90%]"><span
                                                        className="ds-text-tight-xs ds-font-bold ds-uppercase ds-leading-5">RESULT</span><span
                                                            className="ds-text-tight-xs ds-text-typo-paragraph"><span
                                                                className="ds-text-tight-xs ds-font-medium">&nbsp;•&nbsp;3rd
                                                                T20I</span>&nbsp;•&nbsp; Providence</span></div>
                                                </div>
                                                <div className="">
                                                    <div className="ds-flex ds-flex-col ds-mt-2 ds-mb-2">
                                                        <div
                                                            className="ci-team-score ds-flex ds-justify-between ds-items-center ds-text-typo-title ds-opacity-50 ds-mb-1">
                                                            <div className="ds-flex ds-items-center"><img width="20" height="20" alt="BAN Flag"
                                                                className="ds-mr-2"
                                                                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/341400/341456.png" />
                                                                <p className="ds-text-tight-s ds-font-bold ds-uppercase">BAN</p>
                                                            </div>
                                                            <div
                                                                className="ds-text-compact-s ds-text-typo-title ds-w-[205px] ds-truncate ds-text-right">
                                                                <span className="ds-text-compact-xxs ds-mr-0.5"></span><strong
                                                                    className="">163/5</strong>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="ci-team-score ds-flex ds-justify-between ds-items-center ds-text-typo-title ds-mb-1">
                                                            <div className="ds-flex ds-items-center"><img width="20" height="20" alt="WI Flag"
                                                                className="ds-mr-2"
                                                                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png" />
                                                                <p className="ds-text-tight-s ds-font-bold ds-uppercase">WI</p>
                                                            </div>
                                                            <div
                                                                className="ds-text-compact-s ds-text-typo-title ds-w-[205px] ds-truncate ds-text-right">
                                                                <span className="ds-text-compact-xxs ds-mr-0.5">(18.2/20 ov, T:164) </span><strong
                                                                    className="">169/5</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="ds-text-tight-xs ds-truncate ds-text-typo-title"><span>West Indies won by 5 wickets
                                                    (with 10 balls remaining)</span></p>
                                                <div className="ds-flex ds-mt-2 ds-pt-1.5 ds-border-t ds-border-line-default-translucent"><span
                                                    className="ds-inline-flex ds-items-center ds-leading-none ds-mr-4"><a
                                                        href="#"
                                                        className="ds-text-ui-typo ds-underline-offset-4 hover:ds-underline hover:ds-decoration-ui-stroke ds-block"><span
                                                            className="ds-text-compact-xs ds-font-medium">Schedule</span></a></span><span
                                                                className="ds-inline-flex ds-items-center ds-leading-none ds-mr-4"><a
                                                                    href="#"
                                                                    className="ds-text-ui-typo ds-underline-offset-4 hover:ds-underline hover:ds-decoration-ui-stroke ds-block"><span
                                                                        className="ds-text-compact-xs ds-font-medium">Report</span></a></span></div>
                                            </div>
                                        </div>
                                    </a></div>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>

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
                                        {headlines ? headlines.map((item, key) => <div key={key} className="elepse">
                                            {item.description}
                                        </div>) : null}
                                    </div>
                                </div>
                                <div className="bnr-lft-cnt">
                                    <div className="row">
                                        <div className="col-md-7" data-aos="fade-up" data-aos-delay="50">
                                            {newsList[0] && (<div className="btl-simple-card">
                                                {Config.randerImage(newsList[0].meta_image, 600, 740)}
                                                <div className="btlc-content-wrapper">
                                                    <NavLink to={`/details/${newsList[0].name}`}><span className="btn">{newsList[0].news_category}</span></NavLink>
                                                    <div className="btlc-marking">
                                                        <span className="icofont-star"></span>
                                                    </div>
                                                    <div className="btlc-content">
                                                        <div className="btcl-content-status">
                                                            <span>{moment.utc(newsList[0].modified).format('hh:mm A')}</span>
                                                            <span>{moment.utc(newsList[0].modified).format('Do MMM YYYY')}</span>
                                                        </div>
                                                        <h3><NavLink to={`/details/${newsList[0].name}`}>{Config.trunCate(newsList[0].title, 40, '. . .')}</NavLink></h3>
                                                    </div>
                                                </div>
                                            </div>)}
                                        </div>
                                        <div className="col-md-5">
                                            <div className="bnr-lft-cnt-rgt">
                                                {newsList[1] && (<div className="btl-simple-card" data-aos="fade-up"
                                                    data-aos-delay="100">
                                                    {Config.randerImage(newsList[1].meta_image, 300, 355)}
                                                    <div className="btlc-content-wrapper">
                                                        <NavLink to={`/details/${newsList[1].name}`}><span className="btn">{newsList[1].news_category}</span></NavLink>
                                                        <div className="btlc-marking">
                                                            <span className="icofont-star"></span>
                                                        </div>
                                                        <div className="btlc-content">
                                                            <div className="btcl-content-status">
                                                                <span>{moment.utc(newsList[1].modified).format('hh:mm A')}</span>
                                                                <span>{moment.utc(newsList[1].modified).format('Do MMM YYYY')}</span>
                                                            </div>
                                                            <h3><NavLink to={`/details/${newsList[1].name}`}>{Config.trunCate(newsList[1].title, 40, '. . .')}</NavLink></h3>
                                                        </div>
                                                    </div>
                                                </div>)}
                                                {newsList[2] && (<div className="btl-simple-card" data-aos="fade-up"
                                                    data-aos-delay="100">
                                                    {Config.randerImage(newsList[2].meta_image, 300, 355)}
                                                    <div className="btlc-content-wrapper">
                                                        <NavLink to={`/details/${newsList[2].name}`}><span className="btn">{newsList[2].news_category}</span></NavLink>
                                                        <div className="btlc-marking">
                                                            <span className="icofont-star"></span>
                                                        </div>
                                                        <div className="btlc-content">
                                                            <div className="btcl-content-status">
                                                                <span>{moment.utc(newsList[2].modified).format('hh:mm A')}</span>
                                                                <span>{moment.utc(newsList[2].modified).format('Do MMM YYYY')}</span>
                                                            </div>
                                                            <h3><NavLink to={`/details/${newsList[2].name}`}>{Config.trunCate(newsList[2].title, 40, '. . .')}</NavLink></h3>
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
                                            {Config.randerImage(item.meta_image, 100, 70)}
                                        </div>
                                        <div className="card-list-cont">
                                            <div className="card-list-discript">
                                                <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                            </div>
                                            <div className="card-list-heading">
                                                <h6><NavLink to={`/details/${item.name}`}>{Config.trunCate(item.title, 60, '. . .')}</NavLink></h6>
                                            </div>
                                        </div>
                                    </div>)}
                                </div>
                                <div className="video-card">
                                    <img src="https://tpc.googlesyndication.com/simgad/14556471411178073418?" width="250" height="250" alt="Advertiser" border="0" />
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
                                        {newsList[3] && (<div className="btl-simple-card" data-aos="fade-up">
                                            {Config.randerImage(newsList[3].meta_image, 300)}
                                            <NavLink to={`/details/${newsList[3].name}`}><div className="btlc-content-wrapper">
                                                <span className="btn">{newsList[3].news_category}</span>
                                                <div className="btlc-content">
                                                    <div className="btcl-content-status">
                                                        <span>{moment.utc(newsList[3].modified).format('hh:mm A')}</span>
                                                        <span>{moment.utc(newsList[3].modified).format('Do MMM YYYY')}</span>
                                                    </div>
                                                    <h3>{Config.trunCate(newsList[3].title, 40, '. . .')}</h3>
                                                </div>
                                            </div></NavLink>
                                        </div>)}
                                        {newsList[4] && (<div className="btl-simple-card" data-aos="fade-up">
                                            {Config.randerImage(newsList[4].meta_image, 300)}
                                            <NavLink to={`/details/${newsList[4].name}`}><div className="btlc-content-wrapper">
                                                <span className="btn">{newsList[4].news_category}</span>
                                                <div className="btlc-content">
                                                    <div className="btcl-content-status">
                                                        <span>{moment.utc(newsList[4].modified).format('hh:mm A')}</span>
                                                        <span>{moment.utc(newsList[4].modified).format('Do MMM YYYY')}</span>
                                                    </div>
                                                    <h3>{Config.trunCate(newsList[4].title, 40, '. . .')}</h3>
                                                </div>
                                            </div></NavLink>
                                        </div>)}
                                    </div>

                                    {newsList[5] && (<div className="btl-simple-card" data-aos="fade-up"
                                        data-aos-delay="50">
                                        {Config.randerImage(newsList[5].meta_image, 640)}
                                        <NavLink to={`/details/${newsList[5].name}`}><div className="btlc-content-wrapper">
                                            <span className="btn btn-red">{newsList[5].news_category}</span>
                                            <div className="btlc-content">
                                                <div className="btcl-content-status">
                                                    <span>{moment.utc(newsList[5].modified).format('hh:mm A')}</span>
                                                    <span>{moment.utc(newsList[5].modified).format('Do MMM YYYY')}</span>
                                                </div>
                                                <h3>{Config.trunCate(newsList[5].title, 60, '. . .')}</h3>
                                            </div>
                                        </div></NavLink>
                                    </div>)}

                                </div>
                                <div className="ns-card-list" data-aos="fade-up" data-aos-delay="100">

                                    {todayNews.map((item, key) => <NavLink key={key} to={`/details/${item.name}`}><div className="nsc-list-single">
                                        <div className="nsc-list-img">
                                            {Config.randerImage(item.meta_image)}
                                        </div>
                                        <div className="nsc-list-content">
                                            <div className="nsc-list-title">
                                                <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3>{Config.trunCate(item.title, 40, '. . .')}
                                            </h3>
                                        </div>
                                    </div></NavLink>)}

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="news-vcard-wrapper">

                                {newsList[6] && (<NavLink to={`/details/${newsList[6].name}`}><div class="news-vcard-single aos-init aos-animate" data-aos="fade-up">
                                    <span class="btn-card btn-red">{newsList[6].news_category}</span>
                                    <div class="news-vcard-img">
                                        {Config.randerImage(newsList[6].meta_image, 290)}
                                    </div>
                                    <div class="news-vcard-content">
                                        <div class="news-vcard-title">
                                            <span>{moment.utc(newsList[6].modified).format('hh:mm A')}</span>
                                            <span>{moment.utc(newsList[6].modified).format('Do MMM YYYY')}</span>
                                        </div>
                                        <h3>{Config.trunCate(newsList[6].title, 40, '. . .')}</h3>
                                    </div>
                                </div></NavLink>)}

                                {newsList[7] && (<NavLink to={`/details/${newsList[7].name}`}><div class="news-vcard-single aos-init aos-animate" data-aos="fade-up">
                                    <span class="btn-card btn-red">{newsList[7].news_category}</span>
                                    <div class="news-vcard-img">
                                        {Config.randerImage(newsList[7].meta_image, 290)}
                                    </div>
                                    <div class="news-vcard-content">
                                        <div class="news-vcard-title">
                                            <span>{moment.utc(newsList[7].modified).format('hh:mm A')}</span>
                                            <span>{moment.utc(newsList[7].modified).format('Do MMM YYYY')}</span>
                                        </div>
                                        <h3>{Config.trunCate(newsList[7].title, 40, '. . .')}</h3>
                                    </div>
                                </div></NavLink>)}


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
                                    aria-selected="true">Women</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#food" role="tab"
                                    aria-selected="false">Domestic Matches</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="pill" data-bs-target="#medicare" role="tab"
                                    aria-selected="false">International Matches</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="pill" data-bs-target="#fashion" role="tab"
                                    aria-selected="false">Editor's Pick</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="pill" data-bs-target="#fitness" role="tab"
                                    aria-selected="false">Analysis/Reviews</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent" data-aos="fade-up" data-aos-delay="150">
                            <div className="tab-pane fade" id="travel" role="tabpanel">
                                <div className="weekly-list-item">

                                    {filterBtWeek('NC-012 (Women)', 4).map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            {Config.randerImage(item.meta_image, 220)}
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/details/${item.name}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                                        </div>
                                    </div>)}


                                </div>
                            </div>
                            <div className="tab-pane fade show active" id="food" role="tabpanel">
                                <div className="weekly-list-item">

                                    {filterBtWeek('NC-022 (Domestic)', 4).map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            {Config.randerImage(item.meta_image, 220)}
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/details/${item.name}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="medicare" role="tabpanel">
                                <div className="weekly-list-item">

                                    {filterBtWeek('NC-023 (International)', 4).map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            {Config.randerImage(item.meta_image, 220)}
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/details/${item.name}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="fashion" role="tabpanel">
                                <div className="weekly-list-item">

                                    {filterBtWeek("NC-014 (Editor's Pick)", 4).map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            {Config.randerImage(item.meta_image, 220)}
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/details/${item.name}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="fitness" role="tabpanel">
                                <div className="weekly-list-item">

                                    {filterBtWeek('NC-008 (Match Prediction)', 4).map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            {Config.randerImage(item.meta_image, 220)}
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/details/${item.name}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fd-carousel-wrapper owl-carousel" data-carousel-loop="false" data-carousel-items="3"
                        data-carousel-nav="false" data-carousel-dots="true" data-carousel-md="2" data-carousel-sm="2"
                        data-carousel-lg="3" data-carousel-xl="3" data-aos="fade-up">
                        {filterBtWeek('NC-010 (Video)', 12).map((item, key) => <div key={key} className="fdc-single-item">
                            <div className="fdc-img">
                                <NavLink to={`/details/${item.name}`}>
                                    {Config.randerImage(item.meta_image, 220)}
                                </NavLink>
                            </div>
                            <div className="fdc-content">
                                <div className="fdc-title">
                                    <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                    <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                </div>
                                <h3><NavLink to={`/details/${item.name}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                            </div>
                        </div>)}
                    </div>
                </div>
            </section>

            <div className="pro-area" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="pro-wrapper">
                            <img src="https://tpc.googlesyndication.com/simgad/14556471411178073418?" width="900" height="120" alt="Advertiser" border="0" />
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