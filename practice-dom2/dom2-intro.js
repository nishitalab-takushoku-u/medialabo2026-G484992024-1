function changeDom() {
// 要素の新規作成
let l = document.createElement('li');
l.textContent = 'ヨット';
let u = document.querySelector('ul#kazoeuta');
u.insertAdjacentElement('beforeend', l);

// 属性の変更
let i = document.querySelector('img#bluemoon');
i.setAttribute('src', 'bluemoon.jpg');

let a = document.createElement('a');
a.textContent = '拓殖大学HP';
a.setAttribute('href', 'https://www.takushoku-u.ac.jp');
let p = document.querySelector('p#takudai');
p.insertAdjacentElement('afterend', a);
l = document.querySelector('li#mochi');

// 要素の削除
l.remove();
u = document.querySelector('ul#kassen');
u.remove();
u = document.createElement('ul');

// 複雑な新規要素の作成
l = document.createElement('li');
l.textContent = '赤';
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');
l.textContent = '緑';
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');
l.textContent = '青';
u.insertAdjacentElement('beforeend', l);
p = document.querySelector('p#primary');
p.insertAdjacentElement('afterend', u);
}

let b = document.querySelector('button#henkou');
b.addEventListener('click', changeDom);
