const btns = document.querySelectorAll(".feature__link"); // находим все кнопки
const lists = document.querySelectorAll(".feature-sub"); // находим списки

btns.forEach((btn, index) => {
  // осуществляем перебор всех кнопок
  btn.addEventListener("click", () => {
    // производим действие по клику
    btns.forEach((btnItem, idx) => {
      // осуществляем перебор кнопок
      if (btnItem === btn) {
        // по той кнопке, по которой кликнули добавляем/убираем активный класс и открываем/скрываем содержимое
        btnItem.classList.toggle("feature__link_active");
        lists[idx].classList.toggle("hidden");
      } else {
        // в обычном состоянии удаляем у кнопок активный класс и скрываем содержимое
        btnItem.classList.remove("feature__link_active");
        lists[idx].classList.add("hidden");
      }
    });
  });
});
