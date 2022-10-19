import styled from "styled-components";

import { useDispatch,useSelector  } from "react-redux";
import { useState } from "react";
import React from "react";
import {getEpisodes} from "../redux/actions"
import { useParams } from "react-router-dom";

function Episodies() {
const epi = useSelector((state)=>state.episodies)
const dispatch = useDispatch()
let {id} = useParams()

React.useEffect(()=>{

dispatch(getEpisodes(id))

},[dispatch,id])

return (
<>
{
   epi?.map((cap)=>{
    return (
        <> 
        <h1>Nombre : {cap.title}</h1>
        <h2>Url : {cap.url}</h2>
        
        
        </>


    )
   }) 
}


</>

)
}

export default Episodies