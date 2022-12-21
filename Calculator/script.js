

let screen = document.querySelector(".screen")
let buttons = document.querySelectorAll(".btn")
let clear = document.querySelector(".btn-clear")



function calculator(){
    buttons.forEach( function (button){
        button.addEventListener("click", (e) =>{
            let value = e.target.dataset.num;
            screen.value += value
        })
       
    })
 
    
}
function son (){
    let equal = document.querySelector(".btn-equal")
equal.addEventListener("click", (e) =>{
    if(screen.value === ""){
        screen.value = "";
    }else{
        let ans = eval(screen.value)
        screen.value = ans
    }
})}

function cl(){
clear.addEventListener("click", (e) =>{
    screen.value = ""
})
}





calculator();
son();
cl();

