"use strict"

// send for to email /////////////////////////////////////////////////////////////
const form = document.getElementById('form');
form.addEventListener('submit', formSend);

function formSend(e) {
  e.preventDefault();

  let postItems = [];

  let formGroup = wrapperPopunOutName_Quantity.querySelectorAll('.formGroup');

  for (let i = 0; i < formGroup.length; i++) {

    let descItem = formGroup[i].querySelector('.descItem').textContent.replace(/\s+/g, ' ').trim();
    // descItem.replace(/\s+/g, ' ').trim()
    console.log(descItem);
    let nameItem = formGroup[i].querySelector('.nameItem').textContent.replace(/\s+/g, ' ').trim();
    console.log(nameItem);
    let quantityItem = formGroup[i].querySelector('.quantityItem>input').value.replace(/\s+/g, ' ').trim();
    console.log(quantityItem);
    let codArtic = formGroup[i].querySelector('.codArtic').textContent.replace(/\s+/g, ' ').trim();
    console.log(codArtic);
    let fornitore = formGroup[i].querySelector('.nameDistributore').textContent.replace(/\s+/g, ' ').trim();
    console.log(fornitore);
    let datta = formGroup[i].querySelector('.datta').textContent.replace(/\s+/g, ' ').trim();
    console.log(datta);

    postItems.push({ desc: descItem, name: nameItem, quantity: quantityItem, cod: codArtic, fornitore: fornitore, datta: datta });
  }

  $.ajax({
    url: 'sendmail.php',
    type: 'POST',
    data: {
      Items: postItems,
    }, success: function (data) {

      alert(data.message);

      // здесь добавляем логику работы с формой заказа в зависимости от
      // флагa data.result (true | false)
    }
  })

}
// send for to email //////////////////     END      ///////////////////////////////////////////

