import React from 'react';
import Layout from "../wrappers/Layout/Layout";
import Header from "../sections/Header/Header";
import UseCases from "../sections/UseCases/UseCases";


const UseCasesPage = () => {
    return (
        <Layout radian={true}>
            <Header/>
            <UseCases/>
        </Layout>
    );
};

export default UseCasesPage;