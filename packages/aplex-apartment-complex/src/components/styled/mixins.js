const size = {
    xxs: '320px',
    xs: '380px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
}
export const mediaDown = {
    xxs: `(max-width: ${size.xxs})`,
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(max-width: ${size.xl})`,
}

export const mediaUp = {
    xxs: `(min-width: ${size.xxs})`,
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
}

export const adaptiveValue = (property, startSize, minSize) => {
    let maxWidth = 1920;

    let addSize = startSize - minSize;

    return `${property}: calc(${minSize}px + ${addSize} * ((100vw - 320px) / (${maxWidth} - 320)));`
}
