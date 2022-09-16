const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt = "emoji festejando" "/>';
const imgReprovado = '<img src="./images/reprovado.png" alt = "emoji decepcionado" "/>';
const notas = [];
const atividades = [];
let spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
let spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
let linhas = '';
const notaMinima = parseFloat(prompt('Digite o valor da nota mínima: '));

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})


function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida.`)
    }else {
    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;

    notas.push(parseFloat(inputNotaAtividade.value));
    atividades.push(inputNomeAtividade.value);
}


    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTab = document.querySelector('tbody');
    corpoTab.innerHTML = linhas;
}

function atualizaMediaFinal() {
    let mediaFinal = calculaMediaFinal();
    document.getElementById('nota-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('nota-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal (){
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++)
    somaDasNotas += notas[i];

    return somaDasNotas / notas.length;
}