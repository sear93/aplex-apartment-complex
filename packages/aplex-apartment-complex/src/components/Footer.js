import React from 'react';
import {FooterContainer, FooterWrapper} from "./styled/footer";
import {Container} from "./styled/global";
import {withStateAndAcfOptions} from "./handlers/withACFoptions";

const Footer = (props) => {

    const titles = Object.fromEntries(Object.keys(props.acfOptions.acf).map(item => [item, item]));

    return (
        <FooterContainer>
            <Container>
                <FooterWrapper>
                    <div className="copyright" dangerouslySetInnerHTML={{__html: props.acfOptions.acf.copyright}}/>
                    <div className="info">
                        <div className="address">
                            <span className={"title"}>{titles.address}:</span> {props.acfOptions.acf.address}
                        </div>
                        <div className="info-contacts">
                            <div className="phone">
                                <span className={"title"}>{titles.phone}:</span> {props.acfOptions.acf.phone}
                            </div>
                            <div className="email">
                                <span className={"title"}>{titles.email}:</span> {props.acfOptions.acf.email}
                            </div>
                        </div>
                    </div>
                </FooterWrapper>
            </Container>
        </FooterContainer>
    );
};

export default withStateAndAcfOptions(Footer)
