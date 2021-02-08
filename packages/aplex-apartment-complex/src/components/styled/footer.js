import {styled} from "frontity";
import {adaptiveValue} from "./mixins";

export const FooterContainer = styled.footer`
  background: #1c2330;
  padding: 35px 0;
  margin: 500px 0 0 0;
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  font-family: "Ubuntu", sans-serif;
  line-height: 24px;
  
  ${adaptiveValue('font-size', 14, 12)}
 
  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .title {
      font-weight: 700;
      text-transform: uppercase;
    }

    &-contacts {
      display: flex;
      
      .phone {
        margin: 0 5px 0 0;
      }
    }
  }

  .copyright {
    font-weight: 300;
  }

`
