//Starts a new game
//Sources: Personal friends Jeremy E. Kenedy, Brain Nguyen current student at Arizona State University, family memeber Caleb French. I used this site for inspiration, and guidance: https://www.101computing.net/connect4-challenge/. I also refered back to past assignments to look at syntax. Fernando Puentes got advice on how to style our board from Kenzie Facilitator Lord Manny. 


let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ]
  //Worked on by Team Thistle minus Jonathan Haynes.

  let jEdge = board[0].length - 3;
  let iEdge = board.length - 3;
  
  //Checking for a connect four
  
  let checkIfConnectFour = function() {
    let winningNumber = 0
    //checking for horizontal
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < jEdge; j++) {
              
                let piece = board[i][j];
                
                if(piece !== 0) {
                    if(piece === board[i][j + 1] && piece === board[i][j + 2] && piece === board[i][j + 3]) {
                    console.log("4 in a row horizontally at " + (j + 1) + ":" + (i + 1))
                    winningNumber += 10
                    }
              }
            }
          }
    
  
    //end of check for horizonal
  
    //checking for vertical
  
        for(let i = 0; i < iEdge; i++){
            for(let j = 0; j < board[i].length; j++) {
              
                let piece = board[i][j];
                
                if(piece !== 0) {
                    if(piece === board[i + 1][j] && piece === board[i + 2][j] && piece === board[i + 3][j]) {
                    console.log(" 4 in a row vertically at " + (j + 1) + ":" + (i + 1))
                    winningNumber += 50
                    }
              }
            }
          }
    //end of check for vertical
  
    //checking for diagonal going up
        for(let i = 3; i < board.length ; i++){
            for(let j = 0; j < jEdge; j++) {
              
                let piece = board[i][j];
                
                if(piece !== 0) {
                    if(piece === board[i - 1][j + 1] && piece === board[i - 2][j + 2] && piece === board[i - 3][j + 3]) {
                    console.log("4 in a row diagonally going up at " + (j + 1) + ":" + (i + 1))
                    winningNumber += 100
                    }
              }
            }
          }
    //end of d.g.u
  
    //checking for diagonal goin down
        for(let i = 0; i < iEdge; i++){
            for(let j = 0; j < jEdge; j++) {
                
                let piece = board[i][j];
                
                if(piece !== 0) {
      
                    // Check the next two cells for the same value
                    if(piece === board[i + 1][j + 1] && piece === board[i + 2][j + 2] && piece === board[i + 3][j + 3]) {
                      console.log("4 in a row diagonally going down at " + (j + 1) + ":" + (i + 1))
                      winningNumber += 150
                    }
            
                }
          
            }
        }
    //end of d.g.d
  console.log(`winning number is ${winningNumber}`)
        if (winningNumber > 0){
            return true
        } else {
            return false
        }
  
  }
  
  
  
  
  //Checking for a TIE
  
  let checkIfTie = function() {
    let allRowsHaveNumbers = 6
    let rowCounter = 0
  
    let allPiecesDropped = 42
    let pieceCounter = 0
    
    for(i = 0; i < board.length; i++){
        let rowString = board[i].join(',')
        let row = board[i]
        if (rowString !== '0 ,0 ,0 ,0 ,0 ,0 ,0'){
            rowCounter += 1
            for(j = 0; j < row.length; j++) {
                let piece = board[i][j]
                if (piece !== 0) {
                    pieceCounter += 1
                } else if (piece === 0) {
                    console.log(`row ${i} piece ${j} is a zero`)
                    return false
                }
            }
        
        } else if (rowString === '0 ,0 ,0 ,0 ,0 ,0 ,0') {
            console.log(`index ${i} is all zeroes`)
            return false
        }
    }
    console.log(`total pieces: ${pieceCounter}`)
    console.log(`total non-zero rows: ${rowCounter}`)
  
    if ((rowCounter === allRowsHaveNumbers) && (pieceCounter === allPiecesDropped) && (checkIfConnectFour(board) === false)){
        console.log(`We have a tie`)
        return true}
  }
  
  
  //Checking if game is over
  let noticeDiv = document.getElementById('eventBox')
  
  let checkIfGameOver = function (player) {
    if (checkIfConnectFour(board) > 0 && player === 1) {
      eventText.innerText = "WINNER!"
      setTimeout(function(){
        document.getElementById('restart').style.display = "none"
        document.getElementById('overlayText').innerText = 'PLAYER 2 HAS WON!'
        document.getElementById('overlayText').style = 'color: #f3cf00;'
        document.getElementById("overlay").style.display = "block";
        document.getElementById('overlayRestart').style = 'color: #f3cf00;'
        document.getElementById("overlayRestart").addEventListener("click", function(){
            location.reload()})
  
      }, 500);
      return true;
    } else if (checkIfConnectFour(board) > 0 && player === 2) {
      eventText.innerText = "WINNER!"
      setTimeout(function(){
        document.getElementById('restart').style.display = "none"
        document.getElementById('overlayText').innerText = 'PLAYER 1 HAS WON!'
        document.getElementById('overlayText').style = 'color: #d95641;'
        document.getElementById("overlay").style.display = "block";
        document.getElementById('overlayRestart').style = 'color: #d95641;'
        document.getElementById("overlayRestart").addEventListener("click", function(){
            location.reload()})
      }, 200);
      return true;
    } else if (checkIfTie(board) === true) {
        eventText.innerText = "A TIE?!?!"
        setTimeout(function(){
          document.getElementById('restart').style.display = "none"
          document.getElementById('overlayText').innerText = "WE HAVE A TIE!"
          document.getElementById('overlayText').style = 'color: white;'
          document.getElementById("overlay").style.display = "block";
          document.getElementById('overlayRestart').style = 'color: white;'
          document.getElementById("overlayRestart").addEventListener("click", function(){
              location.reload()})
        }, 200);
      return true;
    } else {
      return false;
    }
  };
  
  
  
  
  //-----------------------------------------------------------
  let player = 1
  let eventText = document.getElementById("eventBox")
  let columns = []
  
  //Rendering each column of the board as a button
  let renderColumns = function () {
    for (let j = 0; j < board[0].length; j++) {
        let gameColumn = document.createElement("button")
        gameColumn.classList.add("chooseColumn")
        gameColumn.classList.add(`${j}`)
        gameColumn.style.height = (board.length * 60) + "px"
        gameBoard.append(gameColumn) 
        columns.push(gameColumn)
    }
  }
  // Creating the game board
  let gameBoard = document.getElementById("board")
  gameBoard.style.width = (board[0].length * 75) + "px"
  gameBoard.style.height = (board.length * 60) + "px"
  
  // Columns are rendered to the board
  renderColumns() 
  
  //Rendering the board to the DOM
  let renderBoard = function () {
    // Resets Column HTML
    for (let j = 0; j < board[0].length; j++) {
        columns[j].innerHTML = ""
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            // Creates a game piece in the DOM
            let gamePiece = document.createElement("span")
            let piece = board[i][j]
            if (piece !== 0) {
                // Changes game piece color based on player
                if (piece === 1) {
                    gamePiece.classList.add("piece")
                    gamePiece.classList.add("playerOnePiece")
                    
                } else if (piece === 2) {
                    gamePiece.classList.add("piece")
                    gamePiece.classList.add("playerTwoPiece")
                }
                // Adds pieces to the columns based on player
                columns[j].append(gamePiece)
            } else {
                // Creates a empty piece in the DOM and appends it to the column
                gamePiece.classList.add("piece")
                gamePiece.classList.add("emptyPiece")
                columns[j].append(gamePiece)
            }
        }
    }
  }
  renderBoard()
  //Alternate between players
  let alternatePlayer = function () {
    if (player === 1) {
        player = 2
        eventText.innerText = "Player Two's Turn!"
    } else if (player === 2){
        player = 1
        eventText.innerText = "Player One's Turn!"
    }
  }
  
  let dropPiece = function (player, column) {
    let lastRow = 0
    for (let i = 0; i < board.length; i++) {
        if (board[i][column] === 0) {
            lastRow++
        }
    }
    if (lastRow === 0) {
        eventText.innerText = "Column Full!"
        return  
    } else {
        board[lastRow - 1][column] = player
        alternatePlayer()    
    }
  }
  
  //Creates buttons for columns
  for (let j = 0; j < columns.length; j++) {
    let columnButton = columns[j]
    columnButton.addEventListener("click", function () {
        dropPiece(player, j)
        renderBoard()
        checkIfGameOver(player)
        console.log(board)
    })
  }
    
  let newGame = function () {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[i][j] = 0
        }
    }
    eventText.innerText = 'Start Game!'
    renderBoard()
  
  }
  
  let restartButton = document.getElementById('restart')
  restartButton.addEventListener("click", function(){
    location.reload()
  })