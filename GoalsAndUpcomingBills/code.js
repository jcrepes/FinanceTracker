

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
                goal:"Don't Graduate",
                description:'so i hate school',
                deadline:'',
                isdeadline:false,
            },
        ],
        addingNewGoal: false,
        editingGoal:false,
//changed data name
        itemIndex: 0,
// added data for upcoming payments
        addingUpcomingPayment: false,
        editingPayments: false,
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
// added data member
        changeDueDate: false,
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
//        edited method name
        keepGoalIndex: function(goalName) {
            for (var i = 0; i < this.goals.length; i++) {
            } if (goalName==this.goals[i]) {
                this.itemIndex=i;
            }
            return goalName;
        },
//        added method
        keepPaymentIndex: function(billName) {
            for (var i = 0; i < this.bills.length; i++) {
            } if (billName==this.bills[i]) {
                this.itemIndex=i;
            }
            return billName;
        },
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
		saveGoalEdit: function ( goal ) {
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
        getBills: function ( ) {
			fetch( `${ url }/bills` ).then( function ( response ) {
				response.json( ).then( function ( data ) {
					app.bills = data.bills;
				});
			});
		},
        addNewBill: function ( ) {
			var req_body = {
				name: this.new_bill_input
			};
			fetch( `${ url }/bills`, {
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
					app.new_bill_input = "";
					app.getBills( );
				}
			});
        },
        deleteBill: function ( bill ) {
			fetch( `${ url }/bills/${ bill.id }`, {
				method: "DELETE"
			}).then( function ( response ) {
				if ( response.status == 404 ) {
					response.json( ).then( function ( data ) {
						alert( data.msg );
					});
				} else if ( response.status == 204 ) {
					app.getBills( );
				}
			});
        },
		saveBillEdit: function ( bill ) {
			var req_body = {
				name: bill.name
			};
			fetch( `${ url }/bills/${ bill.id }`, {
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
					bill.editing = false;
					app.getBills( );
				}
			});
		},
    },
})