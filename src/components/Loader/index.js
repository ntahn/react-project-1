import React from 'react';
import styled from 'styled-components';
import logo from '../../img/web-logo.png';
  
  const Loading = styled.svg`
    animation: rotate 0.5s linear infinite;
    width: 200px;
    height: 200px;
    background-image: url(${logo});
    position: absolute;
    top: 45%;
    left: 45%;
    background-repeat: no-repeat;
    background-size: cover;

    
    @keyframes rotate {
        0% {
            transform: rotate(20deg);
        }
        50% {
            transform: rotate(-20deg);
        }
        100% {
            transform: rotate(20deg); 
        }
    }
`;
  


export default function Loader() {
    return <Loading primary></Loading>
}