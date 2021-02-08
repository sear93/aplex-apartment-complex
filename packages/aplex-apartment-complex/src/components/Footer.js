import React from 'react';
import {connect} from "frontity";
import {FooterContainer, FooterWrapper} from "./styled/footer";
import {Container} from "./styled/global";

const Footer = ({state, acfOptions}) => {

    const data = state.source.get(state.router.link);
    const titles = Object.fromEntries(Object.keys(acfOptions.acf).map(item => [item, item]));

    return (
        <FooterContainer>
            <Container>
                <FooterWrapper>
                    <div className="copyright" dangerouslySetInnerHTML={{__html: acfOptions.acf.copyright}}/>
                    <div className="info">
                        <div className="address">
                            <span className={"title"}>{titles.address}:</span> {acfOptions.acf.address}
                        </div>
                        <div className="info-contacts">
                            <div className="phone">
                                <span className={"title"}>{titles.phone}:</span> {acfOptions.acf.phone}
                            </div>
                            <div className="email">
                                <span className={"title"}>{titles.email}:</span> {acfOptions.acf.email}
                            </div>
                        </div>
                    </div>
                </FooterWrapper>
            </Container>
        </FooterContainer>
    );
};

export default connect(Footer)
