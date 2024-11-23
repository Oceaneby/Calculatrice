let button = document.querySelectorAll(".btn");

let input = document.querySelector("input");


let calculEnCours = "";

for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', function(){
       let value = button[i].innerHTML;

    //    console.log(button[i].innerHTML);
       

       if(value === "="){
        input.value = (eval(calculEnCours));
 /* CalculeEnCours : Très perturbent car vide donc ne pas hésiter a rechcerhcer l'explication*/       
       }
       else if ( value === "c"){
        calculEnCours = "";
        input.value = 0;
       }
       else {
        calculEnCours += value;
        input.value = calculEnCours;
       }
    //    console.log(value);
        
    })
}



// ************************** CLAVIER ***********************************

document.addEventListener("keydown", function(event){
       let boutonClavier = event.key;

       if(boutonClavier === "Enter"){
        input.value = (eval(calculEnCours));
 /* CalculeEnCours : Très perturbent car vide donc ne pas hésiter a rechcerhcer l'explication*/       
//  console.log(boutonClavier);
 
       }
       else if ( boutonClavier === "Backspace"){
        calculEnCours = "";
        input.value = 0;
       }
       else {
        calculEnCours += boutonClavier;
        input.value = calculEnCours;
        console.log(boutonClavier);
        
       }
  
        
    })

