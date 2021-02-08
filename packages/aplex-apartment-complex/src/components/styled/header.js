import {styled} from "frontity";

export const HeaderWrapper = styled.header`
  background: #1c2330;
  padding: 25px 0;
  position: fixed;
  width: 100%;
  z-index: 3;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {

    a {
      margin: 0 0 0 100px;
      padding: 10px;
      font-size: 12px;
      letter-spacing: 0;
      line-height: 24px;
      color: #ffffff;
      font-weight: 300;
      font-family: "Ubuntu", sans-serif;
      text-transform: uppercase;
      position: relative;

      &:first-of-type {
        margin: 0 0 0 10px;

        &:before {
          content: '';
          width: 0;
          height: 0;
        }
      }

      &:before {
        content: '';
        position: absolute;
        display: inline-block;
        height: 40px;
        top: -3px;
        left: -50px;
        width: 2px;
        background: #ff9800;
        transition: all 0.4s ease;
      }

      &:hover {
        &:before {
          transform: rotate(90deg);
        }
      }

      &.active {
        &:before {
          transform: rotate(90deg);
        }
      }
    }
  }
`
