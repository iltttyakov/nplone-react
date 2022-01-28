import React from 'react';
import Layout from "../wrappers/Layout/Layout";
import Header from "../sections/Header/Header";
import WhatIsN from "../posts/WhatIsN/WhatIsN";

const WhatIsNPage = () => {
    return (
        <Layout>
            <Header blog={true}/>
            <WhatIsN/>
        </Layout>
    );
};

export default WhatIsNPage;