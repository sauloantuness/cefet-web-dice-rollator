// Faça seu exercício neste arquivo


// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//   - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//   - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//   - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade

class Dice {
    constructor(sides) {
        this.sides = sides;
    }

    roll() {
        return Math.ceil(Math.random() * this.sides);
    }
}

document.querySelector('#rolar').addEventListener('click', function(event) {
    let dices = [4, 6, 8, 10, 12, 20].map(sides => new Dice(sides)),
        values = [];

    for(let dice of dices) {
        let times = document.querySelector('#quantidadeD' + dice.sides).value;
        while(times, times--) {
            values.push(dice.roll());
        }
    };

    let result = values.join(' + ');
    let total = values.reduce((x, acc) => x + acc, 0);
    result = `${result} = ${total}` 

    document.querySelector('#resultado').innerHTML = result;
    document.querySelector('#recipienteResultados').classList.remove('oculto');
});
