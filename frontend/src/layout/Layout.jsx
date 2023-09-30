import React from "react";

import Header from "../components/Header/Header";
import Routers from "../routes/Routers";
import Footer from "../components/Footer/Footer";

const Layout = () => {
    return (
        <>
        <Header></Header>
        <main>
            <Routers></Routers>
        </main>
        <Footer></Footer>
        </>
    );
};

export default Layout;