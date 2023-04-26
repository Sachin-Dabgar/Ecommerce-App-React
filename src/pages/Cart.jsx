import React, { useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../redux/slices/cartSlice";
const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    console.log(cartItems);

    const totalAmount = useSelector((state) => state.cart.totalAmount);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Helmet title="Cart">
            <CommonSection title="Shopping Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg="9">
                            {cartItems.length === 0 ? (
                                <div>
                                    <h2>No items added to cart</h2>
                                    {/* <button
                                        onClick={() => navigate("/shop")}
                                        className="mt-5 bg-primary-color text-white font-semibold text-[0.8rem] px-4 py-2 rounded-lg"
                                    >
                                        Shop Now
                                    </button> */}
                                </div>
                            ) : (
                                <table className="table bordered">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems?.map((item, index) => {
                                            return (
                                                <Tr
                                                    item={item}
                                                    key={item?.id}
                                                />
                                            );
                                        })}
                                    </tbody>
                                </table>
                            )}
                        </Col>
                        <Col lg="3">
                            <div>
                                <h6 className="flex items-center justify-between">
                                    Subtotal
                                    <span className="fs-4 font-bold">
                                        ${totalAmount}
                                    </span>
                                </h6>
                            </div>
                            <p className="fs-6 mt-2">
                                taxes and shipping will be calculated in
                                checkout
                            </p>
                            <div>
                                <Link to="/checkout">
                                    <button className="w-full mt-5 bg-primary-color text-white font-semibold text-[0.8rem] px-4 py-2 rounded-lg">
                                        Checkout
                                    </button>
                                </Link>
                                <Link to="/shop">
                                    <button className="w-full mt-3 bg-primary-color text-white font-semibold text-[0.8rem] px-4 py-2 rounded-lg">
                                        Continue Shopping
                                    </button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

const Tr = ({ item }) => {
    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id));
    };

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id: item.id,
                productName: item.productName,
                price: item.price,
                image: item.imgUrl,
            })
        );
        // toast.success("Product added to cart");
    };

    return (
        <tr className="align-middle">
            <td className="text-primary-color">
                <img
                    className="w-[80px] h-[80px] object-cover"
                    src={item.image}
                    alt=""
                />
            </td>
            <td className="text-primary-color font-bold">{item.productName}</td>
            <td className="text-primary-color font-bold">$ {item.price}</td>
            <td className="text-primary-color">
                <div className="flex flex-col sm:flex-row">
                    <button
                        onClick={deleteProduct}
                        className="bg-primary-color text-white font-semibold px-2 text-xl rounded-sm"
                    >
                        -
                    </button>
                    <span className="mx-4 sm:text-xl font-bold">
                        {item.quantity}
                    </span>
                    <button
                        onClick={addToCart}
                        className="bg-primary-color text-white font-semibold px-2 sm:text-xl rounded-sm"
                    >
                        +
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default Cart;
