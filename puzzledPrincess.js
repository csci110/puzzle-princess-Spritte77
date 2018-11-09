import { game, Sprite } from "./sgc/sgc.js";
game.setBackground("floor.png");


class Marker extends Sprite {
    constructor(board, image, name) {
        super();
        this.board = board;
        this.image = image;
        this.name = name;
        this.setImage("image");
        this.x = this.startX = 150;
        this.y = this.startY = 275;
    }
}
class PrincessMarker extends Marker {
    constructor(board) {
        super();
        this.board = board;
        this.setImage("annFace.png");
        this.name = "Princess Ann";
        this.dragging = false;
    }
    handleMouseLeftButtonDown() {
        this.dragging = true;
    }
    handleMouseLeftButtonUp() {
        this.dragging = false;
        let row = Math.floor((this.y - this.board.y)/this.board.squareSize);
        let col = Math.floor((this.x - this.board.x)/this.board.squareSize); 
        if (this.row < 0 || this.row > 2) {
            this.x = this.startX;
            this.y = this.startY;
        }
        if (this.col < 0 || this.col > 2){
            this.x = this.startX;
            this.y = this.startY;
        }
      return;  
    }
    handleGameLoop() {
        if (this.dragging === true) {
            this.x = game.getMouseX() - this.width / 2;
            this.y = game.getMouseY() - this.height / 2;
        }
    }
}
class StrangerMarker extends Marker {}
class TicTacToe extends Sprite {
    constructor() {
        super();
        this.name = "name";
        this.setImage("board.png");
        this.x = 300;
        this.y = 85;
        this.squareSize = 150;
        this.size = 3;
        this.activeMarker;
    }
    takeTurns() {
        this.activeMarker = new PrincessMarker(this);
    }
}

let theBoard = new TicTacToe();
theBoard.takeTurns();
