const findItem = document.querySelectorAll(".item").forEach((element) => {
    const array = [...element.querySelectorAll("li")];
    const names = array.map((item) => item.textContent);
    console.log(
      `Категория: ${element.querySelector("h2").textContent}
  Элементы: ${names}`
    );
  });