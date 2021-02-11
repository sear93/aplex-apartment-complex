import React from 'react';
import {connect} from "frontity";

const Page = (props) => {

    const urlData = props.state.source.get(props.state.router.link);
    const currentData = props.state.source[urlData.type][urlData.id];

    return (
        <>
            <h2>{currentData.acf.title}</h2>
            <h4>{currentData.acf.subtitle}</h4>
            <h1>{currentData.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{__html: currentData.content.rendered}}/>
            <div>
                {currentData.acf.gallery && currentData.acf.gallery.map(item => {
                    return <img key={item.ID} src={item.sizes.medium} alt={item.title}/>
                })}
            </div>
        </>
    );
};

export default connect(Page)
