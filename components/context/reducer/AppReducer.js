export default function AppReducer(state, action) {
	switch (action.type) {
		case 'INCREASE':
			return { ...state, count: state.count + 1 };
		case 'DECREASE':
			return { ...state, count: state.count - 1 };
		case 'INCREASE_BY':
			return { ...state, count: state.count + action.payload };
		default:
			throw new Error(`Unknown action: ${action.type}`);
	}
}
