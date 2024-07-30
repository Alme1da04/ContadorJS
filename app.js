let contador = 0;

function exibirNumero(contador){
    let numero = document.querySelector('span');
    numero.innerHTML = contador;
    if (contador > 0) {
       let botao =  document.getElementById('value')
       botao.style.color = "green";
    }else if(contador < 0){
       let botao =  document.getElementById('value')
       botao.style.color = "red";
    }else if(contador == 0){
        let botao =  document.getElementById('value')
       botao.style.color = "black";
    }
}

function increase(){
     contador = contador+1;
     exibirNumero(contador);
}

function decrease()
{
    contador = contador -1;
    exibirNumero(contador);
}

function reset(){
    contador = 0;
    exibirNumero(contador); 
}   