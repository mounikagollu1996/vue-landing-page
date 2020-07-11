
let cardComponent = {
    template: '#card',
    props: {
        card: {
            type: Object,
            required: true
        }
    }
}

let BenefitComponent = {
    template: '#benefits',
    components: {
        card: cardComponent
    },
    data() {
        return {
            title: 'Why choose Esybank?',
            subtitle: 'We leverage open Banking to turn your bank account into your financial hub, Control your finances like never before',
            cards: [
                {
                    img: './images/icon-online.svg',
                    title: 'Online Banking',
                    description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
                },
                {
                    img: './images/icon-budgeting.svg',
                    title: 'Simple Budgeting',
                    description: 'See exactly where your money goes each month.Receive notifications when you are close to hitting your limits.'
                },
                {
                    img: './images/icon-onboarding.svg',
                    title: 'Fast Onboarding',
                    description: 'We dont do branches, Open your account in minutes online and start taking control of your finances right away.'
                },
                {
                    img: './images/icon-api.svg',
                    title: 'Open API',
                    description: 'Manage your savings, investments,pension, and much more from one account. Tracking your money has never been easier.'
                }
            ]
        }
    }
}

let DigitalBankingComponent = {
    template: '#digital-banking',
    data() {
        return {
            title: 'Next generation digital banking',
            description: 'Take your financial life online.Your Easybank account will be a one-stop-shop for spending,saving,budgeting,investing and much more.',
            button: 'Request Invite'
        }
    }

}

let NavMenuComponent = {
    template: '#nav-menu-template',
    props: {
        name: {
            type: String,
            required: true
        }
   }
}

let NavBarComponent = {
    template: '#navbar-template',
    components: {
        'nav-element': NavMenuComponent
    },
    data() {
        return {
            menu: ['Home', 'About', 'Contact', 'Blog', 'Careers'],
            button: 'Request Invite'
        }
    }   
}

new Vue ({
    el: '#app',
    components: {
        'navbar': NavBarComponent,
        'digital-banking': DigitalBankingComponent,
        'benefits': BenefitComponent
    }
})