import React from 'react';
import Hero from "./Hero";
import About from "./About";
import Partners from "./Partners";
import {withStateAndAcfOptions} from "../../handlers/withACFoptions";

const FrontPage = ({state}) => {

    const data = state.source.get(state.router.link);

    return (
        <>
            <Hero/>
            <About/>
            <Partners/>
        </>
    );
};

export default withStateAndAcfOptions(FrontPage)
