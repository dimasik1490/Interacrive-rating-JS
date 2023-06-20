const mainContainer = document.querySelector('.main-container');
const thankYouContainer = document.querySelector('.thank-you');
const buttons = document.querySelectorAll('.btn');
const submitButton = document.getElementById('submit');
const rateAgain = document.getElementById('rate-again')
const rating = document.querySelector('.rating')

submitButton.addEventListener('click', ()=>{
    thankYouContainer.classList.toggle('hidden');
    mainContainer.classList.toggle('hidden');
});

rateAgain.addEventListener('click', ()=>{
    thankYouContainer.classList.toggle('hidden');
    mainContainer.classList.toggle('hidden');
});

buttons.forEach(btn => {
    btn.addEventListener('click', ()=>{
        rating.innerHTML = btn.innerHTML;
    })
});
