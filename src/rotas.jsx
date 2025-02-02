// Importa componentes do react-router-dom para criar rotas e navegação
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importa as páginas usadas no projeto
import Login from "./pages/login/login.jsx"; // Página de Login
import Register from "./pages/register/register.jsx"; // Página de Registro
import Appointments from "./pages/appointments/appointments.jsx"; // Página de Agendamentos
import AppointmentAdd from "./pages/appointment-add/appointment-add.jsx"; // Página de Adicionar/Editar Agendamento

// Função que define as rotas da aplicação
function Rotas() {
    return (
        <BrowserRouter> {/* Envolvendo as rotas no BrowserRouter para habilitar navegação */}
            <Routes> {/* Define um conjunto de rotas */}
                <Route path="/" element={<Login />} /> {/* Rota para a página de Login */}
                <Route path="/register" element={<Register />} /> {/* Rota para o Registro */}
                <Route path="/appointments" element={<Appointments />} /> {/* Rota para Agendamentos */}
                <Route path="/appointments/add" element={<AppointmentAdd />} /> {/* Rota para Adicionar Agendamento */}
                <Route path="/appointments/edit/:id_appointment" element={<AppointmentAdd />} /> {/* Rota para Editar Agendamento com ID */}
            </Routes>
        </BrowserRouter>
    );
}

// Exporta o componente Rotas para ser usado em outros arquivos
export default Rotas;
