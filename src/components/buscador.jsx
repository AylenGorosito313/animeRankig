import React from "react";
import { useState } from "react";

// import { useSelector } from "react-redux";
import { getAllAnimes } from "../redux/actions";
import { useDispatch } from "react-redux";
import Icon from "./Search_Icon";

import {
 
  Svg,
  Hr,
  Input,
  ContainerSearch,
  Layout,
} from "../components/estilos/estilo_Buscador";

function Buscador() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    valor: "",
  });
  // const animes = useSelector((state)=>state.animes)

  const handler_Submit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(getAllAnimes(input.valor));
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput({
      valor: e.target.value,
    });
  };
  // box-shadow: 4px 11px 10px 0px #00000040;
  return (
    <>
      {" "}
      <div>
        <form onSubmit={handler_Submit}>
          <Layout>
           
            
            <ContainerSearch>
              
         <Svg onClick={ handler_Submit} ><Icon /></Svg> 
            <Input
              type="text"
              autoComplete="off"
              value={input.valor}
              onChange={handleChange}
              placeholder="Buscar Anime ..."
            />
            </ContainerSearch>
          </Layout>

        <Hr> <br></br></Hr> 
        </form>
      </div>
    </>
  );
}

export default Buscador;

{
  /* <h2>Buscador</h2>
<form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
  <div>
    <label className="label" htmlFor="title">Película: </label>
    <input
      type="text"
      id="title"
      autoComplete="off"
      value={title}
      onChange={(e) => this.handleChange(e)}
    />
  </div>
  <button type="submit">BUSCAR</button> */
}

// font-family: 'Poppins', sans-serif;
// color: #3F51B5;
// background: white;
// width: 400px;
// margin: auto;
// border: 1px solid #ddd;
// border-radius: 100px;
// padding: 20px;
// color: #505060;
// box-shadow: 0 3px 7px 0 rgba(0,0,0,.15);

// &:hover{
//     &::before {
//         content: "";
//         display: block;
//         height: 150px;
//         width: 150px;
//         background: deepskyblue;
//         position: absolute;
//         animation-name: appear;
//         animation-duration: .7s;
//         border-radius: 50%;
//         animation-fill-mode: both;
//         animation-delay: .2s;

//     }
//     // }
