import React from 'react';
import Areaofexpertise from './Areaofexpertise/Areaofexpertise';
import Cleanroom from './Cleanroom/Cleanroom';
import Uv from './Uv/Uv';
import Validate from './Validate/Validate';
import Hero from './Hero/Hero';



function Home() {
    return (
        <>
            <Hero/>
            <Areaofexpertise />
            <Cleanroom />
            <Uv />
            <Validate/>

        </>
    )
}

export default Home;
