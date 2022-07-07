import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, DatePicker, Switch, Layout } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTheme } from "../../theme/use-theme";

import logo from "../../assets/img/svg/logo.svg";

function Headers() {
    let navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <header className="header-area">
            {/* <div className="header-top-area">
                <div className="container container-md">
                    <div className="header-wrapper">
                        <div className="header-contact">
                            <ul className="contact-info">
                                <li>
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H2V4L10 9L18 4V14ZM10 7L2 2H18L10 7Z"
                                            fill="#F63C25" />
                                    </svg>
                                    newsvolt@gmail.com
                                </li>
                                <li>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"
                                            fill="#F63C25" />
                                    </svg>
                                    +123 456 - 789
                                </li>
                            </ul>
                        </div>
                        <div className="header-social">
                            <ul className="social-icon social-white">
                                <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                <li><a href="#"><i className="icofont-youtube-play"></i></a></li>
                                <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                <li><a href="#"><i className="icofont-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="main-header bg-primary">
                <div className="container container-md">
                    <div className="main-header-wrapper">
                        <div className="header-logo">
                            <NavLink to="/">
                                <img src={logo} alt="" />
                            </NavLink>
                        </div>
                        <div className="navbar-wrapper">
                            <nav className="navbar-area">
                                <ul>
                                    <li className="dropdown"><a href="#">Home</a>
                                        <ul>
                                            <li><a href="homepage.html">Newsvolt</a></li>
                                            <li><a href="techvolt.html">Twchvolt</a></li>
                                        </ul>
                                    </li>
                                    <li className="mega-dropdown"><a href="#">Pages</a>
                                        <div className="mega-menu">
                                            <div className="mega-menu-wrapper mega-list-wrapper">
                                                <div className="mega-menu-list">
                                                    <h5 className="title-line-shape drop-icons">Product</h5>
                                                    <ul className="rhb-list-shape">
                                                        <li><a href="shop.html">Shop</a></li>
                                                        <li><a href="shop-sidebar.html">Shop Sidebar</a></li>
                                                        <li><a href="product-details.html">Product Details V.1</a></li>
                                                        <li><a href="product-details-two.html">Product Details V.2</a></li>
                                                        <li><a href="cart.html">Cart</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                    </ul>
                                                </div>
                                                <div className="mega-menu-list">
                                                    <h5 className="title-line-shape drop-icons">Category</h5>
                                                    <ul className="rhb-list-shape">
                                                        <li><a href="category-one.html">Category V.1</a></li>
                                                        <li><a href="category-two.html">Category V.2</a></li>
                                                        <li><a href="protfolio-one.html">Protfolio V.1</a></li>
                                                        <li><a href="protfolio-two.html">Protfolio V.2</a></li>
                                                        <li><a href="protfolio-three.html">Protfolio V.3</a></li>
                                                    </ul>
                                                </div>
                                                <div className="mega-menu-list">
                                                    <h5 className="title-line-shape drop-icons">Account</h5>
                                                    <ul className="rhb-list-shape">
                                                        <li><a href="account-one.html">Account V.1</a></li>
                                                        <li><a href="account-two.html">Account V.2</a></li>
                                                        <li><a href="contact-one.html">Contact Us V.1</a></li>
                                                        <li><a href="contact-two.html">Contact Us V.2</a></li>
                                                    </ul>
                                                </div>
                                                <div className="mega-menu-list">
                                                    <h5 className="title-line-shape drop-icons">Pages</h5>
                                                    <ul className="rhb-list-shape">
                                                        <li><a href="author-one.html">Author V.1</a></li>
                                                        <li><a href="author-two.html">Author V.2</a></li>
                                                        <li><a href="single-post-details.html">Post Details</a></li>
                                                        <li><a href="single-tag-page.html">Single Tag Post</a></li>
                                                    </ul>
                                                </div>
                                                <div className="mega-menu-list">
                                                    <h5 className="title-line-shape drop-icons">Error</h5>
                                                    <ul className="rhb-list-shape">
                                                        <li><a href="error-one.html">404 Error v.1</a></li>
                                                        <li><a href="error-two.html">404 Error v.2</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mega-dropdown"><a href="#">Traveling</a>
                                        <div className="mega-blog-menu mega-menu">
                                            <div className="mega-menu-wrapper d-flex">
                                                <div className="mega-tab-menu">
                                                    <h4>Category</h4>
                                                    <div className="nav flex-column" id="v-pills-tab" role="tablist"
                                                        aria-orientation="vertical">
                                                        <a className="nav-link active" data-bs-toggle="pill" href="#tab-one"
                                                            role="tab" aria-selected="true">Travel</a>
                                                        <a className="nav-link" data-bs-toggle="pill" href="#tab-two" role="tab"
                                                            aria-selected="false">Food & Cook</a>
                                                        <a className="nav-link" data-bs-toggle="pill" href="#tab-three"
                                                            role="tab" aria-selected="false">Lifestyle</a>
                                                        <a className="nav-link" data-bs-toggle="pill" href="#tab-four"
                                                            role="tab" aria-selected="false">Sports</a>
                                                        <a className="nav-link" data-bs-toggle="pill" href="#tab-five"
                                                            role="tab" aria-selected="false">Fitness & GYM</a>
                                                    </div>
                                                </div>
                                                <div className="tab-content mega-tab-content" id="v-pills-tabContent">
                                                    <div className="tab-pane fade show active" id="tab-one">
                                                        <div className="mega-slider-area">
                                                            <div className="megamenu-owl-wrapper owl-carousel"
                                                                data-carousel-loop="false" data-carousel-items="4"
                                                                data-carousel-nav="true" data-carousel-dots="true"
                                                                data-carousel-lg="3" data-carousel-xl="3"
                                                                data-carousel-md="2">

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/travel/travel-1.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/travel/travel-2.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/travel/travel-3.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/travel/travel-4.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/travel/travel-5.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/travel/travel-6.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-two" role="tabpanel">
                                                        <div className="mega-slider-area">
                                                            <div className="megamenu-owl-wrapper owl-carousel"
                                                                data-carousel-loop="false" data-carousel-items="4"
                                                                data-carousel-nav="true" data-carousel-dots="true"
                                                                data-carousel-lg="3" data-carousel-xl="3"
                                                                data-carousel-md="2">

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/food/food-1.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/food/food-2.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/food/food-3.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/food/food-4.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/food/food-5.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/food/food-6.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-three" role="tabpanel">
                                                        <div className="mega-slider-area">
                                                            <div className="megamenu-owl-wrapper owl-carousel"
                                                                data-carousel-loop="false" data-carousel-items="4"
                                                                data-carousel-nav="true" data-carousel-dots="true"
                                                                data-carousel-lg="3" data-carousel-xl="3"
                                                                data-carousel-md="2">

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/lifestyle/lifestyle-1.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/lifestyle/lifestyle-2.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/lifestyle/lifestyle-3.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/lifestyle/lifestyle-4.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/lifestyle/lifestyle-5.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/lifestyle/lifestyle-6.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-four" role="tabpanel">
                                                        <div className="mega-slider-area">
                                                            <div className="megamenu-owl-wrapper owl-carousel"
                                                                data-carousel-loop="false" data-carousel-items="4"
                                                                data-carousel-nav="true" data-carousel-dots="true"
                                                                data-carousel-lg="3" data-carousel-xl="3"
                                                                data-carousel-md="2">

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/sports/sports-1.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/sports/sports-2.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/sports/sports-3.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/sports/sports-4.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/sports/sports-5.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/sports/sports-6.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-five" role="tabpanel">
                                                        <div className="mega-slider-area">
                                                            <div className="megamenu-owl-wrapper owl-carousel"
                                                                data-carousel-loop="false" data-carousel-items="4"
                                                                data-carousel-nav="true" data-carousel-dots="true"
                                                                data-carousel-lg="3" data-carousel-xl="3"
                                                                data-carousel-md="2">

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/gym/gym-1.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/gym/gym-2.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/gym/gym-3.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/gym/gym-4.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/gym/gym-5.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/gym/gym-6.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="category-one.html">Fashion</a></li>
                                    <li><a href="protfolio-one.html">Portfolio</a></li>
                                    <li><a href="author-one.html">Author</a></li>
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="options-area">
                            <div className="dark-light">

                                <i className="icofont-moon"></i>
                            </div>

                            <div className="Search-popup">
                                <div className="Search-icon">
                                    <i className="icofont-search"></i>
                                </div>
                                <div className="search-popup-box">

                                    <div className="search-box">
                                        <span><i className="icofont-search-1"></i></span>
                                        <input type="text" placeholder="Type your keyword" />
                                        <button>Search</button>
                                    </div>
                                    <div className="close-popup">
                                        <i className="icofont-close-line"></i>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="sign-wrapper">

                                <div className="sign-bar">
                                    <i className="icofont-businessman"></i>
                                </div>
                                <div className="sign-option">
                                    <button className="btn-normal sign-in-click">Sign In</button>
                                    <button className="btn btn-theme sign-up-click">Sign Up</button>
                                </div>
                            </div> */}

                            <div className="toggle-bar">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="signin-popup-wrapper signin-bg">
                <div className="sign-in-area">
                    <h2 className="left-line-shape">Sign In</h2>
                    <form>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" />
                        </div>
                    </form>
                    <div className="frc-box">
                        <label className="checkbox-group">
                            <input type="checkbox" className="input" />
                            <span className="checked"></span>
                            <span className="checked-content">Remember</span>
                        </label>
                        <a href="#">Forget Password</a>
                    </div>
                    <button className="btn btn-theme">Login</button>
                    <div className="from-status">
                        <p>Not have account ?</p>
                        <a href="#"><span>SignUp with Gmail</span><img src="assets/img/gmail.png" alt="" /></a>
                    </div>
                    <div className="close-popup">
                        <i className="icofont-close-line"></i>
                    </div>
                </div>
            </div>
            <div className="signup-popup-wrapper signup-bg">
                <div className="sign-up-area">
                    <h2 className="left-line-shape">Create Account</h2>
                    <form>
                        <div className="input-group">
                            <label>Full name</label>
                            <input type="text" />
                        </div>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>
                    </form>
                    <button className="btn btn-theme">Login</button>
                    <div className="login-link-area">
                        <p>Already Have account <a href="#" className="goto-login">Login</a></p>
                    </div>
                    <div className="close-popup">
                        <i className="icofont-close-line"></i>
                    </div>
                </div>
            </div>
        </header>);
}

export default Headers;