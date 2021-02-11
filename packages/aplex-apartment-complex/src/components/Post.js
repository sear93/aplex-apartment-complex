import React from 'react';
import {connect} from "frontity";

const Post = (props) => {

    const urlData = props.state.source.get(props.state.router.link);
    const currentData = props.state.source[urlData.type][urlData.id];

    return (
        <>
            <div dangerouslySetInnerHTML={{__html: currentData.content.rendered}}/>
            <div>
                {
                    currentData.acf.slider.map((item, i) => {
                        return (
                            <div key={i}>
                                <img src={item.slide.url} alt={item.slide.title}/>
                                <h4>{item.title}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default connect(Post)
