var myGamePiece;
   
   
   var myGameArea = {
       canvas : document.createElement("canvas"),
       start : function() {
           
           this.context = this.canvas.getContext("2d");
           this. GameBoard = new Image();
           this.GameBoard.src = "GameField.png";
           this.canvas.width = 500;
           this.canvas.height = 400;
           
           
           document.body.insertBefore(this.canvas, document.body.childNodes[0]);
           this.context.drawImage(this.GameBoard,0,0,500,400);
           
           
       },
       clear : function() {
           this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
           this.GameBoard = new Image();
           this.GameBoard.src = "GameField.png";
           this.context.drawImage(this.GameBoard,0,0,400,400);
       }
   }
 
 
 function startGame() {
    myGamePiece = new component(40, 30, 200, 200, "Red.png","GameField.png");
    myGameArea.start();
    updateGameArea();
    
}

function component(width, height, x, y,image,GameField) {
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image;
    this.GameBoard = new Image();
    this.GameBoard.src = GameField; 
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.drawImage(this.GameBoard,0,0,500,400);
        ctx.drawImage(this.image, 
             this.x, 
             this.y,
             this.width, this.height);
    }
      
}
function Resumewalking(){
 document.onkeydown = checkKey;
}
function updateGameArea() {
    myGameArea.clear();
       
    myGamePiece.update();

    if(Math.round(Math.random() * 100) == 8){
      document.onkeydown = "";
      PlayCard();
      $('#BattleBoard').modal();
    }
}





function checkKey(e) {

 e = e || window.event;

 if (e.keyCode == '38') {
     // up arrow
     myGamePiece.y -= 1;
     if(myGamePiece.y < 0){
      
      myGamePiece.y += 1;
    }
     
     updateGameArea();
 }
 else if (e.keyCode == '40') {
     // down arrow
     myGamePiece.y += 1;
     if(myGamePiece.y > 370){
      
       myGamePiece.y -= 1;
     }
     updateGameArea();
 }
 else if (e.keyCode == '37') {
    // left arrow
    myGamePiece.x -= 1;
    if(myGamePiece.x < 0){
      
      myGamePiece.x += 1;
    }
    updateGameArea();
 }
 else if (e.keyCode == '39') {
    // right arrow
    myGamePiece.x += 1; 
    if(myGamePiece.x > 460){
      
      myGamePiece.x -= 1;
    }
    updateGameArea();
 }

}


