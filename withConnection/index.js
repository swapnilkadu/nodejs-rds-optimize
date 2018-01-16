"use strict";
var db = require('./db');

exports.handler = (event, context, callback) => {

	// Callback is not going to wait for Empty Event loop.
	// This is the key :-)
	context.callbackWaitsForEmptyEventLoop = false;

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

			// If we end the connection, we will not get the connection for reuse.
			// Look at logs. 
			// db.getConnection().end();
			
			callback(null, "Database connection done");
		}
	});
};
