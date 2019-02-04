import React from 'react';

import { colors } from 'src/theme';

import Wrapper from 'src/components/Wrapper';

const Footer = () => (
    <Footer
        css={{
            backgroundColor: colors.umber,
            color: colors.white,
            paddingTop: 10,
            paddingBottom: 50,
        }}>
        <Wrapper>
            <div
                css={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                <p
                    css={{
                        color: colors.mustard,
                        paddingTop: 15,
                    }}>
                    Unaffiliated with SQUARE-ENIX and AKATSUKI
                </p>
            </div>
        </Wrapper>
    </Footer>
);

export default Footer;
