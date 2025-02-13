//Esto agrega a la pantalla el valor del boton que toquemos
function agregar(valor){
    document.getElementById('pantalla').value += valor
}

//Este elimina todo el input al clickear en el C

function borrar(){
    document.getElementById('pantalla').value = ''
}

//Este toma el valor de la pantalla y hace los calculos

function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}


let niggas = ('niggas') 