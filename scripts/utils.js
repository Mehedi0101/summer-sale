// variables
const cartList = document.getElementById('cart-list');
const discount = document.getElementById('discount');
const priceWithoutDiscount = document.getElementById('price-without-discount');
const priceWithDiscount = document.getElementById('price-with-discount');
const purchaseButton = document.getElementById('purchase-button');
const couponButton = document.getElementById('coupon-button');
const couponField = document.getElementById('coupon-field');
const invalidText = document.getElementById('invalid-text');
const couponUsedText = document.getElementById('coupon-used-text')
const purchaseCompleteButton = document.getElementById('purchase-complete-button');
const ratings = document.getElementsByClassName('rating');


purchaseButton.setAttribute('disabled',true);
couponButton.setAttribute('disabled',true);

let currentPrice = 0.00;
let couponInUse = false;
let discountAmount = 0.00;


// functions
function discountCalculation() {
    discountAmount = parseFloat(((currentPrice * 20) / 100).toFixed(2));
    discount.innerHTML = discountAmount.toFixed(2);
    priceWithDiscount.innerHTML = (currentPrice - discountAmount).toFixed(2);
}

function couponValidate(){
    if(!couponInUse){
        if(couponField.value === 'SELL200'){
            invalidText.classList.add('hidden');
            couponInUse = true;
            discountCalculation();
            couponField.value = "";
        }
        else{
            invalidText.classList.remove('hidden');
            couponField.value = "";
            return;
        }
    }
    else{
        couponUsedText.classList.remove('hidden');
        couponField.value = "";
        return;
    }
}