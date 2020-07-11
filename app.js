let PlanComponent = {
    template: '#nav-menu-template',
    props: {
        name: {
            type: String,
            required: true
        }
   }
}

let PlanPickerComponent = {
    template: '#navbar-template',
    components: {
        'nav-element': PlanComponent
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
        'navbar': PlanPickerComponent
    }
})