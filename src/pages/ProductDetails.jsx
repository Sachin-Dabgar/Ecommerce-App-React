import React, { useEffect, useRef, useState } from "react";

import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import ProductsList from "../components/UI/ProductsList";
import { toast } from "react-toastify";

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [tab, setTab] = useState("desc");
    const [rating, setRating] = useState(null);

    const reviewUser = useRef("");
    const reviewMsg = useRef("");

    const product = products.find((item) => {
        return item.id === id;
    });

    const {
        imgUrl,
        productName,
        price,
        avgRating,
        reviews,
        description,
        shortDesc,
        category,
    } = product;

    const relatedProducts = products.filter(
        (item) => item.category === category
    );

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id: product.id,
                productName: product.productName,
                price: product.price,
                image: product.imgUrl,
            })
        );
        // toast.success("Product added to cart");
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const reviewUserName = reviewUser.current.value;
        const reviewUserMessage = reviewMsg.current.value;

        if (!rating) {
            toast.error("Please give rating");
            return;
        }

        const reviewObj = {
            userName: reviewUserName,
            text: reviewUserMessage,
            rating,
        };

        console.log(reviewObj);
        toast.success("Review Submitted");
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

    return (
        <Helmet title={productName}>
            <CommonSection title={productName} />
            <section className="pt-0">
                <Container>
                    <Row>
                        <Col lg="6">
                            <img
                                src={imgUrl}
                                alt=""
                            />
                        </Col>
                        <Col lg="6">
                            <div className="product__details mt-[70px]">
                                <h2 className="text-[1.8rem] mb-[10px]">
                                    {productName}
                                </h2>
                                <div className="product__rating flex items-center gap-5 mb-3">
                                    <div>
                                        <span>
                                            <i className="ri-star-s-fill text-orange-600"></i>
                                            <i className="ri-star-s-fill text-orange-600"></i>
                                            <i className="ri-star-s-fill text-orange-600"></i>
                                            <i className="ri-star-s-fill text-orange-600"></i>
                                            <i className="ri-star-half-s-fill text-orange-600"></i>
                                        </span>
                                    </div>
                                    <p>
                                        (
                                        <span className="text-orange-600 font-[500]">
                                            {avgRating}
                                        </span>{" "}
                                        ratings)
                                    </p>
                                </div>
                                <div className="flex items-center gap-5">
                                    <span className="product__price text-[1.3rem] font-[500]">
                                        $ {price}
                                    </span>
                                    <span>
                                        Category: {category.toUpperCase()}
                                    </span>
                                </div>
                                <p className="mt-3">{shortDesc}</p>
                                <motion.button
                                    whileTap={{ scale: 1.2 }}
                                    onClick={addToCart}
                                    className="mt-5 bg-primary-color text-white font-semibold text-[0.8rem] px-4 py-2 rounded-lg"
                                >
                                    Add To Cart
                                </motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="tab__wrapper flex items-center gap-5 text-primary-color font-[500] text-[1rem]">
                                <h6
                                    onClick={() => setTab("desc")}
                                    className={`${
                                        tab === "desc" ? "font-[600]" : ""
                                    } cursor-pointer`}
                                >
                                    Description
                                </h6>
                                <h6
                                    onClick={() => setTab("rev")}
                                    className={`${
                                        tab === "rev" ? "font-[600]" : ""
                                    } cursor-pointer`}
                                >
                                    Reviews ({reviews.length})
                                </h6>
                            </div>

                            {tab === "desc" ? (
                                <div className="tab__content mt-4">
                                    <p className="leading-[30px]">
                                        {description}
                                    </p>
                                </div>
                            ) : (
                                <div className="product__review mt-5">
                                    <div className="review__wrapper">
                                        <ul>
                                            {reviews?.map((item, index) => {
                                                return (
                                                    <li
                                                        className="mb-4"
                                                        key={
                                                            item?.rating + index
                                                        }
                                                    >
                                                        <h6>John Doe</h6>
                                                        <span className="text-orange-600 font-[600]">
                                                            {item.rating}{" "}
                                                            (rating)
                                                        </span>
                                                        <p className="mt-[10px]">
                                                            {item.text}
                                                        </p>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                        <div className="review__form w-[70%] m-auto mt-[50px]">
                                            <h4 className="text-[1.2rem] font-[600] mb-[30px]">
                                                Leave your experience
                                            </h4>
                                            <form
                                                action=""
                                                onSubmit={submitHandler}
                                            >
                                                <div className="form__group mb-[30px]">
                                                    <input
                                                        ref={reviewUser}
                                                        className=" w-full border-[1px] border-solid border-primary-color rounded-[5px] py-[8px] px-[20px] focus:outline-none"
                                                        type="text"
                                                        placeholder="Enter Name"
                                                        required
                                                    />
                                                </div>
                                                <div className="form__group mb-[30px] flex items-center gap-10">
                                                    <motion.span
                                                        whileTap={{
                                                            scale: 1.5,
                                                        }}
                                                        onClick={() =>
                                                            setRating(1)
                                                        }
                                                        className="flex items-center gap-x-[5px] text-orange-600 font-[600] cursor-pointer"
                                                    >
                                                        1
                                                        <i className="ri-star-s-fill"></i>
                                                    </motion.span>
                                                    <motion.span
                                                        whileTap={{
                                                            scale: 1.5,
                                                        }}
                                                        onClick={() =>
                                                            setRating(2)
                                                        }
                                                        className="flex items-center gap-x-[5px] text-orange-600 font-[600] cursor-pointer"
                                                    >
                                                        2
                                                        <i className="ri-star-s-fill"></i>
                                                    </motion.span>
                                                    <motion.span
                                                        whileTap={{
                                                            scale: 1.5,
                                                        }}
                                                        onClick={() =>
                                                            setRating(3)
                                                        }
                                                        className="flex items-center gap-x-[5px] text-orange-600 font-[600] cursor-pointer"
                                                    >
                                                        3
                                                        <i className="ri-star-s-fill"></i>
                                                    </motion.span>
                                                    <motion.span
                                                        whileTap={{
                                                            scale: 1.5,
                                                        }}
                                                        onClick={() =>
                                                            setRating(4)
                                                        }
                                                        className="flex items-center gap-x-[5px] text-orange-600 font-[600] cursor-pointer"
                                                    >
                                                        4
                                                        <i className="ri-star-s-fill"></i>
                                                    </motion.span>
                                                    <motion.span
                                                        whileTap={{
                                                            scale: 1.5,
                                                        }}
                                                        onClick={() =>
                                                            setRating(5)
                                                        }
                                                        className="flex items-center gap-x-[5px] text-orange-600 font-[600] cursor-pointer"
                                                    >
                                                        5
                                                        <i className="ri-star-s-fill"></i>
                                                    </motion.span>
                                                </div>
                                                <div className="form__group mb-[30px]">
                                                    <textarea
                                                        ref={reviewMsg}
                                                        rows={4}
                                                        className=" w-full border-[1px] border-solid border-primary-color rounded-[5px] py-[8px] px-[20px] focus:outline-none"
                                                        type="text"
                                                        placeholder="Review Message"
                                                        required
                                                    />
                                                </div>
                                                <motion.button
                                                    whileTap={{
                                                        scale: 1.2,
                                                    }}
                                                    type="submit"
                                                    className="mt-2 bg-primary-color text-white font-semibold text-[0.8rem] px-4 py-2 rounded-lg"
                                                >
                                                    Submit
                                                </motion.button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Col>
                        <Col
                            lg="12"
                            className="mt-5"
                        >
                            <h2 className="related__title text-[1.2rem] font-[600] mt-[30px]">
                                You might also like
                            </h2>
                        </Col>
                        <ProductsList data={relatedProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default ProductDetails;
