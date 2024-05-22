function carregar (){
    var msg = document.getElementById ('msg')
    var plano = document.getElementById('fundo')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 6 && hora < 15) {
        plano.style.backgroundImage = 'url("img/dia.jpg")';
        msg.innerHTML = 'Bom dia';
    } else if (hora >= 15 && hora < 20) {
        plano.style.backgroundImage = 'url("img/tarde.jpg")';
        msg.innerHTML = 'Boa tarde';
    } else {
        plano.style.backgroundImage = 'url("img/noite.jpg")';
        msg.innerHTML = 'Boa noite';
    }

}

