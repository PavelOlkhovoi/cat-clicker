window.addEventListener('load', function(e){
    let counter = this.document.querySelector('.cat__cliks');
    let cats = document.querySelectorAll('.cat');
    let catContainer = document.querySelector('.card__container');
    let objectArr = [];
    let lists = document.getElementsByClassName('list-cats__name');

    function cat(catName) {
      return {
        name: catName,
        click: 0,
        counter: function(){
           this.click ++;
        }
      }
    }

    
    // Create Cats objects
    for(let i = 0; i < cats.length; i++){
      let card = cats[i];
      let name = card.querySelector('.cat__title').textContent;
      let img = card.querySelector('.img__foto');
      // Connect the image to the new object
      img.setAttribute('data-id', name);
      let newCat = cat(name);
      objectArr.push(newCat);

      // Add the names list
      addCatInList(name);
    }


    for(let item of lists){
      item.addEventListener('click', ()=> {
        let id = item.dataset.listid;
        let conectedImg = document.querySelector(`[data-id="${id}"]`);
        let card = findCard(conectedImg);
        showHide(card);
      })
    }


    catContainer.addEventListener('click', counterAdd);

    function counterAdd(event){
      let img = event.target;
      let name = img.dataset.id;
      
      for(let i = 0; i < objectArr.length; i++){
        let obj = objectArr[i];
        if(name === obj.name){
          obj.counter();
          renderCounter(obj.click, img);
        }
      }
    }

    function renderCounter(sumOfClick, image){
      let card = findCard(image);
      let count = card.querySelector('.cat__cliks');
      count.innerHTML = sumOfClick;
    }

    function findCard(image){
      let card = image.closest('.cat');
      return card;
    }

    function showHide(element){
      let block = element;
      if(block.classList.contains("hide")){
        block.classList.remove('hide');
      }else {
        block.classList.add('hide');
      }
    }

    function addCatInList(name){
      let ul = document.querySelector('.list-cats');
      let li = document.createElement('li');
      li.classList.add('list-cats__name');
      li.innerHTML = name;
      li.setAttribute('data-listId', name);
      ul.insertAdjacentElement('beforeend', li);
    }

});
