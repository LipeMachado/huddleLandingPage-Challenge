import styled from 'styled-components';
import backgroundDesktop from '../../Assets/bg-desktop.svg';

export const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: hsl(257, 40%, 49%);
    position: relative;
    display: flex;
    align-items: center;
    z-index: 1;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: 100vh;
        background-image: url(${backgroundDesktop});
        background-size: cover;
        z-index: -1;
    }
`;

export const MainContainerDiv = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
`;

export const MainContentDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 630px){
        grid-template-columns: 1fr;
        margin-top: 50px;
        margin-bottom: 50px;
        justify-content: center;
    }
`;

export const MainContentImgDiv = styled.div`
    display: flex;
    max-height: 60vh;
    margin-top: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 630px){
        margin-top: 30px;
        justify-content: center;
    }
`;

export const MainContentImg = styled.img`
    width: 100%;

    @media screen and (max-width: 630px){
        width: 60%;
    }
`;

export const MainContentTextDiv = styled.div`
    margin-left: 40px;
    color: #ffffff;

    @media screen and (max-width: 630px){
        text-align: center;
        margin-left: 0;
    }
`;

export const MainTextH1 = styled.h1`
    margin-bottom: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 2.7rem;
    line-height: 4rem;

    @media screen and (max-width: 630px){
        font-size: 1.4rem;
        line-height: inherit;
    }
`;

export const MainTextP = styled.p`
    margin-bottom: 15px;
    opacity: 0.8;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;

    @media screen and (max-width: 850px){
        font-size: 14px;
    }
`;

export const MainRegisterButton = styled.button`
    font-size: 0.8rem;
    padding: 10px 40px;
    background-color: white;
    color: hsl(257, 40%, 49%);
    border: none;
    font-family: "Poppins", sans-serif;
    border-radius: 20px;
    box-shadow: 4px 4px 18px 1px rgb(0 0 0 / 40%);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: hsl(300, 69%, 71%);
        color: #ffffff;
    }
`;