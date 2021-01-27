import React from 'react';
import classnames from 'classnames';
import IconReaded from '../../components/IconReaded/IconReaded';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import './DialogItem.css';

const getAvatar = (avatar) => {
  if (!avatar) {
    return (
      <img
        className="dialog-item__image"
        src="https://sun1-88.userapi.com/impg/c853520/v853520919/24a302/XGrlYioAMQE.jpg?size=50x0&quality=96&crop=3,202,1617,1617&sign=fd2f397a25205ee0b9ef1700fc755b76&ava=1"
        alt=""
      />
    );
  }
  return <img src={avatar} alt="" className="dialog-item__image" />;
};

const getMessageTime = (created_at) => {
  if (isToday(created_at)) {
    return format(created_at, 'hh:mm');
  }
  return format(created_at, 'dd.MM.yyyy');
};

const DialogItem = ({ user, unreaded, isMe, created_at, text }) => (
  <div className={classnames('dialog-item', { 'dialog-item--online': user.isOnline })}>
    <div className="dialog-item__avatar">{getAvatar(user.avatar)}</div>
    <div className="item-info">
      <div className="item-info__top">
        <b>{user.fullname}</b>
        <span>{getMessageTime(created_at)}</span>
      </div>
      <div className="item-info__bottom">
        <p>{text}</p>
        {isMe && <IconReaded isMe isReaded />}
        {unreaded > 0 && <div className="item-info__count">{unreaded > 9 ? '+9' : unreaded}</div>}
      </div>
    </div>
  </div>
);

export default DialogItem;
