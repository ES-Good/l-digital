<?php

$name = $_POST['name'];
$phone = $_POST['phone'];

if(!empty($phone)){
	$to = 'ldg-marketing@yandex.ru';

	$subject = "Заявка на бесплатную консультацию";
			
	$message = "<h3>Данные отправителя:</h3>";
	$message .= "Имя: <b>" . $name . "</b><br /><br />";
	$message .= "Телефон: <b>" . $phone . "</b><br /><br />";

	$headers = "From: Заявка на бесплатную консультацию <info@l-marketing.ru>\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";		
			
	mail($to, $subject, $message, $headers);

	echo 1;
}else{
	echo 0;
}