# Site rodando online na vercel.
[Virtual Cakes](https://virtual-cakes-git-main-shadow123433s-projects.vercel.app)

---

# 🍰 VirtualCakes

Um site simples e funcional para venda de bolos online, permitindo que clientes visualizem produtos e realizem pedidos diretamente pelo WhatsApp.

## 📌 Sobre o Projeto

O **VirtualCakes** foi desenvolvido com foco em praticidade e facilidade de uso. A aplicação apresenta um catálogo de bolos e permite que o cliente faça pedidos de forma rápida, sendo redirecionado automaticamente para o WhatsApp com uma mensagem já estruturada.

Esse projeto é ideal para pequenos negócios que desejam ter presença online sem a necessidade de sistemas complexos.

---

## 🚀 Funcionalidades

* 📋 Exibição de catálogo de bolos
* 🎯 Interface simples e intuitiva
* 📱 Integração direta com WhatsApp
* 💬 Mensagem automática personalizada com nome e preço do produto
* 🌐 Layout responsivo

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** → Estrutura da aplicação
* **CSS3** → Estilização e layout
* **JavaScript** → Lógica de interação e integração com WhatsApp

---

## ⚙️ Como Funciona

1. O usuário acessa o site
2. Visualiza os bolos disponíveis
3. Seleciona um produto
4. Ao clicar no botão de pedido:

   * Uma mensagem personalizada é criada automaticamente
   * O usuário é redirecionado para o WhatsApp
   * O pedido já vai pronto para envio

---

## 📂 Estrutura do Projeto

```
public/
│
├── assets/        # Imagens e recursos
├── scripts/
│   └── script.js  # Lógica do sistema (envio para WhatsApp)
├── styles/
│   └── style.css  # Estilos do site
├── index.html     # Página principal
└── README.md
```

---

## 🔗 Integração com WhatsApp

O envio de pedidos é feito utilizando a API de link do WhatsApp:

```
https://wa.me/<numero>?text=<mensagem>
```

A mensagem é codificada automaticamente com `encodeURIComponent` para garantir que funcione corretamente no navegador.

---

## 📈 Possíveis Melhorias

* Sistema de carrinho de compras
* Painel administrativo
* Integração com pagamentos online
* Backend para gerenciamento de pedidos
* Banco de dados para produtos

---

## 💡 Objetivo

Este projeto tem como objetivo demonstrar como criar uma solução simples de e-commerce utilizando apenas tecnologias front-end.
