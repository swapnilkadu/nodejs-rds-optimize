"use strict";
var db = require('./db');

exports.handler = (event, context, callback) => {

	db.connect(function (conn) {
		if (conn == null) {
    		console.log("Database connection failed: ");
    		callback("Error", "Database connection failed");
		} else {
						console.log('Connected to database.');
						
						conn.query("INSERT INTO employee(name,salary) VALUE(?,?)",['Joe',8000], function(err,res){
			    if(err) throw err;
							else {
			    		console.log('A new employee has been added.');
							}
			   });
						
						// db.getConnection().end();
						callback(null, "Database connection done");
		}
	});
};
