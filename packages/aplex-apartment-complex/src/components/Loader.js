import React from "react";
import loader from '../img/gif-loader.gif'
import {LoaderContainer} from "./styled/global";

const Loader = () => {

    return (
        <LoaderContainer>
            <img src={loader} alt="loader"/>
        </LoaderContainer>
    )
}

export default Loader;

