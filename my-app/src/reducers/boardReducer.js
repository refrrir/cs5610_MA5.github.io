const defaultState = {
    board: [
        ['', ''],
        ['', ''],
    ],
    count: 0,
};

export default function boardReducer(
    state = defaultState, action
) {
    if (action.type === 'BoardClick') {
        const board = state.board;
        const value = board[action.x][action.y];
        if (value === '') {
            board[action.x][action.y] = 'X';
            state.count ++;
        } else {
            board[action.x][action.y] = '';
            state.count --;
        }
        return {...state, board: [...board]};
    }
    return state;
}