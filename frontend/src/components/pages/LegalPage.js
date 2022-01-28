import React from 'react';
import Layout from "../wrappers/Layout/Layout";
import Header from "../sections/Header/Header";
import Legal from "../sections/Legal/Legal";


const LegalPage = () => {
    return (
        <Layout radian={true}>
            <Header/>
            <Legal/>
        </Layout>
    );
};

export default LegalPage;