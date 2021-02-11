import {css, Global, styled} from "frontity";
import Link from '@frontity/components/link';

export const GlobalStyles = () => {
    return (
        <>
            <Global styles={css`

              *,
              *::before,
              *::after {
                box-sizing: border-box;
                padding: 0;
                margin: 0;
              }

              ul[class],
              ol[class],
              li {
                padding: 0;
                list-style: none;
              }

              html {
                scroll-behavior: smooth;
              }

              body {
                text-rendering: optimizeSpeed;
                position: relative;
              }

              a {
                text-decoration: none;
              }

              img {
                max-width: 100%;
                display: block;
              }

              input,
              button,
              textarea,
              select {
                font: inherit;
                padding: 0;
              }
            `}/>
        </>
    )
}

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
`

export const Button = styled(Link)`
  font-size: 18px;
  line-height: 54px;
  font-weight: 300;
  text-align: center;
  background-color: #ff9700;
  text-transform: uppercase;
  padding: 15px 50px;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;
  color: #ffffff;
`
