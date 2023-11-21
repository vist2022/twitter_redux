import {CHANGE_STATS} from "./statsAction";
import {CHANGE_AVATAR, CHANGE_NAME} from "./userAction";

export const twitterReducer = (state, action) =>
{
	let temp;
	switch (action.type) {
		case CHANGE_STATS:
			let res =  state.stats[action.payload.statsType] + action.payload.sum;
			let stats = {...state.stats, [action.payload.statsType]:res<0?0 : res};
			return {...state, stats};
		case CHANGE_NAME:
			return {...state, user : {...state.user, name:action.payload || state.user.name}}
		case CHANGE_AVATAR:
			return {...state, user: {...state.user, avatar:action.payload || state.user.avatar}}
		default:
			return state;
	}
}