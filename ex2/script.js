var msg = document.getElementById ('msg')
var plano = document.getElementById('fundo')
var bloco = document.getElementById('tabela')
var data = new Date()
var hora = data.getHours()


function estilo(x,y,z) {
    plano.style.backgroundImage = x ;
    plano.style.backgroundSize = '100%'
    msg.innerHTML = 'Boa noite';
    msg.style.color = z
    bloco.style.backgroundColor = y
}
function carregar (){    
    if (hora >= 6 && hora < 15) {
        plano.style.backgroundImage = 'url("img/dia.jpg")';
        plano.style.backgroundSize = '100%'
        msg.innerHTML = 'Bom dia';

    } else if (hora >= 15 && hora < 20) {
        plano.style.backgroundImage = 'url("img/tarde.jpg")';
        plano.style.backgroundSize = '100%'
        msg.innerHTML = 'Boa tarde';
    } else {
        estilo('url("img/noite.jpg")','#000033','white')
    }
}

