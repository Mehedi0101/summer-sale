couponButton.addEventListener('click',function(){
    couponValidate();
})

couponField.addEventListener('keyup',function(e){
    
    if(e.key === 'Enter'){
        if(currentPrice < 200){
            couponField.value = '';
            return;
        }
        couponValidate();
    }
    console.log('eee');
})