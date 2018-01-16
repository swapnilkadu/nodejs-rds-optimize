"use strict";
var mysqlPool = require('./db2').pool;

exports.handler = (event, context, callback) => {

	// Callback is not going to wait for Empty Event loop.
	// This is the key :-)
	context.callbackWaitsForEmptyEventLoop = false;

	mysqlPool.getConnection(function(err, conn){
		if(err) callback("ERROR");
		
		conn.query("select * from employee", function(err, rows) {
			if(err) callback("Error", "Database connection failed");
			
			conn.release(true);		// now this look good :-)
			callback(null, rows);
		});			
	});		
};
