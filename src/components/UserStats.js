import React from 'react';
import UserAvatar from "./UserAvatar";
import {useDispatch, useSelector} from "react-redux";
import {changeStatsAction} from "../redux/statsAction";

const UserStats = () => {
	const name = useSelector(state => state.user.name);

	const followers = useSelector(state => state.stats.followers);
	const following = useSelector(state => state.stats.following);
	const dispatch = useDispatch();

	return (
		<div className={'user-stats'}>
			<div>
				<UserAvatar/>
				{name}
			</div>
			<div className='stats'>
				<div onClick={() => dispatch(changeStatsAction('followers', 1))}
				     onContextMenu={(e) => {
					     e.preventDefault();
					     dispatch(changeStatsAction('followers', -1));
				     }}>Followers: {followers}</div>
				<div onClick={() => dispatch(changeStatsAction('following', 1))}
				     onContextMenu={(e) => {
					     e.preventDefault();
					     dispatch(changeStatsAction('following', -1));
				     }}>Following: {following}</div>
			</div>
		</div>
	);
};

export default UserStats;