// Importa o Axios, uma biblioteca para requisições HTTP
import axios from "axios";

// Cria uma instância personalizada de Axios com uma URL base
const api = axios.create({
    baseURL: "http://localhost:3001" // Define o endpoint base para as requisições
});

// Exporta a instância para ser usada em outros arquivos do projeto
export default api;
