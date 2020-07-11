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
            plans: ['Home', 'About', 'Contact', 'Blog', 'Careers'],

        }
    }   
}

new Vue ({
    el: '#app',
    components: {
        'navbar': NavBarComponent
    }
})