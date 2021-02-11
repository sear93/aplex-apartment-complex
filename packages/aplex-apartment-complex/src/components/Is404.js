import React from 'react';
import {Container} from "./styled/global";
import {withStateAndAcfOptions} from "./handlers/withACFoptions";

const Is404 = (props) => {

    const urlData = props.state.source.get(props.state.router.link);

    return (
        <>
            <Container>
                <h2>Oops! Its {urlData.errorStatus} page</h2>
            </Container>
        </>
    );
};

export default withStateAndAcfOptions(Is404)
