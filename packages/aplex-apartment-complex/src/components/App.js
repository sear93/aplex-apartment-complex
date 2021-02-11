import React from 'react';
import {connect, Head} from "frontity";
import Switch from "@frontity/components/switch"
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
import {GlobalStyles} from "./styled/global";
import FrontPage from "./pages/frontPage/FrontPage";
import {AnimatePresence} from "framer-motion"

const App = (props) => {

    const urlData = props.state.source.get(props.state.router.link);

    return (
        <>
            <Head>
                <title>{props.state.frontity.title}</title>
                <meta name="description" content={props.state.frontity.description}/>
                <link rel="stylesheet" type="text/css" charSet="UTF-8"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                <link rel="stylesheet" type="text/css"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&family=Ubuntu:wght@300;400;700&display=swap"
                    rel="stylesheet"/>
            </Head>
            <GlobalStyles/>
            <AnimatePresence exitBeforeEnter>
                <Header/>
            </AnimatePresence>
            {urlData.isFetching && <Loader/>}
            <AppContainer>
                <Switch>
                    <Is404 when={urlData.is404}/>
                    <Post when={urlData.isPost}/>
                    <FrontPage when={urlData.isHome}/>
                    <Blog when={urlData.isPage && urlData.id === 32}/>
                    <Apartments when={urlData.isPage && urlData.id === 34}/>
                    <News when={urlData.isPage && urlData.id === 36}/>
                    <Contacts when={urlData.isPage && urlData.id === 38}/>
                </Switch>
            </AppContainer>
            <Footer/>
        </>
    );
};

export default connect(App)
