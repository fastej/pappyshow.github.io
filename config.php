<?php
require_once('vendor/autoload.php');

$stripe = array(
  "secret_key"      => "sk_test_FIGv7KGDcVruL4PMvqQyWgkA",
  "publishable_key" => "pk_test_8dF8LMXDYK7FMSomqQTutxKo"
);

\Stripe\Stripe::setApiKey($stripe['secret_key']);
?>


<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
</head>

<body>
</body>
</html>