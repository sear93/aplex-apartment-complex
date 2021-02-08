import React from 'react';
import {withStateAndAcfOptions} from "../handlers/withACFoptions";

const News = (props) => {

    const data = props.state.source.get(props.state.router.link);
    const page = props.state.source[data.type][data.id];

    console.log(props.acfOptions)

    return (
        <>
            <h1>It's custom {page.title.rendered} {page.type} </h1>
        </>
    );
};

export default withStateAndAcfOptions(News);
