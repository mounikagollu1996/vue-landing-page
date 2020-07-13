
let NavMobileComponent = {
    template: '#nav-mobile',
    data() {
        return {
            menu: ['Home', 'About', 'Contact', 'Blog', 'Careers'],
            showNav: false,
            hidden: true
        }
    }
}

let FooterComponent = {
    template: '#landing-footer',
    data() {
        return {
            logo: './images/logo.svg',
            socialmedia: ['./images/icon-facebook.svg', './images/icon-twitter.svg','./images/icon-youtube.svg','./images/icon-pinterest.svg','./images/icon-instagram.svg'],
            menuone: ['About', 'Contact', 'Blog'],
            menutwo: ['careers', 'support', 'privacy policy']
        }
    }
}

let ArticleCardComponent = {
    template: '#article-card',
    props: {
        card: {
            type: Object,
            required: true
        }
    }
}

let ArticleComponent = {
    template: '#articles',
    components: {
        'article-card': ArticleCardComponent
    },
    data() {
        return {
            heading: 'Latest Articles',
            cards: [
                {
                    img: './images/image-currency.jpg',
                    title: 'Receive money in any currency with no fees',
                    subtitle: 'The world is getting smaller and we are becoming more mobile. So why should you be forced to only receive money in a single..',
                },
                {
                    img: './images/image-restaurant.jpg',
                    title: 'Treat yourself without worrying about money',
                    subtitle: 'Our simple budgeting feature allows you to separate out our spending and set realstic limits each month.That means you..'
                },
                {
                    img: './images/image-plane.jpg',
                    title: 'Take your Easybank card wherever you go',
                    subtitle: 'We want you to enjoy your travels.This is why we dont charge any fees on purchases while you are abroad. We will even show you..'
                },
                {
                    img: './images/image-confetti.jpg',
                    title: 'Our invite-only Beta accounts are now live!',
                    subtitle: 'After a lot of hardwork by the whole team,we are excited to launch our closed beta. It is easy to request an invite through the site...'
                }
            ]
        }
    }
}

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
            title: 'Why choose Easybank?',
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
            description: 'Take your financial life online.Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.',
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
            button: 'Request Invite',
        }
    }   
}

new Vue ({
    el: '#app',
    components: {
        navbar: NavBarComponent,
        'digital-banking': DigitalBankingComponent,
        benefits: BenefitComponent,
        articles: ArticleComponent,
        'landing-footer': FooterComponent,
        'navigation-mobile': NavMobileComponent
    },
    data() {
        return {
            mobileView: true,
            showNav: false
        }
    },
    methods: {
        handleView() {
            this.mobileView = window.innerWidth <= 990;
        }
    },
    created() {
        this.handleView();
    }
})