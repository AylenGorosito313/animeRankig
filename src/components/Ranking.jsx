import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { rankingAnime } from "../redux/actions";
import styled from "styled-components";
import {Card_Rank,
    Imagen,
    TituloCard ,
    Rank_div ,
    Container_Rank_Card ,
    Hr,
    TituloCardA,
    P_descrip,
    LinkContainerTitulo

} from "../components/estilos/estilo_rank";


function Rank (){
const rank = useSelector((state)=> state.animeRank)
const dispatch = useDispatch()

React.useEffect(() => {

    dispatch( rankingAnime());
}, [dispatch,rankingAnime]);



    return (
        <>
        <Hr></Hr>
        < TituloCardA >Ranking Animes </TituloCardA>
       { rank?.map((rank)=>{
       return  (<>


       <Container_Rank_Card >
       
       <Rank_div >
       <LinkContainerTitulo
                
                to={`/animedetail/${rank.mal_id}`}>
       < TituloCard >{rank.title}</TituloCard >
       </LinkContainerTitulo>
       < P_descrip>
        Rank: {rank.rank}
     
       <p>Popular : {rank.popularity}</p>
       <p>Rainting : {rank.rating}</p>
       {rank.synopsis}</ P_descrip>
       </Rank_div >
     <Card_Rank>
         
        
      
        <Imagen  src={rank.images.jpg.image_url} alt="img"/>
        
        </Card_Rank>
        </Container_Rank_Card>
        </>)
       })}
     
        </>
    )
}


export default Rank