import Wrapper from 'src/components/Wrapper';
import Flex from 'src/components/Flex';
import React from 'react';

const StylePage = ({
    styleJson,
    styleBonus,
    skillList
}) => {
    return (
        <Flex
            direction="column"
            grow="1"
            shrink="0"
            halign="stretch"
            css={{
                width: "100%",
                flex: '1 0 auto',
                position: 'relative',
                zIndex: 0
            }}> 
            <div css={{flex: '1 0 auto'}}>
                <Wrapper>
                    <pre>
                        {styleJson}
                    </pre>
                    <pre>
                        {styleBonus}
                    </pre>
                    <pre>
                        {skillList}
                    </pre>
                </Wrapper>
            </div>
        </Flex>
    )
}

export default StylePage;