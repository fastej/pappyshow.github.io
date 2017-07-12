<?php
require_once('vendor/autoload.php');

$stripe = array(
  "secret_key"      => "sk_live_VhEksKO55ic2sPmHQrnaG6Cc",
  "publishable_key" => "pk_live_itopHgfvk2VnqXOijZ68CzVm"
);

\Stripe\Stripe::setApiKey($stripe['secret_key']);
?>