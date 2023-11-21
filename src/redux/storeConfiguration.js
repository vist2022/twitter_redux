import {createStore} from "redux";
import {twitterReducer} from "./twitterReducer";

const initialState =
	{
		user:
			{
				avatar: 'https://gravatar.com/avatar/0?d=robohash',
				name: 'Roboto'
			},
		stats:
			{
				followers: 1000,
				following: 100
			}
	}

	export const store= createStore(twitterReducer, initialState)