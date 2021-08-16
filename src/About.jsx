import React from 'react';
import web from "../src/image/my2.JPG"
import Common from './Common';

const About = () => {

    return (
        <>
            <Common name="welcome to About page" btnname="Contact Us" imgsrc={web} visit="./Contact" />

        </>
    );

}

export default About;


