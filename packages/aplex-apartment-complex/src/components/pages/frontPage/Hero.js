import React from 'react';
import {connect, styled} from "frontity";
import Slider from "react-slick";
import {Button, Container} from "../../styled/global";
import Link from '@frontity/components/link';
import {withStateAndAcfOptions} from "../../handlers/withACFoptions";

const Hero = ({acfOptions}) => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <HeroContainer>
            <Container>
                <Slider {...settings}>
                    {acfOptions.acf.hero_slider.map((item, i) => {
                        return (
                            <div className={"hero-slide"} key={i}>
                                <p className={"hero-slider__subtitle"}>{item.subtitle}</p>
                                <h1 className={"hero-slider__title"}>{item.title}</h1>
                                <p className={"hero-slider__text"} dangerouslySetInnerHTML={{__html: item.text}}/>
                                <Button>
                                    <Link className={"hero-slider__btn"} link={item.button.url}>
                                        {item.button.title}
                                    </Link>
                                </Button>
                            </div>
                        )
                    })}
                </Slider>
            </Container>
        </HeroContainer>
    );
};

const HeroContainer = styled.div`
  background-color: #263248;
  padding: 90px 0 145px 0;
  font-family: "Ubuntu", sans-serif;
  
  .slick-slide {
    max-width: 540px;
    outline: none;
  }

  .hero-slider {
    &__subtitle {
      font-size: 18px;
      line-height: 54px;
      color: #ff9800;
      font-weight: 700;
      margin: 0 0 20px 0;
    }

    &__title {
      font-size: 32px;
      line-height: 34px;
      color: #ffffff;
      font-weight: 700;
      margin: 0 0 30px 0;
      text-transform: uppercase;
    }

    &__text {
      font-size: 16px;
      line-height: 34px;
      color: #ffffff;
      font-weight: 300;
      margin: 0 0 50px 0;
    }
  }
`

export default withStateAndAcfOptions(Hero)
