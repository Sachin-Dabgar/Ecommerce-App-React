import React from "react";

import { motion } from "framer-motion";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCard = ({ item }) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id: item.id,
                productName: item.productName,
                price: item.price,
                image: item.imgUrl,
            })
        );
    };

    return (
        <Col
            lg="3"
            md="4"
            className="mb-2"
        >
            <Link
                to={`/shop/${item.id}`}
                className="hover:text-inherit product__name text-[1.2rem] text-primary-color font-semibold mt-[15px]"
            >
                <div className="product__item cursor-pointer">
                    {/* product image */}
                    <div className="product__img">
                        <motion.img
                            whileHover={{ scale: 0.9 }}
                            src={item.imgUrl}
                            alt=""
                        />
                    </div>
                    <div className="product__info p-2">
                        {/* product title */}
                        <h3>{item.productName}</h3>
                        <span className="text-[0.9rem]">{item.category}</span>
                    </div>
                    <div className="product__card-bottom flex items-center justify-between p-2">
                        {/* product price */}
                        <span className="price text-primary-color text-[1.3rem] font-[500]">
                            ${item.price}
                        </span>
                        {/* product add to cart button */}
                    </div>
                </div>
            </Link>

            {/* <i className="ri-add-line text-[1.2rem] p-[5px] bg-primary-color text-white rounded-[50px]"></i> */}
            <motion.button
                whileTap={{ scale: 1.2 }}
                onClick={addToCart}
                className="bg-[#595d7e] text-white font-semibold text-[0.8rem] px-4 py-2 rounded-lg"
            >
                Add To Cart
            </motion.button>
        </Col>
    );
};

export default ProductCard;
