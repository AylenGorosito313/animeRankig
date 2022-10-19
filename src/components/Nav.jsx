import { Link } from "react-router-dom"
import AnimeRankLogo from "./logi"
import {Estilo, A, LinkContainer} from "./estilos/estilo"
// NavLink to="/about">About</NavLink>

function Nav (){

    return (
        <>
       
        <Estilo>

        <AnimeRankLogo/>
        
        <A>
        <LinkContainer to={'/home'}>
        Home
        </LinkContainer>
        </A> 
        <A>
        <LinkContainer to={'/rank'}>
        Rankings
        </LinkContainer>
        </A>
        
        <A>
         <LinkContainer to={'/fav'}>
        Favoritos
        </LinkContainer>
        </A>
      
        </Estilo>
        
        </>
    )
}



export default Nav