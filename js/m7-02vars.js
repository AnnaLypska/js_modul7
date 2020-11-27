
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  //console.log(ingredients)

  //Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
 // после чего вставит все li за одну операцию в список ul.ingredients.
  // Для создания DOM-узлов используй document.createElement().

  const itemsRef = document.createElement('ul');
  itemsRef.classList.add('js-product-card');

  const listRef = document.createElement('li');
  listRef.textContent = ingredients[0];

  const list1Ref = document.createElement('li');
  list1Ref.textContent = ingredients[1];

  itemsRef.append(listRef,list1Ref)

  const rootRef = document.querySelector('#ingredients');
  rootRef.appendChild(itemsRef)

  console.log(itemsRef);

  //document.querySelector(`#ingredients`).innerHTML = ingredients.map(array => `<li>${array}</li>`).join('')