/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const row = new Map();
    const col = new Map();
    const square = new Map();

    for (let r=0; r<9; r++){
        for (let c=0; c<9; c++){
            if (board[r][c]==='.') continue;
            const squarekey = `${Math.floor(r/3)},${Math.floor(c/3)}`;

            if(
                (row.get(r) && row.get(r).has(board[r][c]))||
            (col.get(c) && col.get(c).has(board[r][c]))||
            (square.get(squarekey) && square.get(squarekey).has(board[r][c]))
            ){
            return false;
            }

            if(!row.has(r)) row.set(r,new Set());
            if(!col.has(c)) col.set(c,new Set());
            if(!square.has(squarekey)) square.set(squarekey,new Set());

            row.get(r).add(board[r][c]);
            col.get(c).add(board[r][c]);
            square.get(squarekey).add(board[r][c]);
        }
        
    }
    return true;
};