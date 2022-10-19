
import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"


export const TituloCardA = styled.h1`
color: #3F51B5;
font-family: 'Poppins', sans-serif;
font-size: 30px;
justify-content: center;
padding:20px;
display: flex;
margin-left:20px;
`

export const Hr= styled.div` 
height: 0.5px;
background-color:#B6BDF0;
outline:none !important;
box-shadow: #2F3CA2 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`


export const TituloCard = styled.h1`
color: #3F51B5;
font-family: 'Poppins', sans-serif;
font-size: 15px;
justify-content: center;
text-overflow: ellipsis;

`

export const Imagen= styled.img`


border-radius:20px;
align-item: center;

`

export const ContImagen= styled.div`
display: flex;
justify-content: center;

align-item: center;

`
export const Card = styled.div`
align-items: center;
display: flex;
flex-direction: column-reverse;

height: 450px;
width: 300px;;
margin-left: 100px;
top: 74px;
border-radius: 30px;
margin-top: 100px;
padding: 20px;



box-shadow: #929AD4 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

`


export const Svg= styled.div`
display: flex;

display: flex;
height: 60px;
width: 60px;
border-radius: 50%;
margin-top:10px;
justify-content: center;
cursor:pointer;
color: #F68D8D;




&:hover{
  color :#F00073;
  filter:#F71818 contrast(-1000%);

}

&:active{
  color :#F00073;
  filter: #F00073 contrast(200%);
  animation:  heartback 1s ease-in-out infinite;
}
@keyframes heartback{
  0%,100%{
    opacity: 0.2;
    transform:  scale(1);
  }
  50%{
    opacity: 0.2;
    transform:  scale(2);
  }
}
@keyframes heart{
  0%,100%{
    transform:  scale(1);
  }
  50%{
    transform:  scale(1.2);
  }
}
}

`
export const CardDelete = styled.div`
display: flex;
height: 40px;
width: 40px;;
top: 74px;
border-radius: 50%;

box-shadow: #929AD4 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

`

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

export const TituloContainer = styled.div`

display: flex;
justify-content: center;

`

export const Div_gral = styled.div`
padding:30px;
flex-direction: row;
display: flex;
flex-wrap: wrap;
justify-content: center;
`