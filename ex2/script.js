var msg = document.getElementById ('msg')
var plano = document.getElementById('fundo')
var bloco = document.getElementById('tabela')
var data = new Date()
var hora = data.getHours()
var form = document.querySelector ('.gf');
var barra = document.querySelector('#glosario')
var containrt = document.querySelector('.lista-container')
var lista = document.querySelector('.lista')
var excluirBtn = document.querySelector("reset-btn")

function estilo(img_fundo,cor_borda,cor) {
    plano.style.backgroundImage = img_fundo ;
    plano.style.backgroundSize = '100%'
    bloco.style.backgroundColor = cor_borda
    bloco.style.boxShadow = `8px 7px 7px ${cor}`
}

function carregar (){    
    if (hora >= 0 && hora < 12) {

       estilo('url("img/dia.jpg")',' #00004d','black')

    } else if (hora >= 12 && hora < 18) {

        estilo('url("img/tarde.jpg")','#4d2600','black')

    } else {

        estilo('url("img/noite.jpg")','#000033','white')

    }
}

let editElement;
let editFlag = false;
let editID = "";

form.addEventListener('submit',addItem);

function addItem(e) {
    e.preventDefault ();
    const value = barra.value;
    const id = new Date().getTime().toString();

    if(value && !editFlag){
        const elemento = document.createElement('article');
        //adicioando a classe 
        elemento.classList.add('itens');
        const atr =  document.createAttribute('data-id');
        atr.value = id;
        elemento.setAttributeNode(atr);
        elemento.innerHTML = `
        <p class="titulo">${value}</p>`;
        `<div class="btn-conteiner">
            <button type="button" class="editar-btn">
                <i class="fas fa-edit"></i>
            </button>
            <div class="btn-conteiner">
                <button type="button" class="excluirBtn">
                    <i class="fas fa-lixo"></i>
            </button>
        </div>`;
        lista.appendChild(elemento);
        barraNotificação('foi','sucesso')
        console.log (value, id)
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

function editItem(id) {
    const element = document.querySelector(`[data-id="${id}"]`);
    editElement = element;
    barra.value = element.querySelector('.titulo').textContent;
    editFlag = true;
    editID = id;
}

function delet(id){
    const element = document.querySelector(`[data-id="${id}"]`);
    editElement = element;
    '' = element.querySelector('.titulo').textContent;
    editFlag = true;
    editID = id;

}