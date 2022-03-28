const numero = document.getElementById("numero");
const indice = document.getElementById("indice");
const buttonFim = document.getElementById("btFim");
const buttonInicio = document.getElementById("btInicio");
const buttonLimpar = document.getElementById("btLimpar");
const apagarIndex = document.getElementById("btIndice");
const lista = document.getElementById("lista");

let array = [];

function InserirInicio() {
    let value = parseInt(numero.value);
    if (value) {
        array.unshift(value);
        numero.value = "";
        numero.focus();
        List();

    } else {
        alert("Insira um Número!")
    }
}

function InserirFim() {
    let value = parseInt(numero.value);
    if (value) {
        array.push(value);
        numero.value = "";
        numero.focus()
        List();
    } else {
        alert("Insira um Número!")
    }
}

function Limpar() {
    array = [];
    numero.value = "";
    List();
}

function List() {
    lista.innerText = '';
    array.forEach(n => {
        item = document.createElement('li')
        item.textContent = n
        lista.appendChild(item)
    })
}

function DeletarIndex() {
    let valueIndex = parseInt(indice.value);

    if (array[valueIndex]) {
        array.splice(valueIndex, 1);
        indice.value = "";
        indice.focus();
        List();
    } else {
        alert("Esse indice não é válido");
        indice.value = "";
    }
}

buttonFim.onclick = InserirFim;
buttonInicio.onclick = InserirInicio;
buttonLimpar.onclick = Limpar;
apagarIndex.onclick = DeletarIndex;