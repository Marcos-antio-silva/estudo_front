var form = document.querySelector ('.gf');
var barra = document.querySelector('#glosario')
var enviar_btn = document.querySelector('.btn')
var containrt = document.querySelector('.lista-container')
var lista = document.querySelector('.lista')
var excluirBtn = document.querySelector("excluirBtn")

let editElement;
let editFlag = false;
let editID = "";

form.addEventListener('submit',addItem);

function addItem(e) {
    e.preventDefault ();
    const value = barra.value;
    const id = new Date().getTime().toString();
    if(value && !editFlag){
        console.log ('adicionado')
        const elemento = document.createElement('article');
        //adicioando a classe 
        elemento.classList.add('itens');
        const atr =  document.createAttribute('data-id');
        atr.value = id;
        elemento.setAttributeNode(atr);
        elemento.innerHTML = `
        <p class="titulo">${value}</p>
        <div class="btn-conteiner">
            <button type="button" class="editar-btn">
                <i class="fas fa-edit"></i>
            </button>
            <div class="btn-conteiner">
                <button type="button" class="excluirBtn">
                    <i class="fas fa-lixo"></i>
            </button>
        </div>`;
        lista.appendChild(elemento);
        barraNotificação('item adcionado', 'sucesso')
        container.classList.add('mostrar-container')
        barraNotificação('foi','sucesso')
    }
    else if (value && editFlag){
        console.log('editando');
    }
    else {
        // barraNotificação('insira uma produto', 'erro' )
        barraNotificação ('insira um produto na barra','erro')
    }
}

//barra de notificação

function barraNotificação(text, x) {
    var alerta = document.querySelector('.alerta'); // Ensure the alerta element is defined
    if (!alerta) {
        console.error('Element with id "alerta" not found.');
        return;
    }

    alerta.innerHTML = text;
    alerta.classList.add(`alerta-${x}`);
    
    setTimeout(function() {
        alerta.innerHTML = '';
        alerta.classList.remove(`alerta-${x}`);
    }, 1500);
}