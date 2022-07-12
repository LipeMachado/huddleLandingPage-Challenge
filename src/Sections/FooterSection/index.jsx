import React from 'react';
import { 
    Footer,
    FooterContainerDiv,
    FooterContainerSocialSectionDiv,
    FooterSocialSectionUl
} from './style.jsx';

import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';

export function FooterSection() {
    return (
        <>
            <Footer>
                <FooterContainerDiv>
                    <FooterContainerSocialSectionDiv>
                        <FooterSocialSectionUl>
                            <li><FacebookLogo size={32} /></li>
                            <li><TwitterLogo size={32} /></li>
                            <li><InstagramLogo size={32} /></li>
                        </FooterSocialSectionUl>
                    </FooterContainerSocialSectionDiv>
                </FooterContainerDiv>
            </Footer>
        </>
    );
}