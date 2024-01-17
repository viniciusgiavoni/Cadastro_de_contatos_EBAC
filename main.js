const form = document.getElementById('form-contato');
const cadastrar = [];
const numerotelefone = [];

let linhas = ' ';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
    calculaMedia(); 
});

function adicionarLinha() {
    const inputNameContact = document.getElementById('nome-contato');
    const telefone = document.getElementById('telefone-contato');

    if (cadastrar.includes(inputNameContact.value)) {
        alert(`O contato: ${inputNameContact.value} já foi inserido.`);
    } else {
        cadastrar.push(inputNameContact.value);
        numerotelefone.push(parseFloat(telefone.value));

        let linha = '<tr>';
        linha += `<td>${inputNameContact.value}</td>`;
        linha += `<td>${telefone.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNameContact.value = ' ';
    telefone.value = ' ';

};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};
