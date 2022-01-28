import React from 'react';
import Layout from "../wrappers/Layout/Layout";
import Header from "../sections/Header/Header";
import NotFound from "../sections/NotFound/NotFound";

const NotFoundPage = () => {
    return (
        <Layout radian={true}>
            <Header/>
            <NotFound/>
        </Layout>
    );
};

export default NotFoundPage;