function getProducts() {
    let storage = localStorage.getItem('cart');
    if(storage !== null){
        return JSON.parse(storage);
    }
    return [];
}

function putProducts(id) {
    let products = getProducts();
    let pushProduct = false;
    let index = products.indexOf(id);
    if(index === -1){
        products.push(id);
        pushProduct = true;
    } else{
        products.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(products));
    return {pushProduct, products};
};