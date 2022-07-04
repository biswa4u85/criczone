import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, DatePicker, Switch, Layout } from 'antd';
import logo from "../../assets/img/svg/logo.svg";
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
                                        <img src={logo} alt="" />
                                    </NavLink>
                                </div>
                                <p>{t("home.label")}Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                    the Semantics, a large language ocean.</p>
                                <div className="footer-social">
                                    <h6>Follow Us</h6>
                                    <ul className="social-icon social-bg-red">
                                        <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="#"><i className="icofont-youtube-play"></i></a></li>
                                        <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 ft-order-2 mb-sm-30">
                            <div className="ftr-category">
                                <h3 className="title-line-shape">Category</h3>
                                <div className="ftr-category-menu">
                                    <ul className="round-shape">
                                        <li><a href="#">Traveling</a></li>
                                        <li><a href="#">Food</a></li>
                                        <li><a href="#">Fashion</a></li>
                                    </ul>
                                    <ul className="round-shape">
                                        <li><a href="#">Fittness</a></li>
                                        <li><a href="#">Medicare</a></li>
                                        <li><a href="#">Photography</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 ft-order-3 mb-sm-30">
                            <div className="ftr-link">
                                <h3 className="title-line-shape">Useful Link</h3>
                                <ul>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Sitemap</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Support</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 ft-order-4">
                            <div className="ftr-contact">
                                <h3 className="title-line-shape">Contact Us</h3>
                                <p>newsvolt@gmail.com</p>
                                <p>+123 456 - 789</p>
                                <p>Road - 13 , Block - B <span>Grand Canion , Arizona , USA</span></p>
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
                        <p>Copyright © 2020 newsvolt All Rights Reserved.</p>
                        <ul>
                            <li><a href="#">Term & Condition</a></li>
                            <li><a href="#">Privecy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footers;