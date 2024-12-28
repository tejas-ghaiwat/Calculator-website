let input=document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');       //stored all the button in one variable
let string = "";             //user current input stored
let arr = Array.from(buttons);       //button collection nodelist array stored in variable arr
arr.forEach(button =>{                         //foreach method execute provided function
    button.addEventListener('click',(event)=>{           //inside foreach loop use addEventListener // event is obj that contain information about the click event 
        if(event.target.innerHTML == '='){
            string = eval(string);                            //function evaluate js expression stored in string variable
            input.value = string;                              //update input with result of calculation
        }
        else if(event.target.innerHTML == 'AC'){
            string = "";                                  //clear all the input field
            input.value = string;
        }
        else if(event.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);               //remove last charat from the string
            input.value = string;
        }else{
            string += event.target.innerHTML;                            //append the button innerHTML to the string
            input.value = string;
        }
    })
})
