const quadroUrsos = [
    "./img/urso1.png",
    "./img/urso2.png",
    "./img/urso3.png"
];
const imgUrso = document.getElementById("img-urso");
let quadroAtual = 1;


let margem = document.getElementById('margem');

const largura = document.getElementById('container').clientWidth;
console.log(largura);



let andar = 0;
let timmer;
let direcao = 1;



setTimeout(function () {
    timmer = setInterval(function () {
        if (quadroAtual % 2 == 0) {
            imgUrso.src = quadroUrsos[1];
            quadroAtual++;
        } else {
            imgUrso.src = quadroUrsos[2];
            quadroAtual++;
        }

        if (andar >= largura - 200) {
            direcao = 2;
        }

        if (direcao == 1) {
            andar += 10;
        } else {
            andar -= 10;
            if (andar == 0) {
                direcao = 1;
            }
        }
        margem.style.marginLeft = andar + "px";

    }, 40);

}, 1000);

