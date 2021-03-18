// Your code here

let dodger = document.getElementById("dodger");
let game = document.getElementById("game");

document.addEventListener("keydown", function(e) {
    console.log(e.key);
    switch (e.key) {

        case "ArrowLeft":{
            moveDodgerLeft(); 
            break;
        }
        
        case "ArrowRight": {
            moveDodgerRight(); 
            break; 
        }
        case "ArrowUp": {
            let bottomNumbers = dodger.style.bottom.replace("px", "");
            let bottom = parseInt(bottomNumbers, 10);
    
            dodger.style.bottom = `${bottom + 1}px`;
            break;
        }
        case "ArrowDown":
            let bottomNumbers = dodger.style.bottom.replace("px", "");
            let bottom = parseInt(bottomNumbers, 10);
            dodger.style.bottom = `${bottom - 1}px`;
            break;
            
      }
  });

  function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0)
    dodger.style.left = `${left - 1}px`;
  }

  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left < 360)
    dodger.style.left = `${left + 1}px`;

  }
  