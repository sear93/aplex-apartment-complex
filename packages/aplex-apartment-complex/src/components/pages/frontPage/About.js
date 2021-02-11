import React from 'react';
import {styled} from "frontity";
import {Button, Container} from "../../styled/global";
import {withStateAndAcfOptions} from "../../handlers/withACFoptions";

const About = (props) => {

    return (
        <AboutContainer>
            <Container>
                <div className={"about"}>
                    <h3 className={"about__title"}>{props.acfOptions.acf.about_title}</h3>
                    <p className={"about__content"}
                       dangerouslySetInnerHTML={{__html: props.acfOptions.acf.about_content}}/>
                    <Button target={props.acfOptions.acf.about_button.target}
                            link={props.acfOptions.acf.about_button.url}>
                        {props.acfOptions.acf.about_button.title}
                    </Button>
                </div>
            </Container>
        </AboutContainer>
    );
};

const AboutContainer = styled.div`
  padding: 90px 0;

  .about {
    max-width: 550px;

    &__title {
      margin: 0 0 30px 0;
      font-size: 34px;
      line-height: 38px;
      color: #263248;
      font-weight: 700;
      font-family: "Ubuntu", sans-serif;
      text-transform: uppercase;
    }

    &__content {
      margin: 0 0 35px 0;
      font-size: 14px;
      line-height: 34px;
      color: #263248;
      font-weight: 300;
      font-family: "Ubuntu", sans-serif;
    }
  }
`

export default withStateAndAcfOptions(About)
