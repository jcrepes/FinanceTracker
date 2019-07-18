getCategories: function() {
            fetch(this.server_url+"/categories").then(function(res) {
                res.json().then(function(data) {
                    console.log(data);
                    app.categories = data.categories;
                });
            });
        },
//possible way to organize data:
categories: [
    food, car, rent, fun, shopping,

],
    // make sure budget list is same length as categories list
budgets: [
    100,200,500,300,400
],
    //should also be same length
totalSpentinCategory: [
    50,30,40,20,35
],
    //should also be the same length
listCategorySpending: [
    [
        10,50,6040,60,70
    ],
    [
        30
    ],
    [
        40,50,60,8
    ],
    [
        100,30
    ],
    [
        70,80,93
    ]
]
// if all of our lists are the same length we can create a functikno that will loop through all of the lists and match the indexes together so that the correct info goes with each category. 
//added more possible server functions
getBudgets: function() {
            fetch(this.server_url+"/budgets").then(function(res) {
                res.json().then(function(data) {
                    console.log(data);
                    app.budgets = data.budgets;
                });
            });
        },
getTotals: function() {
            fetch(this.server_url+"/totals").then(function(res) {
                res.json().then(function(data) {
                    console.log(data);
                    app.totals = data.totals;
                });
            });
        },
getCategorySpending: function() {
            fetch(this.server_url+"/spending").then(function(res) {
                res.json().then(function(data) {
                    console.log(data);
                    app.spending = data.spending;
                });
            });
        },
//getCategoryInfo: function() {
//    for (var i = 0; i < this.categories.length; i++) {
//            } return [this.categories[i], this.budgets[i], this.totalSpentinCategory[i], this.listCategorySpending[i]];
//}
totalSpendinginCategory: function(categoryIndex):
    var total=0
    for (var i = 0; i < this.listCategorySpending[categoryIndex].length; i++) {
        } total+=this.listCategorySpending[categoryIndex][i]
}  return total
