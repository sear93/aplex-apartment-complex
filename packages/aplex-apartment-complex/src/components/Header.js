import {React, useState} from 'react';
import {connect} from 'frontity';
import Link from '@frontity/components/link';
import {HeaderContainer, HeaderWrapper} from "./styled/header";
import {Container} from "./styled/global";

const Header = (props) => {

    const data = props.state.source.get(props.state.router.link);
    const menuItems = props.state.source.get(`/menu/${props.state.theme.menuUrl}/`).items;

    let [activeClass, setActiveClass] = useState(0)

    return (
        <HeaderWrapper>
            <Container>
                <HeaderContainer>
                    <div className={"logo"}>
                        <Link link={'/'}>
                            <img src={props.acfOptions.acf.logo.url} alt={props.acfOptions.acf.logo.title}/>
                        </Link>
                    </div>
                    <nav>

                        {menuItems.map(item => {

                            const childItems = item.child_items;

                            if (childItems) {
                                return (
                                    <div key={item.ID}>
                                        <Link link={item.url}>{item.title}</Link>
                                        {childItems.map((childItem) => {
                                            return (
                                                <Link key={childItem.ID}
                                                      link={childItem.url}>
                                                    {childItem.title}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )
                            } else {
                                return <Link className={`menu-item ${activeClass === item.ID ? 'active' : ''}`}
                                             onClick={(e) => e.currentTarget.classList.toggle(setActiveClass(item.ID))}
                                             key={item.ID}
                                             link={item.url}>
                                    {item.title}
                                </Link>
                            }
                        })}
                    </nav>
                </HeaderContainer>
            </Container>
        </HeaderWrapper>
    )
};

export default connect(Header)
