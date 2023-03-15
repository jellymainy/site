window.addEventListener("DOMContentLoaded", () => {
    let catalogue = document.querySelector(".catalogue__cards");

    massive.forEach((elem) => {
        createCard(elem);
    });

    function createCard(elem) {
        let product = document.createElement("div");

        let image = document.createElement("img");

        let headline = document.createElement("h3");

        let text = document.createElement("p");

        let prices = document.createElement("div");

        let price = document.createElement("p");

        let priceСross = document.createElement("p");

        let button = document.createElement("button");

        product.classList.add("product");

        image.classList.add("product__img");
        image.src = elem.image;

        headline.classList.add("product__headline");
        headline.textContent = elem.headline;

        text.classList.add("product__text");
        text.textContent = elem.text;

        prices.classList.add("product__prices");

        price.classList.add("product__price");
        price.textContent = elem.price;

        priceСross.classList.add("product_price_cross");
        priceСross.textContent = elem.priceCross;

        button.classList.add("product__button");
        button.textContent = elem.button;

        catalogue.appendChild(product);

        product.appendChild(image);

        product.appendChild(headline);

        product.appendChild(text);

        product.appendChild(prices);

        prices.appendChild(price);

        prices.appendChild(priceСross);

        product.appendChild(button);
    }
})