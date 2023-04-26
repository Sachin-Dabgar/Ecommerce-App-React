import React from "react";

import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import servicesData from "../assets/data/serviceData";

const Services = () => {
    return (
        <section className="services">
            <Container>
                <Row>
                    {servicesData.map((item, index) => {
                        return (
                            <Col
                                key={item?.title}
                                lg="3"
                                md="4"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    style={{ background: `${item.bg}` }}
                                    className={`service__item p-[20px] flex items-center gap-x-[0.7rem] rounded-[5px] cursor-pointer mb-4 lg:mb-0`}
                                >
                                    <span>
                                        <i
                                            className={`${item.icon} text-[2.2rem] bg-primary-color p-[10px] rounded-[50px] text-white font-[400]`}
                                        ></i>
                                    </span>
                                    <div>
                                        <h3 className="text-primary-color text-[1.1rem] font-[600]">
                                            {item.title}
                                        </h3>
                                        <p className="text-[0.9rem] mt-[5px] text-[#222]">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </motion.div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Services;
