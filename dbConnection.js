
function prepareConnection(){
    var Pool = require('pg').Pool;
    var config = {
        host: 'ec2-54-247-70-127.eu-west-1.compute.amazonaws.com',
        user:'mtqjbarwkwzsld',
        password:'2b51f440930a3711f9cabf9884d82feda3b70e9b35c9e9fb2d5f6f989fef445a',
        database: 'dd786fen583a5s',
        ssl: true
    };

    var pool = new Pool(config);
    return pool;
}

async function get_items(){
        var response = await prepareConnection().query("select * from customer ORDER BY c_id desc");
        console.log(response.rows);
        return response.rows;
}
 async function get_IDAndIncrease(){
    var highestCustomerID = await prepareConnection().query({
            rowMode: 'array',
            text: "select c_id from customer ORDER BY c_id desc"
    });

    var newID =parseInt(highestCustomerID.rows[0])+ 1;
    console.log(newID);
    trading = newID;
    return newID;
}

/*    async function addCustomertoDB(fname, lname, email, street, housenumber, postcode, city){
        pool.query
    }

*/
   /* async function addCustomer(varchar(45) cfn,var cln, var cemail, var cstreet, var chnumber, var cpostcode, var ccity ){
        var response = await pool.query("select * from customer");
    console.log(response.rows);
    }*/

   get_IDAndIncrease(2);
   get_items();