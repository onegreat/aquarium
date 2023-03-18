var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Кнопка, запускающая модальное окно
  var button = event.relatedTarget
  // Извлечь информацию из атрибутов data-bs- *
  var recipient = button.getAttribute('data-bs-whatever')
  
  // При необходимости вы можете инициировать запрос AJAX здесь
  // а затем выполните обновление в обратном вызове.
  //
  // Обновите содержимое модального окна.

  var modalTitle = exampleModal.querySelector('.catalog-modal-title')
  var modalBody = exampleModal.querySelector('.modal-body')
  console.log(modalTitle);
  if(recipient == 'terrarium') {
    modalTitle.innerText = 'Террариумы';
    modalBody.innerHTML = `<div class="slidecontainer">
    <input type="range" min="1" max="10" value="1" class="slider" id="terrariumRange" oninput="rangeSliderTerrarium()">
    <input type="checkbox" id="terrariumLid" onclick="rangeSliderTerrarium()">
    <label id="forTerrariumLid" for="terrariumLid"></label>
    <div id="terrariumPriceRange"></div>
    <h1>Заказать</h1>`;
    console.log(1);
  } else if(recipient == 'mdo') {
    modalTitle.innerText = 'Прямоугольные аквариумы';
    modalBody.innerHTML = `
    <div class="slidecontainer">
      <input type="range" min="1" max="23" value="1" class="slider" id="myRange" oninput="rangeSliderRectangular()">
      <input type="checkbox" id="lid" onclick="rangeSliderRectangular()">
      <label id="forLid" for="lid"></label>
      <div id="priceange"></div>
    </div>
`;
  }
})