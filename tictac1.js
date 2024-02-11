let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#resetbutton");
let newgame=document.querySelector("#new-game");
let messagecomtainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winningpatter=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked");
    if(turnO){
        box.innerText= "O";
        turnO= false;
}else{
    box.innerText= "X";
    turnO= true;
        }
        box.disabled= true;
        checkWinner();
    });
});
const showWinner = (winner) => {
    msg.innerText =`congratulation, winner is ${winner}`;
    msg-Container.classList.remove("hide");
}
const checkWinner=()=>{
    for(let pattern of winningpatter) {
        console.log(pattern[0],pattern[1],pattern[2]);
       let pos1value=boxes[pattern[0]].innerText;
       let pos2value= boxes[pattern[1]].innerText;
       let pos3value=boxes[pattern[2]].innerText;
       if( pos1value!="" && pos2value!=""&& pos3value!=""){
        if( pos1value=== pos2value &&  pos2value===pos3value){
            console.log("Winner",pos1value);
            showWinner(pos1value);

        }

       }
       
    }
};
