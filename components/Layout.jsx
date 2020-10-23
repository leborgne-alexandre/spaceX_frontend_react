import React from 'react';
import Head from 'next/head'

const Layout = ({children}) => {
    return (
        <div>
            <Head>
            </Head>
            <h1>Layout</h1>
            {children}
        </div> );
            
};

export default Layout;