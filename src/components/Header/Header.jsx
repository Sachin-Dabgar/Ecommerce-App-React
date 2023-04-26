import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";

import "./header.css";
import { Container, Row } from "reactstrap";

import { motion } from "framer-motion";

import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { useSelector } from "react-redux";

import useAuth from "../../custom-hooks/useAuth";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

// navigation link
const nav__links = [
    {
        path: "home",
        display: "Home",
    },
    {
        path: "shop",
        display: "Shop",
    },
    {
        path: "cart",
        display: "Cart",
    },
];

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [profileClick, setProfileClick] = useState(false);

    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const navigate = useNavigate();

    const navigateToCart = () => {
        navigate("/cart");
    };

    const { currentUser } = useAuth();

    const profileHandler = () => {
        if (profileClick) {
            setProfileClick(false);
        } else {
            setProfileClick(true);
        }
    };

    const logout = () => {
        signOut(auth)
            .then(() => {
                toast.success("Logged out");
                navigate("/home");
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    return (
        <header className="header w-[100%] h-[70px] leading-[70px] sticky top-0 left-0 z-40 shadow-[3px_3px_8px_-3px_rgba(255,255,255, 0.7)] bg-white">
            <Container>
                <Row>
                    <div className="nav__wrapper flex justify-between items-center">
                        {/* for logo */}
                        <div className="logo flex items-center gap-x-[8px]">
                            <img
                                className="w-[1.5rem] h-[1.5rem]"
                                src={logo}
                                alt="logo"
                            />
                            <div>
                                <h1 className="text-[1.2rem] font-[600] text-primary-color">
                                    Meri Dukaan
                                </h1>
                            </div>
                        </div>

                        {/* navigation for the different pages */}
                        <div
                            className={`navigation ${
                                menuToggle ? "block" : "hidden"
                            } lg:block`}
                        >
                            <ul className="menu flex items-center gap-x-[2.7rem] mb-0">
                                <div className="mobile__menu text-[1.3rem] text-primary-color lg:hidden">
                                    <span onClick={() => setMenuToggle(false)}>
                                        <i className="ri-close-line text-3xl"></i>
                                    </span>
                                </div>
                                {nav__links.map((item, index) => {
                                    return (
                                        <li
                                            onClick={() => setMenuToggle(false)}
                                            className="nav__item"
                                            key={item.display}
                                        >
                                            <NavLink
                                                to={item.path}
                                                className={(navClass) =>
                                                    navClass.isActive
                                                        ? "font-bold text-primary-color"
                                                        : ""
                                                }
                                            >
                                                {item.display}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* navigation icons */}
                        <div className="nav__icons flex items-center gap-x-[1.2rem]">
                            {/* <span className="fav__icon relative">
                                <i className="ri-heart-line text-[1.7rem] text-primary-color cursor-pointer"></i>
                                <span className="badge absolute top-[20%] right-[-20%] w-[18px] h-[18px] bg-primary-color text-white rounded-[50px] flex items-center p-[10px] justify-center text-[0.9rem] font-[500] z-[10] animate-bounce">
                                    0
                                </span>
                            </span> */}
                            {/* cart icon */}
                            <span
                                className="cart__icon relative"
                                onClick={navigateToCart}
                            >
                                <i className="ri-shopping-bag-line text-[1.7rem] text-primary-color cursor-pointer"></i>
                                <span className="badge absolute top-[20%] right-[-20%] w-[18px] h-[18px] bg-primary-color text-white rounded-[50px] flex items-center p-[10px] justify-center text-[0.9rem] font-[500] z-[10] animate-bounce">
                                    {totalQuantity}
                                </span>
                            </span>
                            <div
                                className="profile relative z-10"
                                onClick={profileHandler}
                            >
                                <motion.img
                                    whileTap={{ scale: 1.2 }}
                                    src={userIcon}
                                    alt="user icon"
                                    className="w-[30px] h-[30px] cursor-pointer"
                                />
                                <div
                                    className={`profile__actions absolute top-[100%] left-0 w-[150px] z-10 p-[15px] items-center flex-col bg-card-bg-01 leading-[30px] ${
                                        profileClick ? "block" : "hidden"
                                    } cursor-pointer`}
                                >
                                    {currentUser ? (
                                        <span onClick={logout}>Logout</span>
                                    ) : (
                                        <div className="flex items-center justify-center flex-col">
                                            <Link to="/signup">Signup</Link>
                                            <Link to="/login">Login</Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* mobile menu */}
                            <div className="mobile__menu text-xl text-primary-color lg:hidden">
                                <span onClick={() => setMenuToggle(true)}>
                                    <i className="ri-menu-line"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
