import React from 'react';

import Layout from "../wrappers/Layout/Layout";
import Header from "../sections/Header/Header";

import Blog from "../sections/Blog/Blog";

const BlogPage = () => {
    return (
        <Layout>
            <Header blog={true}/>
            <Blog/>
        </Layout>
    );
};

export default BlogPage;