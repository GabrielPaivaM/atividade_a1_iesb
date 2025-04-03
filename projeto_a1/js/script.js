// Lista para armazenar os itens
let itens = [];

// Capturar o formulário e a lista
const form = document.getElementById('cadastroForm');
const listaItens = document.getElementById('listaItens');

// Evento para cadastrar um item
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita recarregar a página

    let nomeItem = document.getElementById('nomeItem').value;
    
    if (nomeItem.trim() === "") {
        alert("O nome do item não pode estar vazio!");
        return;
    }

    itens.push(nomeItem); // Adiciona o item à lista
    atualizarLista(); // Atualiza a listagem
    form.reset(); // Limpa o formulário
});

// Atualiza a lista exibida na tela
function atualizarLista() {
    listaItens.innerHTML = ""; // Limpa a lista

    itens.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = item;

        let btnRemover = document.createElement('button');
        btnRemover.textContent = "Remover";
        btnRemover.onclick = () => removerItem(index);

        li.appendChild(btnRemover);
        listaItens.appendChild(li);
    });
}

// Remove um item da lista
function removerItem(index) {
    itens.splice(index, 1);
    atualizarLista();
}

// Alternar entre seções (cadastro e listagem)
function mostrarSecao(secao) {
    document.getElementById('cadastro').style.display = secao === 'cadastro' ? 'block' : 'none';
    document.getElementById('listagem').style.display = secao === 'listagem' ? 'block' : 'none';
}