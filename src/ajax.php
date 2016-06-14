<?php
    $subject = 'Заявка с сайта karamba.by/savline ';
    $mess = '';
    $mess .= '<hr>';
    if(isset($_POST['info'])) {
        $subject = $_POST['info'];
    }
    if(isset($_POST['leatherette'])) {
        $leather = substr(htmlspecialchars(trim($_POST['leatherette'])), 0, 100);
        $mess .= '<b>Искуственная кожа:</b> ' . $leather . '<br>';
    }
    if(isset($_POST['dsp'])) {
        $dsps = substr(htmlspecialchars(trim($_POST['dsp'])), 0, 100);
        $mess .= '<b>ДСП :</b> ' . $dsps . '<br>';
    }
    if(isset($_POST['nozki'])) {
        $nozki = substr(htmlspecialchars(trim($_POST['nozki'])), 0, 100);
        $mess .= '<b>Ножки :</b> ' . $nozki . '<br>';
    }
    if(isset($_POST['size'])) {
        $size = substr(htmlspecialchars(trim($_POST['size'])), 0, 100);
        $mess .= '<b>Размер :</b> ' . $size . '<br>';
    }
    if(isset($_POST['chair'])) {
        $chair = substr(htmlspecialchars(trim($_POST['chair'])), 0, 100);
        $mess .= '<b>Подходящие стулья :</b> ' . $chair . '<br>';
    }



    if(isset($_POST['contact_name'])) {
        $name = substr(htmlspecialchars(trim($_POST['contact_name'])), 0, 100);
        $mess .= '<b>Имя:</b> ' . $name . '<br>';
    }
    if(isset($_POST['contact_tel'])) {
        $tel = substr(htmlspecialchars(trim($_POST['contact_tel'])), 0, 100);
        $mess .= '<b>Телефон:</b> ' . $tel . '<br>';
    }
    if(isset($_POST['contact_email'])) {
        $mail = substr(htmlspecialchars(trim($_POST['contact_email'])), 0, 100);
        $mess .= '<b>Почта:</b> ' . $mail . '<br>';
    }
    $mess .= '<hr>';
    // подключаем файл класса для отправки почты
    require 'class.phpmailer.php';

    $mail = new PHPMailer();
    $mail->AddAddress('radion91@gmail.com','');   // кому - адрес, Имя
    $mail->IsHTML(true);                        // выставляем формат письма HTML
    $mail->Subject = $subject; // тема письма
    $mail->CharSet = "UTF-8";                   // кодировка
    $mail->Body = $mess;
    if(isset($_FILES['file'])) {
            if($_FILES['file']['error'] == 0){
            $mail->AddAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
        }
    }
    // отправляем наше письмо
    if (!$mail->Send()){
        die ('Mailer Error: ' . $mail->ErrorInfo);
    }else{
        echo 'true';
    }?>