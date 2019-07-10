

var app = new Vue ({
    el: "#app",

    data: {
        page: "home",
        goals: [
            {
                goal:'Graduate',
                description:'',
                deadline:'',
                isdeadline:false,
            },
            {
                goal:'Graduate',
                description:'',
                deadline:'',
                isdeadline:false,
            },
        ],
        bills: [
            {
                billName:'rent',
                category:'',
                dueDate:'09-07-2019',
                decription:'',
                amount:'$100'
            },
            {
                billName:'electricity',
                category:'',
                dueDate:'07-17-2019',
                decription:'',
                amount:'$200'
            },
        ],
    }
})