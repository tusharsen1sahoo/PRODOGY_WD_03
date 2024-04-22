const boxes = document.querySelectorAll('.cell');
    const statusText = document.querySelector('#statusText');
    const restartBTN = document.querySelector('#reset');
    const wincondition = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]
    ];
    let options = ["", "", "", "", "", "", "", "", ""];
    let isRunnig = false;
    let currentTurn = "X";
    startGame();
    function startGame() {
        isRunnig = true;
        boxes.forEach((box)=>box.addEventListener('click',buttonClicked));
        restartBTN.addEventListener('click',restartGame);
        statusText.innerText = `${currentTurn}'s Turn`;
        
    }

    function buttonClicked() {
           const Index=this.getAttribute('cellIndex');
           if(options[Index]!=""||!isRunnig){
            return;
           }
           update(this,Index);
           checkWin();
    }
    function update(box,index) {
         options[index]=currentTurn;
         box.textContent=currentTurn;
         

    }

    function changePlayer() {
           currentTurn=(currentTurn==='X')?"O":"X";
           statusText.textContent=`${currentTurn}'s turn`

    }
    function checkWin() {
          let iswin=false;
          for(let i=0;i<wincondition.length;i++){
            const condition=wincondition[i]
           const cellA=options[condition[0]];
           const cellB=options[condition[1]];
           const cellC=options[condition[2]];
           if(cellA===""||cellB===""||cellC===""){
           continue;
           }
           if(cellA===cellB && cellA===cellC){
            iswin=true;
            break;
           }
          }
          if(iswin==true){
            statusText.innerText=`${currentTurn}  win!!!`;
            isRunnig=false;

          }
          else if(!options.includes("")){
            statusText.textContent=`Draw!!`;
            isRunnig=false;

          }
          else
             changePlayer();
    }
    function restartGame() {
        currentTurn="X";
        statusText.innerText = `${currentTurn}'s Turn`;
        boxes.forEach((box)=>box.textContent="");
        isRunnig=true;
        options = ["", "", "", "", "", "", "", "", ""];
        

    }
