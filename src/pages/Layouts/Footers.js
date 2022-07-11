import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, DatePicker, Switch, Layout } from 'antd';
import ftrBg from "../../assets/img/svg/ftr-bg.svg";

function Footers() {
    let navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <footer className="footer-area">
            <div className="main-footer transparent-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 ft-order-1 mb-lg-50">
                            <div className="ftr-drpt">
                                <div className="footer-logo">
                                    <NavLink to="/">
                                        <span>criczone</span>
                                    </NavLink>
                                </div>
                                <p>{t("site.footer")}</p>
                                <div className="footer-social">
                                    <h6>Follow Us</h6>
                                    <ul className="social-icon social-bg-red">
                                        <li><a href="https://www.facebook.com/CricZoneNews" target="_blank"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="https://instagram.com/criczonenews?igshid=NmZiMzY2Mjc=" target="_blank"><i className="icofont-instagram"></i></a></li>
                                        <li><a href="https://telegram.org" target="_blank"><i className="icofont-telegram"></i></a></li>
                                        <li><a href="https://twitter.com/CriczoneN" target="_blank"><i className="icofont-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 ft-order-2 mb-sm-30">
                            <div className="ftr-category">
                                <h3 className="title-line-shape">Category</h3>
                                <div className="ftr-category-menu">
                                    <ul className="round-shape">
                                        <li><NavLink to="/">Trending News</NavLink></li>
                                        <li><NavLink to="/">Press Release</NavLink></li>
                                        <li><NavLink to="/">Previews</NavLink></li>
                                    </ul>
                                    <ul className="round-shape">
                                        <li><NavLink to="/">Reviews</NavLink></li>
                                        <li><NavLink to="/">On this Day</NavLink></li>
                                        <li><NavLink to="/">Match Prediction</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 ft-order-3 mb-sm-30">
                            <div className="ftr-link">
                                <h3 className="title-line-shape">Useful Link</h3>
                                <ul>
                                    <li><NavLink to="/cms/dcma">DCMA</NavLink></li>
                                    <li><NavLink to="/cms/disclaimer">DISCLAIMER</NavLink></li>
                                    <li><NavLink to="/cms/copyright-notice">COPYRIGHT NOTICE</NavLink></li>
                                    <li><NavLink to="/cms/dcma">REVIEW</NavLink></li>
                                    <li><NavLink to="/cms/dcma">FANTASY</NavLink></li>
                                    <li><NavLink to="/cms/about-us">ABOUT US</NavLink></li>
                                    <li><NavLink to="/cms/dcma">CONTACT US</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 ft-order-4">
                            <div className="ftr-contact">
                                <h3 className="title-line-shape">Contact Us</h3>
                                <p>info@criczone.co</p>
                                <p>+00 0000000000</p>
                                <p>ICON BLISS, Opp. Zensar IT Park <span>Kharadi, Pune - 411014</span></p>
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
                        <p>Copyright © 2022 criczone All Rights Reserved.</p>
                        <ul>
                            <li><NavLink to="/cms/terms-conditions">Term & Condition</NavLink></li>
                            <li><NavLink to="/cms/privecy">Privecy</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footers;