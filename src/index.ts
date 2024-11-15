import {questionFloat} from 'readline-sync'

const notas: number[] = [];

for(let a = 0; a<5; a++){
  const nota1 = questionFloat("Informe a nota " + (a+1)+": ");
  notas[a] = nota1;
}

/*const nota1 = questionFloat("Informe a nota 1: ");
const nota2 = questionFloat("Informe a nota 2: ");
const nota3 = questionFloat("Informe a nota 3: ");
const nota4 = questionFloat("Informe a nota 4: ");
const nota5 = questionFloat("Informe a nota 5: ");*/

const media = (notas[1] + notas[2] + notas[3] + notas[4] + notas[5] ) / 5;

if(media>65)
  console.log("Aluno aprovado!")
else
  console.log("Aluno reprovado!")
