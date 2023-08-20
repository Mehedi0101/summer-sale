purchaseCompleteButton.addEventListener('click', function () {
    cartList.innerHTML = '';
    currentPrice = 0.00;
    discountAmount = 0.00;
    priceWithDiscount.innerHTML = '0.00';
    priceWithoutDiscount.innerHTML = '0.00';
    discount.innerHTML = '0.00';
    purchaseButton.setAttribute('disabled', true);
    couponButton.setAttribute('disabled', true);
    couponInUse = false;
    invalidText.classList.add('hidden');
    couponUsedText.classList.add('hidden');
})

