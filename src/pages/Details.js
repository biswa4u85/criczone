import React, { useEffect } from "react";
import { Button, DatePicker, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-web-vector-icons';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme/use-theme";
import { getNewsDetails } from '../store/AuthRedux'
import { Helmet } from "react-helmet";


function Details(props) {
    let navigate = useNavigate();
    let { pId } = useParams();
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const newsDetails = useSelector((state) => state.auth.newsDetails)

    useEffect(() => {
        dispatch(getNewsDetails(pId))
    }, [pId]);


    console.log(newsDetails)

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Detail Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <section className="single-post-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="single-post-content">
                                <div className="figer-img">
                                    <img src="assets/img/post-dtls-banner.jpg" alt="image" />
                                    <button className="btn btn-theme">Traveling</button>
                                </div>
                                <div className="timeline">
                                    <span>7:35 AM</span>
                                    <span>16 Nov, 2020</span>
                                </div>
                                <h2>A wonderful serenity has taken possession dolor sit  Et harum quidem rerum </h2>
                                <p>The morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
                                <p>His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.</p>
                                <blockquote>
                                    <img src="assets/img/cotation.png" alt="image" />
                                    <p>You will never be happy if you continue to search for what happiness consists and will never live if you are looking for the meaning of life.</p>
                                </blockquote>
                                <h3>This is Subheading Title</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                                <div className="list-whit-img">
                                    <img src="assets/img/post-dtls-pro.jpg" alt="image" />
                                    <ul>
                                        <li>Ornare porta viverra. Mollis neque sagittis Etiam. Suscipit.</li>
                                        <li>Feugiat, dictumst parturient mattis tempus sollicitudin ridiculus Lacus platea rhoncus. Per rutrum molestie.</li>
                                        <li>Maecenas massa fermentum nibh sit senectus. Aptent torquent ipsum placerat consectetuer felis eleifend tellus morbi senectus nisi dignissim feugiat eget auctor, per accumsan.</li>
                                    </ul>
                                </div>
                                <p><strong>Note :</strong>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. </p>
                                <div className="reaction">
                                    <h3>Your Reaction on this post</h3>
                                    <ul>
                                        <li><a href="single-post-details.html#"><img src="assets/img/reaction/rect1.png" alt="icon" /><span>45</span></a></li>
                                        <li><a href="single-post-details.html#"><img src="assets/img/reaction/rect2.png" alt="icon" /></a></li>
                                        <li><a href="single-post-details.html#"><img src="assets/img/reaction/rect3.png" alt="icon" /><span>01</span></a></li>
                                        <li><a href="single-post-details.html#"><img src="assets/img/reaction/rect4.png" alt="icon" /></a></li>
                                        <li><a href="single-post-details.html#"><img src="assets/img/reaction/rect5.png" alt="icon" /><span>25</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-post-sidebar">
                                <aside className="header-aside">
                                    <h4>Latest News</h4>
                                    <div className="card-list card-counting">

                                        <div className="single-card-list card-border">
                                            <div className="card-list-img">
                                                <img src="assets/img/newsvolt/card-xs-img/card-xs-1.jpg" alt="image" />
                                            </div>
                                            <div className="card-list-cont">
                                                <div className="card-list-discript">
                                                    <span>7:35 AM</span>
                                                    <span>16 Nov, 2020</span>
                                                </div>
                                                <div className="card-list-heading">
                                                    <h6><a href="single-post-details.html#">A collection of textile samples lay spread</a></h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single-card-list card-border">
                                            <div className="card-list-img">
                                                <img src="assets/img/newsvolt/card-xs-img/card-xs-2.jpg" alt="image" />
                                            </div>
                                            <div className="card-list-cont">
                                                <div className="card-list-discript">
                                                    <span>7:35 AM</span>
                                                    <span>16 Nov, 2020</span>
                                                </div>
                                                <div className="card-list-heading">
                                                    <h6><a href="single-post-details.html#"> career it is that I’ve chosen! Travelling day in and day out</a></h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single-card-list card-border">
                                            <div className="card-list-img">
                                                <img src="assets/img/newsvolt/card-xs-img/card-xs-3.jpg" alt="image" />
                                            </div>
                                            <div className="card-list-cont">
                                                <div className="card-list-discript">
                                                    <span>7:35 AM</span>
                                                    <span>16 Nov, 2020</span>
                                                </div>
                                                <div className="card-list-heading">
                                                    <h6><a href="single-post-details.html#">Doing business like this takes much more effort</a></h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single-card-list card-border">
                                            <div className="card-list-img">
                                                <img src="assets/img/newsvolt/card-xs-img/card-xs-3.jpg" alt="image" />
                                            </div>
                                            <div className="card-list-cont">
                                                <div className="card-list-discript">
                                                    <span>7:35 AM</span>
                                                    <span>16 Nov, 2020</span>
                                                </div>
                                                <div className="card-list-heading">
                                                    <h6><a href="single-post-details.html#">Drops of rain could be heard hitting the pane</a></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="video-card">
                                        <img src="assets/img/newsvolt/card-mixed/video-card.png" alt="image" />
                                        <a href="single-post-details.html#" className="video-icon">
                                            <img src="assets/img/svg/play-btn.svg" alt="image" />
                                        </a>
                                    </div>
                                </aside>
                                <div className="promo-add">
                                    <img src="assets/img/promo-add.png" alt="image" />
                                    <button className="btn btn-white-outline">Promotional Ad</button>
                                </div>
                                <div className="related-news">
                                    <aside className="header-aside">
                                        <h4>Related News</h4>
                                        <div className="card-list card-counting">

                                            <div className="single-card-list card-border">
                                                <div className="card-list-img">
                                                    <img src="assets/img/newsvolt/card-xs-img/card-xs-1.jpg" alt="image" />
                                                </div>
                                                <div className="card-list-cont">
                                                    <div className="card-list-discript">
                                                        <span>7:35 AM</span>
                                                        <span>16 Nov, 2020</span>
                                                    </div>
                                                    <div className="card-list-heading">
                                                        <h6><a href="single-post-details.html#">Doing business like this takes much more effort</a></h6>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="single-card-list card-border">
                                                <div className="card-list-img">
                                                    <img src="assets/img/newsvolt/card-xs-img/card-xs-2.jpg" alt="image" />
                                                </div>
                                                <div className="card-list-cont">
                                                    <div className="card-list-discript">
                                                        <span>7:35 AM</span>
                                                        <span>16 Nov, 2020</span>
                                                    </div>
                                                    <div className="card-list-heading">
                                                        <h6><a href="single-post-details.html#">Drops of rain could be heard hitting the pane</a></h6>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="single-card-list card-border">
                                                <div className="card-list-img">
                                                    <img src="assets/img/newsvolt/card-xs-img/card-xs-3.jpg" alt="image" />
                                                </div>
                                                <div className="card-list-cont">
                                                    <div className="card-list-discript">
                                                        <span>7:35 AM</span>
                                                        <span>16 Nov, 2020</span>
                                                    </div>
                                                    <div className="card-list-heading">
                                                        <h6><a href="single-post-details.html#">contact with different people all the time so that</a></h6>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="single-card-list card-border">
                                                <div className="card-list-img">
                                                    <img src="assets/img/newsvolt/card-xs-img/card-xs-3.jpg" alt="image" />
                                                </div>
                                                <div className="card-list-cont">
                                                    <div className="card-list-discript">
                                                        <span>7:35 AM</span>
                                                        <span>16 Nov, 2020</span>
                                                    </div>
                                                    <div className="card-list-heading">
                                                        <h6><a href="single-post-details.html#">How about if I sleep a little bit longer</a></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="author-wrap">
                        <div className="author-pro">
                            <div className="author-img">
                                <img src="assets/img/author-pro.jpg" alt="image" />
                            </div>
                            <div className="author-content">
                                <h4><a href="single-post-details.html#">Jenny Doe</a></h4>
                                <ul className="social-icon social-outline-gray">
                                    <li><a href="single-post-details.html#"><i className="icofont-facebook"></i></a></li>
                                    <li><a href="single-post-details.html#"><i className="icofont-youtube-play"></i></a></li>
                                    <li><a href="single-post-details.html#"><i className="icofont-twitter"></i></a></li>
                                    <li><a href="single-post-details.html#"><i className="icofont-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <a href="single-post-details.html#">See all Post this Author <span><i className="icofont-long-arrow-right"></i></span></a>
                        <div className="ath-social">
                            <h3>Share This Post</h3>
                            <ul className="social-icon social-outline-gray">
                                <li><a href="single-post-details.html#"><i className="icofont-facebook"></i></a></li>
                                <li><a href="single-post-details.html#"><i className="icofont-youtube-play"></i></a></li>
                                <li><a href="single-post-details.html#"><i className="icofont-twitter"></i></a></li>
                                <li><a href="single-post-details.html#"><i className="icofont-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="single-post-comment">
                        <div className="news-subscribe-heading">
                            <h2><span></span>Leave a comment<span></span>
                            </h2>
                        </div>
                        <div className="single-post-form">
                            <div className="spf-group">
                                <div className="input-group">
                                    <label>Full Name <span>*</span></label>
                                    <div className="input-with-icon">
                                        <input type="text" />
                                        <img src="assets/img/svg/user.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <label>Your e-mail <span>*</span></label>
                                    <div className="input-with-icon">
                                        <input type="email" />
                                        <img src="assets/img/svg/email.svg" alt="icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group">
                                <label>Message</label>
                                <textarea cols="30" rows="7"></textarea>
                            </div>
                            <label className="checkbox-group cbox-red">
                                <input type="checkbox" className="input" />
                                <span className="checked"></span>
                                <span className="checked-content">Save my Name and mail for next any comment</span>
                            </label>
                            <button className="btn btn-theme">Submit Comment</button>
                        </div>
                    </div>
                    <div className="single-post-carousel-wrapper">
                        <div className="spc-navigation">
                            <button className="prev"><span><i className="icofont-long-arrow-left"></i></span> Previous </button>
                            <button className="next">Next <span><i className="icofont-long-arrow-right"></i></span></button>
                        </div>
                        <div className="single-post-carousel owl-carousel" data-carousel-loop="true" data-carousel-items="2" data-carousel-nav="false" data-carousel-dots="false" data-carousel-autoplay="true" data-carousel-margin="30" data-carousel-md="2" data-carousel-sm="1" data-carousel-lg="2" data-carousel-xl="2">

                            <div className="spc-single-post">
                                <div className="spc-single-post-img">
                                    <a href="single-post-details.html#"><img src="assets/img/short-img/xs1.jpg" alt="image" /></a>
                                </div>
                                <div className="spc-single-post-content">
                                    <div className="spc-timeline">
                                        <span>7:35 AM</span>
                                        <span>16 Nov, 2020</span>
                                    </div>
                                    <h3><a href="single-post-details.html#">A collection of textile samples lay spread lorem ipsum dolor</a></h3>
                                </div>
                            </div>

                            <div className="spc-single-post">
                                <div className="spc-single-post-img">
                                    <a href="single-post-details.html#"><img src="assets/img/short-img/xs2.jpg" alt="image" /></a>
                                </div>
                                <div className="spc-single-post-content">
                                    <div className="spc-timeline">
                                        <span>7:35 AM</span>
                                        <span>16 Nov, 2020</span>
                                    </div>
                                    <h3><a href="single-post-details.html#">What a strenuous career it is that I’ve chosen!</a></h3>
                                </div>
                            </div>

                            <div className="spc-single-post">
                                <div className="spc-single-post-img">
                                    <a href="single-post-details.html#"><img src="assets/img/short-img/xs3.jpg" alt="image" /></a>
                                </div>
                                <div className="spc-single-post-content">
                                    <div className="spc-timeline">
                                        <span>7:35 AM</span>
                                        <span>16 Nov, 2020</span>
                                    </div>
                                    <h3><a href="single-post-details.html#">Travelling day in and day out. Doing business like this takes much more</a></h3>
                                </div>
                            </div>

                            <div className="spc-single-post">
                                <div className="spc-single-post-img">
                                    <a href="single-post-details.html#"><img src="assets/img/short-img/xs1.jpg" alt="image" /></a>
                                </div>
                                <div className="spc-single-post-content">
                                    <div className="spc-timeline">
                                        <span>7:35 AM</span>
                                        <span>16 Nov, 2020</span>
                                    </div>
                                    <h3><a href="single-post-details.html#">A collection of textile samples lay spread lorem ipsum dolor</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="subscribe-area">
                <div className="container">
                    <div className="row">
                        <div className="subscribe-wrapper">
                            <h3>Subscribe Newsletter</h3>
                            <div className="search-box">
                                <span><i className="icofont-envelope"></i></span>
                                <input type="text" placeholder="Enter  your mail" />
                                <button  >Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Details;
