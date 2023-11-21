import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeAvatarAction, changeNameAction} from "../redux/userAction";

const UserAvatar = ({size}) =>
{
    const name= useSelector(state => state.user.name);
    const avatar=useSelector(state => state.user.avatar);
    console.log(name)
    const  dispatch = useDispatch();

    return <img className={`user-avatar ${size}`} src={avatar} alt={name}
                onClick={() => dispatch(changeAvatarAction(prompt('Enter new avatar url')))}
                onContextMenu={event =>
                {
                    event.preventDefault();
                    dispatch(changeNameAction(prompt('Enter new nickname')));
                }}/>;
};

export default UserAvatar;