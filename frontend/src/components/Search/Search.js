import React, { useState } from "react";
import "./Search.css";

const apiKey = "e498bc1b6c6ad94e1ffec7bda9b6ae2c";

function Search() {
  const [valor, setValor] = useState("");
  const [cidade, setCidade] = useState("");

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`;

  const pegaInput = (evento) => {
    setValor(evento.target.value); // Atualiza o estado com o valor do input
  };

  const pesquisar = () => {
    setCidade(valor); // Atualiza o estado com o valor inserido pelo usuário
    request();
  };

  const request = () => {
    //vou gerar uma requisição para a api
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="search_conteiner">
      <input
        type="text"
        placeholder="Digite o nome da cidade..."
        onChange={pegaInput}
        value={valor}
        className="SearchInput"
      />
      <button type="button" onClick={pesquisar} className="SearchButton">
        Buscar
      </button>
      {cidade && ( // Verifica se a cidade foi inserida antes de fazer a chamada para a API
        <div>
          {/* Aqui você pode fazer a chamada para a API com a URL atualizada com o nome da cidade */}
          <p>{`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`}</p>
        </div>
      )}
    </div>
  );
}

export default Search;
