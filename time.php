<?php
$d1 = new DateTime;
$d1->setTimezone(new DateTimezone("Asia/Seoul"));
echo $d1->format('H:i:s');
?>