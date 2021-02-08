import React from 'react';
import {connect} from "frontity";

const Post = (props) => {

    const data = props.state.source.get(props.state.router.link);
    const post = props.state.source[data.type][data.id];

    return (
        <>
            <div dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
            <div>
                {
                    post.acf.slider.map((item, i) => {
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
