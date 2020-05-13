var atm = document.getElementById('atm');
var retail = document.getElementById('retail');
var card = document.getElementById('card');
var debit = document.getElementById('debit');
var wallet = document.getElementById('wallet');

var atm_window = document.getElementById('atm-window');
var retail_window = document.getElementById('retail-window');
var card_window = document.getElementById('card-window');
var debit_window = document.getElementById('debit-window');
var wallet_window = document.getElementById('wallet-window');

var paymentMethodWindow = document.getElementById('paymentMethodWindow');
var title = document.querySelector('.title-bar .title');
var nextButton = document.getElementById('nextButton');

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

function SetPaymentMethod(method){
    switch(method){
        case 'atm': ProsesPaymentATM(); break;
        case 'retail': ProsesPaymentRetail(); break;
        case 'card': ProsesPaymentCard(); break;
        case 'debit': ProsesPaymentDebit(); break;
        case 'wallet': ProsesPaymentWallet(); break;
    }
}

function ProsesPaymentATM(){

}

function ProsesPaymentRetail(){
    
}

function ProsesPaymentCard(){
    
}

function ProsesPaymentDebit(){
    
}

function ProsesPaymentWallet(){
    
}

function showChildWindow(window_id){
    var selectedWindow = document.getElementById(window_id);
    selectedWindow.style.width = '100%';
    hidePaymentMethodWindow();
    switch(window_id){
        case 'atm-window': setTitle('ATM'); break;
        case 'retail-window': setTitle('Retail'); break;
        case 'card-window': setTitle('Credit / Debit Card'); break;
        case 'debit-window': setTitle('Debit Online'); break;
        case 'wallet-window': setTitle('Wallet'); break;
        default: setTitle('');
    }
    showBackButton();
}

function backToMainWindow(){
    atm_window.style.width = '0';
    retail_window.style.width = '0';
    card_window.style.width = '0';
    debit_window.style.width = '0';
    wallet_window.style.width = '0';
    paymentMethodWindow.style.width = '100%';
    setTitle('Payment Method');
    hideBackButton();
}

function loadAtmPaymentList(){
    var banks = [
        {
            id : 'bni',
            name: 'Bank Negara Indonesia (BNI)',
            logoUrl: ''
        },{
            id : 'bri',
            name: 'Bank Rakyat Indonesia (BRI)',
            logoUrl: ''
        },{
            id : 'mandiri',
            name: 'Bank Mandiri',
            logoUrl: ''
        }
    ];

    let bankComponent = '';
    banks.forEach(bank=>{
        bankComponent += `<div class="list-item">
                            <input type="radio" id="${bank.id}" name="BankId" value="${bank.id}">
                            <label for="${bank.id}">${bank.name}</label>
                        </div>`
    });
    document.getElementById('atm-bank-list').innerHTML = bankComponent;
}

function loadRetailPaymentList(){
    var retails = [
        {
            id : 'indomaret',
            name: 'Indomaret',
            logoUrl: ''
        },{
            id : 'alfamart',
            name: 'Alfamart',
            logoUrl: ''
        }
    ];

    let retailComponent = '';
    retails.forEach(item=>{
        retailComponent += `<div class="list-item">
                            <input type="radio" id="${item.id}" name="RetailId" value="${item.id}">
                            <label for="${item.id}">${item.name}</label>
                            </div>`
    });
    document.getElementById('retail-list').innerHTML = retailComponent;
}

(function(){
    loadAtmPaymentList();
    loadRetailPaymentList();
})();