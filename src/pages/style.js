import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { media, globalStyles } from 'src/theme';
import Layout from 'src/components/Layout';
import Wrapper from 'src/components/Wrapper';

export default () => (
    <StaticQuery
        query={graphql`
            query StyleListQuery {
                allStyleJson (sort: {fields: [rarity], order: DESC}) {
                    totalCount
                    edges {
                        node {
                            objId
                            name
                            altName
                            rarity
                            weaponType
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <Layout>
                <div css={{width: "100%"}}>
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
                        <Wrapper>
                            <h1>
                                Character Styles 
                                <span css={{
                                    marginLeft: 15,
                                    fontWeight: 400,
                                    fontSize: "15px"
                                }}>
                                    {data.allStyleJson.totalCount} Styles
                                </span>
                            </h1> <br />
                            <table className="baseTable">
                                <tbody>
                                {data.allStyleJson.edges.map((edge) => {
                                    let node = edge.node;
                                    const string = node.name+" - "+node.altName;
                                    return (
                                        <tr>
                                            <td>{node.objId}</td>
                                            <td>{node.rarity}</td>
                                            <td>
                                                <Link
                                                    css={[globalStyles.link]}
                                                    to={node.fields.slug}>
                                                    {string}
                                                </Link>
                                            </td>
                                            <td>{node.weaponType}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </Wrapper>
                    </div>
                </div>
            </Layout>
        )}
    />    
)
