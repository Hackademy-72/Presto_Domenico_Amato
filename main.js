
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

        
        navbarMain.style.height = `100px`;
        
        logoA.classList.add(`d-none`);
        logoB.classList.remove(`d-none`);
    
    } else {

        navbarMain.classList.remove(`bgGreyC`);
        navbarMain.classList.add(`bg-transparent`);

        navbarMain.style.height = `70px`;

        logoA.classList.remove(`d-none`);
        logoB.classList.add(`d-none`);
        
    }
    
} )

// CATTURO GLI SPAN

let primoSpan = document.querySelector(`#primoSpan`);
let secondoSpan = document.querySelector(`#secondoSpan`);
let terzoSpan = document.querySelector(`#terzoSpan`);


// EVENTO INCREMENTATORE NUMERI

function intervalli(finalNumber, element){

    let counter = 0;

    let range = setInterval(() => {

        

       if(counter < finalNumber){

        counter++;

        element.innerHTML = counter;

       } else {

        clearInterval(range);

       }
    },1)
}


let observer = new IntersectionObserver((entries) =>{

    entries.forEach((entry) => {

        if(entry.isIntersecting && check == false){

            intervalli(1000 , primoSpan);
            intervalli(1200 , secondoSpan);
            intervalli(750 , terzoSpan);
            
            check = true
        
        }
        
    })
    
})

observer.observe(primoSpan);














