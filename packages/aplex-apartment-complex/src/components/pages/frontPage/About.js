import React from 'react';
import {connect, styled} from "frontity";
import {Container} from "../../styled/global";
import {withStateAndAcfOptions} from "../../handlers/withACFoptions";

const About = ({acfOptions}) => {

    return (
        <AboutContainer>
            <Container>

            </Container>
        </AboutContainer>
    );
};

const AboutContainer = styled.div`
  
`

export default withStateAndAcfOptions(About)
