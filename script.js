document.addEventListener('DOMContentLoaded', () => {

    let wrap = document.querySelector('.wrapper')

    let heightDoc = document.body.clientHeight;

    let countCall = 0

    createProduct()

    function maxHeight() {
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
          );

          return scrollHeight
    }

    let scrollHeight = maxHeight()

    function createProduct() {
        for(let i = 0; i < 20; i++) {
            let div = document.createElement('div');
            div.className = 'product'
            wrap.append(div);
        }
        countCall++
    }


      function differenceFnc() {
        let difference = scrollHeight - heightDoc;
        return difference
      }

      let difference = differenceFnc()

      window.addEventListener('scroll', () => {
        let scroll = scrollY;
        console.log(difference)
        let diff = difference - scroll;
        if(diff < 100 && countCall < 3) {
            createProduct()
            scrollHeight = maxHeight()
            difference = differenceFnc()
            countCall++
        } else {
            countCall = 1
        }
        //способ без счетчика вызова ф-ции
        // if(diff < 100 && diff > 90) {
        //     createProduct()
        //     scrollHeight = maxHeight()
        //     difference = differenceFnc()
        // }
    })    
})

