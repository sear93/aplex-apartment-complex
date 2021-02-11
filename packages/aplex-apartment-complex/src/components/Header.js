import {React, useState} from 'react';
import {connect} from 'frontity';
import Link from '@frontity/components/link';
import {HeaderContainer, HeaderWrapper} from "./styled/header";
import {Container} from "./styled/global";

const Header = (props) => {

    const menuItems = props.state.source.get(`/menu/${props.state.theme.menuUrl}/`).items;
    const acfOptions = props.state.source.get("acf-options-page");
    let [activeClass, setActiveClass] = useState(0)

    return (
        <HeaderWrapper>
            <Container>
                <HeaderContainer>
                    <div className={"logo"}>
                        <Link link={'/'}>
                            <img src={acfOptions.acf.logo.url} alt={acfOptions.acf.logo.title}/>
                        </Link>
                    </div>
                    <nav>

                        {menuItems.map(item => {
                            return (
                                <Link className={`menu-item ${activeClass === item.ID ? 'active' : ''}`}
                                      onClick={(e) => e.currentTarget.classList.toggle(setActiveClass(item.ID))}
                                      key={item.ID}
                                      link={`${item.url}`}>
                                    {item.title}
                                </Link>
                            )
                        })}
                    </nav>
                </HeaderContainer>
            </Container>
        </HeaderWrapper>
    )
};

export default connect(Header)
