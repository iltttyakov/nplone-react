import React from 'react';
import Layout from "../wrappers/Layout/Layout";
import Header from "../sections/Header/Header";
import PublicCases from "../posts/PublicCases/PublicCases";


const PublicCasesPage = () => {
    return (
        <Layout>
            <Header blog={true}/>
            <PublicCases/>
        </Layout>
    );
};

export default PublicCasesPage;