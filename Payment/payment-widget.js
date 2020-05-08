var atm = document.getElementById('atm');
var retail = document.getElementById('retail');
var card = document.getElementById('card');
var debit = document.getElementById('debit');
var wallet = document.getElementById('wallet');

var paymentMethodWindow = document.getElementById('paymentMethodWindow');
var atm_window = document.getElementById('atm-window');
var retail_window = document.getElementById('retail-window');
var card_window = document.getElementById('card-window');
var debit_window = document.getElementById('debit-window');
var wallet_window = document.getElementById('wallet-window');

var title = document.querySelector('.title-bar .title');

function setTitle(newTitle){
    title.innerHTML = newTitle;
}

function hidePaymentMethodWindow(){
    paymentMethodWindow.style.width = '0%';
    paymentMethodWindow.style.margin = '0';
}
function showBackButton(){
    document.querySelector('.title-bar .back-button').classList.remove('hidden');
}

function hideBackButton(){
    document.querySelector('.title-bar .back-button').classList.add('hidden');
}

atm.addEventListener('mouseup',()=>{
    atm_window.style.width = '100%';
    hidePaymentMethodWindow();
    setTitle('ATM');
    showBackButton();
});

retail.addEventListener('mouseup',()=>{
    retail_window.style.width = '100%';
    hidePaymentMethodWindow();
    setTitle('Retail');
    showBackButton();
});

card.addEventListener('mouseup', ()=>{
    card_window.style.width = '100%';
    hidePaymentMethodWindow();
    setTitle('Card / Debit');
    showBackButton();
});

debit.addEventListener('mouseup', ()=>{
    debit_window.style.width = '100%';
    hidePaymentMethodWindow();
    setTitle('Debit Online');
    showBackButton();
});

wallet.addEventListener('mouseup', ()=>{
    wallet_window.style.width = '100%';
    hidePaymentMethodWindow();
    setTitle('Wallet');
    showBackButton();
});

function closeWindow(){
    atm_window.style.width = '0';
    retail_window.style.width = '0';
    card_window.style.width = '0';
    debit_window.style.width = '0';
    wallet_window.style.width = '0';
    paymentMethodWindow.style.width = '100%';
    setTitle('Payment Method');
    hideBackButton();
}