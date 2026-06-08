const btnMulaiGratis = document.querySelector('#cta-button');
const clickedMessage = document.querySelector('#clicked-message');
const thankYouMessage = document.querySelector('#thank-you-message');

let counter = 0;

btnMulaiGratis.addEventListener('click', () => {

    //TODO: Action
    counter++;

    if (counter === 1) {
        console.log('clicked');
        clickedMessage.classList.remove('hidden');
    } else if (counter === 2) {
        console.log('off');
        thankYouMessage.classList.remove('hidden');
        btnMulaiGratis.disabled = true;
        btnMulaiGratis.classList.add('hidden');
    }
});