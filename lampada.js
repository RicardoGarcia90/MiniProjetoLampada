var turnOnOff = document.getElementById ('turnOnOff');
var lamp = document.getElementById('lamp');

function lampbroken (){
    return lamp.src.indexOf ('quebrada') > -1;
}

function on (){
    if ( !lampbroken () ){
        lamp.src = 'IMAGENS/ligada.jpg'
    }
}

function off (){
    if ( !lampbroken () ){
        lamp.src = 'IMAGENS/desligada.jpg'
    }
}

function broken (){
    lamp.src = 'IMAGENS/quebrada.jpg'
}

function onOff(){
    if (turnOnOff.textContent == 'Ligar'){
        on();
        turnOnOff.textContent = 'Desligar';
    } else {
        off()
        turnOnOff.textContent = 'Ligar'
    }
}

turnOnOff.addEventListener ('click', onOff);
lamp.addEventListener ('mouseover', on);
lamp.addEventListener ('mouseleave', off);
lamp.addEventListener ('dblclick', broken);

