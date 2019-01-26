'use strict';

const { resolve } = require('path');

module.exports = exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions;

    const styleTemplate = resolve(__dirname, `../src/templates/style.js`);

    const resourcesData = await graphql(
        `{
            allAbilityJson {
            totalCount
            edges {
              node {
                objId
                name
                flavorText
              }
            }
          }
          allStyleJson {
            totalCount
            edges {
              node {
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
            }
          }
          allCharacterJson {
            totalCount
            edges {
              node {
                objId
                name
                str
                con
                dex
                spd
                int
                spr
                love
                cha
                fields {
                  slug
                }
              }
            }
          }
          allSkillJson {
            totalCount 
            edges {
              node {
                objId
                name
                flavorText
                attackAttributes
                criticalTargets
                powerGrade
                bp
                lp
                kakuseiCount
                kakuseiMaterialSetIds
                fields {
                  slug
                }
              }
            }
          }
          allStylebonusJson {
            totalCount
            edges {
              node {
                objId
                styleId
                level
                type
                value
                fields {
                  originSlug
                  ability 
                  bonusType
                }
              }
            }
          }
        }`
    );

    resourcesData.data.allStyleJson.edges.forEach(edge => {
        const slug = edge.node.fields.slug;

        createPage({
            path: slug,
            template: styleTemplate,
            context: {
                slug
            }
        });

    });

}