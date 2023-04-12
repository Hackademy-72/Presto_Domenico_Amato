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



fetch(`./annunci.json`).then((Response) => Response.json() ).then((data) => {

    let categoriaWrapper = document.querySelector(`#categoriaWrapper`);

    let cardsWrapper = document.querySelector(`#cardsWrapper`);

    

    // CATTURA RANGE INPUT NUMBER PREZZO

    let inputPrezzo = document.querySelector(`#inputPrezzo`);

    let incrementNumber = document.querySelector(`#incrementNumber`);

    

   

    
    
    function setCategoryFilters(){

    let categories = data.map( (annuncio)=> annuncio.category);

    let uniqueCategories = [];

    categories.forEach( (category)=>{

        if( !uniqueCategories.includes(category)){
    
            uniqueCategories.push(category)
    
            }

    })

    uniqueCategories.forEach((category)=>{

        let div = document.createElement(`div`);

        div.classList.add(`form-check`);

        div.innerHTML = `
        
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">
                <label class="form-check-label" for="${category}">
                ${category}
            
                </label>
        
        
        `

        categoriaWrapper.appendChild(div)

    })
        
    }

    setCategoryFilters();


    // FUNZIONE MOSTRA CARDS

    function mostraCard(array){

        cardsWrapper.innerHTML = ``

        array.sort((a, b)=>Number(b.price - a.price));

        array.forEach( (element, i) => {

        let div = document.createElement(`div`);

        div.classList.add(`col-md-3` , `my-3`);

        div.innerHTML = `
        
            
                                
                <div class="annuncio-custom d-flex flex-column justify-content-evenly align-items-center">

                    <img class="immagine-custom-card-annunci p-2" src="https://picsum.photos/${200+ i}" alt="">

                    <h2 class="fw-bold textPrimaryC">${element.name}</h2>

                    <p class="h3 textPrimaryC">${element.category}</p>

                    <p class="h3 textPrimaryC">${element.price} €</p>



                </div>


            `;
            
            cardsWrapper.appendChild(div)
            
        })
            
    }

    mostraCard(data);


    


    // FUNZIONE PER MOSTRARE CARD TRAMITE CATEGORIA

    
    
    function filtraPerCategoria(array){


        let arrayDaNodeList = Array.from(radioButtons);
    
        let bottone = arrayDaNodeList.find((button)=> button.checked);
    
        let categoria = bottone.id;

        // console.log(categoria);
        
        if(categoria != `all`){

       
        let filtered = array.filter( (annuncio) => annuncio.category == categoria);

          return filtered;

        } else {

          return data;
        
        }

    }

    // CATTURA RADIO BUTTONS

    let radioButtons = document.querySelectorAll(`.form-check-input`);


    radioButtons.forEach((button)=>{

    button.addEventListener(`click`, () =>{

        globalFilter();


    })

   })






    // FUNZIONE FILTRO PER PREZZO

    function setInputPrice(){

    let prezzo = data.map((annuncio) => annuncio.price);

    let maxPrezzo = Math.max(...prezzo);

        inputPrezzo.max = Math.ceil(maxPrezzo);

        inputPrezzo.value = Math.ceil(maxPrezzo);

        incrementNumber.innerHTML = Math.ceil(maxPrezzo);


    }

    setInputPrice();

     

     // funzione che filtra per prezzo

     function filterbyPrice(array){

        let filtered = array.filter( (annuncio)=> annuncio.price <= +(inputPrezzo.value));        

        return filtered;

     }    

     
     inputPrezzo.addEventListener('input', ()=>{
         
         incrementNumber.innerHTML = inputPrezzo.value;

         globalFilter();
 
         
     })        

     
     
    // funzione che filtra per parola 

   
    // cattura word input per filtro per parola

    let InputWord = document.querySelector('#InputWord');

    
    // funzione filtra per parola

    function filterbyWord(array){

        let nome = InputWord.value;

        let filtered = array.filter( (annuncio)=> annuncio.name.toLowerCase().includes(nome.toLowerCase()) );

        return filtered;

    }


    InputWord.addEventListener(`input`, ()=>{

        globalFilter();
    })

    
    // FILTRO FINALE

    function globalFilter(){
    
        let filteredByCategory = filtraPerCategoria(data);
    
        let filteredByPrice = filterbyPrice(filteredByCategory);
    
        let filteredByWord = filterbyWord(filteredByPrice);
    
        mostraCard(filteredByWord);
    
    
    }

})



     




    








