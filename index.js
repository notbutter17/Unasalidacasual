const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('No tenias de otra, el boton de NO, no funciona, de todas maneras no se a donde ir pero donde sea que estes tu y este yo me siento mas que feliz, porque sabes que adoro todo de ti <3 (la salida la siguiente semana porque ando enfermo, te adorooooo)')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})