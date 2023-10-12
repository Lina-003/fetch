import { AppState, EpisodesActions } from '../types/store';

import { Actions } from '../types/store';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	console.log(currentAction);
	const { action, payload } = currentAction;

	switch (action) {
		case EpisodesActions.GET:
			return {
				...currentState,
				episodes: payload,
			};

		default:
			return currentState;
	}
};
