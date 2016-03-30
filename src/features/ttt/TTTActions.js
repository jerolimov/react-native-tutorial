
/**
 * @param field 1-9
 */
export function selectField(field) {
	return {
		type: 'SELECT_FIELD',
		field
	};
}

export function restartGame() {
	return {
		type: 'RESTART_GAME'
	}
}

export default {
	selectField,
	restartGame
}
