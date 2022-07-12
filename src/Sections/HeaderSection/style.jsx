import styled from 'styled-components';

export const Header = styled.header`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1500;
`;

export const HeaderContainerDiv = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
`;

export const HeaderLogoDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
`;

export const LogoHuddleImg = styled.img`
    @media screen and (max-width: 630px){
        height: 30px;
    }
`;