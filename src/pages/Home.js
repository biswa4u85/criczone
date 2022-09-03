import React, { useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getHomeSettings, getHeadlineList, getNewsCategory, getNewsList } from '../store/MainRedux'
import { Helmet } from "react-helmet";
import Config from "../common/Config";
import SideBar from "./SideBar";
import dallyUpdate from '../assets/img/dallyUpdate.png'
import HomeSlider from './Scores/HomeSlider';
import Tags from '../components/Tags';

function Home() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const { t } = useTranslation();
    const token = Config.token
    const homeSettings = useSelector((state) => state.auth.homeSettings)
    const headlines = useSelector((state) => state.auth.headlines)
    const newsList = useSelector((state) => state.auth.newsList)

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getHomeSettings({ token }))
        dispatch(getHeadlineList({ token }))
        dispatch(getNewsCategory({ token }))
        dispatch(getNewsList({ page: 1, size: 500, token }))
    }, []);


    // Latest News
    let latestNews = newsList.filter(item => item.blog_category === 'news');
    latestNews.length = 4

    // Today News
    let todayNews = newsList.filter(item => item.blog_category === 'news');
    todayNews.length = 3

    // Home 1st News
    let home1stNews = newsList.filter(item => item.blog_category === 'trending-news');

    // Home 2nd News
    let home2ndNews = newsList.filter(item => item.blog_category === 'match-prediction');

    // Home 3rd News
    let home3rdNews = newsList.filter(item => item.blog_category === 'women');

    // Latest Vedios
    let latestVedios = JSON.parse(JSON.stringify(newsList))
    latestVedios.length = 1

    const filterByDay = (filter, number) => {
        let cat = (homeSettings && homeSettings[filter]) ? homeSettings[filter] : null
        let dataList = newsList.filter(item => item.blog_category === cat);
        dataList.length = number
        return dataList
    }

    const filterByWeek = (cat, number) => {
        let dataList = newsList.filter(item => item.blog_category === cat);
        dataList.length = number
        return dataList
    }


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{homeSettings?.meta_title}</title>
                <meta name="description" content={homeSettings?.meta_description} />
            </Helmet>
            <div className="nvbanner-area">
                <HomeSlider />
                <div className="viewAllMatch"><button onClick={() => navigate('/live-score')}>View all Matches</button></div>
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
                                        {home1stNews[0] && (<div className="btl-simple-card">
                                            {Config.randerImage(home1stNews[0].meta_image, 600, 740)}
                                            <div className="btlc-content-wrapper">
                                                <NavLink to={`/cat/${home1stNews[0].blog_category}`}><span className="btn">{home1stNews[0].category_description}</span></NavLink>
                                                <div className="btlc-marking">
                                                    <span className="icofont-star"></span>
                                                </div>
                                                <div className="btlc-content">
                                                    <div className="btcl-content-status">
                                                        <span>{moment.utc(home1stNews[0].published_time).format('hh:mm A')}</span>
                                                        <span>{moment.utc(home1stNews[0].published_on).format('Do MMM YYYY')}</span>
                                                        <span>{home1stNews[0].blogger}</span>
                                                    </div>
                                                    <h3><NavLink to={`/details/${home1stNews[0].name}`}>{Config.trunCate(home1stNews[0].title, 40, '. . .')}</NavLink></h3>
                                                
                                                </div>
                                            </div>
                                        </div>)}
                                    </div>
                                    <div className="col-md-5">
                                        <div className="bnr-lft-cnt-rgt">
                                            {home2ndNews[0] && (<div className="btl-simple-card" data-aos="fade-up"
                                                data-aos-delay="100">
                                                {Config.randerImage(home2ndNews[0].meta_image, 300, 355)}
                                                <div className="btlc-content-wrapper">
                                                    <NavLink to={`/cat/${home2ndNews[0].blog_category}`}><span className="btn">{home2ndNews[0].category_description}</span></NavLink>
                                                    <div className="btlc-marking">
                                                        <span className="icofont-star"></span>
                                                    </div>
                                                    <div className="btlc-content">
                                                        <div className="btcl-content-status">
                                                            <span>{moment.utc(home2ndNews[0].published_time).format('hh:mm A')}</span>
                                                            <span>{moment.utc(home2ndNews[0].published_on).format('Do MMM YYYY')}</span>
                                                            <span>{home2ndNews[0].blogger}</span>
                                                        </div>
                                                        <h3><NavLink to={`/details/${home2ndNews[0].name}`}>{Config.trunCate(home2ndNews[0].title, 40, '. . .')}</NavLink></h3>
                                
                                                    </div>
                                                </div>
                                            </div>)}
                                            {home3rdNews[0] && (<div className="btl-simple-card" data-aos="fade-up"
                                                data-aos-delay="100">
                                                {Config.randerImage(home3rdNews[0].meta_image, 300, 355)}
                                                <div className="btlc-content-wrapper">
                                                    <NavLink to={`/cat/${home3rdNews[0].blog_category}`}><span className="btn">{home3rdNews[0].category_description}</span></NavLink>
                                                    <div className="btlc-marking">
                                                        <span className="icofont-star"></span>
                                                    </div>
                                                    <div className="btlc-content">
                                                        <div className="btcl-content-status">
                                                            <span>{moment.utc(home3rdNews[0].published_time).format('hh:mm A')}</span>
                                                            <span>{moment.utc(home3rdNews[0].published_on).format('Do MMM YYYY')}</span>
                                                            <span>{home3rdNews[0].blogger}</span>
                                                        </div>
                                                        <h3><NavLink to={`/details/${home3rdNews[0].name}`}>{Config.trunCate(home3rdNews[0].title, 40, '. . .')}</NavLink></h3>
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
                        <SideBar />
                    </div>
                </div>
            </div>



            <div className="pro-area" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="pro-wrapper">
                            <br />
                            <br />
                            <img src={dallyUpdate} alt="Advertiser" border="0" />
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
                                        {filterByDay('left_category_one', 1).map((item, key) => <div key={key} className="btl-simple-card" data-aos="fade-up">
                                            {Config.randerImage(item.meta_image, 300)}
                                            <NavLink to={`/details/${item.name}`}><div className="btlc-content-wrapper">
                                                <span className="btn">{item.category_description}</span>
                                                <div className="btlc-content">
                                                    <div className="btcl-content-status">
                                                        <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                                        <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                                    </div>
                                                    <h3>{Config.trunCate(item.title, 40, '. . .')}</h3>
                                                   
                                                </div>
                                            </div></NavLink>
                                        </div>)}
                                        {filterByDay('left_category_two', 1).map((item, key) => <div key={key} className="btl-simple-card" data-aos="fade-up">
                                            {Config.randerImage(item.meta_image, 300)}
                                            <NavLink to={`/details/${item.name}`}><div className="btlc-content-wrapper">
                                                <span className="btn">{item.category_description}</span>
                                                <div className="btlc-content">
                                                    <div className="btcl-content-status">
                                                        <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                                        <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                                    </div>
                                                    <h3>{Config.trunCate(item.title, 40, '. . .')}</h3>
                                                </div>
                                            </div></NavLink>
                                        </div>)}
                                    </div>

                                    {filterByDay('center_category', 1).map((item, key) => <div key={key} className="btl-simple-card" data-aos="fade-up"
                                        data-aos-delay="50">
                                        {Config.randerImage(item.meta_image, 640)}
                                        <NavLink to={`/details/${item.name}`}><div className="btlc-content-wrapper">
                                            <span className="btn btn-red">{item.category_description}</span>
                                            <div className="btlc-content">
                                                <div className="btcl-content-status">
                                                    <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                                    <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                                </div>
                                                <h3>{Config.trunCate(item.title, 60, '. . .')}</h3>
                                            </div>
                                        </div></NavLink>
                                    </div>)}

                                </div>
                                <div className="ns-card-list" data-aos="fade-up" data-aos-delay="100">

                                    {filterByDay('bottom_category', 3).map((item, key) => <NavLink key={key} to={`/details/${item.name}`}><div className="nsc-list-single">
                                        <div className="nsc-list-img">
                                            {Config.randerImage(item.meta_image)}
                                        </div>
                                        <div className="nsc-list-content">
                                            <div className="nsc-list-title">
                                                <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
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

                                {filterByDay('right_category_one', 1).map((item, key) => <NavLink key={key} to={`/details/${item.name}`}><div class="news-vcard-single aos-init aos-animate" data-aos="fade-up">
                                    <span class="btn-card btn-red">{item.category_description}</span>
                                    <div class="news-vcard-img">
                                        {Config.randerImage(item.meta_image, 290)}
                                    </div>
                                    <div class="news-vcard-content">
                                        <div class="news-vcard-title">
                                            <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                            <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                        </div>
                                        <h3>{Config.trunCate(item.title, 40, '. . .')}</h3>
                                    </div>
                                </div></NavLink>)}

                                {filterByDay('right_category_two', 1).map((item, key) => <NavLink key={key} to={`/details/${item.name}`}><div class="news-vcard-single aos-init aos-animate" data-aos="fade-up">
                                    <span class="btn-card btn-red">{item.category_description}</span>
                                    <div class="news-vcard-img">
                                        {Config.randerImage(item.meta_image, 290)}
                                    </div>
                                    <div class="news-vcard-content">
                                        <div class="news-vcard-title">
                                            <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                            <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                        </div>
                                        <h3>{Config.trunCate(item.title, 40, '. . .')}</h3>
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
                                <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#travel" role="tab"
                                    aria-selected="true">Asia Cup</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="pill" data-bs-target="#food" role="tab"
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
                            <div className="tab-pane fade show active" id="travel" role="tabpanel">
                                <div className="weekly-list-item">

                                    {filterByWeek('asia-cup', 4).map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            {Config.randerImage(item.meta_image, 220)}
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/details/${item.name}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                                        </div>
                                    </div>)}


                                </div>
                            </div>
                            <div className="tab-pane fade" id="food" role="tabpanel">
                                <div className="weekly-list-item">

                                    {filterByWeek('domestic', 4).map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            {Config.randerImage(item.meta_image, 220)}
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/details/${item.name}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="medicare" role="tabpanel">
                                <div className="weekly-list-item">

                                    {filterByWeek('international', 4).map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            {Config.randerImage(item.meta_image, 220)}
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/details/${item.name}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="fashion" role="tabpanel">
                                <div className="weekly-list-item">

                                    {filterByWeek("editors-pick", 4).map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            {Config.randerImage(item.meta_image, 220)}
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/details/${item.name}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="fitness" role="tabpanel">
                                <div className="weekly-list-item">

                                    {filterByWeek('match-prediction', 4).map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            {Config.randerImage(item.meta_image, 220)}
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
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
                        {filterByWeek('Video', 12).map((item, key) => <div key={key} className="fdc-single-item">
                            <div className="fdc-img">
                                <NavLink to={`/details/${item.name}`}>
                                    {Config.randerImage(item.meta_image, 220)}
                                </NavLink>
                            </div>
                            <div className="fdc-content">
                                <div className="fdc-title">
                                    <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                    <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                </div>
                                <h3><NavLink to={`/details/${item.name}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                            </div>
                        </div>)}
                    </div>
                </div>
            </section>

            {/* <div className="pro-area" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="pro-wrapper">
                            <img src="https://tpc.googlesyndication.com/simgad/14556471411178073418?" width="900" height="120" alt="Advertiser" border="0" />
                        </div>
                    </div>
                </div>
            </div> */}
        </>

    );
}

export default Home;