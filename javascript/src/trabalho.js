let number = [];
let i = 0;
let n;

const result = document.getElementById('result');
const spin = document.getElementById('spin');

function submit() {
    n = document.getElementById('number').value;
    n != "" && !isNaN(n) ? loading() : alert('Digite um número!');
}

function loading() {
    spin.style.display = "block";
    setTimeout(calc, 700);
}

function calc() {
    spin.style.display = "none";
    number[i] = Math.pow(n, 3);
    result.innerHTML += '<h4><span class="badge badge-primary">' + n + '^3 = ' + number[i] + '</span></h4>';
    i++;
    document.getElementById('indice').innerHTML = (i + 1);
    document.getElementById('number').value = "";
    //console.log(number);
}
