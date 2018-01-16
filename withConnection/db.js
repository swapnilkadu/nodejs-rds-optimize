"use strict";

var mysql = require("mysql");
var connection;

exports.connect = function (callback) {

  if(connection) {
    console.log("connection reused...");
    callback(connection);
  } else {

    var conn = mysql.createConnection({
      host : "XXX",
      port: "XXX",
      database: "XXX",
      user : "XXX",
      password: "XXX"
    });

    conn.connect(function (err) {
      if (!err) {
        connection = conn;
        callback(connection);
      } else {
        console.log("Error occured while creating connection: ");
        callback(null);
      }
    });
  }
};

exports.getConnection = function () {
  return connection;
};
