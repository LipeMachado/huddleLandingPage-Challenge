import React from 'react';
import {
    NavBarSection,
    LogoHuddleImg
} from './style.jsx'
import logoHuddle from '../../Images/logo.svg';

export function InitialPage() {
    return (
        <>
            <NavBarSection>
                <LogoHuddleImg src={logoHuddle}/>
            </NavBarSection>
        </>
    );
}