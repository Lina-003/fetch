import { Episode } from "./episodes";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	episodes: Episode[];
};

export enum EpisodesActions {
	'GET' = 'GET',
}

export interface GetEpisodesAction {
	action: EpisodesActions.GET;
	payload: [Episode];
}
export type Actions = GetEpisodesAction;
