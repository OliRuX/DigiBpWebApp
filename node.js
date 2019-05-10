
console.log('bacon');
const pg = require('pg');
const connectionString = "postgres://mtqjbarwkwzsld:2b51f440930a3711f9cabf9884d82feda3b70e9b35c9e9fb2d5f6f989fef445a@ec2-54-247-70-127.eu-west-1.compute.amazonaws.com:5432/dd786fen583a5s?ssl=true";
const pgClient = new pg.Client(connectionString);
pgClient.connect();
console.log("connected");

 const query = pgClient.query("SELECT c_firstname as fn from Customer where c_id=2001");

    query.on("row", function(row){

        console.log(row.name);

    });
console.log('bacon');