let cartButton = document.querySelector('#card_button');
let closemodalWindowBtn = document.querySelector('#close_modal');
let modalWindow = document.querySelector('#modal');

cartButton.addEventListener('click', function() {
    toggleMod();
})
closemodalWindowBtn.addEventListener('click', function() {
    toggleMod();
})

function toggleMod() {
    modalWindow.classList.toggle('is_open');
}
new WOW().init()