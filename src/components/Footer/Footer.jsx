import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";

import { Link } from "react-router-dom";
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer pt-[60px] pb-[30px] bg-primary-color">
            <Container>
                <Row>
                    <Col
                        lg="4"
                        className="mb-8"
                    >
                        <div className="logo flex items-center gap-x-[8px]">
                            <div>
                                <h1 className="text-[1.2rem] font-[600] text-white">
                                    Meri Dukaan
                                </h1>
                            </div>
                        </div>
                        <p className="footer__text mt-4 leading-[30px] text-[rgba(255,255,255,0.7)]">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Cum in, nam id vel atque fugiat autem. Itaque
                            inventore sed eius.
                        </p>
                    </Col>
                    <Col
                        lg="3"
                        className="mb-8"
                    >
                        <div className="footer_quick-links">
                            <h4 className="quick__links-title mb-[20px] text-white text-[1.1rem]">
                                Top Categories
                            </h4>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0 bg-transparent  text-[rgba(255,255,255,0.7)]">
                                    <Link to="#">Mobile Phones</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 bg-transparent  text-[rgba(255,255,255,0.7)]">
                                    <Link to="#">Modern Sofa</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 bg-transparent  text-[rgba(255,255,255,0.7)]">
                                    <Link to="#">Arm Chair</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 bg-transparent  text-[rgba(255,255,255,0.7)]">
                                    <Link to="#">Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col
                        lg="2"
                        className="mb-8"
                    >
                        <div className="footer_quick-links">
                            <h4 className="quick__links-title mb-[20px] text-white text-[1.1rem]">
                                Useful Links
                            </h4>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0 bg-transparent  text-[rgba(255,255,255,0.7)]">
                                    <Link to="/shop">Shop</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 bg-transparent  text-[rgba(255,255,255,0.7)]">
                                    <Link to="/cart">Cart</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 bg-transparent  text-[rgba(255,255,255,0.7)]">
                                    <Link to="/login">Login</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 bg-transparent  text-[rgba(255,255,255,0.7)]">
                                    <Link to="#">Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col
                        lg="3"
                        className="mb-8"
                    >
                        <div className="footer_quick-links">
                            <h4 className="quick__links-title mb-[20px] text-white text-[1.1rem]">
                                Contact
                            </h4>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0 bg-transparent  text-[rgba(255,255,255,0.7)] flex items-center gap-2">
                                    <span className="text-[1.2rem]">
                                        <i className="ri-map-pin-line"></i>
                                    </span>
                                    <p className="text-[0.9rem]">
                                        123 Somewhere, Someplace, Somecontinent
                                    </p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 bg-transparent  text-[rgba(255,255,255,0.7)] flex items-center gap-2">
                                    <span className="text-[1.2rem]">
                                        <i className="ri-phone-line"></i>
                                    </span>
                                    <p className="text-[0.9rem]">
                                        (+91) 1234567890{" "}
                                    </p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 bg-transparent  text-[rgba(255,255,255,0.7)] flex items-center gap-2">
                                    <span className="text-[1.2rem]">
                                        <i className="ri-mail-line"></i>
                                    </span>
                                    <p className="text-[0.9rem]">
                                        unknown@something.some
                                    </p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 bg-transparent  text-[rgba(255,255,255,0.7)] flex items-center gap-2"></ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="12">
                        <p className="footer__copyright text-[rgba(255,255,255,0.7)] text-[0.9rem] mt-[50px] text-center">
                            Copyright {year} developed by Sachin Dabgar. All
                            rights reserved
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
