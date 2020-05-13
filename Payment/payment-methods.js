var payment = {
    title: 'Payment Methods',
    amount: 523462,
    methods: [
        {
            id:'atm',
            name:'ATM',
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
            child: [
                {
                    id:'bri',
                    name: 'BRI',
                    iconUrl: './assets/img/bri.png'
                },{
                    id:'bni',
                    name: 'BNI',
                    iconUrl: './assets/img/bni.png'
                }
            ]
        },
        {
            id:'debit',
            name:'Debit Online',
            child: [
                {
                    id:'bca',
                    name: 'BCA OneKlik',
                    iconUrl: './assets/img/bca.png'
                }
            ]
        },
        {
            id:'wallet',
            name:'Wallet',
            child: [
                {
                    id:'doku',
                    name: 'Doku',
                    iconUrl: './assets/img/doku.png'
                }
            ]
        }
    ]        
};