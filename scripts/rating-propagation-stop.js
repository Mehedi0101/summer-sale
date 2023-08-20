for(item of ratings){
    item.addEventListener('click',function(e){
        e.stopPropagation();      
    })
}