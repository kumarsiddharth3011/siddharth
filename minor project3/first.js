let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turn0 = true;
 const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
 ];

 const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
 };

 boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn0){
        box.innerText = "0";
      turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
 });
});

const disableBoxes = () => {
  for( let box of boxes){
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for( let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `congratulation,  Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
  
};

const checkWinner = () => {
  for( let Pattern of winpattern){
    let pos1val = boxes[Pattern[0]].innerText;
    let pos2val = boxes[Pattern[1]].innerText;
    let pos3val = boxes[Pattern[2]].innerText;

 if (pos1val != "" && pos2val != "" && pos3val != "") {
  if (pos1val === pos2val && pos2val === pos3val){
    console.log("winner", pos1val);
    showWinner(pos1val);
 }
 }
}
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);