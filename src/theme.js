import hex2rgba from 'hex2rgba';

const colors = {
    black: '#000000',
    white: '#ffffff',
    // quintuple schema
    mustard: '#ffcf65',
    timberwolf: '#dad7cd',
    lfbeige: '#cbbf7a',
    beaver: '#9f956c',
    umber: '#584d3d'
}

/**
 * Breakpoint sizes and media helpers taken from reactjs.org
 */
const SIZES = {
    xsmall: {min: 0, max: 599},
    small: {min: 600, max: 779},
    medium: {min: 780, max: 979},
    large: {min: 980, max: 1279},
    xlarge: {min: 1280, max: 1339},
    xxlarge: {min: 1340, max: Infinity},
  
    // Sidebar/nav related tweakpoints
    // May be used in cases of having a sidebar
    largerSidebar: {min: 1100, max: 1339},
    sidebarFixed: {min: 2000, max: Infinity},
}

const media = {
    between(smallKey, largeKey, excludeLarge = false) {
        if (excludeLarge) {
            return `@media (min-width: ${
                SIZES[smallKey].min
            }px) and (max-width: ${SIZES[largeKey].min - 1}px)`;
        } else {
            if (SIZES[largeKey].max === Infinity) {
                return `@media (min-width: ${SIZES[smallKey].min}px)`;
            } else {
                return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${
                    SIZES[largeKey].max
                }px)`;
            }
        }
    },
  
    greaterThan(key) {
        return `@media (min-width: ${SIZES[key].min}px)`;
    },
  
    lessThan(key) {
        return `@media (max-width: ${SIZES[key].min - 1}px)`;
    },
  
    size(key) {
        const size = SIZES[key];
    
        if (size.min == null) {
            return media.lessThan(key);
        } else if (size.max == null) {
            return media.greaterThan(key);
        } else {
            return media.between(key, key);
        }
    },
};

const fonts = {
    header: {
        fontSize: 50,
        lineHeight: '50px',
        fontWeight: 650,
        
        [media.lessThan('medium')]: {
            fontSize: 35,
            lineHeight: '35px'
        },
    },
    small: {
        fontSize: 14,
    },
}

const linkStyle = {
    backgroundColor: hex2rgba(colors.timberwolf, 0.3),
    borderBottom: `1px solid ${hex2rgba(colors.umber, 0.2)}`,
    color: colors.lfbeige,

    ':hover': {
        backgroundColor: colors.timberwolf,
        borderBottomColor: colors.lfbeige
    }
};

const globalStyles = {
    link: linkStyle,
} 

export { colors, media, fonts, globalStyles };
