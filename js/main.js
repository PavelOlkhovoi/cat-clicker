(function(){
    let data = {
        addCat: function(newName, img){
          let id = this.newId();
          let cat = {
            name: newName,
            catId: `${newName}${id}`,
            click: 0,
            img: img
          };

          this.catsArr.push(cat);
        },
        catsArr: [],
        lastId: 0,
        newId: function(){
          let id = ++this.lastId;
          this.lastId = id;
          return this.lastId;
        }
    };

    let octopus = {
        init: function(){
          let Jeka = data.addCat('Jeka', "third.jpg");
          let makki = data.addCat('Makki', 'secondcat.jpg');
          let vadim = data.addCat('Vadim', '625069434_c813129673_k.jpg');
          let lolala = data.addCat('Lolola', 'forth.jpg');
          let mamut = data.addCat('Mamut', 'fifth.jpg');
          this.collectCat('card__container');
        },
        // CSS: class of container
        collectCat: function(container){
          let place = document.querySelector(`.${container}`);
          for(let cat of data.catsArr){
            let block = view.card(cat.catId, cat.img, cat.name, cat.click);
            view.render(block, container);
          }

          place.addEventListener('click', (e)=> {
              let target = e.target;
              let card = target.closest('.cat');
              let cardId = card.dataset.catid;
              let clickTitle = card.querySelector('.cat__cliks');
              for(let cat of data.catsArr){
                  if(cat.catId == cardId){
                    let newClick = ++cat.click;
                    clickTitle.innerHTML = newClick;
                  }
              }
          })
        }
    };

    
    // img : third.jpg

    let view = {
        card: function(catId, img, name, counter = 0){
          // TODO: delete class hide or add
          let card = `<div class="cat" data-catId=${catId}>
          <div class="cat__img img">
              <div class="img__wrapper">
                  <img src="./img/${img}" alt="cat ${name}" class="img__foto">
              </div>
          </div>
          <h2 class="cat__title title">${name}</h2>
          <p class="cat__cliks">${counter}</p>
          </div>`;
          return card;
        },
        // location css selector
        render: function(html, location){
            let container = document.querySelector(`.${location}`);
            container.insertAdjacentHTML('beforeend', html)
        }

    }
    
    octopus.init();
})();