// Importa o arquivo CSS global para aplicar estilos na aplicação
import "./styles/global.css";

// Importa o React, necessário para criar componentes e utilizar JSX
import React from 'react';

// Importa o ReactDOM, usado para renderizar componentes React no DOM
import ReactDOM from 'react-dom/client';

// Importa as rotas da aplicação, definidas em "rotas.jsx"
import Rotas from "./rotas.jsx";

// Renderiza o componente <Rotas /> dentro do elemento HTML com ID 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Rotas /> // Carrega as rotas da aplicação na interface
);
