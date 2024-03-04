import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.jsx'

// Verifica se o agente do usuário indica que é um dispositivo móvel
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Verifica se é um dispositivo móvel e redireciona ou mostra uma mensagem de erro
if (isMobileDevice()) {
    // Redireciona para uma página de erro, por exemplo:
    // window.location.href = "pagina-de-erro.html";
    // Ou exibe uma mensagem de erro
    alert("Este aplicativo não pode ser acessado em dispositivos móveis.");
    window.location.href = "https://www.google.com";
}

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <AuthProvider>
        <App />
    </AuthProvider>
)
