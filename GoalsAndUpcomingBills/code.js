

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
        isDeadline: false,
        month: [
            "01","02","03","04","05","06","07","08","09","10","11","12",
        ],
        day: [
            "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31",
        ],
        year: [
            "'19","'20","'21","'22","'23",
        ],
    },
    methods: {
        getGoals: function ( ) {
			fetch( `${ url }/goals` ).then( function ( response ) {
				response.json( ).then( function ( data ) {
					app.goals = data.goals;
				});
			});
		},
        addNewGoal: function ( ) {
			var req_body = {
				name: this.new_goal_input
			};
			fetch( `${ url }/goals`, {
				method: "POST",
				headers: {
					"Content-type": "application/json"
				},
				body: JSON.stringify( req_body )
			}).then( function ( response ) {
				if ( response.status == 400 ) {
					response.json( ).then( function ( data ) {
						alert( data.msg );
					});
				} else if ( response.status == 201 ) {
					app.new_goal_input = "";
					app.getGoals( );
				}
			});
        },
        deleteGoal: function ( goal ) {
			fetch( `${ url }/goals/${ goal.id }`, {
				method: "DELETE"
			}).then( function ( response ) {
				if ( response.status == 404 ) {
					response.json( ).then( function ( data ) {
						alert( data.msg );
					});
				} else if ( response.status == 204 ) {
					app.getGoals( );
				}
			});
        },
		saveGoalName: function ( goal ) {
			var req_body = {
				name: goal.name
			};
			fetch( `${ url }/goals/${ goal.id }`, {
				method: "PUT",
				headers: {
					"Content-type": "application/json"
				},
				body: JSON.stringify( req_body )
			}).then( function ( response ) {
				if ( response.status == 400 || response.status == 404 ) {
					response.json( ).then( function ( data ) {
						alert( data.msg );
					});
				} else if ( response.status == 204 ) {
					goal.editing = false;
					app.getGoals( );
				}
			});
		},
		saveGoalCompleted: function ( goal ) {
			var req_body = {
				completed: !goal.completed
			};
			fetch( `${ url }/goals/${ goal.id }`, {
				method: "PUT",
				headers: {
					"Content-type": "application/json"
				},
				body: JSON.stringify( req_body )
			}).then( function ( response ) {
				if ( response.status == 400 || response.status == 404 ) {
					response.json( ).then( function ( data ) {
						alert( data.msg );
					});
				} else if ( response.status == 204 ) {
					goal.editing = false;
					app.getGoals( );
				}
			});
		},
    },
})