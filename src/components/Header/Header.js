import React from 'react';
import { Link } from 'gatsby';

import { media, colors } from 'src/theme';

import Wrapper from 'src/components/Wrapper';
import HeaderLink from './HeaderLink';

/**
 * TODO: Navigation menu after determining paths, content
 */

const Header = ({location}) => (
    <header 
        css={{
            backgroundColor: colors.umber,
            color: colors.white,
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            top: 0,
            left: 0
        }}>
        <Wrapper>
            <div 
                css={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 60,
                    [media.between('small', 'large')]: {
                        height: 50,
                    },
                    [media.lessThan('small')]: {
                        height: 40,
                    },
                }}>
                <Link 
                    css={{
                        display: 'flex',
                        marginRight: 10,
                        height: '100%',
                        alignItems: 'center',
                        color: colors.lfbeige,
                        textDecoration: 'none',
                        ':focus': {
                            outline: 0,
                            color: colors.mustard,
                        },
                        [media.greaterThan('small')]: {
                            width: 'calc(100% / 6)',
                        },
                        [media.lessThan('small')]: {
                            flex: '0 0 auto',
                        },
                    }}
                    to="/">
                    <span
                        css={{
                            color: 'inherit',
                            marginLeft: 10,
                            fontWeight: 700,
                            fontSize: 20,
                            lineHeight: '20px',
                            [media.lessThan('large')]: {
                                fontSize: 16,
                                marginTop: 1,
                            },
                            [media.lessThan('small')]: {
                                // Visually hidden
                                position: 'absolute',
                                overflow: 'hidden',
                                clip: 'rect(0 0 0 0)',
                                height: 1,
                                width: 1,
                                margin: -1,
                                padding: 0,
                                border: 0,
                            },
                        }}>
                        RSRSdb
                    </span>
                </Link>
                <nav>
                    <HeaderLink to="/style" title="Styles" />
                </nav>
            </div>
        </Wrapper>
    </header>
);

export default Header;
