import { INC, DEC } from './counter.type';

export const incrementCounter = () => {
	return {
		type: INC,
	};
}
export const decrementCounter = () => {
	return {
		type: DEC,
	};
}