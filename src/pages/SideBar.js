import React from "react";
import Config from "../common/Config";
import InstagramEmbed from 'react-instagram-embed';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { useSelector } from 'react-redux'
import moment from "moment";
import { NavLink } from "react-router-dom";

function SideBar(props) {
    const newsList = useSelector((state) => state.auth.newsList)

    // Latest News
    let latestNews = newsList.filter(item => item.blog_category === 'news');
    latestNews.length = 4

    return (
        <aside className="header-aside" data-aos="fade-up">
            <h4>Latest News  <span className="dark-red"><i className="icofont-fire"></i></span></h4>
            <div className="card-list card-counting">
                {latestNews.map((item, key) => <div key={key} className="single-card-list card-border">
                    <div className="card-list-img">
                        {Config.randerImage(item, 100, 70, true)}
                    </div>
                    <div className="card-list-cont">
                        <div className="card-list-discript">
                            <span><NavLink to={`/category/${item.blog_category}`}>{item.category_description}</NavLink></span>
                            <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                        </div>
                        <div className="card-list-heading">
                            <h6><NavLink to={`/news/${item.name}`}>{Config.trunCate(item.title, 60, '. . .')}</NavLink></h6>
                        </div>
                    </div>
                </div>)}
            </div>
            <div style={{ marginTop: 30, height: 400, overflowX: 'scroll' }}><TwitterTimelineEmbed
                sourceType="profile"
                screenName={Config.twitter}
            // options={{ height: 400 }}
            /></div>
            {/* <div className="video-card">
            <img src="https://tpc.googlesyndication.com/simgad/14556471411178073418?" width="250" height="250" alt="Advertiser" border="0" />
        </div> */}
            <InstagramEmbed
                url='https://instagr.am/p/Ytlfl/'
                clientAccessToken='355600636724975|41858f9abccc022adde76de776ffc8f3'
                // clientAccessToken='IGQVJWclRmcmpGcHpXNl81TnpVNzJVZAU83VWhLRVhWcEhVNkNSTGU1VXN2cm5JNFhmLVoxNmpWRUNlV2g2NVdYWGZAtbDNXRlg1NGpZALWE4VWVqdHNIak9aeWJyNWV3OWRNcWhveWtaN3NLTHRuQ2M1awZDZD'
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => { }}
                onSuccess={() => { }}
                onAfterRender={() => { }}
                onFailure={() => { }}
            />
        </aside>
    );
}

export default SideBar;
