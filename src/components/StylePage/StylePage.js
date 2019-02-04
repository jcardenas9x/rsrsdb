import Wrapper from 'src/components/Wrapper';
import Flex from 'src/components/Flex';
import React from 'react';

const convertValue = (modifier) => {
    let result = 100 - modifier;
    return (result < 0) ?
        "+"+Math.abs(result)+"%" :
        "-"+result+"%";
}

const StylePage = ({
    styleJson,
    styleBonus,
    skillList
}) => {
    console.log(
        styleBonus
    )
    return (
        <Flex
            direction="row"
            grow="1"
            shrink="0"
            valign="stretch"
            css={{
                width: "100%",
                flex: '1 0 auto',
                position: 'relative',
                zIndex: 0
            }}> 
            <div css={{width: '100%'}}>
                <Wrapper>
                    <div
                        css={{
                            width: "100%",
                            padding: 20,
                            margin: 20
                        }}>
                        
                    </div>
                    <StyleDataBlock styleData={styleJson} />
                    <SkillListBlock skillList={skillList} />
                    {
                        styleBonus.length > 0 &&
                        <AbilityTable styleBonus={styleBonus} />
                    }
                </Wrapper>
            </div>
        </Flex>
    )
}

const StyleDataBlock = ({
    styleData: {
        name,
        altName,
        rarity,
        weaponType,
        lp,
        role,
        strCast,
        conCast,
        dexCast,
        spdCast,
        intCast,
        sprCast,
        loveCast,
        chaCast,
        slashRes,
        bashRes,
        pierceRes,
        heatRes,
        coldRes,
        elecRes,
        sunRes,
        shadowRes
    }
}) => {
    return (
        <div
            css={{
                width: '100%',
                padding: 20,
                margin: 20
            }}>
            <h1>Character Data</h1>
            <table className="baseTable">
                <tbody>
                    <tr>
                        <th>Character</th>
                        <td>{name}</td>
                        <th>Style Name</th>
                        <td>{altName}</td>
                    </tr>
                    <tr>
                        <th>Rarity</th>
                        <td>{rarity}</td>
                        <th>Weapon Type</th>
                        <td>{weaponType}</td>
                    </tr>
                    <tr>
                        <th>Role</th>
                        <td>{role}</td>
                        <th>Max LP</th>
                        <td>{lp}</td>
                    </tr>
                </tbody>
            </table> <br/>
            <h1>Resistances</h1>
            <table className="baseTable">
                <tbody>
                    <tr>
                        <th>Slash</th>
                        <th>Bash</th>
                        <th>Pierce</th>
                        <th>Heat</th>
                        <th>Cold</th>
                        <th>Electric</th>
                        <th>Sun</th>
                        <th>Shadow</th>
                    </tr>
                    <tr>
                        <td>{slashRes}</td>
                        <td>{bashRes}</td>
                        <td>{pierceRes}</td>
                        <td>{heatRes}</td>
                        <td>{coldRes}</td>
                        <td>{elecRes}</td>
                        <td>{sunRes}</td>
                        <td>{shadowRes}</td>
                    </tr>
                </tbody>
            </table> <br />
            <h1>Stat Modifiers</h1>
            <table className="baseTable">
                <thead>
                    <tr>
                        <th colSpan="2"
                            css={{textAlign:"center"}}
                            >Starting Modifiers
                        </th>
                        <th colSpan="2"
                            css={{textAlign:"center"}}
                            > Lv50 Modifiers
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>STR</th> 
                        <td>{convertValue(strCast[0])}</td>
                        <th>STR</th> 
                        <td>{convertValue(strCast[1])}</td>
                    </tr>
                    <tr>
                        <th>CON</th> 
                        <td>{convertValue(conCast[0])}</td>
                        <th>CON</th> 
                        <td>{convertValue(conCast[1])}</td>
                    </tr>
                    <tr>
                        <th>DEX</th> 
                        <td>{convertValue(dexCast[0])}</td>
                        <th>DEX</th> 
                        <td>{convertValue(dexCast[1])}</td>
                    </tr>
                    <tr>
                        <th>SPD</th> 
                        <td>{convertValue(spdCast[0])}</td>
                        <th>SPD</th> 
                        <td>{convertValue(spdCast[1])}</td>
                    </tr>
                    <tr>
                        <th>INT</th> 
                        <td>{convertValue(intCast[0])}</td>
                        <th>INT</th> 
                        <td>{convertValue(intCast[1])}</td>
                    </tr>
                    <tr>
                        <th>SPR</th> 
                        <td>{convertValue(sprCast[0])}</td>
                        <th>SPR</th> 
                        <td>{convertValue(sprCast[1])}</td>
                    </tr>
                    <tr>
                        <th>LOVE</th> 
                        <td>{convertValue(loveCast[0])}</td>
                        <th>LOVE</th> 
                        <td>{convertValue(loveCast[1])}</td>
                    </tr>
                    <tr>
                        <th>CHA</th> 
                        <td>{convertValue(chaCast[0])}</td>
                        <th>CHA</th> 
                        <td>{convertValue(chaCast[1])}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

const SkillListBlock = ({
    skillList
}) => {
    return (
        <div             
            css={{
                width: '100%',
                padding: 20,
                margin: 20
            }}>
            <h1>Skills</h1>
            <table className="baseTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Power Level</th>
                        <th>Cost</th>
                        <th>Attributes</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {skillList.map((skill) => {
                        return (
                            <tr key={skill.objId}>
                                <td>{skill.name}</td>
                                <td>{skill.powerGrade}</td>
                                <td>
                                    BP: {skill.bp} {skill.lp > 0 && <span>/ LP: {skill.lp}</span>}
                                </td>
                                <td>{skill.attackAttributes.map((value) => {
                                    let text = "";
                                    switch(value) {
                                        case 1: text = "Slash "; break;
                                        case 2: text = "Bash "; break;
                                        case 3: text = "Pierce "; break;
                                        case 4: text = "Heat "; break;
                                        case 5: text = "Cold "; break;
                                        case 6: text = "Electric "; break;
                                        case 7: text = "Sun "; break;
                                        case 8: text = "Shadow "; break;
                                        default: text = "?"; break;
                                    }
                                    return text;
                                })}</td>
                                <td>{skill.flavorText}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

const AbilityTable = ({styleBonus}) => {
    return (
        <div
            css={{
                width: '100%',
                padding: 20,
                margin: 20,
            }}>
            <h1>Abilities</h1>
            <table className="baseTable">
                <tbody>
                    {
                        styleBonus.map((edge) => {
                            if (edge.node.type === 31 ||
                                edge.node.type === 32 ||
                                edge.node.type === 33) {
                                const abil = JSON.parse(edge.node.fields.ability);
                                return (
                                    <tr key={abil.objId}>
                                        <th>{abil.name}</th>
                                        <td>{abil.flavorText}</td>
                                    </tr>
                                )
                            } else {
                                return null;
                            }
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default StylePage;
