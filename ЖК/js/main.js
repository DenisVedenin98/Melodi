$(document).ready(function () {
  var currentFloor = 2;// переменная где хранится этаж
  var floorPath = $('.home-img path'); // каждый отдельный этаж в SVG
  var counterUp = $('.counter-up'); // кнопка увелечение этажа
  var counterDown = $('.counter-down');
  var modal = $(".modal"); 
  var modalCloseButton = $(".modal-close-button");
  var viewflatsbutton = $(".view-flats")


  // функция при наведение мышки на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажей 
    currentFloor = $(this).attr('data-floor'); // получаем значение этажа
    $('.counter').text(currentFloor); // записываем значение этажа в счётчик  справа
  });

  floorPath.on('click', toggleModal); // при клике на этаж вызвать модальное окно

  modalCloseButton.on('click', toggleModal ); // при клике на крестик закрыть модальное окно

  viewflatsbutton.on('click', toggleModal );

  counterUp.on('click', function() { // ослеживаем клик по кнопке вверх 
    if (currentFloor < 18) { // проверяем значение этажа не должно быть больше 18 
      currentFloor++; // прибовляем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGroupping: false}); // форматируем переменную с этажом, чтобы было 01 а не 1
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счётчик  справа
      floorPath.removeClass("current-floor");  // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем номер текущего этажа
    }
  });

  counterDown.on('click', function() {  // ослеживаем клик по кнопке вниз
    if (currentFloor > 2) { 
      // проверяем значение этажа не должно быть меньше 2 
      currentFloor--; // отбавляем одно число 
      usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGroupping: false});
      // форматируем переменную с этажом, чтобы было 01 а не 1
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счётчик  справа
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем номер текущего этажа
    }
  });

  function toggleModal(){ // функция закрыть-открыть окно
    modal.toggleClass("is-open");
  }

});