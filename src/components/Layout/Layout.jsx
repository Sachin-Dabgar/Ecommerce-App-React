import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

const Layout = () => {
    return (
        /**
         * Layout of the app
         * Header
         * element based on route
         * footer
         */
        <>
            <Header />
            <div>
                <Routers />
            </div>
            <Footer />
        </>
    );
};

export default Layout;
