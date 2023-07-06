let buttonOption=document.querySelectorAll(".button-option");
let resetBtn=document.querySelector("#reset");
let popup=document.querySelector(".popup");
let message=document.querySelector("#message");
let newGame=document.querySelector("#new-game");
let ting=new Audio('ting.mp3');
let gameOver=new Audio('gameover.mp3');

let isGameOver=false;


let turn='x';
const changeTurn=()=>{
    return turn==='x'?'0':'x';
}
newGame.addEventListener("click",function(){
    document.querySelector(".wrapper").classList.remove("hide");
    buttonOption.forEach(element =>{
        element.innerHTML="";
       
      });
      document.querySelector("#message").innerHTML="Turn For X" ; 

document.querySelector(".popup").classList.add("hide");
})
resetBtn.addEventListener("click",function(){
   buttonOption.forEach(element =>{
     element.innerHTML="";
     gameOver.play();
   });
 
});
const winFuntion=(winvariable)=>{
document.querySelector(".wrapper").classList.add("hide");
document.querySelector(".popup").classList.remove("hide");
document.querySelector("#win").innerHTML=winvariable + " won the game";
 
}
let winArray=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const  checkWin=()=>{

    winArray.forEach(e=>{
if((buttonOption[e[0]].innerHTML===buttonOption[e[1]].innerHTML)&&(buttonOption[e[2]].innerHTML===buttonOption[e[0]].innerHTML) &&(buttonOption[e[0]].innerHTML !='')){
    let winvariable=buttonOption[e[0]].innerHTML;
   
     winFuntion(winvariable);
     
}
    });
//winning array pattern

//  for(let i of winArray){
// console.log(buttonOption[i[0]].innerHTML);

//  //check win and check box is not empty as well
//  if( buttonOption[i[0]].innerText !="" &&  buttonOption[i[1]].innerText !="" &&  buttonOption[i[3]].innerText !=""){
//     if( buttonOption[i[0]].innerText=== buttonOption[i[1]].innerText=== buttonOption[i[2]].innerText){
//         //winFuntion(element1);
//       console.log( buttonOption[i[0]].innerText +"win");
       
      
       
//     }
//  }
//  }
}
buttonOption.forEach(element => {
    element.addEventListener('click',()=>{
        if(element.innerHTML===''){
            element.innerHTML=turn;
           turn= changeTurn();
            ting.play();
            checkWin();
            document.querySelector("#message").innerHTML="Turn For " + turn; 
          
      
          
          

        }
    });
});