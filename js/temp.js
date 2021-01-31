
$(document).ready(function () {
  // menu
  var burger = $(".burger");
  var btnCheckout = $(".checkout");
  burger.on('click', function () {
    $(this).toggleClass('burger_activ');
    if (".burger.burger_activ") {
      $("nav").toggleClass("open_menu");
      $("main").toggleClass("blur5");
      // $("body").toggleClass("overflowY");
    }
    var num = '';
    var numAll = '';
    for (let i = 0; i < $(".toOrder").length; i++) {
      var num = +$(".toOrder")[i].textContent
      // console.log(num)

      numAll += +num
      numAll = parseInt(numAll)
    }

    if (numAll > 0) {
      btnCheckout.removeClass("hidden")
    } else {
      btnCheckout.addClass("hidden")

    }
    // console.log("numAll =" + numAll)


  })

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



  // menu end

  // wrapperItem

  // $(".wrapperItem>.buttons>.btnMo").on('click', function () {
  // })


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
  // wrapperItem end



});

// jQuery end

// animate
let spanAnim = document.querySelectorAll("menu>nav>ul>li>ul>li>span");
// console.log(spanAnim);
for (let i = 0; i < spanAnim.length; i++) {
  // console.log(spanAnim[i])
  spanAnim[i].style.transitionDelay = '0.' + i + 's'
}
// animate end

//PopupMenu///////////////////////////////////

// open popup menu
let btnCheckout = document.querySelector('.checkout');
let burger = document.querySelector('.burger');
let nav = document.querySelector('nav');
let main = document.querySelector('main');
let body = document.querySelector('body');
let wrapperPopunOutName_Quantity = document.querySelector('.wrapperPopunOutName_Quantity');
// .burger.burger_activ
btnCheckout.onclick = function () {
  burger.classList.remove('burger_activ')
  nav.classList.remove('open_menu')
  // main.classList.remove('blur5')
  body.classList.remove('overflowY')
  wrapperPopupMenu.classList.remove('closed')
  let toOrder = document.querySelectorAll('.toOrder')
  console.log(toOrder)


  for (let i = 0; i < toOrder.length; i++) {

    let toOrderNum = '';
    toOrderNum += toOrder[i].textContent
    toOrderNum = parseInt(toOrderNum)
    console.log(toOrderNum)

    if (toOrderNum > 0) {

      let parentWrap = toOrder[i].parentNode.parentNode
      console.log(parentWrap)

      let nameItem = parentWrap.querySelector('.desc>.ralNumber')
      let nameNum = parentWrap.querySelector('.desc>.ralNumber')
      nameItem = nameItem.children[0].textContent;
      nameNum = nameNum.children[1].textContent;

      let nameItemDesc = parentWrap.querySelector('.desc>.ralDesc')
      nameItemDesc = nameItemDesc.children[0].textContent;

      console.log(nameItem)
      console.log(nameNum)
      console.log(toOrderNum)

      let pOut = '';
      // pOut+='';

      // pOut += '  <div class="popupOut">';
      // pOut += '   <div class="popunOutNameSection">';
      // pOut += '    Colore';
      // pOut += '    </div>';
      // pOut += '    <!-- /.popunOutNameSection -->';
      pOut += '   <div class="wrapper_QuantityItem">';
      pOut += '     <div class="popunOutNameItem">';
      pOut += '       <span class="ItemDesc">' + nameItemDesc + '</span>';
      pOut += '       <span class="ralItem">' + nameItem + '</span>';
      pOut += '        <span class="numItem">' + nameNum + '</span>';
      pOut += '     </div>';
      pOut += '     <!-- /.popunOutNameItem -->';
      pOut += '     <input type="number" value="' + toOrderNum + '">';
      // pOut += toOrderNum;
      // pOut += '       </span>';
      pOut += '       <!-- /.popunOutQuantity -->';
      pOut += '       <button class="clearItem " onclick="myDelItemInQuantity(this)">X</button>';
      pOut += '   </div>';
      pOut += '   <!-- /.wrapperPopunOutName_Quantity -->';
      // pOut += ' </div>';
      // pOut += '  <!-- /.popupOut -->';
      wrapperPopunOutName_Quantity.innerHTML += pOut;

    }

  }
}


function myDelItemInQuantity(elmnt) {
  // elmnt.innerHTML = '';
  elmnt.parentNode.innerHTML = '';
  console.log(elmnt.parentNode)

}

// open popup menu end



// popupOut
let popupOut = document.querySelector('.popupOut');
// console.log(popupOut)

// popupOut  end



// buttonPopupMenu
let buttonPopupMenuExit = document.querySelector('.buttonPopupMenuExit');
let wrapperPopupMenu = document.querySelector('.wrapperPopupMenu');
// console.log(buttonPopupMenu)
// console.log(wrapperPopupMenu)

buttonPopupMenuExit.onclick = function () {
  wrapperPopupMenu.classList.add('closed')
  main.classList.remove('blur5')
  wrapperPopunOutName_Quantity.innerHTML = ''; //очистка
}
// buttonPopupMenu end


//PopupMenu end//////////////////////////




///////////////////////// checkbox /////////////////////////


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
// nitrochrome
// CBoxral1000//////////////////////////////////////////////////////////////
let CBoxral1000 = document.querySelector('.CBoxral1000');



CBoxral1000.onclick = function () {
  let outRal = document.querySelector('.outRal1000');
  let dataDesc = CBoxral1000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = CBoxral1000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (CBoxral1000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = CBoxral1000.nextElementSibling.nextElementSibling.textContent


    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';
    outRal.innerHTML += numRal;

    for (let i = 0; i < ral1000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral1000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral1000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral1000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)

  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral1000.onclick = function

// end ////////////////

// CBoxral2000//////////////////////////////////////////////////////////////outRal2000

let CBoxral2000 = document.querySelector('.CBoxral2000');
CBoxral2000.onclick = function () {
  let outRal = document.querySelector('.outRal2000');
  let dataDesc = CBoxral2000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = CBoxral2000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (CBoxral2000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = CBoxral2000.nextElementSibling.nextElementSibling.textContent
    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';
    outRal.innerHTML += numRal;
    for (let i = 0; i < ral2000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral2000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral2000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral2000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral2000.onclick = function
// CBoxral2000///////////////////////////  END    ///////////////////////////////////

// CBoxral3000//////////////////////////////////////////////////////////////outRal2000

let CBoxral3000 = document.querySelector('.CBoxral3000');
CBoxral3000.onclick = function () {
  let outRal = document.querySelector('.outRal3000');
  let dataDesc = CBoxral3000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = CBoxral3000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (CBoxral3000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = CBoxral3000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral3000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral3000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral3000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral3000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral3000.onclick = function
// CBoxral3000///////////////////////////  END    ///////////////////////////////////


// CBoxral4000//////////////////////////////////////////////////////////////outRal2000

let CBoxral4000 = document.querySelector('.CBoxral4000');
CBoxral4000.onclick = function () {
  let outRal = document.querySelector('.outRal4000');
  let dataDesc = CBoxral4000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = CBoxral4000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (CBoxral4000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = CBoxral4000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral4000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral4000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral4000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral4000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral4000.onclick = function
// CBoxral4000///////////////////////////  END    ///////////////////////////////////
// /////////////////////////


// CBoxral5000//////////////////////////////////////////////////////////////outRal2000

let CBoxral5000 = document.querySelector('.CBoxral5000');
CBoxral5000.onclick = function () {
  let outRal = document.querySelector('.outRal5000');
  let dataDesc = CBoxral5000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = CBoxral5000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (CBoxral5000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = CBoxral5000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral5000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral5000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral5000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral5000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral5000.onclick = function
// CBoxral5000///////////////////////////  END    ///////////////////////////////////
// /////////////////////////


// CBoxral6000//////////////////////////////////////////////////////////////outRal2000

let CBoxral6000 = document.querySelector('.CBoxral6000');
CBoxral6000.onclick = function () {
  let outRal = document.querySelector('.outRal6000');
  let dataDesc = CBoxral6000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = CBoxral6000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (CBoxral6000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = CBoxral6000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral6000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral6000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral6000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral6000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral6000.onclick = function
// CBoxral6000///////////////////////////  END    ///////////////////////////////////
// /////////////////////////



// CBoxral7000//////////////////////////////////////////////////////////////outRal2000

let CBoxral7000 = document.querySelector('.CBoxral7000');
CBoxral7000.onclick = function () {
  let outRal = document.querySelector('.outRal7000');
  let dataDesc = CBoxral7000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = CBoxral7000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (CBoxral7000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = CBoxral7000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral7000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral7000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral7000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral7000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral7000.onclick = function
// CBoxral7000///////////////////////////  END    ///////////////////////////////////
// /////////////////////////




// CBoxral8000//////////////////////////////////////////////////////////////outRal2000

let CBoxral8000 = document.querySelector('.CBoxral8000');
CBoxral8000.onclick = function () {
  let outRal = document.querySelector('.outRal8000');
  let dataDesc = CBoxral8000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = CBoxral8000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (CBoxral8000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = CBoxral8000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral8000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral8000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral8000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral8000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral8000.onclick = function
// CBoxral8000///////////////////////////  END    ///////////////////////////////////
// /////////////////////////

// CBoxral8000//////////////////////////////////////////////////////////////outRal2000

let CBoxral9000 = document.querySelector('.CBoxral9000');
CBoxral9000.onclick = function () {
  let outRal = document.querySelector('.outRal9000');
  let dataDesc = CBoxral9000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = CBoxral9000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (CBoxral9000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = CBoxral9000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral9000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral9000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral9000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral9000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral9000.onclick = function
// CBoxral9000///////////////////////////  END    ///////////////////////////////////
// /////////////////////////


// ACRILFIN///////////////////////////////////////

// Acrilovaia
// CBoxral1000//////////////////////////////////////////////////////////////
let ACRCBoxral1000 = document.querySelector('.ACRCBoxral1000');



ACRCBoxral1000.onclick = function () {
  let outRal = document.querySelector('.ACRoutRal1000');
  let dataDesc = ACRCBoxral1000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = ACRCBoxral1000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (ACRCBoxral1000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = ACRCBoxral1000.nextElementSibling.nextElementSibling.textContent


    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';
    outRal.innerHTML += numRal;

    for (let i = 0; i < ral1000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral1000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral1000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral1000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)

  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral1000.onclick = function

// end ////////////////

// CBoxral2000//////////////////////////////////////////////////////////////outRal2000

let ACRCBoxral2000 = document.querySelector('.ACRCBoxral2000');
ACRCBoxral2000.onclick = function () {
  let outRal = document.querySelector('.ACRoutRal2000');
  let dataDesc = ACRCBoxral2000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = ACRCBoxral2000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (ACRCBoxral2000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = ACRCBoxral2000.nextElementSibling.nextElementSibling.textContent
    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';
    outRal.innerHTML += numRal;
    for (let i = 0; i < ral2000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral2000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral2000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral2000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral2000.onclick = function
// CBoxral2000///////////////////////////  END    ///////////////////////////////////

// CBoxral3000//////////////////////////////////////////////////////////////outRal2000

let ACRCBoxral3000 = document.querySelector('.ACRCBoxral3000');
ACRCBoxral3000.onclick = function () {
  let outRal = document.querySelector('.ACRoutRal3000');
  let dataDesc = ACRCBoxral3000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = ACRCBoxral3000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (ACRCBoxral3000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = ACRCBoxral3000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral3000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral3000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral3000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral3000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral3000.onclick = function
// CBoxral3000///////////////////////////  END    ///////////////////////////////////


// CBoxral4000//////////////////////////////////////////////////////////////outRal2000

let ACRCBoxral4000 = document.querySelector('.ACRCBoxral4000');
ACRCBoxral4000.onclick = function () {
  let outRal = document.querySelector('.ACRoutRal4000');
  let dataDesc = ACRCBoxral4000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = ACRCBoxral4000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (ACRCBoxral4000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = ACRCBoxral4000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral4000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral4000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral4000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral4000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral4000.onclick = function
// CBoxral4000///////////////////////////  END    ///////////////////////////////////
// /////////////////////////


// CBoxral5000//////////////////////////////////////////////////////////////outRal2000

let ACRCBoxral5000 = document.querySelector('.ACRCBoxral5000');
ACRCBoxral5000.onclick = function () {
  let outRal = document.querySelector('.ACRoutRal5000');
  let dataDesc = ACRCBoxral5000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = ACRCBoxral5000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (ACRCBoxral5000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = ACRCBoxral5000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral5000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral5000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral5000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral5000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral5000.onclick = function
// CBoxral5000///////////////////////////  END    ///////////////////////////////////
// /////////////////////////


// CBoxral6000//////////////////////////////////////////////////////////////outRal2000

let ACRCBoxral6000 = document.querySelector('.ACRCBoxral6000');
ACRCBoxral6000.onclick = function () {
  let outRal = document.querySelector('.ACRoutRal6000');
  let dataDesc = ACRCBoxral6000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = ACRCBoxral6000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (ACRCBoxral6000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = ACRCBoxral6000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral6000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral6000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral6000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral6000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral6000.onclick = function
// CBoxral6000///////////////////////////  END    ///////////////////////////////////
// /////////////////////////



// CBoxral7000//////////////////////////////////////////////////////////////outRal2000

let ACRCBoxral7000 = document.querySelector('.ACRCBoxral7000');
ACRCBoxral7000.onclick = function () {
  let outRal = document.querySelector('.ACRoutRal7000');
  let dataDesc = ACRCBoxral7000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = ACRCBoxral7000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (ACRCBoxral7000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = ACRCBoxral7000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral7000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral7000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral7000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral7000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral7000.onclick = function
// CBoxral7000///////////////////////////  END    ///////////////////////////////////
// /////////////////////////




// CBoxral8000//////////////////////////////////////////////////////////////outRal2000

let ACRCBoxral8000 = document.querySelector('.ACRCBoxral8000');
ACRCBoxral8000.onclick = function () {
  let outRal = document.querySelector('.ACRoutRal8000');
  let dataDesc = ACRCBoxral8000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = ACRCBoxral8000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (ACRCBoxral8000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = ACRCBoxral8000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral8000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral8000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral8000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral8000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral8000.onclick = function
// CBoxral8000///////////////////////////  END    ///////////////////////////////////
// /////////////////////////

// CBoxral8000//////////////////////////////////////////////////////////////outRal2000

let ACRCBoxral9000 = document.querySelector('.ACRCBoxral9000');
ACRCBoxral9000.onclick = function () {
  let outRal = document.querySelector('.ACRoutRal9000');
  let dataDesc = ACRCBoxral9000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = ACRCBoxral9000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (ACRCBoxral9000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = ACRCBoxral9000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral9000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral9000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral9000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral9000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral9000.onclick = function
// CBoxral9000///////////////////////////  END    ///////////////////////////////////
// /////////////////////////


// Spray///////////////////////////     Spray        /////////////
let SprayCBoxral1000 = document.querySelector('.SprayCBoxral1000');

console.log(SprayCBoxral1000)


SprayCBoxral1000.onclick = function () {
  let outRal = document.querySelector('.SprayoutRal1000');
  let dataDesc = SprayCBoxral1000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = SprayCBoxral1000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (SprayCBoxral1000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = SprayCBoxral1000.nextElementSibling.nextElementSibling.textContent


    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';
    outRal.innerHTML += numRal;

    for (let i = 0; i < ral1000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral1000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral1000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral1000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)

  }//if (SprayCBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //SprayCBoxral1000.onclick = function

// end ////////////////

// CBoxral2000//////////////////////////////////////////////////////////////outRal2000

let SprayCBoxral2000 = document.querySelector('.SprayCBoxral2000');
SprayCBoxral2000.onclick = function () {
  let outRal = document.querySelector('.SprayoutRal2000');
  let dataDesc = SprayCBoxral2000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = SprayCBoxral2000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (SprayCBoxral2000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = SprayCBoxral2000.nextElementSibling.nextElementSibling.textContent
    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';
    outRal.innerHTML += numRal;
    for (let i = 0; i < ral2000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral2000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral2000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral2000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral2000.onclick = function
// CBoxral2000///////////////////////////  END    ///////////////////////////////////

// CBoxral3000//////////////////////////////////////////////////////////////outRal2000

let SprayCBoxral3000 = document.querySelector('.SprayCBoxral3000');
SprayCBoxral3000.onclick = function () {
  let outRal = document.querySelector('.SprayoutRal3000');
  let dataDesc = SprayCBoxral3000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = SprayCBoxral3000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (SprayCBoxral3000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = SprayCBoxral3000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral3000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral3000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral3000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral3000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral3000.onclick = function
// CBoxral3000///////////////////////////  END    ///////////////////////////////////


// CBoxral4000//////////////////////////////////////////////////////////////outRal2000

let SprayCBoxral4000 = document.querySelector('.SprayCBoxral4000');
SprayCBoxral4000.onclick = function () {
  let outRal = document.querySelector('.SprayoutRal4000');
  let dataDesc = SprayCBoxral4000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = SprayCBoxral4000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (SprayCBoxral4000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = SprayCBoxral4000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral4000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral4000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral4000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral4000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral4000.onclick = function
// CBoxral4000///////////////////////////  END    ///////////////////////////////////
// /////////////////////////


// CBoxral5000//////////////////////////////////////////////////////////////outRal2000

let SprayCBoxral5000 = document.querySelector('.SprayCBoxral5000');
SprayCBoxral5000.onclick = function () {
  let outRal = document.querySelector('.SprayoutRal5000');
  let dataDesc = SprayCBoxral5000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = SprayCBoxral5000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (SprayCBoxral5000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = SprayCBoxral5000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral5000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral5000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral5000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral5000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral5000.onclick = function
// CBoxral5000///////////////////////////  END    ///////////////////////////////////
// /////////////////////////


// CBoxral6000//////////////////////////////////////////////////////////////outRal2000

let SprayCBoxral6000 = document.querySelector('.SprayCBoxral6000');
SprayCBoxral6000.onclick = function () {
  let outRal = document.querySelector('.SprayoutRal6000');
  let dataDesc = SprayCBoxral6000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = SprayCBoxral6000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (SprayCBoxral6000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = SprayCBoxral6000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral6000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral6000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral6000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral6000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral6000.onclick = function
// CBoxral6000///////////////////////////  END    ///////////////////////////////////
// /////////////////////////



// CBoxral7000//////////////////////////////////////////////////////////////outRal2000

let SprayCBoxral7000 = document.querySelector('.SprayCBoxral7000');
SprayCBoxral7000.onclick = function () {
  let outRal = document.querySelector('.SprayoutRal7000');
  let dataDesc = SprayCBoxral7000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = SprayCBoxral7000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (SprayCBoxral7000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = SprayCBoxral7000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral7000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral7000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral7000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral7000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral7000.onclick = function
// CBoxral7000///////////////////////////  END    ///////////////////////////////////
// /////////////////////////




// CBoxral8000//////////////////////////////////////////////////////////////outRal2000

let SprayCBoxral8000 = document.querySelector('.SprayCBoxral8000');
SprayCBoxral8000.onclick = function () {
  let outRal = document.querySelector('.SprayoutRal8000');
  let dataDesc = SprayCBoxral8000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = SprayCBoxral8000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (SprayCBoxral8000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = SprayCBoxral8000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral8000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral8000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral8000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral8000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral8000.onclick = function
// CBoxral8000///////////////////////////  END    ///////////////////////////////////
// /////////////////////////

// CBoxral8000//////////////////////////////////////////////////////////////outRal2000

let SprayCBoxral9000 = document.querySelector('.SprayCBoxral9000');
SprayCBoxral9000.onclick = function () {
  let outRal = document.querySelector('.SprayoutRal9000');
  let dataDesc = SprayCBoxral9000.parentElement.parentElement.getAttribute('data-desc')
  let dataImg = SprayCBoxral9000.parentElement.parentElement.getAttribute('data-img')
  console.log(dataDesc)
  console.log(dataImg)
  if (SprayCBoxral9000.checked == true) {
    let checkBoxNumberRal = '';
    checkBoxNumberRal = SprayCBoxral9000.nextElementSibling.nextElementSibling.textContent

    let numRal = '';
    numRal = '<h3 class="colomsAll">' + 'Ral ' + checkBoxNumberRal + '</h3>';


    outRal.innerHTML += numRal;
    for (let i = 0; i < ral9000All.length; i++) {
      let ral = '';
      ral += ' <div class="wrapperItem">';
      ral += '  <div class="wrapImg">';
      ral += '    <img class="ral' + ral9000All[i] + '" src="' + dataImg + '" alt="colore">';
      ral += '          </div>';
      ral += '    <!-- /.wrapImg -->';
      ral += '    <div class="desc">';
      ral += '      <div class="ralNumber"><span>RAL</span><span>' + ral9000All[i] + '</span></div>';
      ral += '      <div class="ralDesc"><span>' + dataDesc + '</span></div>';
      ral += '    </div>';
      ral += '    <!-- /.desc -->';
      ral += '    <div class="balance">Balance: <span>5</span></div>';
      ral += '    <!-- /.balance -->';
      ral += '          <div class="buttons">';
      ral += '      <button class="btn btnMeno">-</button>';
      ral += '      <button class="btn btnMo">+</button>';
      ral += '      <div class="toOrder hidden">0</div>';
      ral += '      <!-- /.toOrder -->';
      ral += '          </div>';
      ral += '    <!-- /.buttons -->';
      ral += '        </div>';
      ral += '  <!-- /.wrapperItem  ral' + ral9000All[i] + '-->';
      outRal.innerHTML += ral;
    }  // for (let i = 0; i < ral1000All.length; i++)
  }//if (CBoxral1000==true)
  else {
    outRal.innerHTML = '';
  }

} //CBoxral9000.onclick = function
// CBoxral9000///////////////////////////  END    ///////////////////////////////////
// /////////////////////////