let carrinho = [];

// =======================
// CARRINHO
// =======================

function addToCart(nome, preco, imagem) {
    const itemExistente = carrinho.find(item => item.nome === nome);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({
            nome: nome,
            preco: parseFloat(preco),
            imagem: imagem,
            quantidade: 1
        });
    }

    renderizarCarrinho();
    openCart();
}

function changeQuantity(index, delta) {
    carrinho[index].quantidade += delta;

    if (carrinho[index].quantidade <= 0) {
        removeFromCart(index);
    } else {
        renderizarCarrinho();
    }
}

function removeFromCart(index) {
    carrinho.splice(index, 1); 
    renderizarCarrinho();
}

// =======================
// RENDER
// =======================

function renderizarCarrinho() {
    const cartItemsElement = document.getElementById("cart-items");
    const cartCountElement = document.getElementById("cart-count");
    const valorTotalElement = document.getElementById("valor-total-display");

    const totalItens = carrinho.reduce((soma, item) => soma + item.quantidade, 0);
    cartCountElement.innerText = totalItens;

    cartItemsElement.innerHTML = "";
    let somaTotal = 0;

    carrinho.forEach((item, index) => {
        const subtotal = item.preco * item.quantidade;
        somaTotal += subtotal;

        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item-lin";

        itemDiv.innerHTML = `
            <img src="${item.imagem}" class="cart-img-thumb">
            
            <div class="cart-item-info">
                <b>${item.nome}</b>
                <span>R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
                
                <div class="quantity-control">
                    <button onclick="changeQuantity(${index}, -1)">-</button>
                    <span>${item.quantidade}</span>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </div>
            </div>
            
            <div class="item-right">
                <div class="subtotal-item">R$ ${subtotal.toFixed(2).replace('.', ',')}</div>
                <button class="btn-remove" onclick="removeFromCart(${index})">×</button>
            </div>
        `;
        cartItemsElement.appendChild(itemDiv);
    });

    if (carrinho.length === 0) {
        cartItemsElement.innerHTML = `<p class="empty-cart-msg">Sua sacola está vazia 🧁</p>`;
    }

    if (valorTotalElement) {
        valorTotalElement.innerText = somaTotal.toFixed(2).replace('.', ',');
    }
}

// =======================
// PAINEL
// =======================

function openCart() {
    document.getElementById("cart-panel").classList.add("active");
}

function closeCart() {
    document.getElementById("cart-panel").classList.remove("active");
}

// =======================
// FORMULÁRIO
// =======================

function mostrarFormulario() {
    if (carrinho.length === 0) {
        mostrarAlerta("Carrinho vazio!");
        return;
    }

    document.getElementById("form-overlay").style.display = "flex";
}

function fecharFormulario() {
    document.getElementById("form-overlay").style.display = "none";
}

// =======================
// ALERTA (MODAL)
// =======================

function mostrarAlerta(texto) {
    document.getElementById("alert-text").innerText = texto;
    document.getElementById("alert-overlay").style.display = "flex";
}

function fecharAlerta() {
    document.getElementById("alert-overlay").style.display = "none";
}

// =======================
// ENVIO
// =======================

function EnviarPedidoCarrinho() {
    if (carrinho.length === 0) {
        mostrarAlerta("Carrinho vazio!");
        return;
    }

    const endereco = {
        cep: document.getElementById("cep").value,
        rua: document.getElementById("endereco").value,
        bairro: document.getElementById("bairro").value,
        numero: document.getElementById("numero").value,
        cidade: document.getElementById("cidade").value,
        comp: document.getElementById("complemento").value,
        uf: document.getElementById("uf").value
    };

    if (!endereco.rua || !endereco.numero || !endereco.bairro) {
        mostrarAlerta("Por favor, preencha o endereço de entrega!");
        return;
    }

    let msg = "🧁 *Novo Pedido - Doce Momento*\n";
    msg += "----------------------------------\n\n";

    let totalGeral = 0;
    carrinho.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        msg += `*${item.quantidade}x* ${item.nome} - R$ ${subtotal.toFixed(2)}\n`;
        totalGeral += subtotal;
    });

    msg += "\n\n📍 *ENDEREÇO DE ENTREGA:*\n";
    msg += `• Rua: ${endereco.rua}\n`;
    msg += `• Número: ${endereco.numero}\n`;
    msg += `• Bairro: ${endereco.bairro}\n`;
    msg += `• Cidade: ${endereco.cidade}\n`;
    msg += `• UF: ${endereco.uf}\n`;

    if (endereco.cep) msg += `• CEP: ${endereco.cep}\n`;
    if (endereco.comp) msg += `• Complemento: ${endereco.comp}\n`;

    const url = `https://wa.me/5527998040952?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
}