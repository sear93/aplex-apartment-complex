import React from 'react';
import {styled} from "frontity";
import Slider from "react-slick";
import {Container} from "../../styled/global";
import {withStateAndAcfOptions} from "../../handlers/withACFoptions";

const Partners = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
    };

    return (
        <PartnersContainer>
            <Container>
                <h2>{props.acfOptions.acf.partners_title}</h2>
                <Slider {...settings}>
                    {props.acfOptions.acf.partners_slider.map((item, i) => {
                        return (
                            <div className={"partners-slide"} key={i}>
                                <img src={item.url} alt={item.title} />
                            </div>
                        )
                    })}
                </Slider>
            </Container>
        </PartnersContainer>
    );
};

const PartnersContainer = styled.div`
  padding: 130px 0;
  
  h2 {
    margin: 0 0 85px 0;
    font-size: 42px;
    line-height: 24px;
    color: #263248;
    font-weight: 700;
    font-family: "Oswald", sans-serif;
  }
  
  .partners-slide {
    outline: none;
    display: flex !important;
    justify-content: center;
  }
`

export default withStateAndAcfOptions(Partners)
