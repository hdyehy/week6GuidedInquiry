const btnR = document.getElementById('colorChange');
const btnW = document.getElementById('colorChange0');
const bod = document.getElementById('bod');

btnR.addEventListener('click' ,function colorRed(){
    bod.style.backgroundColor = 'red';
});

btnW.addEventListener('click' ,function colorRed(){
    bod.style.backgroundColor = 'white';
});
