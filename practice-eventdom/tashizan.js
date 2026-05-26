function greeting(){
    let i1 = document.querySelector('input[name="left"]');
    let i2 = document.querySelector('input[name="right"]');
    let left = Number(i1.value);
    let right = Number(i2.value);
    let sum = left + right;
    let span = document.querySelector('span#answer');
    span.textContent = sum;
}

let b = document.querySelector('button#calc');
b.addEventListener('click', greeting);