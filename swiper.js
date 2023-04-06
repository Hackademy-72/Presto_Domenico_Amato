
let recensioni = [

    {name : `Domenico A.`, review: `Sito bellissimo e ben strutturato!` , vote : 4},
    
    {name : `Mario R.`, review: `Ottimi prodotti!` , vote : 5},
    
    {name : `Luigi B.`, review: `Ottimo rapporto qualità/prezzo` , vote : 3},
    
    {name : `Francesco P.`, review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam tempore consequatur quidem a numquam architecto harum neque sit. Saepe!`, vote : 2},

];

// EVENTO RECENSIONI

let swiperWrapper = document.querySelector(`.swiper-wrapper`);

recensioni.forEach((recensione) =>{

    let div = document.createElement(`div`);

    div.classList.add(`swiper-slide` , `d-flex` , `align-items-center` , `justify-content-center`);

    div.innerHTML = `
    
            <div class="card-custom">
                            
            <div class="row">

            <div class="col-6 text-center">

                <img src="./media/omino.png" alt="wrapkit"
                class="img-fluid rounded-circle img-custom-wrapper" />

            </div>

            <div class="col-6 mt-3">

                <h3 class="textPrimaryC">${recensione.name} <i class="fa-solid fa-circle-check textPrimaryC"></i> </h3>

                <div>
                
                ${createStars(recensione.vote)}
                
                </div>

            </div>

            </div>

            <div class="mt-4 px-2 textPrimaryC">
                <p>${recensione.review}</p>
            </div>



        </div>
        
    `;

    swiperWrapper.appendChild(div)
    
});


// EVENTO STELLE RECENSIONI

function createStars(voto){

    let stella = ``

    for(i = 1; i <= 5; i++){

        if(voto >= i){

            stella += `<i class="fa-solid fa-star"></i>`;
        
        
        } else {

            stella += `<i class="fa-regular fa-star"></i>`;
        }

    }

    return stella
    
}


// INIZIALIZZAZIONE SWIPER

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    // EFFETTO
    grabCursor: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: false,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },

     // Autoplay
     autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
    
    


















