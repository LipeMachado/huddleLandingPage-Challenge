import React from 'react';
import { 
    Main,
    MainContainerDiv,
    MainContentDiv,
    MainContentImgDiv,
    MainContentImg,
    MainContentTextDiv,
    MainTextH1,
    MainTextP,
    MainRegisterButton
} from './style.jsx';

import illustrationMockups from '../../Assets/illustration-mockups.svg';

export function MainSection() {
    return (
        <>
            <Main>
                <MainContainerDiv>
                    <MainContentDiv>
                        <MainContentImgDiv>
                            <MainContentImg src={illustrationMockups} alt=""/>
                        </MainContentImgDiv>
                        
                        <MainContentTextDiv>
                            <MainTextH1>Build The Community Your Fans Will Love</MainTextH1>
                            <MainTextP>
                                Huddle re-imagines the way we build communities.
                                You have a voice, but so does your audience.
                                Create connections with your users as you engage in genuine discussion.
                            </MainTextP>
                            <MainRegisterButton>Register</MainRegisterButton>
                        </MainContentTextDiv>
                    </MainContentDiv>
                </MainContainerDiv>
            </Main>
        </>
    );
}