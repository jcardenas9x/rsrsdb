'use strict';

const abilities = require('../data/ability').slice();
const skills = require('../data/skill').slice();

const BLOG_POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)\.md$/;

const fetchAbility = (abilityId, catalog) => {
    let ability = catalog.find(abil => abil["objId"] === abilityId);
    return ability;
}

const mutateBonus = (bonus) => {
    switch(bonus["type"]) {
        case 31:
            bonus["ability"] = fetchAbility(bonus["value"], abilities);
            bonus["bonusType"] = "Ability #1";
            break;
        case 32:
            bonus["ability"] = fetchAbility(bonus["value"], abilities);
            bonus["bonusType"] = "Ability #2";
            break;
        case 33:
            bonus["ability"] = fetchAbility(bonus["value"], abilities);
            bonus["bonusType"] = "Ability #3";
            break;
        case 37:
            bonus["bonusType"] = "Weapon Mastery UP";
            break;
        case 1:
            bonus["bonusType"] = "STR UP";
            break;
        case 2:
            bonus["bonusType"] = "CON UP";
            break;
        case 3:
            bonus["bonusType"] = "DEX UP";
            break;
        case 4:
            bonus["bonusType"] = "SPD UP";
            break;
        case 5:
            bonus["bonusType"] = "INT UP";
            break;
        case 6:
            bonus["bonusType"] = "SPR UP";
            break;
        case 7:
            bonus["bonusType"] = "LOVE UP";
            break;
        case 8:
            bonus["bonusType"] = "CHA UP";
            break;
        case 9:
            bonus["bonusType"] = "ALL UP";
            break;
    }
    return bonus;
}

module.exports = exports.onCreateNode = ({node, actions, getNode}) => {
    const { createNodeField } = actions;

    let clone = Object.assign({}, node);

    switch(node.internal.type) {
        case 'MarkdownRemark':
            const { permalink, title, author } = node.frontmatter;
            const { relativePath } = getNode(node.parent);

            let slugX = permalink;

            if (!slugX) {
                slugX = `/${relativePath.replace('.md','.html')}`;
            }

            createNodeField({
                node,
                name: "slug",
                value: slugX
            });

            break;
        case 'AbilityJson':
            break;
        case 'CharacterJson':
            let identifier1 = clone["objId"];
            let slug2 = `/character/${identifier1}`;

            createNodeField({
                node,
                name: "slug",
                value: slug2
            });
            
            break;
        case 'StyleJson':
            let skillList = clone["skillRefs"].map(skillId => {
                return skills.find(skill => skill["objId"] === skillId);
            });
            
            let identifier2 = clone["objId"];
            let slug3 = `/style/${identifier2}`;

            createNodeField({
                node,
                name: "skillList",
                value: JSON.stringify(skillList)
            });
            
            createNodeField({
                node,
                name: "slug",
                value: slug3
            });

            break;
        case 'SkillJson':

            let identifier3 = clone["objId"];
            let slug4 = `/style/${identifier3}`;

            createNodeField({
                node,
                name: "slug",
                value: slug4
            });

            break;
        case 'StylebonusJson':
            clone = mutateBonus(clone);

            let identifier4 = clone["styleId"];
            let origin = `/style/${identifier4}`;

            createNodeField({
                node,
                name: "originSlug",
                value: origin
            });

            createNodeField({
                node,
                name: "ability",
                value: (clone["ability"]) ? JSON.stringify(clone["ability"]) : JSON.stringify({
                    "objId": 0,
                    "name": "+"+clone["value"],
                    "flavorText": clone["bonusType"]
                })
            });

            createNodeField({
                node,
                name: "bonusType",
                value: clone["bonusType"]
            });

            break;
    }
}
