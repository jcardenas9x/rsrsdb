import React, { Component } from 'react';
import { media } from 'src/theme';
import Flex from 'src/components/Flex';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

class Layout extends Component {
    render () {
        const {children, location} = this.props;

        let layoutHasSidebar = false;

        return (
            <div
                css={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: 'calc(100vh-40px)',
                }}>
                <Header location={location} />
                <Flex
                    direction="column"
                    shrink="0"
                    grow="1"
                    valign="stretch"
                    css={{
                        flex: '1 0 auto',
                        marginTop: 60,
                        [media.between('medium', 'large')]: {
                            marginTop: 50,
                        },
                        [media.lessThan('medium')]: {
                            marginTop: 40,
                        },
                    }}>
                    {children}
                </Flex>
            </div>
        )
    }
};

export default Layout;