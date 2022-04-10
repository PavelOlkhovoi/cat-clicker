window.addEventListener('load', function(e){
    let counter = this.document.querySelector('.cat__cliks');
    let numberOfClick = 0;
    let cats = document.querySelectorAll('.cat');
    let catContainer = document.querySelector('.card__container');
    let objectArr = []

    function cat(catName) {
      return {
        name: catName,
        click: 0,
        counter: function(){
          this.click ++;
        }
      }
    }

    let testCat = cat('Test')

    // Create Cats objects
    for(let i = 0; i < cats.length; i++){
      let card = cats[i];
      let name = card.querySelector('.cat__title').textContent;
      let img = card.querySelector('.img__foto');
      // Connect the image to the new object
      img.setAttribute('data-id', name);
      let newCat = cat(name);
      objectArr.push(newCat);
    }

    catContainer.addEventListener('click', counterAdd);

    function counterAdd(event){
      let img = event.target;
      let name = img.dataset.id;
      
      for(let i = 0; i < objectArr.length; i++){
        let obj = objectArr[i];
        if(name === obj.name){
          obj.counter();
          console.log(obj.click);
          renderCounter(obj.click, img);
        }
      }
    }

    function renderCounter(sumOfClick, image){
      let card = image.closest('.cat');
      let count = card.querySelector('.cat__cliks');
      count.innerHTML = sumOfClick;
    }

});
