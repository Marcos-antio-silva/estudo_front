var alerta = document.querySelector('.alerta');
var form = document.querySelector ('.formulario');
var barra = document.querySelector('glosario')
var enviar_btn = document.querySelector('.btn')
var containrt = document.querySelector('.lista-container')
var lista = document.querySelector('.lista')
var excluirBtn = document.querySelector("excluirBtn")

let editElement;
let editFlag = false;
let editID = "";

form.addEventListener('submit',addItem)

function addItem(e) {
    e.preventDefault ();
    console.log(barra.value)
    const value = barra.value
    // const id = new Date(). getTime() .toString();

    // if(value !=='' && editFlag == false ){
    //     console.log ('item adicionado');
    // }
    // else if (value !== '' && editFlag === true){
    //     console.log('editando');
    // }
    // else {
    //     console.log('vazio');
    // }
}
