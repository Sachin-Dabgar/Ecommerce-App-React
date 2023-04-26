import React, { useState, useEffect } from "react";
import Services from "../services/Services";
import Helmet from "../components/Helmet/Helmet";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";
import Clock from "../components/UI/Clock";

import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";

import heroImage from "../assets/images/hero-img.png";
import counterImg from "../assets/images/counter-timer-img.png";

import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
    // state for data
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        const filteredTrendingProducts = products.filter(
            (item) => item.category === "chair"
        );
        const filteredBestSalesProducts = products.filter(
            (item) => item.category === "sofa"
        );
        const filteredMobileProducts = products.filter(
            (item) => item.category === "mobile"
        );
        const filteredWirelessProducts = products.filter(
            (item) => item.category === "wireless"
        );
        const filteredPopularProducts = products.filter(
            (item) => item.category === "watch"
        );

        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);
        setMobileProducts(filteredMobileProducts);
        setWirelessProducts(filteredWirelessProducts);
        setPopularProducts(filteredPopularProducts);
    }, []);

    const year = new Date().getFullYear();

    return (
        <Helmet title={"Home"}>
            <section className="hero__section bg-hero-bg lg:text-[2rem]">
                <Container>
                    <Row>
                        <Col
                            lg="6"
                            md="5"
                        >
                            <div className="hero__content pt-[45px]">
                                <p className="hero__subtitle text-primary-color leading-[28px] font-[500]">
                                    Trending product in {year}
                                </p>
                                <h2 className="text-primary-color text-[2.5rem] font-[600] my-[20px]">
                                    Make Your Interior More Minimalistic &
                                    Modern
                                </h2>
                                <p className="text-primary-color leading-[28px]">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Nulla, similique!
                                    Provident error animi sequi quis
                                    consequuntur accusamus, quas illum
                                    temporibus.
                                </p>
                                <Link to="/shop">
                                    <motion.button
                                        whileTap={{ scale: 1.2 }}
                                        className="buy__btn bg-primary-color border-none mt-[40px] outline-none py-[8px] px-[20px] rounded-[5px] text-white cursor-pointer text-[1rem]"
                                    >
                                        SHOP NOW
                                    </motion.button>
                                </Link>
                            </div>
                        </Col>
                        <Col
                            lg="6"
                            md="6"
                        >
                            <div className="hero__image">
                                <img
                                    src={heroImage}
                                    alt=""
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Services />
            <section className="trending__products">
                <Container>
                    <Row>
                        <Col
                            lg="12"
                            className="text-center"
                        >
                            <h2 className="section__title">
                                Trending Products
                            </h2>
                        </Col>
                        <ProductsList data={trendingProducts} />
                    </Row>
                </Container>
            </section>

            <section className="best__sales">
                <Container>
                    <Row>
                        <Col
                            lg="12"
                            className="text-center"
                        >
                            <h2 className="section__title">Best Sales</h2>
                        </Col>
                        <ProductsList data={bestSalesProducts} />
                    </Row>
                </Container>
            </section>

            <section className="timer__count bg-primary-color h-[300px]">
                <Container className=" flex items-center justify-center">
                    <Row>
                        <Col
                            lg="6"
                            md="12"
                        >
                            <div className="clock__top-content">
                                <h4 className="text-white fs-6 mb-2">
                                    Limited Offers
                                </h4>
                                <h3 className="text-white fs-5 mb-3">
                                    Quality Armchair
                                </h3>
                            </div>
                            <Clock />

                            <Link
                                to="/shop"
                                className="hover:text-primary-color"
                            >
                                <motion.button
                                    whileTap={{ scale: 1.2 }}
                                    className="buy__btn store__btn bg-white border-none mt-[40px] outline-none py-[8px] px-[20px] rounded-[5px] text-primary-color font-[600] cursor-pointer text-[1rem]"
                                >
                                    Visit Store
                                </motion.button>
                            </Link>
                        </Col>
                        <Col
                            lg="6"
                            md="12"
                            className="flex justify-end"
                        >
                            <img
                                className="w-[70%] h-[70%] object-contain hidden lg:block"
                                src={counterImg}
                                alt=""
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="new__arrivals">
                <Container>
                    <Row>
                        <Col
                            lg="12"
                            className="text-center mb-5"
                        >
                            <h2 className="section__title">New Arrivals</h2>
                        </Col>
                        <ProductsList data={mobileProducts} />
                        <ProductsList data={wirelessProducts} />
                    </Row>
                </Container>
            </section>

            <section className="popular__category">
                <Container>
                    <Row>
                        <Col
                            lg="12"
                            className="text-center mb-5"
                        >
                            <h2 className="section__title">
                                Popular in Category
                            </h2>
                        </Col>
                        <ProductsList data={popularProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;
