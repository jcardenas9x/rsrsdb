import React from 'react';

const ContentBox = ({
    width = "100%",
    padding = 20,
    margin = 20,
    children,
    ...rest
}) => {
    return (
        <div
            css={{
                width: width,
                padding: padding,
                margin: margin,
                ...rest
            }}>
            {children}
        </div>
    )
};

export default ContentBox;
