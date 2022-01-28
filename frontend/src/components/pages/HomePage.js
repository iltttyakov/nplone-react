import React, {useEffect} from 'react';
import Layout from "../wrappers/Layout/Layout";
import Usp from "../sections/Usp/Usp";
import Header from "../sections/Header/Header";
import Zones from "../sections/Zones/Zones";
import FinanceZone from "../sections/FinanceZone/FinanceZone";
import SharedZone from "../sections/SharedZone/SharedZone";
import PublicZone from "../sections/PublicZone/PublicZone";
import BookDemo from "../sections/BookDemo/BookDemo";
import UseCasesBanner from "../sections/UseCasesBanner/UseCasesBanner";


const HomePage = () => {
    return (
        <Layout radian={true}>
            <Usp>
                <Header/>
            </Usp>
            <Zones/>
            <FinanceZone/>
            <SharedZone/>
            <PublicZone/>
            <BookDemo/>
            <UseCasesBanner/>
        </Layout>
    );
};

export default HomePage;