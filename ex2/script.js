var msg = document.getElementById ('msg')
var plano = document.getElementById('fundo')
var bloco = document.getElementById('tabela')
var data = new Date()
var hora = data.getHours()
var form = document.querySelector ('.gf');
var barra = document.querySelector('#glosario')
var enviar_btn = document.querySelector('.btn')
var containrt = document.querySelector('.lista-container')
var lista = document.querySelector('.lista')
var excluirBtn = document.querySelector("excluirBtn")


function estilo(mensagem,img_fundo,cor_borda,cor,cor2) {
    plano.style.backgroundImage = img_fundo ;
    plano.style.backgroundSize = '100%'
    msg.innerHTML = mensagem;
    msg.style.color = cor
    bloco.style.backgroundColor = cor_borda
    bloco.style.boxShadow = `8px 7px 7px ${cor2}`
}

function carregar (){    
    if (hora >= 6 && hora < 15) {

       estilo('Bom dia','url("img/dia.jpg")',' #00004d','white','black')

    } else if (hora >= 15 && hora < 20) {

        estilo('Boa tarde','url("img/tarde.jpg")','#4d2600','white','black')

    } else {

        estilo('Boa noite','url("img/noite.jpg")','#000033','white')

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
