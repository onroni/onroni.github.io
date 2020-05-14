var payment = {
    title: 'Payment Methods',
    amount: 523462,
    methods: [
        {
            id:'atm',
            name:'ATM',
            laIcon: 'la la-exchange-alt',
            child: [
                {
                    id:'BRI',
                    name: 'BRI',
                    iconUrl: './assets/img/bri.png'
                },{
                    id:'BNI',
                    name: 'BNI',
                    iconUrl: './assets/img/bni.png'
                },{
                    id:'MANDIRI',
                    name: 'MANDIRI',
                    iconUrl: './assets/img/mandiri.png'
                }
            ]
        },
        {
            id:'retail',
            name:'Retail',
            laIcon: 'la la-store',
            child: [
                {
                    id:'alfamart',
                    name: 'Alfamart',
                    iconUrl: './assets/img/alfamart.png'
                },{
                    id:'indomaret',
                    name: 'Indomaret',
                    iconUrl: './assets/img/indomaret.png'
                }
            ]
        },
        {
            id:'card',
            name:'Debit / Credit Card',
            laIcon: 'la la-credit-card',
            child: []
        },
        {
            id:'debit',
            name:'Debit Online',
            laIcon: 'la la-mobile',
            child: [
                {
                    id:'bca',
                    name: 'BCA OneKlik',
                    iconUrl: './assets/img/oneklik.png'
                }
            ]
        },
        {
            id:'wallet',
            name:'Wallet',
            laIcon: 'la la-wallet',
            child: [
                {
                    id:'ovo',
                    name: 'OVO',
                    iconUrl: './assets/img/ovo.jpeg'
                },
                {
                    id:'linkaja',
                    name: 'Link Aja',
                    iconUrl: './assets/img/linkaja.png'
                }
            ]
        }
    ]        
};