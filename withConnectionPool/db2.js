var mysql = require('mysql');

var pool  = mysql.createPool({
      host : "XXX",
      port: "XXX",
      database: "XXX",
      user : "XXX",
      password: "XXX"
});

module.exports = {
    pool
};
