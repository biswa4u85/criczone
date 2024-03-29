import React, { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Image } from 'antd';
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux'
import ftrBg from "../../assets/img/svg/ftr-bg.svg";
import FormValidate from "../../common/FormValidate";
import Config from "../../common/Config";
import instagram from "../../assets/image/instagram.png";
import facebook from "../../assets/image/facebook.png";
import twitter from "../../assets/image/twitter.png";
import { subscribeEmail } from '../../store/MainRedux'

function Footers() {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const emailInput = useRef(null);
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const [submenu, setSubmenu] = useState(false)
    const token = Config.token
    const homeSettings = useSelector((state) => state.auth.homeSettings)

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
                                        <img src={Config.frappe_url + '/' + homeSettings.site_logo} alt="image" />
                                        </NavLink>
                                    </div>
                                    <p>{homeSettings?.site_about}</p>
                                    <div className="footer-social">
                                        <h6>Follow Us</h6>
                                        {/* <i className="icofont-instagram"></i> */}
                                        <ul className="social-icon social-bg-red">
                                            <li><a href="https://www.facebook.com/CriczoneNewsWebsite" target="_blank"><Image preview={false} src={facebook} /></a></li>
                                            <li><a href="https://instagram.com/criczonenews?igshid=NmZiMzY2Mjc=" target="_blank"><Image preview={false} src={instagram} /></a></li>
                                            <li><a href="https://twitter.com/CriczoneN" target="_blank"><Image preview={false} src={twitter} /></a></li>
                                        </ul>
                                        <br />
                                        <h6>Contact Us</h6>
                                        <a href={`mailto:${homeSettings?.site_email}`}>{homeSettings?.site_email}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 ft-order-2 mb-sm-30">
                                <div className="ftr-link">
                                    <h3 className="title-line-shape">Category</h3>
                                    <ul>
                                        {homeSettings?.category ? homeSettings.category.map((item, key) => <li key={key}><NavLink to={`/category/${item.title}`}>{Config.filterTitle(item.title)}</NavLink></li>) : null}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 ft-order-3 mb-sm-30">
                                <div className="ftr-link">
                                    <h3 className="title-line-shape">Useful Link</h3>
                                    <ul>
                                        {homeSettings?.usefulLinks ? homeSettings.usefulLinks.map((item, key) => <li key={key}><NavLink to={`/pages/${item.title}`}>{Config.filterTitle(item.title)}</NavLink></li>) : null}
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
                    <li><NavLink to="/category/men">Mens</NavLink></li>
                    <li><NavLink to="/category/women">Women</NavLink></li>
                    <li><NavLink to="/category/international">International</NavLink></li>
                </ul>)}
                <ul>
                    <li onClick={() => setSubmenu(false)}><NavLink to="/"><i className="icofont-home"></i> Home</NavLink></li>
                    <li onClick={() => setSubmenu(false)}><NavLink to="/live-score"><i className="icofont-score-board"></i>  Live score</NavLink></li>
                    <li onClick={() => setSubmenu(false)}><NavLink to="/category/trending-news"><i className="icofont-ssl-security"></i>  Trending</NavLink></li>
                    <li onClick={() => setSubmenu(!submenu)}><a className={submenu ? 'active' : ''}><i className="icofont-navigation-menu"></i> More</a></li>
                </ul>
            </div>
        </>
    );
}

export default Footers;