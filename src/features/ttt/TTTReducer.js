
const INITIAL_STATE = {
	gameField: [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	next: 1,
	winner: 0
};

function isSamePlayerOnFields(gameField, field1, field2, field3) {
	if (gameField[field1] === gameField[field2] && gameField[field2] === gameField[field3]) {
		return gameField[field1];
	} else {
		return 0;
	}
}

export function getWinner(gameField) {
	return isSamePlayerOnFields(gameField, 0, 1, 2) ||
			isSamePlayerOnFields(gameField, 3, 4, 5) ||
			isSamePlayerOnFields(gameField, 6, 7, 8) ||
			isSamePlayerOnFields(gameField, 0, 3, 6) ||
			isSamePlayerOnFields(gameField, 1, 4, 7) ||
			isSamePlayerOnFields(gameField, 2, 5, 8) ||
			isSamePlayerOnFields(gameField, 0, 4, 8) ||
			isSamePlayerOnFields(gameField, 2, 4, 6);
}

export function isDraw(gameField) {
	return gameField.indexOf(0) === -1;
}

export default function TTTReducer(state = INITIAL_STATE, action) {

	console.log('TTTReducer receive action:', action);

	switch (action.type) {
		case 'SELECT_FIELD': {

			// Verify input
			if (state.gameField[action.field] !== 0) {
				console.warn('Field ' + action.field + ' already in use (' + state.gameField[action.field] + ')!');
				return state;
			} else if (state.winner !== 0) {
				console.warn('Game is already finished! Player ' + state.winner + ' wons!');
				return state;
			}

			// Calculate new gamefield and winner
			const gameField = [
				...state.gameField.slice(0, action.field),
				state.next,
				...state.gameField.slice(action.field + 1)
			];
			const next = isDraw(gameField) ? 'draw' : state.next === 1 ? 2 : 1;
			const winner = isDraw(gameField) ? 'draw' : getWinner(gameField);

			console.log('TTTReducer game state:', {
				gameField,
				next,
				winner
			});

			return {
				...state,
				gameField,
				next,
				winner
			};
		}

		case 'RESTART_GAME': {
			return INITIAL_STATE;
		}

		default:
			return state;
	}
}
