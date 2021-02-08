import React from 'react';
import {connect} from "frontity";
import Header from "./Header";
import Is404 from "./Is404";
import Post from "./Post";
import Loader from "./Loader";
import Contacts from "./pages/Contacts";
import News from "./pages/News";
import Apartments from "./pages/Apartments";
import Blog from "./pages/Blog";
import Footer from "./Footer";
import {AppContainer} from "./styled/app"
import {Container, GlobalStyles} from "./styled/global";
import FrontPage from "./pages/FrontPage";

const App = (props) => {

    const data = props.state.source.get(props.state.router.link);
    const options = props.state.source.get("acf-options-page");

    return (
        <>
            <GlobalStyles/>
            <Header acfOptions={options}/>
            {data.isFetching && <Loader/>}
            <AppContainer>
                <Container>
                    {data.is404 && <Is404/>}
                    {data.isPost && <Post/>}
                    {data.isHome && <FrontPage/>}
                    {(data.isPage && data.id === 32) && <Blog/>}
                    {(data.isPage && data.id === 34) && <Apartments/>}
                    {(data.isPage && data.id === 36) && <News/>}
                    {(data.isPage && data.id === 38) && <Contacts/>}
                </Container>
            </AppContainer>
            <Footer acfOptions={options}/>
        </>
    );
};

export default connect(App)
