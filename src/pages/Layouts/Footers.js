import React, { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux'
import ftrBg from "../../assets/img/svg/ftr-bg.svg";
import FormValidate from "../../common/FormValidate";
import { subscribeEmail, getCmsDetails } from '../../store/MainRedux'

function Footers() {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const emailInput = useRef(null);
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const [submenu, setSubmenu] = useState(false)
    const token = useSelector((state) => state.auth.token)
    const homeSettings = useSelector((state) => state.auth.homeSettings)
    const categorys = useSelector((state) => state.auth.categorys)
    const cmsData = useSelector((state) => state.auth.cms)
    const cms = cmsData['about-us']

    useEffect(() => {
        dispatch(getCmsDetails({ token, Id: 'about-us' }))
    }, []);

    const sendNewsletter = () => {
        if (!email) {
            setError('Please enter your email')
            emailInput.current.focus();
            return
        }
        if (!FormValidate.isEmail(email)) {
            setError('Please enter a validate email')
            emailInput.current.focus();
            return
        }
        dispatch(subscribeEmail({ email, token }))
        setEmail('')
    }

    return (
        <>
            <section className="subscribe-area" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <div className="container">
                    <div className="row">
                        <div className="subscribe-wrapper">
                            <h3>Subscribe Newsletter</h3>
                            <div className="search-box">
                                <span><i className="icofont-envelope"></i></span>
                                <input ref={emailInput} value={email} onChange={(e) => { setError(null); setEmail(e.target.value) }} type="text" placeholder="Enter  your mail" />
                                <button onClick={sendNewsletter}>Subscribe</button>
                            </div>
                            {error && (<div>{error}</div>)}
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-area">
                <div className="main-footer transparent-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 ft-order-1 mb-lg-50">
                                <div className="ftr-drpt">
                                    <div className="footer-logo">
                                        <NavLink to="/">
                                            <span>criczone</span>
                                        </NavLink>
                                    </div>
                                    <p>{cms?.header}</p>
                                    <div className="footer-social">
                                        <h6>Follow Us</h6>
                                        <ul className="social-icon social-bg-red">
                                            <li><a href="https://www.facebook.com/CriczoneNewsWebsite" target="_blank"><i className="icofont-facebook"></i></a></li>
                                            <li><a href="https://instagram.com/criczonenews?igshid=NmZiMzY2Mjc=" target="_blank"><i className="icofont-instagram"></i></a></li>
                                            <li><a href="https://twitter.com/CriczoneN" target="_blank"><i className="icofont-twitter"></i></a></li>
                                        </ul>
                                        <br />
                                        <h6>Contact Us</h6>
                                        <a href="mailto:info@criczone.co">info@criczone.co</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 ft-order-2 mb-sm-30">
                                <div className="ftr-link">
                                    <h3 className="title-line-shape">Category</h3>
                                    <ul>
                                        <li><NavLink to="/cat/trending-news">Trending News</NavLink></li>
                                        <li><NavLink to="/cat/editors-pick">Editor's Pick</NavLink></li>
                                        <li><NavLink to="/cat/review-zone">Reviews</NavLink></li>
                                        <li><NavLink to="/cat/on-this-day">On this Day</NavLink></li>
                                        <li><NavLink to="/cat/match-prediction">Match Prediction</NavLink></li>
                                        <li><NavLink to="/cat/men">Men</NavLink></li>
                                        <li><NavLink to="/cat/women">Women</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 ft-order-3 mb-sm-30">
                                <div className="ftr-link">
                                    <h3 className="title-line-shape">Useful Link</h3>
                                    <ul>
                                        <li><NavLink to="/cms/dcma">DCMA</NavLink></li>
                                        <li><NavLink to="/cms/disclaimer">Disclaimer</NavLink></li>
                                        <li><NavLink to="/cms/copyright-notice">Copyright Notice</NavLink></li>
                                        <li><NavLink to="/cms/about-us">About Us</NavLink></li>
                                        <li><NavLink to="/cms/contact-us">Contact Us</NavLink></li>
                                        <li><NavLink to="/cms/terms-conditions">Term & Condition</NavLink></li>
                                        <li><NavLink to="/cms/privacy">Privacy</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ftr-bg">
                        <img src={ftrBg} alt="image" />
                    </div>
                </div>
                <div className="ftr-dtls theme-bg">
                    <div className="container">
                        <div className="ftr-dtls-wrapper">
                            <p style={{ textAlign: 'center' }}>Copyright © 2022 criczone All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footerMobile">
                {submenu && (<ul>
                    <li><NavLink to="/cat/men">Mens</NavLink></li>
                    <li><NavLink to="/cat/women">Women</NavLink></li>
                    <li><NavLink to="/cat/international">International</NavLink></li>
                </ul>)}
                <ul>
                    <li onClick={() => setSubmenu(false)}><NavLink to="/"><i className="icofont-home"></i> Home</NavLink></li>
                    <li onClick={() => setSubmenu(false)}><NavLink to="/live-score"><i className="icofont-score-board"></i>  Live score</NavLink></li>
                    <li onClick={() => setSubmenu(false)}><NavLink to="/cat/trending-news"><i className="icofont-ssl-security"></i>  Trending</NavLink></li>
                    <li onClick={() => setSubmenu(!submenu)}><a className={submenu ? 'active' : ''}><i className="icofont-navigation-menu"></i> More</a></li>
                </ul>
            </div>
        </>
    );
}

export default Footers;