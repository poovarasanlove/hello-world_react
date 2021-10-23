import { INC , DEC } from './counter.type';

const INI_STATE = {
	count : 0,
};

const reducer = (state = INI_STATE, action) => {
	switch (action.type){
		case INC:
			return {
				...state, count: state.count + 1,
			};
		case DEC:
			return{
				...state, count: state.count - 1,
			};
			default: return state;
	}
};

export default reducer;