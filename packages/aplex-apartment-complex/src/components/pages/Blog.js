import React from 'react';
import {connect} from "frontity";

const Blog = (props) => {

    const data = props.state.source.get(props.state.router.link);
    const page = props.state.source[data.type][data.id];

    console.log(page)

    return (
        <>
            <h1>It's custom {page.title.rendered} {page.type} </h1>
        </>
    );
};

export default connect(Blog)
