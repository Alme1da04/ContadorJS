let contador = 0;

function exibirNumero(contador){
    let numero = document.querySelector('span');
    numero.innerHTML = contador;
}

function increase(){
    let valorAumentado = contador ++;
    exibirNumero(valorAumentado);  
}

function decrease()
{
    let valorDiminuido = contador --;
    exibirNumero(valorDiminuido);
}

function reset(){
    exibirNumero(0);
}