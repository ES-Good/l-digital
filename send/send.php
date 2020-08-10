<?php

$step_1 = $_POST['step_1'];
$step_2 = $_POST['step_2'];
$step_3 = $_POST['step_3'];
$step_4 = $_POST['step_4'];
$step_5 = $_POST['step_5'];
$step_6 = $_POST['step_6'];
$step_7 = $_POST['step_7'];

if(!empty($step_7)){
	$to = 'ldg-marketing@yandex.ru';

	$subject = "Заявка с квиза (Узнайте как получить скидку на сайт)";
			
	$message = "<h3>Данные отправителя:</h3>";
	$message .= "На какую услугу нужны заявки? : <b>" . $step_1 . "</b><br /><br />";
	$message .= "Есть ли у Вас?: <b>" . $step_2 . "</b><br /><br />";
	$message .= "Ваш бюджет в месяц на рекламу? : <b>" . $step_3 . "</b><br /><br />";
	$message .= "Как с Вами связаться?: <b>" . $step_4 . "</b><br /><br />";
	//$message .= "Выберите подарок к заказу за прохождение теста: <b>" . $step_5 . "</b><br /><br />";
	//$message .= "Как с Вы хотите получить стоимость наших услуг?: <b>" . $step_6 . "</b><br /><br />";
	$message .= "Номер телефона: <b>" . $step_7 . "</b><br /><br />";

	$headers = "From: Заявка с квиза (Узнайте как получить скидку на сайт) <info@l-marketing.ru>\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";		
			
	mail($to, $subject, $message, $headers);

	echo 1;
}else{
	echo 0;
}