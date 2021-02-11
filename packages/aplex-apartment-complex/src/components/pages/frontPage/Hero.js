import React from 'react';
import {styled} from "frontity";
import Slider from "react-slick";
import {Button, Container} from "../../styled/global";
import {withStateAndAcfOptions} from "../../handlers/withACFoptions";
import {Swiper, SwiperSlide} from 'swiper/react';

const Hero = (props) => {

    // const settings = {
    //     dots: true,
    //     fade: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // };


    return (
        <HeroContainer>
            <Container>
                {/*<Slider {...settings}>*/}
                {/*    {props.acfOptions.acf.hero_slider.map((item, i) => {*/}
                {/*        return (*/}
                {/*            <div className={"hero-slide"} key={i}>*/}
                {/*                <p className={"hero-slide__subtitle"}>{item.subtitle}</p>*/}
                {/*                <h1 className={"hero-slide__title"}>{item.title}</h1>*/}
                {/*                <p className={"hero-slide__text"} dangerouslySetInnerHTML={{__html: item.text}}/>*/}
                {/*                <Button className={"hero-slide__btn"} link={item.button.url}>*/}
                {/*                    {item.button.title}*/}
                {/*                </Button>*/}
                {/*            </div>*/}
                {/*        )*/}
                {/*    })}*/}
                {/*</Slider>*/}
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                >
                    {props.acfOptions.acf.hero_slider.map((item, i) => {
                        return (
                            <SwiperSlide className={"hero-slide"} key={i}>
                                <p className={"hero-slide__subtitle"}>{item.subtitle}</p>
                                <h1 className={"hero-slide__title"}>{item.title}</h1>
                                <p className={"hero-slide__text"} dangerouslySetInnerHTML={{__html: item.text}}/>
                                <Button className={"hero-slide__btn"} link={item.button.url}>
                                    {item.button.title}
                                </Button>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Container>
        </HeroContainer>
    );
};

const HeroContainer = styled.div`
  background-color: #263248;
  padding: 90px 0 145px 0;
  font-family: "Ubuntu", sans-serif;

  .swiper-container {
    max-width: 540px;
    margin-left: initial;
  }

  .slick-dots {
    .slick-active {
      button {
        background-color: #ff9800;
      }
    }

    button {
      width: 10px;
      height: 10px;
      background-color: #fff;

      &:before {
        font-size: 0;
      }
    }
  }

  .hero-slide {
    outline: none;

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
