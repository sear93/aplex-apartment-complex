import React from "react";
import {connect} from "frontity";

export const withStateAndAcfOptions = (Component) => {

    const WithStateAndAcfOptions = (props) => {

        const options = props.state.source.get("acf-options-page");
        const data = props.state.source.get(props.state.router.link);

        return <Component {...props} acfOptions={options}/>
    }

    let connectedComponent = connect(WithStateAndAcfOptions)

    return connectedComponent
}

