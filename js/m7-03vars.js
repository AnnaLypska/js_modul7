// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

 const imageRef = document.querySelector("#gallery");
  const createGallery = () => {
  
     const imagesTags = ({ url, alt }) => `<li><img class="gallery-link" src='${url}' alt='${alt}' width = 100></li>`;
     const gallery = images.map(imagesTags).join('');
     imageRef.insertAdjacentHTML('beforeend', gallery)
};
createGallery(images);
 console.log(imageRef)



//  const gallery = document.querySelector("#gallery");
//  gallery.insertAdjacentHTML("afterbegin", images.map(({ url, alt }) => `<li><img height="120" src="${url}" alt="${alt}"></li>`).join(''));
//  gallery.classList.add("gallery");
