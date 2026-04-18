function enviarPedido(nome, preco) {
    // O número deve ter o código do país (55) + DDD + Número
    const numeroWhatsApp = "5527998040952"; 
    
    // Criando uma mensagem bem estruturada e profissional
    const mensagem = `🧁 *Novo Pedido do Site*
------------------------------
*Bolo:* ${nome}
*Valor:* R$ ${preco}
------------------------------
Olá! Gostaria de encomendar este bolo. Como prosseguimos?`;

    // encodeURIComponent serve para o navegador entender espaços e quebras de linha na URL
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    
    // Abre o WhatsApp em uma nova aba
    window.open(url, '_blank');
}