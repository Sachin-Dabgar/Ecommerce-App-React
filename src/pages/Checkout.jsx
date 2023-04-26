import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { useSelector } from "react-redux";

const Checkout = () => {
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    console.log(totalAmount, totalQuantity);

    return (
        <Helmet title="Checkout">
            <CommonSection title="Checkout" />
            <section>
                <Container>
                    <Row>
                        <Col lg="8">
                            <h6 className="mb-4 font-bold">
                                Billing Information
                            </h6>
                            <Form className="billing_form">
                                <FormGroup className="form__group">
                                    <input
                                        className="w-full border-[1px] border-solid border-card-bg-02 px-[1rem] py-[0.5rem]"
                                        type="text"
                                        placeholder="Enter your name"
                                    />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input
                                        className="w-full border-[1px] border-solid border-card-bg-02 px-[1rem] py-[0.5rem]"
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input
                                        className="w-full border-[1px] border-solid border-card-bg-02 px-[1rem] py-[0.5rem]"
                                        type="number"
                                        placeholder="Phone number"
                                    />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input
                                        className="w-full border-[1px] border-solid border-card-bg-02 px-[1rem] py-[0.5rem]"
                                        type="text"
                                        placeholder="Street address"
                                    />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input
                                        className="w-full border-[1px] border-solid border-card-bg-02 px-[1rem] py-[0.5rem]"
                                        type="text"
                                        placeholder="City"
                                    />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input
                                        className="w-full border-[1px] border-solid border-card-bg-02 px-[1rem] py-[0.5rem]"
                                        type="text"
                                        placeholder="Postal code"
                                    />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input
                                        className="w-full border-[1px] border-solid border-card-bg-02 px-[1rem] py-[0.5rem]"
                                        type="text"
                                        placeholder="Country"
                                    />
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col lg="4">
                            <div className="checkout__cart p-[20px] bg-primary-color text-white rounded-[5px]">
                                <h6 className="flex items-center justify-between mb-[20px]">
                                    Total Qty: <span>{totalQuantity}</span>
                                </h6>
                                <h6 className="flex items-center justify-between mb-[20px]">
                                    Subtotal:{" "}
                                    <span>
                                        $ {totalAmount ? totalAmount : 0}
                                    </span>
                                </h6>
                                <h6 className="flex items-center justify-between mb-[20px]">
                                    <span>Shipping:</span> <br />
                                    <span>$ 0</span>
                                </h6>
                                <h4 className="flex items-center justify-between border-[1px] border-solid border-r-transparent border-b-transparent border-l-transparent border-t-[rgba(221,221,221,0.25)] pt-[20px]">
                                    Total Cost:{" "}
                                    <span>
                                        $ {totalAmount ? totalAmount : 0}
                                    </span>
                                </h4>
                                <button className="buy_btn auth_btn w-full mt-5 bg-white text-[#313131] font-bold px-4 py-2 rounded-lg">
                                    Place an order
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Checkout;
