import styled from 'styled-components'
import backgroundDesktop from '../../Images/bg-desktop.svg'

export const BackgroundSection = styled.section`
    background-image: url(${backgroundDesktop});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
    height: 100vh;
`;