// create global variables
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Rabbit12",
    database: "bamazon_db"
  });

// Establish connection to mySQL server & database

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
    afterConnection()
});

// Print contents of bamazon database

function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log("=================== Our Products ===================");
        //console.log(/b)

        for (i=0; i < res.length; i++){
            console.log(res[i].item_id + ". "  + res[i].product_name + " " + "Department: " + res[i].department_name + " " + "$" + res[i].price + " " + "Current Stock: " + res[i].stock_quantity);
//            connection.end();
        }
        
    })

}


