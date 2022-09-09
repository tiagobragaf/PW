const input = document.getElementById('input');
let resultado = document.getElementById('resultado');
let vetor = [];

function mostrar(){

     let adicionar = input.value;
     vetor.push(adicionar);

     console.log(vetor)

     resultado.innerHTML = ''

     for(let i = 0; i < vetor.length; i++){
        resultado.innerHTML += `<li>${vetor[i]}</li>`;
     }

}