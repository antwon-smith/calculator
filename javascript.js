
// var numbers = document.getElementsByClassName('number_keys');


var calcDisplay = document.getElementById('calc_display'); // stores the display element in a variable
var calcButtons = Array.from(document.getElementsByClassName('all_keys')); // returns an array of all the buttons
//var opButtons = Array.from(document.getElementsByClassName('operator_buttons')); // returns an array of the operator buttons

console.log(calcButtons);
//console.log(opButtons);
//document.getElementsByClassName("number_keys").addEventListener("click", )

console.log(calcDisplay.innerText) 

calcButtons.map( button => {
    button.addEventListener('click', (e) => {
        try{
            switch(e.target.innerText){
                // run eval function on string in calcDisplay
                case '=':
                    calcDisplay.innerText = eval(calcDisplay.innerText);
                    break;
                // reset calcDisplay to blank
                case 'AC':
                    calcDisplay.innerText = '';
                    break;
                // add button clicked to calcDisplay
                default:
                    calcDisplay.innerText += e.target.innerText;
            }
        }
        catch {
            calcDisplay.innerText = "Invalid expression"
        }
    })
})




