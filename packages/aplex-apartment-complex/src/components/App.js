import React from 'react';
import {connect, Head} from "frontity";
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
import FrontPage from "./pages/frontPage/FrontPage";

const App = ({state}) => {

    const data = state.source.get(state.router.link);
    const options = state.source.get("acf-options-page");

    return (
        <>
            <Head>
                <title>APLEX</title>
                <link rel="stylesheet" type="text/css" charSet="UTF-8"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                <link rel="stylesheet" type="text/css"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&family=Ubuntu:wght@300;400;700&display=swap"
                    rel="stylesheet"/>
            </Head>
            <GlobalStyles/>
            <Header acfOptions={options}/>
            {data.isFetching && <Loader/>}
            <AppContainer>
                {data.is404 && <Is404/>}
                {data.isPost && <Post/>}
                {data.isHome && <FrontPage/>}
                {(data.isPage && data.id === 32) && <Blog/>}
                {(data.isPage && data.id === 34) && <Apartments/>}
                {(data.isPage && data.id === 36) && <News/>}
                {(data.isPage && data.id === 38) && <Contacts/>}
            </AppContainer>
            <Footer acfOptions={options}/>
        </>
    );
};

export default connect(App)
