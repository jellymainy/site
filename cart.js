window.addEventListener("DOMContentLoaded", () => {

    let content = document.querySelector(".cart__items");

    let products = getProducts();

    products.forEach(id => {
        let elem = massive.find((elem) =>
            elem.id === id);
        createCard(elem);
    }
    );

    function createCard(elem) {

        let cartItem = document.createElement("div");

        let image = document.createElement("img");

        let textContent = document.createElement("div");

        let headline = document.createElement("h2");

        let text = document.createElement("p");

        let price = document.createElement("p");

        let cartInput = document.createElement("input");

        cartItem.classList.add("cart__item");

        image.classList.add("cart__img");
        image.src = elem.image;

        textContent.classList.add("cart_text_content");

        headline.classList.add("cart__headline");
        headline.textContent = elem.headline;

        text.classList.add("cart__text");
        text.textContent = elem.text;

        price.classList.add("cart__price");
        price.textContent = elem.price;

        cartInput.classList.add("cart__input");
        cartInput.setAttribute("type", "number");

        content.appendChild(cartItem);
        cartItem.appendChild(image);
        cartItem.appendChild(textContent);
        textContent.appendChild(headline);
        textContent.appendChild(text);
        textContent.appendChild(price);
        cartItem.appendChild(cartInput);
        content.appendChild(cartItem);
    }

    let buttonClear = document.querySelector(".cart__button");
    localStorage.setItem('cart', JSON.stringify(products));
    buttonClear.onclick = () => {
        localStorage.clear('cart');
        window.location.reload();
    }


});
function countFinal() {
    let final = document.querySelector(".final");
    let products = getProducts();
    let sum = 0;
    products.forEach = (id => {
        let idCheck = massive.find((elem) => elem.id === id);
        sum += idCheck.price;
        console.log(idCheck.price);
    });
    final.innerHTML = `Итого: ${sum} руб.`;
}
countFinal();