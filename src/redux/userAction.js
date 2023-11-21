export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_AVATAR = 'CHANGE_AVATAR';

export const changeNameAction =  newName =>
(
	{
		type: CHANGE_NAME,
		payload: newName,
	}
);

export const changeAvatarAction =newAvatar =>
	(
		{
			type: CHANGE_AVATAR,
			payload: newAvatar,
		}
	)