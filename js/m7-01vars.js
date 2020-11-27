//titleRef.textContent = 'sgdfgdgf'; изменяем содержимое текста

//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
//Получится 'В списке 3 категории.'.
//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2)
// и количество элементов в категории (всех вложенных в него элементов li).

//Для пошуку всіх елементів (категорій) списку з класом item використайте querySelectorAll.
 //Як результат, отримаєте масив усіх елементів (категорій) списку, довжина якого буде їхньою кількістю.
 // Підставите кількість елементів (категорій) списку в шаблонний рядок, який виведете в консоль, і перше,
 //  що потрібно було зробити в завданні, Ви виконали.
//Далі переберіть масив елементів (категорій) списку за допомогою forEach.
// Параметром callback функції цього методу буде category. 
 //В тілі функції за допомогою querySelector і querySelectorAll знайдіть елементи h2 (заголовок категорії) 
 //і li (елементи категорії). Використовуючи шаблонні рядки, виведіть в консоль назву (текстовий контент) заголовку 
 //і кількість (довжину масиву) елементів. 



  console.log("Количество категорий:", document.querySelectorAll('.item').length);
 document.querySelectorAll("li.item").forEach(value => console.log(
    "Категория: " + value.firstElementChild.textContent + "\n" + 
    "Количество елементов: " + value.querySelectorAll("li").length));

//document.querySelectorAll(".item").forEach(elem => console.log(
  //  `Категория: ${elem.firstElementChild.textContent}`,
   // `К-во элементов: ${elem.querySelectorAll(`li`).length}`));

   // const findItem = document.querySelectorAll('.item').forEach(element =>
   //     console.log(
   //       `Категория: ${element.querySelector('h2').textContent}
  //   Количество элементов: ${element.querySelectorAll('li').length}`,
   //    ),
    //  );



   // const findItem = document.querySelectorAll(".item").forEach((element) => {
    //  const array = [...element.querySelectorAll("li")];
   //   const names = array.map((item) => item.textContent);
   //   console.log(
   //     `Категория: ${element.querySelector("h2").textContent}
  // Элементы: ${names}`
  //   );
    //});
 
    