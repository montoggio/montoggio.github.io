<?php

namespace core;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class Mailer
{
  public $mailer;

  private $subj;
  private $from;
  private $to;
  private $body;
  private $post;
  
  public function __construct($subj, Array $from, Array $to, Array $post)
  {
    $this->subj = $subj;
    $this->from = $from;
    $this->to = $to;
    $this->post = $post;

    require_once __DIR__.'/../phpmailer/src/PHPMailer.php';
    require_once __DIR__.'/../phpmailer/src/Exception.php';

    $this->init();
  }

  public function send()
  {
    return $this->mailer->send();
  }

  protected function init()
  {
    $this->mailer = new PHPMailer(true);
    $this->mailer->CharSet = 'UTF-8';
    $this->mailer->setLanguage('ru', 'phpmailer/language/');
    $this->mailer->IsHTML(true);
    $this->mailer->setFrom($this->from[0], $this->from[1]);

    $this->setRespondents();

    $this->setBody();
  }

  protected function setRespondents()
  {
    foreach ($this->to as $to)
    {
      $this->mailer->addAddress($to);
    }
  }

  protected function setBody()
  {
    $this->_bodyHeader();
    $this->_bodyTableOpenTag();
    $this->_bodyTableHeader();
    $this->_bodyTableRows();
    $this->_bodyTableCloseTag();

    $this->mailer->Body = $this->body;
  }

  private function _bodyHeader()
  {
    $this->body = '<h1>' . $this->subj . '</h1>';
  }

  private function _bodyTableOpenTag()
  {
    $this->body .='<table border="1" cellpadding="4" cellspacing="0" width="100%">';
  }

  private function _bodyTableHeader()
  {
    $this->body .='
      <tr>
        <td>cod.DOCUMENTO: ord-da prod.</td>
        <th>revisione:2</th>
        <th colspan="2">Del '.date('d.m.Y').'</th>
        <th colspan="2">pagina 1 di /1</th>
      </tr>
      <tr>
        <th>Data ordine</th>
        <th>'.date('d.m.Y').'</th>
        <th colspan="4">Nome di effetua l`ordine: Serhiy Krycko</th>

      </tr>
      <tr>
        <td>Descrizione prodotto</td>
        <th>RAL</th>
        <th>Q.Ta</th>
        <th>Cod.Ns.Articolo</th>
        <th>Fornitore</th>
        <th>Data richiesta Di
          consegna</th>
      </tr>
      ';
  }

  private function _bodyTableRows()
  {
    foreach ($this->post as $item)
    { 
      $this->body .= '
      <tr>
        <th>'.$item['desc'].'</th>
        <th> '.$item['name'].'</th>
        <th> '.$item['quantity'].'</th>
        <th>'.$item['cod'].'</th>
        <th>'.$item['fornitore'].'</th>
        <th>'.$item['datta'].'</th>
      </tr>';
    }
  }

  private function _bodyTableCloseTag()
  {
    $this->body .= '</table>';
  }
}