import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'src/components/Layout';
import StylePage from 'src/components/StylePage';

export default ({data: {
    styleJson,
    allStylebonusJson,
}}) => {
    let styleBonusList = (allStylebonusJson) ? allStylebonusJson.edges : [];
    return (
      <Layout>
        <StylePage
            styleJson={styleJson}
            styleBonus={styleBonusList}
            skillList={JSON.parse(styleJson.fields.skillList)}
            />
      </Layout>
    );
}

export const styleQuery = graphql`
    query($slug: String!) {
        styleJson (fields: { slug: { eq: $slug } }) {
            objId
            charId
            name
            altName
            rarity
            weaponType
            lp
            jutsuList
            role
            skillRefs
            bonusId
            strCast
            conCast
            dexCast
            spdCast
            intCast
            sprCast
            loveCast
            chaCast
            slashRes
            bashRes
            pierceRes
            heatRes
            coldRes
            elecRes
            sunRes
            shadowRes
            fields {
              skillList
              slug
            }
      }
      allStylebonusJson (
        filter: {
          fields: {
              originSlug: { eq: $slug }
          }
        } 
      ) {
        edges {
          node {
            objId
            styleId
            level
            type
            value
            fields {
              ability 
              bonusType
            }
          }
        }
      }
    }
`;
