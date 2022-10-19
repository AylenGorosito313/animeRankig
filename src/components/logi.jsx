import imagen from "./img/logo.png"
import AR2 from "./img/AR2.png"
import {Logo,Logo2} from "./estilos/estilo"


function AnimeRankLogo(){
    return (
<Logo>
  <img src={imagen} alt="logo"/>
<Logo2> <img src={AR2} alt="logo"/></Logo2>

</Logo>
    )
}

export default AnimeRankLogo