import { getApi } from "../services/getApi";
import { EpisodesActions, GetEpisodesAction } from "../types/store";


export const getEpisodes =async () : Promise<GetEpisodesAction> => {
	const eps = await getApi();
	return {
		action: EpisodesActions.GET,
		payload: eps,
	};
};
