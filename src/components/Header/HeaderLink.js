import React from 'react';
import { Link } from 'gatsby';

import { colors, media } from 'src/theme';

const HeaderLink = ({
    isActive,
    title,
    to
}) => (
    <Link css={[style, isActive && activeStyle]} to={to}>
        {title}
        {isActive && <span css={activeAfterStyle} />}
    </Link>
);

const style = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: colors.white,
    transition: 'color 0.2s ease-out',
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 350,

    ':focus': {
        outline: 0,
        color: colors.white,
        backgroundColor: colors.beaver,
    },

    [media.size('xsmall')]: {
        paddingLeft: 10,
        paddingRight: 10,
    },

    [media.between('small','medium')]: {
        paddingLeft: 15,
        paddingRight: 15,
    },

    [media.greaterThan('xlarge')]: {
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: 18,

        ':hover:not(:focus)': {
            color: colors.mustard
        }
    }
}

const activeStyle = {
    color: colors.mustard,

    [media.greaterThan('small')]: {
        position: 'relative'
    }
};

const activeAfterStyle = {
    [media.greaterThan('small')]: {
        position: 'absolute',
        bottom: -1,
        height: 5,
        background: colors.mustard,
        left: 0,
        right: 0,
        zIndex: 1,
    },
};

export default HeaderLink;