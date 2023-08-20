function addToCart(elements) {

    // adding to the cart list
    const productToAdd = elements.children[1].children[1].innerText;
    const li = document.createElement('li');
    li.innerText = productToAdd;
    cartList.appendChild(li);

    // purchase button enabling
    purchaseButton.removeAttribute('disabled');

    // total price without discount
    const productPrice = parseFloat(elements.children[1].children[2].children[0].innerText);
    const previousPrice = parseFloat(priceWithoutDiscount.innerHTML);
    currentPrice = previousPrice + productPrice;
    priceWithoutDiscount.innerHTML = currentPrice.toFixed(2);

    // coupon button enabling
    if (currentPrice >= 200) {
        couponButton.removeAttribute('disabled');
    }

    // total price with discount
    if (couponInUse) {
        discountCalculation();
    }
    else {
        priceWithDiscount.innerHTML = currentPrice.toFixed(2);
    }

}