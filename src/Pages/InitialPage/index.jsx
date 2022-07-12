import React from 'react';

import { HeaderSection } from '../../Sections/HeaderSection/';
import { MainSection } from '../../Sections/MainSection/';
import { FooterSection } from '../../Sections/FooterSection/'

export function InitialPage() {
    return (
        <>
            <HeaderSection />
            <MainSection />
            <FooterSection />
        </>
    );
}