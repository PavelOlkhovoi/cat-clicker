window.addEventListener('load', function(e){
    let counter = this.document.querySelector('.cat__cliks');
    let numberOfClick = 0;

    document.querySelector('.cat__img').addEventListener('click', function(){
        numberOfClick++;
        counter.innerHTML = numberOfClick;
    })
});
