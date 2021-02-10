<?php
namespace core;

require_once __DIR__.'/core/Mailer.php';

header('Content-type: application/json');

$mail = new Mailer(
    'Adriatica', // заголовок письма
    [
      'serioga.genova@gmail.com', // от кого имейл
      'Adriatica', // от кого организация
    ], 
    [
      'romanchykov.serhii@gmail.com', // кому - первый адрес
      //'romanchykov.serhii2@gmail.com', // кому - второй адрес
      // 'romanchykov.serhii3@gmail.com', // кому  - третий адрес и т.д.
    ],
    $_POST['Items'] // массив приходящих элементов заказа
);

if ($mail->send()) {
  $message = 'Данные отправлены!';
  $result = true;
} else {
  $message = 'Ошибка при отправке, повторите попытку!';
  $result = false;
}

echo json_encode(['result' => $result, 'message' => $message]);
	
