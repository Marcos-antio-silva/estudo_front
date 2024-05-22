var msg = document.getElementById ('msg')
var plano = document.getElementById('fundo')
var bloco = document.getElementById('tabela')
var data = new Date()
var hora = data.getHours()


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

