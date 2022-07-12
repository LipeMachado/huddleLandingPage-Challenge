import styled from 'styled-components';

export const Footer = styled.footer`
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 1500;
`;

export const FooterContainerDiv = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
`;

export const FooterContainerSocialSectionDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 30px;

    @media screen and (max-width: 630px){
        align-items: center;
        justify-content: center;
    }
`;

export const FooterSocialSectionUl = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;

    li {
        display: flex;
        align-items: center;
        margin-right: 15px;

        svg {
            margin-right: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            &:hover {
                color: hsl(300, 69%, 71%);
            }
        }
    }
`;