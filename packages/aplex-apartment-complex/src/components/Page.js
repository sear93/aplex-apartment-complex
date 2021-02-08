import React from 'react';
import {connect} from "frontity";

const Page = (props) => {

    const data = props.state.source.get(props.state.router.link);
    const page = props.state.source[data.type][data.id];

    console.log("Page loaded")
    console.log(data)

    return (
        <>
            <h2>{page.acf.title}</h2>
            <h4>{page.acf.subtitle}</h4>
            <h1>{page.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{__html: page.content.rendered}}/>
            <div>
                {page.acf.gallery && page.acf.gallery.map(item => {
                    return <img key={item.ID} src={item.sizes.medium} alt={item.title}/>
                })}
            </div>
        </>
    );
};

export default connect(Page)
