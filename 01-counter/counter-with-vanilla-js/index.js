let count = 0;

const countHeader = document.querySelector('#count');
const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');

countHeader.innerText = count;

addBtn.addEventListener('click', () => {
    if (count < 10) {
        count++;
        countHeader.innerText = count;
    }
});

subBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        countHeader.innerText = count;
    }
});
