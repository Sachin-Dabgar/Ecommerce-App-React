import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";

import { setDoc, doc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "../firebase.config";
import { toast } from "react-toastify";

const Signup = () => {
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const signup = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const useCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = useCredential.user;

            const storageRef = ref(storage, `images/${Date.now() + userName}`);
            const uploadTask = uploadBytesResumable(storageRef, null);
            uploadTask.on(
                (err) => {
                    toast.error(err.message);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        async (downoadUrl) => {
                            // update user profile
                            await updateProfile(user, {
                                displayName: userName,
                                photoURL: downoadUrl,
                            });

                            //store user data in firestore database
                            await setDoc(doc(db, "users", user.uid), {
                                uid: user.uid,
                                displayName: userName,
                                email,
                                photoURL: downoadUrl,
                            });
                        }
                    );
                }
            );
            setLoading(false);
            toast.success("Account Created");
            navigate("/login");
        } catch (err) {
            setLoading(false);
            toast.error("something went wrong");
        }
    };

    return (
        <Helmet title="Signup">
            <section>
                <Container>
                    <Row>
                        {loading ? (
                            <Col
                                lg="12"
                                className="text-center"
                            >
                                <h6 className="font-bold">Loading....</h6>
                            </Col>
                        ) : (
                            <Col
                                lg="6"
                                className="m-auto text-center"
                            >
                                <h3 className="font-bold fs-4 mb-4">Signup</h3>
                                <Form
                                    onSubmit={signup}
                                    className="auth__form bg-primary-color p-[40px] rounded-[5px]"
                                >
                                    <FormGroup className="form__group">
                                        <input
                                            required
                                            value={userName}
                                            onChange={(e) =>
                                                setUserName(e.target.value)
                                            }
                                            className="w-full border-[1px] border-solid border-card-bg-02 px-[1rem] py-[0.5rem] focus:outline-none"
                                            type="text"
                                            placeholder="Enter Username"
                                        />
                                    </FormGroup>
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
                                    {/* <FormGroup className="form__group mt-6">
                                        <label className="text-white flex justify-start">
                                            Upload your profile picture
                                        </label>
                                        <input
                                            disabled
                                            
                                            className="w-full text-white py-[0.5rem] focus:outline-none"
                                            type="file"
                                            placeholder="Upload your profile picture"
                                        />
                                    </FormGroup> */}
                                    <button
                                        type="submit"
                                        className="buy_btn auth_btn mt-5 bg-white text-primary-color font-[600] px-4 py-2 rounded-lg"
                                    >
                                        Create an account
                                    </button>
                                    <p className="mt-[30px]">
                                        Already have an account?{"  "}
                                        <Link
                                            className="text-[#ffffffd0] font-[500]"
                                            to="/login"
                                        >
                                            Login
                                        </Link>
                                    </p>
                                </Form>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Signup;
