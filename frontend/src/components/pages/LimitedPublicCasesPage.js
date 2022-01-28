import React from 'react';
import Layout from "../wrappers/Layout/Layout";
import Header from "../sections/Header/Header";
import LimitedPublicCases from "../posts/LimitedPublicCases/LimitedPublicCases";

const LimitedPublicCasesPage = () => {
    return (
        <Layout>
            <Header blog={true}/>
            <LimitedPublicCases/>
        </Layout>
    );
};

export default LimitedPublicCasesPage;