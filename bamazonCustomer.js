// create global variables
var fs = require("fs");
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database.

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Rabbit12",
    database: "bamazon_db"
  });

// Establish connection to mySQL server & database.

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
    afterConnection()
});

// Print contents of bamazon database.

function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log("");
        console.log("============================== Our Products ===============================");
        console.log("");

        for (i=0; i < res.length; i++){
            console.log(res[i].item_id + ". "  + res[i].product_name + ", " + "Department: " + res[i].department_name + ", " + "Price: " + "$" + res[i].price + ", " + "Current Stock: " + res[i].stock_quantity);
        } 

        console.log("");
        console.log("=============================================================================");
        console.log("");

       order()
    })
}

// Use Inquirer to query customer as to what product they would like to order & what quantity.

function order() {
    // query the database for all items in stock
    connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;

    inquirer
        .prompt([
            {
                name: "choice",
                type: "rawlist",
                choices: function() {
                    var choiceArray = [];
                    for (var i = 0; i < results.length; i++) {
                        choiceArray.push(results[i].product_name);
                    }
                    return choiceArray;
                },
                message: "What item would you like to purchase?"
            },
            {
                name: "purchase",
                type: "input",
                message: "How many would you like to purchase?"
            }
        ])

        // .then(function(answer) {
        //     var chosenItem;
        //     for (var i = 0; i , results.length; i++) {
        //         if (results[i].product_name === answer.choice) {
        //             chosenItem = results[i];
        //         }
        //     }
        // })

        


    
    });
}


