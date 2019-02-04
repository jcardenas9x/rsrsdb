import React, { Component } from "react";
import { graphql } from "gatsby";

import { colors, media } from "src/theme";

import Layout from 'src/components/Layout';
import Flex from 'src/components/Flex';
import Wrapper from 'src/components/Wrapper';
import ContentBox from 'src/components/ContentBox';

class Home extends Component {
    render () {
        const { data } = this.props;
        const { updates } = data;
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
                                        RomancingSaGa Re:univerSe Database
                                    </p>
                                </Wrapper>
                            </div>
                        </div>
                    </header>
                    <Wrapper>
                        <Flex
                            direction="columrown"
                            grow="1"
                            stretch="0"
                            halign="center"
                            css={{
                                paddingTop: 50,
                                [media.lessThan('small')]: {
                                    paddingTop: 35
                                },
                                [media.greaterThan('xlarge')]: {
                                    paddingTop: 60,
                                }
                            }}>
                            <ContentBox
                                width="30%"
                                css={{
                                    flex: "1 0 auto"
                                }}>
                                <h1
                                    css={{borderBottom: "1px solid black"}}>
                                    TODO List
                                </h1> <br />
                                <ul css={{listStyle: "bullet"}}>
                                    <li>Improve styling/UX</li>
                                    <li>Translate data</li>
                                    <li>Complete other pages</li>
                                </ul>
                            </ContentBox>
                            <ContentBox
                                width="70%"
                                css={{
                                    flex: "1 0 auto"
                                }}>
                                <h1
                                    css={{borderBottom: "1px solid black"}}>
                                    Updates
                                </h1> <br />
                                {updates.edges.map(({node}, index) => (
                                    <div
                                        key={index}
                                        >
                                        <h2>{node.frontmatter.title}</h2>
                                        <h3>{node.frontmatter.author} - {node.frontmatter.date}</h3> <br />
                                        <div dangerouslySetInnerHTML={{__html:node.html}} />
                                    </div>
                                ))}
                            </ContentBox>
                        </Flex>
                    </Wrapper>
                </div>
            </Layout>
        )
    }
}

export const pageQuery = graphql`
    query IndexMarkdown {
        updates: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "//home/updates//"}}
            sort: {fields: [frontmatter___date], order: ASC}
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        author
                        date
                    }
                    html
                }
            }
        }
    }
`

export default Home;
