import React from "react";
import { BASE_URL, URL_Harry } from "./constants/constants";
import {Title,NameContainer,PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { useRequestData } from "./Hooks/useRequestData";

function App() {
  
  const [postagens, isLoadingPostagem, errorPostagem] = useRequestData(`${BASE_URL}comments`)
  const [nomeUsuarios, isLoadingUsuario, errorUsuario] = useRequestData(`${BASE_URL}users`)
  const [nomesHP, isLoadingHP, errorHP] = useRequestData(`${URL_Harry}`)

  return (
    <div>
      <GlobalStyle />
      <Header />
      {/* <Title>Nomes dos usuários</Title>
      <NameContainer>
        {isLoadingUsuario ? <h1>Carregando...</h1> : nomeUsuarios.map((usuario) => {
          return(
          <Card 
          key={usuario.id} 
          text={usuario.name} 
          backgroudColor={'none'}
          textColor={'none'}
          />)
        })}
      {errorUsuario && <h1>ERRO NA REQUISIÇÃO</h1>}
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>

      {isLoadingPostagem ? <h1>Carregando...</h1> : postagens.map((post) => {
        //console.log(post);
        return(
          <Card 
          key={post.id} 
          text={post.body} 
          backgroudColor={'#1dc690'}
          textColor={'#ffffff'}
          />)
      })}
      {errorPostagem && <h1>ERRO NA REQUISIÇÃO</h1>}
      </PostContainer> */}

      <hr />
      <Title>Personagens de Harry Potter</Title>
      <PostContainer>

      {isLoadingHP ? <h1>Carregando...</h1> : nomesHP.map((post, index) => {
        //console.log(post);
        return(
          index < 20 &&
          <Card 
          img={post.image} 
          text={post.name} 
          backgroudColor={'#1dc690'}
          textColor={'#ffffff'}
          />)
      })}
      {errorHP && <h1>ERRO NA REQUISIÇÃO</h1>}
      </PostContainer>
    </div>
  );
}

export default App;



