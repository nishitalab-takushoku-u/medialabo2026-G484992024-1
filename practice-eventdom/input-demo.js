/*function greeting(){
    console.log('こんにちは');
}

let b = document.querySelector('button#print');
b.addEventListener('click', greeting);*/

function greeting(){
    let i = document.querySelector('input[name="shimei"]');
    let shimei = i.value;
    let aisatsu = 'こんにちは、' + shimei + 'さん'
    console.log(aisatsu);
    let p = document.querySelector('p#message');
    p.textContent = aisatsu;
}
let b = document.querySelector('button#print');
b.addEventListener('click', greeting);