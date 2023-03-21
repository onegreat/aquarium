var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Кнопка, запускающая модальное окно
  let button = event.relatedTarget
  // Извлечь информацию из атрибутов data-bs- *
  let recipient = button.getAttribute('data-bs-whatever')

  // При необходимости вы можете инициировать запрос AJAX здесь
  // а затем выполните обновление в обратном вызове.
  //
  // Обновите содержимое модального окна.

  let modalTitle = exampleModal.querySelector('.catalog-modal-title')
  let modalBody = exampleModal.querySelector('.modal-body')
  console.log(modalTitle);
  if (recipient == 'terrarium') {
    modalTitle.innerText = 'Террариумы';
    modalBody.innerHTML = `<div class="modal-container col-md-12 d-flex">
    <div class="slidecontainer col-md-6">
    <p class="modal-litres">Выберите литраж</p>
    <div id="terrariumPriceRange" class="terrarium-price"></div>
      <input type="range" min="1" max="10" value="1" class="slider col-md-10" id="terrariumRange" oninput="rangeSliderTerrarium()">
        <div class="form_radio_group">
        <span class="question-modal">С крышкой и светом?</span>
          <div class="form_radio_group-item">
          <input id="radio" type="radio" name="radio" value="1" onclick="rangeSliderTerrarium()" checked>
          <label for="radio" class="first-label">Да</label>
        </div>
        <div class="form_radio_group-item">
          <input id="radio-2" type="radio" name="radio" value="2" onclick="rangeSliderTerrarium()">
          <label for="radio-2">Нет</label>
        </div>
      </div>
      <span class="question-modal">Стоимость:</span>
      <div id="terrariumPriceRangeBuy" class="terrarium-price-buy"></div>
    </div>
    <div class="col-md-6"><img src="./img/elem2.png"></div>
    </div>`;
  } else if (recipient == 'rectangular') {
    modalTitle.innerText = 'Прямоугольные аквариумы';
    modalBody.innerHTML = `<div class="modal-container col-md-12 d-flex">
    <div class="slidecontainer col-md-6">
    <p class="modal-litres">Выберите литраж</p>
    <div id="priceange" class="terrarium-price"></div>
    <input type="range" min="1" max="23" value="1" class="slider col-md-10" id="myRange" oninput="rangeSliderRectangular()">
        <div class="form_radio_group">
        <span class="question-modal">С крышкой и светом?</span>
          <div class="form_radio_group-item">
          <input id="radio" type="radio" name="radio" value="1" onclick="rangeSliderRectangular()" checked>
          <label for="radio" class="first-label">Да</label>
        </div>
        <div class="form_radio_group-item">
          <input id="radio-2" type="radio" name="radio" value="2" onclick="rangeSliderRectangular()">
          <label for="radio-2">Нет</label>
        </div>
      </div>
      <span class="question-modal">Стоимость:</span>
      <div id="rectangular" class="terrarium-price-buy"></div>
    </div>
    <div class="col-md-6"><img src="./img/elem1.png"></div>
    </div>`;
    // modalBody.innerHTML = `<p>Выберите литраж</p>
    // <div class="slidecontainer">
    //   <input type="range" min="1" max="23" value="1" class="slider" id="myRange" onmousemove="rangeSliderRectangular()">
    //   <input type="checkbox" id="lid" onclick="rangeSliderRectangular()">
    //   <label id="forLid" for="lid"></label>
    //   <div id="priceange"></div>
    //   <div><img src="./img/elem1.png"></div>
    // </div>`;
  } else if (recipient == 'sphere') {
    modalTitle.innerText = 'Сферические аквариумы';
    modalBody.innerHTML = `<div class="modal-container col-md-12 d-flex">
    <div class="slidecontainer col-md-6">
    <p class="modal-litres">Выберите литраж</p>
    <div id="spherePriceRange" class="terrarium-price"></div>
    <input type="range" min="1" max="6" value="1" class="slider col-md-10" id="sphereRange" oninput="rangeSliderSphere()">
        <div class="form_radio_group">
        <span class="question-modal">С крышкой и светом?</span>
          <div class="form_radio_group-item">
          <input id="radio" type="radio" name="radio" value="1" onclick="rangeSliderSphere()" checked>
          <label for="radio" class="first-label">Да</label>
        </div>
        <div class="form_radio_group-item">
          <input id="radio-2" type="radio" name="radio" value="2" onclick="rangeSliderSphere()">
          <label for="radio-2">Нет</label>
        </div>
      </div>
      <span class="question-modal">Стоимость:</span>
      <div id="spherePriceRangeBuy" class="terrarium-price-buy"></div>
    </div>
    <div class="col-md-6"><img src="./img/elem4.png"></div>
    </div>`;
    // modalBody.innerHTML = `
    // <div class="slidecontainer">
    // <p>Выберите литраж</p>
    //   <input type="range" min="1" max="6" value="1" class="slider" id="sphereRange" oninput="rangeSliderSphere()">
    //   <input type="checkbox" id="sphereLid" onclick="rangeSliderSphere()">
    //   <label id="forSphereLid" for="sphereLid"></label>
    //   <div id="spherePriceRange"></div>
    //   <div><img src="./img/elem4.png"></div>
    // </div>`;
  } else if (recipient == 'figured') {
    modalTitle.innerText = 'Фигурные аквариумы';
    modalBody.innerHTML = `<div class="modal-container col-md-12 d-flex">
    <div class="slidecontainer col-md-6">
    <p class="modal-litres">Выберите литраж</p>
    <div id="figuredpriceange" class="terrarium-price"></div>
    <input type="range" min="1" max="21" value="1" class="slider col-md-10" id="figuredRange" oninput="rangeSliderFigured()">
        <div class="form_radio_group">
        <span class="question-modal">С крышкой и светом?</span>
        <div class="form_radio_group-item">
        <input id="radio" type="radio" name="radio" value="1" onclick="rangeSliderFigured()" checked>
        <label for="radio" class="first-label">Да</label>
      </div>
      <div class="form_radio_group-item">
        <input id="radio-2" type="radio" name="radio" value="2" onclick="rangeSliderFigured()">
        <label for="radio-2">Нет</label>
      </div>
      </div>
      <span class="question-modal">Стоимость:</span>
      <div id="figurePriceRangeBuy" class="terrarium-price-buy"></div>
    </div>
    <div class="col-md-6"><img src="./img/elem1.png"></div>
    </div>`;
    // modalBody.innerHTML = `<p>Выберите литраж</p>
    // <div class="slidecontainer">
    //   <input type="range" min="1" max="20" value="1" class="slider" id="figuredRange" oninput="rangeSliderFigured()">
    //   <input type="checkbox" id="figuredLid" onclick="rangeSliderFigured()">
    //   <label id="forFiguredLid" for="figuredLid"></label>
    //   <div id="figuredpriceange"></div>
    //   <div><img src="./img/elem3.png"></div>
    // </div>`;
  }
})