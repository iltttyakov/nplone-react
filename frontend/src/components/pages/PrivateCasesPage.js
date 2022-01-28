import React from 'react';
import Layout from "../wrappers/Layout/Layout";
import Header from "../sections/Header/Header";
import PrivateCases from "../posts/PrivateCases/PrivateCases";


const PrivateCasesPage = () => {
    return (
        <Layout>
            <Header blog={true}/>
            <PrivateCases/>
        </Layout>
    );
};

export default PrivateCasesPage;