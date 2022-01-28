import React from 'react';
import Layout from "../wrappers/Layout/Layout";
import Header from "../sections/Header/Header";
import Pricing from "../sections/Pricing/Pricing";

const PricingPage = () => {
    return (
        <Layout radian={true}>
            <Header/>
            <Pricing/>
        </Layout>
    );
};

export default PricingPage;