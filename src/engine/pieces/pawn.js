import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let mySquare = board.findPiece(this);
        let direction = this.player === Player.WHITE? 1:-1;

        let availableMoves = new Array(mySquare.offset(direction,0));

        if(!this.hasMoved){
            availableMove.push(mySquare.offset(direction*2,0))
        }

        return availableMoves
    }
}
