import React from 'react';
import web from "../src/image/my.jpg"
import Common from './Common';

const Home = () => {

    return (
        <>
            <Common name="welcome to Home page" btnname="Get started" imgsrc={web} visit="./About" />
        </>
    );

}

export default Home;


