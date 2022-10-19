import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"


export const LinkContainerTitulo = styled(Link)`
color:#000;
 font-size: x-large;
 font-family: Arial, Helvetica, sans-serif;
 text-decoration: none;
 margin: 10px;
&:hover,
&:focus{
    color: blue;
}
&:active{
    color: red;
};

`

export const Card_Rank = styled.div`
display: flex;
flex-direction: column-revers;

height: 300px;
width: 200px;;
margin-right: 40px;
margin-top: 20px;
border-radius: 30px;

padding: 20px;



box-shadow: #929AD4 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

`

export const Imagen= styled.img`

height: 300px;
width: 200px;;
border-radius:20px;
display: flex;

`


export const Rank_div = styled.div`
margin-left: 20px;
border-radius:20px;
display: flex;
flex-direction: column;
padding:20px;
font-family: 'Poppins', sans-serif;

`

export const TituloCard = styled.h1`
color: #3F51B5;
font-family: 'Poppins', sans-serif;
font-size: 20px;

text-overflow: ellipsis;
display: flex;
`


export const Container_Rank_Card = styled.div`

display: flex;
flex-direction: row-reverse;
justify-content: flex-end;
margin-top:40px;
padding:40px;

box-shadow: #929AD4 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

`

export const Hr= styled.div` 
height: 0.5px;
background-color:#B6BDF0;
outline:none !important;
box-shadow: #2F3CA2 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`


export const TituloCardA = styled.h1`
color: #3F51B5;
font-family: 'Poppins', sans-serif;
font-size: 30px;
justify-content: center;
padding:20px;
display: flex;
`
export const P_descrip = styled.p`
font-size: 14px;
text-overflow: ellipsis;
`