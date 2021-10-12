<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$phone = $_POST['phone'];

$title = 'Заявка с сайта BootGrad';
$body = "
		<h2>Данные для обратной связи</h2>
		<b>Телефон:</b> $phone<br>
		";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
	$mail->isSMTP();
	$mail->CharSet = "UTF-8";
	$mail->SMTPAuth   = true;
	$mail->SMTPDebug = 2;
	$mail->Debugoutput = function ($str, $level) {
		$GLOBALS['status'][] = $str;
	};

	// Настройки вашей почты
	$mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
	include 'logpass.php';
	$mail->SMTPSecure = 'ssl';
	$mail->Port       = 465;
	$mail->setFrom('xxxxxxxxx@gmail.com', 'Иван Иванов'); // Адрес самой почты и имя отправителя

	// Получатель письма
	$mail->addAddress('имя почты получателя');

	// Отправка сообщения
	$mail->isHTML(true);
	$mail->Subject = $title;
	$mail->Body = $body;

	// Проверяем отправленность сообщения
	if ($mail->send()) {
		$result = "success";
	} else {
		$result = "error";
	}
} catch (Exception $e) {
	$result = "error";
	$status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('location: success.html');
