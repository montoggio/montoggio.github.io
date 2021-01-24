let burger = document.querySelector('.burger');
let nav = document.querySelector('nav');
let main = document.querySelector('main');
let checkout = document.querySelector('.checkout ')
let clearOrder = document.querySelector('.clearOrder ')
// console.log(checkout)
burger.onclick = function () {
  let toOrder = document.querySelectorAll('.toOrder') //proverca na vibrannie pozizii
  this.classList.toggle('burger_activ');
  if (this.classList.contains('burger_activ')) {
    // console.log('ok')
    nav.classList.toggle('open_menu');
    main.classList.toggle('blur5');
  } else {
    nav.classList.toggle('open_menu');
    main.classList.toggle('blur5');
  }
  //proverca na vibrannie pozizii
  let toOrderNum = '';
  for (let i = 0; i < toOrder.length; i++) {
    toOrderNum += toOrder[i].textContent
    // console.log(i + ' ' + toOrder[i])
    // console.log(toOrderNum)
    toOrderNum = +toOrderNum
    toOrderNum = parseInt(toOrderNum)


  }
  // console.log(toOrderNum)
  if (toOrderNum > 0) {

    checkout.classList.remove('hidden')
    clearOrder.classList.remove('hidden')
    clearOrder.onclick = function () {
      for (let i = 0; i < toOrder.length; i++) {
        toOrder[i].innerHTML = '0';
      }
      checkout.classList.add('hidden')
    }
  } else {
    checkout.classList.add('hidden')
    clearOrder.classList.add('hidden')

  }
  // console.log(toOrderNum)
}



// open form checout
let wrapperPopunOutName_Quantity = document.querySelector('.wrapperPopunOutName_Quantity')
checkout.onclick = function () {

  if (wrapperPopupMenu.classList.contains('closed')) {
    let toOrder = document.querySelectorAll('.toOrder')
    wrapperPopupMenu.classList.remove('closed');
    burger.classList.toggle('burger_activ')
    nav.classList.toggle('open_menu');

    for (let i = 0; i < toOrder.length; i++) {
      let toOrderNum = '';
      toOrderNum += toOrder[i].textContent
      toOrderNum = +toOrderNum
      toOrderNum = parseInt(toOrderNum)
      // console.log(toOrderNum)
      if (toOrderNum > 0) {
        let quantity = toOrder[i].textContent
        // console.log(quantity)
        let ralName = toOrder[i].parentNode.parentNode
        let ralNum = toOrder[i].parentNode.parentNode
        let ralDesc = toOrder[i].parentNode.parentNode

        // console.log(ralName)
        ralName = ralName.querySelector('.desc .ralNumber').childNodes[0].textContent
        // console.log(ralName)
        ralNum = ralNum.querySelector('.desc .ralNumber').childNodes[1].textContent
        // console.log(ralNum)
        ralDesc = ralDesc.querySelector('.desc .ralDesc').childNodes[0].textContent
        // console.log(ralDesc)


        let outItem = '';

        outItem += ' <div class="formGroup">';
        outItem += '  <div class="descItem">';
        outItem += '    ' + ralDesc + '';
        outItem += '  </div>';
        outItem += '  <div class="nameItem">';
        outItem += '   ' + ralName + '  ' + ralNum + '';
        outItem += '  </div>';
        outItem += '  <div class="quantityItem">';
        outItem += '   <input type="number" value="' + toOrder[i].textContent + '">';
        outItem += '  </div>';
        outItem += '  <button class="removeItem">X</button>';
        outItem += '</div>';


        wrapperPopunOutName_Quantity.innerHTML += outItem;
      }


    }
    wrapperPopunOutName_Quantity.innerHTML += '<button type="submit" class="buttonPopupMenuChec">Оформить заказ</button>';


  } else {
    wrapperPopupMenu.classList.add('closed');

  }


  // remove order position
  let removeItem = document.querySelectorAll('.removeItem')
  for (let i = 0; i < removeItem.length; i++) {
    removeItem[i].onclick = function () {
      let closed = this.parentNode

      // console.log(wrapperPopunOutName_Quantity.length)
      if (wrapperPopunOutName_Quantity.length == 3) {

        let buttonPopupMenuChec = document.querySelector('.buttonPopupMenuChec');
        buttonPopupMenuChec.remove()
      }
      closed.remove()
    }

    // console.log(removeItem)
  }
  // remove order position end



}



// closed checout form
let buttonPopupMenuExit = document.querySelector('.buttonPopupMenuExit')
buttonPopupMenuExit.onclick = function () {
  wrapperPopunOutName_Quantity.innerHTML = '';
  wrapperPopupMenu.classList.add('closed');
  main.classList.remove('blur5');
}
// closed form checout end


// open form checout end


// dobaablenie tovara //////////////////////////////////

$(document).ready(function () {
  $("section").on('click', '.btnMo', function () {
    $(this).parent().find(".toOrder").css({ "opacity": "1", "visibility": "visible" });
    var toOrder = $(this).parent().find(".toOrder").text();

    var toOrderCont = '';
    toOrderCont = +toOrder + 1;

    $(this).parent().find(".toOrder").html(toOrderCont)
    // console.log(toOrderCont)

  })
  $("section").on('click', '.btnMeno', function () {
    var toOrder = $(this).parent().find(".toOrder").text();
    var toOrderCont = '';

    if (toOrder == 0) {
      toOrderCont = +toOrder;
      $(this).parent().find(".toOrder").css({ "opacity": "0", "visibility": "hidden" })
      // console.log('ok')

    } else if (toOrder > 0) {
      toOrderCont = +toOrder - 1;
      $(this).parent().find(".toOrder").html(toOrderCont)

    }

    // console.log(toOrderCont)

  })

  // menu delei
  $("menu>nav>ul>li>span>a").on('click', function (e) {
    // e.preventDefault();

    var linck = $(this)
    setTimeout(function () {
      linck.toggleClass("ok")
      // Something you want delayed.
      $(".burger").toggleClass("burger_activ");
      $("nav").toggleClass("open_menu");
      $("main").toggleClass("blur5");
      // $("body").toggleClass("overflowY");
    }, 500);
  })

  // menu delei end
})
// dobaablenie tovara end ====/////////////////////////////////


// ////////////////////////RAL masiv///////////////////////////

let ral1000All = [1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1023, 1024, 1027, 1028, 1032, 1033, 1034];
let ral2000All = [2000, 2001, 2002, 2003, 2004, 2008, 2009, 2010, 2011, 2012];
let ral3000All = [3000, 3001, 3002, 3003, 3004, 3005, 3007, 3009, 3011, 3012, 3013, 3014, 3015, 3016, 3017, 3018, 3020, 3022, 3027, 3031];
let ral4000All = [4001, 4002, 4003, 4004, 4005, 4006, 4007, 4008, 4009, 4010];
let ral5000All = [5000, 5001, 5002, 5003, 5004, 5005, 5007, 5008, 5009, 5010, 5011, 5012, 5013, 5014, 5015, 5017, 5018, 5019, 5020, 5021, 5022, 5023, 5024];
let ral6000All = [6000, 6001, 6002, 6003, 6004, 6005, 6006, 6007, 6008, 6009, 6010, 6011, 6012, 6013, 6014, 6015, 6015, 6017, 6018, 6019, 6020, 6021, 6020, 6022, 6024, 6025, 6026, 6027, 6028, 6029, 6032, 6033, 6034];
let ral7000All = [7000, 7001, 7002, 7003, 7004, 7005, 7006, 7008, 7009, 7010, 7011, 7012, 7013, 7015, 7016, 7021, 7022, 7023, 7024, 7026, 7030, 7031, 7032, 7033, 7034, 7035, 7036, 7037, 7038, 7039, 7040, 7042, 7043, 7044, 7045, 7046, 7047,];
let ral8000All = [8000, 8001, 8002, 8003, 8004, 8007, 8008, 8011, 8012, 8014, 8015, 8016, 8017, 8019, 8022, 8023, 8024, 8025, 8028];
let ral9000All = [9001, 9002, 9003, 9004, 9005, 9006, 9007, 9010, 9011, 9016, 9017, 9018];

// console.log(ral1000All)
// ////////////////////////RAL masiv   END  ///////////////////////////


// doballeni vibranogo RAL /////////////////
let CBoxral = document.querySelectorAll('.CBoxral');
let wrapperPopupMenu = document.querySelector('.wrapperPopupMenu');
for (let i = 0; i < CBoxral.length; i++) {
  CBoxral[i].onclick = function () {
    console.log(CBoxral[i])
    let dataRal = CBoxral[i].dataset.ral
    dataRal = parseInt(dataRal)
    console.log(dataRal)
    let dataDesc = CBoxral[i].parentNode.parentNode.dataset.desc
    console.log(dataDesc)
    let dataImgc = CBoxral[i].parentNode.parentNode.dataset.img
    console.log(dataImgc)


    let outRalItems = CBoxral[i].parentNode.parentNode.nextElementSibling;
    let removeClass = dataRal;
    console.log(outRalItems)

    outRalItems.innerHTML += '<h2 class="colomsAll removeClass' + removeClass + '">RAL' + dataRal + '</h2>'



    if (dataRal == 1000) {
      dataRal = ral1000All;
      console.log(dataRal)
    } else if (dataRal == 2000) {
      dataRal = ral2000All;
      console.log(dataRal)
    } else if (dataRal == 3000) {
      dataRal = ral3000All;
      console.log(dataRal)
    } else if (dataRal == 4000) {
      dataRal = ral4000All;
      console.log(dataRal)
    } else if (dataRal == 5000) {
      dataRal = ral5000All;
      console.log(dataRal)
    } else if (dataRal == 6000) {
      dataRal = ral6000All;
      console.log(dataRal)
    } else if (dataRal == 7000) {
      dataRal = ral7000All;
      console.log(dataRal)
    } else if (dataRal == 8000) {
      dataRal = ral8000All;
      console.log(dataRal)
    } else if (dataRal == 9000) {
      dataRal = ral9000All;
      console.log(dataRal)
    }
    // find CBoxral[i] outRal nextElementSibling

    if (this.checked == true) {
      console.log(CBoxral[i].checked == true)

      for (let i = 0; i < dataRal.length; i++) {
        // console.log(dataRal[i])
        let outItem = '';

        outItem += ' <div class="wrapperItem removeClass' + removeClass + '">';
        outItem += ' <div class="wrapImg">';
        outItem += '    <img class="ral' + dataRal[i] + '" src="' + dataImgc + '" alt="colore">';
        outItem += '      </div>';
        outItem += '   <!-- /.wrapImg -->';
        outItem += '     <div class="desc">';
        outItem += '     <div class="ralNumber"><span>RAL</span><span>' + dataRal[i] + '</span></div>';
        outItem += '     <div class="ralDesc"><span>' + dataDesc + '</span></div>';

        outItem += '     </div>';
        outItem += '     <!-- /.desc -->';
        outItem += '     <div class="balance">Balance: <span>5</span></div>';
        outItem += '     <!-- /.balance -->';
        outItem += '    <div class="buttons">';
        outItem += '       <button class="btn btnMeno">-</button>';
        outItem += '       <button class="btn btnMo">+</button>';
        outItem += '       <div class="toOrder hidden">0</div>';
        outItem += '      <!-- /.toOrder -->';
        outItem += '     </div>';
        outItem += '     <!-- /.buttons -->';
        outItem += '   </div>';
        outItem += '   <!-- /.wrapperItem dinamic item  ral' + dataRal[i] + '-->';



        // outRalItems.innerHTML += '<h2>RAL ' + dataRal + ' </h2>';
        outRalItems.innerHTML += outItem;


      }

    }
    else if (this.checked == false) {
      let remC = document.querySelectorAll('.removeClass' + removeClass)
      for (let i = 0; i < remC.length; i++) {
        // console.log(remC[i])
        remC[i].style.display = 'none  '

      }
      // remove()
    }

  }//////


}
// doballeni vibranogo RAL ///////// END///////////