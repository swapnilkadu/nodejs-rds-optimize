"use strict";
var mysqlPool = require('./db2').pool;

exports.handler = (event, context, callback) => {
		mysqlPool.getConnection(function(err, conn){

				conn.query("select * from employee", function(err, rows) {
						if(err) callback("Error", "Database connection failed");
						callback(null, rows);
				});
				
		});		
};
