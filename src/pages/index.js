import React, { Component } from "react";

import { colors, media } from "src/theme";

import Layout from 'src/components/Layout';
import Flex from 'src/components/Flex';
import Wrapper from 'src/components/Wrapper';

class Home extends Component {
    render () {
        return (
            <Layout>
                <div css={{width: '100%'}}>
                    <header
                        css={{
                            backgroundColor: colors.beaver,
                            color: colors.white
                        }}>
                        <div
                            css={{
                                paddingTop: 45,
                                paddingBottom: 20,

                                [media.greaterThan('small')]: {
                                    paddingTop: 60,
                                    paddingBottom: 70
                                },

                                [media.greaterThan('xlarge')]: {
                                    paddingTop: 95,
                                    paddingBottom: 85
                                }
                            }}>
                            <div
                                css={{
                                    position: 'relative'
                                }}>
                                <Wrapper>
                                    <h1 
                                        css={{
                                            color: colors.mustard,
                                            textAlign: 'center',
                                            margin: 0,
                                            fontSize: 45,
                                            letterSpacing: '0.03em',
                                            [media.size('xsmall')]: {
                                                fontSize: 30,
                                            },
                                            [media.greaterThan('xlarge')]: {
                                                fontSize: 60,
                                            },
                                        }}>
                                        RSRSdb
                                    </h1>
                                    <p
                                        css={{
                                            color: colors.white,
                                            textAlign: 'center',
                                            fontSize: 24,
                                            letterSpacing: '0.01em',
                                            [media.size('xsmall')]: {
                                                fontSize: 16,
                                                maxWidth: '12em',
                                                marginLeft: 'auto',
                                                marginRight: 'auto',
                                            },
                                            [media.greaterThan('xlarge')]: {
                                                paddingTop: 20,
                                                fontSize: 30,
                                            },
                                        }}>
                                        RomancingSaGa Re:univerSe database
                                    </p>
                                </Wrapper>
                            </div>
                        </div>
                    </header>
                    <Wrapper>
                        <Flex
                            valign="center"
                            css={{
                                paddingTop: 50,
                                [media.lessThan('small')]: {
                                    paddingTop: 35
                                },
                                [media.greaterThan('xlarge')]: {
                                    paddingTop: 60,
                                }
                            }}>
                            <div
                                css={{
                                    width: '33%',
                                    marginLeft: 15,
                                    marginRight: 15,
                                }}>
                                Section 1...
                            </div>
                            <div
                                css={{
                                    width: '67%',
                                    marginLeft: 15,
                                    marginRight: 15,
                                }}>
                                Section 2...
                            </div>
                        </Flex>
                    </Wrapper>
                </div>
            </Layout>
        )
    }
}

export default Home;