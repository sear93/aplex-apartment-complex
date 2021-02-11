export const pageVariants = {
    in: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8
    }
}

export const pageTransition = {
    duration: 0.5,
    type: "tween",
    ease: "anticipate"
}
