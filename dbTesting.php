
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>New Page</title>
</head>
<body>

    <h1> DigiBp Morcote - elegant design 2</h1>

    <?php

        echo "DB Testing Started!";

       $host        = "host = ec2-54-247-70-127.eu-west-1.compute.amazonaws.com";
       $port        = "port = 5432";
       $dbname      = "dbname = dd786fen583a5s";
       $credentials = "user = mtqjbarwkwzsld password=2b51f440930a3711f9cabf9884d82feda3b70e9b35c9e9fb2d5f6f989fef445a";

       $db = pg_connect( "$host $port $dbname $credentials"  );
       if(!$db) {
          echo "Error : Unable to open database\n";
       } else {
          echo "Opened database successfully\n";
       }
    ?>

</body>
</html>
