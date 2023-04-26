import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const signIn = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;

            console.log(user);
            setLoading(false);
            toast.success("Login Successfull");
            navigate("/checkout");
        } catch (err) {
            setLoading(false);
            toast.error(err.message);
        }
    };

    return (
        <Helmet title="Login">
            <section>
                <Container>
                    <Row>
                        <Col
                            lg="6"
                            className="m-auto text-center"
                        >
                            <h3 className="font-bold fs-4 mb-4">Login</h3>
                            {loading ? (
                                <Col lg="12">
                                    <h6 className="text-center font-bold">
                                        Loading....
                                    </h6>
                                </Col>
                            ) : (
                                <Form
                                    onSubmit={signIn}
                                    className="auth__form bg-primary-color p-[40px] rounded-[5px]"
                                >
                                    <FormGroup className="form__group">
                                        <input
                                            required
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            className="w-full border-[1px] border-solid border-card-bg-02 px-[1rem] py-[0.5rem] focus:outline-none"
                                            type="email"
                                            placeholder="Enter your email"
                                        />
                                    </FormGroup>
                                    <FormGroup className="form__group">
                                        <input
                                            required
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            value={password}
                                            className="w-full border-[1px] border-solid border-card-bg-02 px-[1rem] py-[0.5rem] focus:outline-none"
                                            type="password"
                                            placeholder="Enter your password"
                                        />
                                    </FormGroup>
                                    <button
                                        type="submit"
                                        className="buy_btn auth_btn mt-5 bg-white text-primary-color font-[600] px-4 py-2 rounded-lg"
                                    >
                                        Login
                                    </button>
                                    <p className="mt-[30px]">
                                        Don't have an account?{"  "}
                                        <Link
                                            className="text-[#ffffffd0] font-[500]"
                                            to="/signup"
                                        >
                                            Create an account
                                        </Link>
                                    </p>
                                </Form>
                            )}
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Login;
