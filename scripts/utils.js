// variables
const cartList = document.getElementById('cart-list');
const priceWithoutDiscount = document.getElementById('price-without-discount');
const priceWithDiscount = document.getElementById('price-with-discount');
const purchaseButton = document.getElementById('purchase-button');
const couponButton = document.getElementById('coupon-button');


purchaseButton.setAttribute('disabled',true);
couponButton.setAttribute('disabled',true);