<?php
  require_once('./config.php');

  $token  = $_POST['stripeToken'];

  $customer = \Stripe\Customer::create(array(
      'email' => $_POST['stripeEmail'],
      'source'  => $token
  ));

  $charge = \Stripe\Charge::create(array(
      'customer' => $customer->id,
      'amount'   => 1200,
      'currency' => 'gbp'
  ));

  echo '<h1>Payment successful.</h1>';
?>

<script type="text/javascript">
	setTimeout(function () {
   window.location.href = "booking.html";
}, 2000);
</script>