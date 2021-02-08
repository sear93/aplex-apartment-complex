import React from 'react';
import {connect} from "frontity";

const Is404 = (props) => {

    const data = props.state.source.get(props.state.router.link);

    return (
        <>
            <h2>Oops! Its 404 page</h2>
        </>
    );
};

export default connect(Is404)
