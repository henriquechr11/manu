function verificar(){
    // Pega o valor do input com id "senha"
    const senha = document.getElementById("senha").value;
    
    // Verifica se a senha é "0506"
    if(senha === "0506"){
        // Se for correta, redireciona para a página p1.html
        window.location.href = "p1.html";
    } else {
        // Se for incorreta, limpa o input e mostra uma mensagem (opcional)
        document.getElementById("senha").value = "";
        alert("Senha incorreta! Tente novamente.");
    }
}

// Função para criar corações que caem
function criarCoracao() {
    const coracao = document.createElement('div');
    coracao.innerHTML = '🤍';
    coracao.style.position = 'fixed';
    coracao.style.left = Math.random() * window.innerWidth + 'px';
    coracao.style.top = '-20px';
    coracao.style.fontSize = '20px';
    coracao.style.color = 'white';
    coracao.style.zIndex = '1000';
    coracao.style.pointerEvents = 'none';
    coracao.style.userSelect = 'none';
    
    document.body.appendChild(coracao);
    
    // Animação de queda
    let posY = -20;
    const velocidade = 1 + Math.random() * 2; // Velocidade aleatória
    
    function cair() {
        posY += velocidade;
        coracao.style.top = posY + 'px';
        
        // Remove o coração quando sair da tela
        posY > window.innerHeight ? document.body.removeChild(coracao) : requestAnimationFrame(cair);
    }
    
    cair();
}

// Cria corações periodicamente
function iniciarCoracoes() {
    setInterval(criarCoracao, 1000); // Cria um coração a cada 1 segundo
}

// Inicia a animação quando a página carregar
window.addEventListener('load', iniciarCoracoes);