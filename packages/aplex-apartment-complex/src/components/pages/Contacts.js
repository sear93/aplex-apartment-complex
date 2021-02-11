import React from 'react';
import {withStateAndAcfOptions} from "../handlers/withACFoptions";
import {Container} from "../styled/global";
import {pageTransition, pageVariants} from "../styled/pageTransitions";
import {motion} from "framer-motion";

const Contacts = (props) => {

    const urlData = props.state.source.get(props.state.router.link);
    const currentData = props.state.source[urlData.type][urlData.id];

    return (
        <motion.div initial={"out"}
                    animate={"in"}
                    exit={"out"}
                    variants={pageVariants}
                    transition={pageTransition}>
            <Container>
                <h1>It's custom {currentData.title.rendered} {currentData.type} </h1>
            </Container>
        </motion.div>
    );
};

export default withStateAndAcfOptions(Contacts)
