// navbar freccia che gira

let iconaNav = document.querySelector(`#iconaNav`);

// variabile d'appoggio

let check = false

// evento freccia

iconaNav.addEventListener(`click`, () => {

    if(check == false){

        iconaNav.style.transform = `rotate(180deg)`;

        check = true;
    
    } else {

        iconaNav.style.transform = `rotate(0deg)`;

        check = false;
    }

})

    
// catturo navbar

let navbarMain = document.querySelector(`#navbarMain`);

// CATTURA LOGHI

let logoA = document.querySelector(`#logoA`);

let logoB = document.querySelector(`#logoB`);

// evento navbar 

window.addEventListener(`scroll`, ()=>{

    if(window.scrollY>0){

        navbarMain.classList.remove(`bg-transparent`);
        navbarMain.classList.add(`bgGreyC`);

        
        navbarMain.style.padding = (`20px , 0px`);
        
        logoA.classList.add(`d-none`);
        logoB.classList.remove(`d-none`);
    
    } else {

        navbarMain.classList.remove(`bgGreyC`);
        navbarMain.classList.add(`bg-transparent`);

        navbarMain.style.padding = (`10px , 0px`);

        logoA.classList.remove(`d-none`);
        logoB.classList.add(`d-none`);
        
    }
    
} );


// EVENTO CHI SIAMO CERCHIO

let circleCustom = document.querySelector(`#circle-custom`);

let movedDiv = document.querySelectorAll(`.moved`);

let aperturaCustom = document.querySelector(`#apertura-custom`);

let cardWrapper = document.querySelector(`#cardWrapper`);

let team = [


    { name : 'Domenico', languages : ['lorem ipsum dolor lorem'], url : './media/omino5.png'},
    { name : 'Francesco', languages : ['lorem ipsum dolor lorem'], url : './media/omino2.png'},
    { name : 'Luigi', languages : ['lorem ipsum dolor lorem'], url : './media/omino3.png'},
    { name : 'Andrea', languages : ['lorem ipsum dolor lorem'], url : './media/omino4.png'},


];


 aperturaCustom.addEventListener(`click`, ()=>{

    

    if(check == false){

        movedDiv.forEach((moved , i)=>{

            let angolo = (360 * i)/movedDiv.length;

            let raggio = circleCustom.clientWidth/2
    
            moved.style.transform = `rotate(${angolo}deg) translate(${raggio}px) rotate(-${angolo}deg) `;

            aperturaCustom.innerHTML= `<i class="fa-solid fa-minus fa-4x"></i>`;
    
            check = true
        
        })
    
    }  else {

        cardWrapper.innerHTML = ``
        
        movedDiv.forEach((moved)=>{

        moved.style.transform = `rotate(0deg) translate(0px)`;
        
        aperturaCustom.innerHTML= `<i class="fa-solid fa-plus fa-beat-fade fa-4x"></i>`;
        
        check = false

        })
            
    }

})




movedDiv.forEach((moved , i) => {

    moved.style.backgroundImage = `url('${team[i].url}')`;

    moved.addEventListener(`click`, ()=>{

        cardWrapper.innerHTML = ``
        
        let div = document.createElement(`div`);

        div.classList.add(`card-chi-siamo-custom`);

        div.innerHTML = `
        
                    <img class="rounded-circle mb-5 immagini-cerchio-custom" src="${team[i].url}" alt="immagine profilo">

                    <h2>${team[i].name}</h2>

                    <p>${team[i].languages}</p>

            `
                    
            cardWrapper.appendChild(div);

            let card = document.querySelector(`.card-chi-siamo-custom`);

            card.setAttribute('data-aos', 'zoom-in');
            card.setAttribute('data-aos-duration','2000');
            
            
    })
        
        
    
})
        
        

