import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  currentPlayer: string = 'O';
  board: string[] = [
    null, null, null,
    null, null, null,
    null, null, null
  ];
  message: string = '';
  gameOver: boolean = false;

  markSquare(idx) {
    if (this.board[idx]) {
      return;
    }
    this.board[idx] = this.currentPlayer;
    if (this.currentPlayer === 'O') {
      this.currentPlayer = 'X';
    } else {
      this.currentPlayer = 'O';
    }
    this.updateStatus();
  }

  ngOnInit() {
    this.updateStatus();
  }

  updateStatus() {
    let winner = this.getWinner();
    if (winner) {
      this.message = `${winner} wins!`;
      this.gameOver = true;
    } else if (this.isDraw()) {
      this.message = 'Draw';
      this.gameOver = true;
    } else {
      this.message = `${this.currentPlayer}'s turn`;
    }
  }

  isDraw() {
    return this.board.every(square => !!square);
  }

  getWinner() {
    if (this.isWinner('O')) {
      return 'O';
    } else if (this.isWinner('X')) {
      return 'X';
    } else {
      return null;
    }
  }

  isWinner(p) {
    let b = this.board;
    return (
      b[0] === p && b[1] === p && b[2] === p ||
      b[3] === p && b[4] === p && b[5] === p ||
      b[6] === p && b[7] === p && b[8] === p ||
      b[0] === p && b[3] === p && b[6] === p ||
      b[1] === p && b[4] === p && b[7] === p ||
      b[2] === p && b[5] === p && b[8] === p ||
      b[0] === p && b[4] === p && b[8] === p ||
      b[2] === p && b[4] === p && b[6] === p
    );

  }

  reset() {
    this.currentPlayer = 'O';
    this.board = [
      null, null, null,
      null, null, null,
      null, null, null
    ];
    this.message = '';
    this.gameOver = false;
  }

}
