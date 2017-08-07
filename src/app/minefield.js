import minefieldSettings from './data/minefield-settings';
import movesList from './data/moves-list';
export const minefield = {
	template: require('./minefield.html'),
	controller($element) {
		const MAX_COL = 5;
		const MAX_ROW = 4;
		this.$element = $element;
		this.$postLink = () => {
			this.$element.addClass('minefield');
		};
		this.$onInit = () => {
			this.minefield = minefieldSettings;
			this.movesList = angular.copy(movesList);
			this.moveIndex = 0;
			this.uiMoves = [];
			this.moveTurtle();
		};
		this.getNextMove = (index = 0) => {
			return this.movesList[index];
		};
		this.moveTurtle = () => {
			const nextMove = this.getNextMove(this.moveIndex);
			if (angular.isDefined(nextMove)) {
				if (this.isOutOfMinefield(nextMove) || this.cellHasMine(nextMove)) {
					this.failureHandler(nextMove);
				} else {
					this.visitCell(nextMove);
					this.successHandler(nextMove);
				}
			}
		};
		this.isInMinefield = move => {
			return (move.row >= 0 && move.row < MAX_ROW) && (move.col >= 0 && move.col < MAX_COL);
		};
		this.isOutOfMinefield = move => {
			const isOutOfRange = !this.isInMinefield(move);
			if (isOutOfRange) {
				console.log('cell out of range');
			}
			return isOutOfRange;
		};
		this.cellHasMine = move => {
			const hasMine = this.minefield[move.row][move.col].hasMine;
			if (hasMine) {
				console.log('cell has mine!');
			}
			return hasMine;
		};
		this.visitCell = cell => {
			this.minefield[cell.row][cell.col].isVisited = true;
		};
		this.successHandler = move => {
			console.log('OK - ', move.row, ' ', move.col);
			this.moveIndex++;
			if (this.isGameNotOver(move)) {
				this.moveTurtle();
			} else {
				console.log('Turtle is safe!');
			}
		};
		this.failureHandler = move => {
			console.log('Failure - ', move.row, ' ', move.col);
		};
		this.isGameNotOver = move => {
			return move.row !== (MAX_ROW - 1);
		};
	}
};
