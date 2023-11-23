// Método simples: usando o método createElement e innerHTML

// Criando o título
var tituloSimples = document.createElement("h1");
tituloSimples.innerHTML = "Bem-vindo ao Nosso Site!";
tituloSimples.id = "titulo";

// Criando o elemento do produto
var produtoSimples = document.createElement("div");
produtoSimples.innerHTML = "<h2>Produto à Venda</h2><p>Este é um produto incrível. Aproveite!</p><p>Preço: R$ 50,00</p>";

// Adicionando os elementos ao body
document.body.appendChild(tituloSimples);
document.body.appendChild(produtoSimples);


// Método complexo: usando o método createElement, createTextNode e appendChild

// Criando o título
var tituloComplexo = document.createElement("h1");
var tituloTexto = document.createTextNode("Bem-vindo ao Nosso Site!");
tituloComplexo.id = "titulo";
tituloComplexo.appendChild(tituloTexto);

// Criando o elemento do produto
var produtoComplexo = document.createElement("div");

var nomeProduto = document.createElement("h2");
nomeProduto.appendChild(document.createTextNode("Produto à Venda"));

var descricaoProduto = document.createElement("p");
descricaoProduto.appendChild(document.createTextNode("Este é um produto incrível. Aproveite!"));

var precoProduto = document.createElement("p");
precoProduto.appendChild(document.createTextNode("Preço: R$ 50,00"));

produtoComplexo.appendChild(nomeProduto);
produtoComplexo.appendChild(descricaoProduto);
produtoComplexo.appendChild(precoProduto);

// Adicionando os elementos ao body
document.body.appendChild(tituloComplexo);
document.body.appendChild(produtoComplexo);
