import React from 'react';
import classnames from 'classnames';
import { useDispatch } from 'react-redux';

import './DialogItem.css';
import IconReaded from '../../components/IconReaded/IconReaded';
import Avatar from '../Avatar/Avatar';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import * as actions from '../../store/actions/dialogs';

const getMessageTime = (created_at) => {
  if (isToday(created_at)) {
    return format(created_at, 'hh:mm');
  }
  return format(created_at, 'dd.MM.yyyy');
};

const DialogItem = ({ _id, user, unreaded, isMe, created_at, text, currentDialogId }) => {
  const dispatch = useDispatch();
  const onSelectDialog = () => dispatch(actions.setCurrentDialog(_id));

  return (
    <div
      className={classnames('dialog-item', {
        'dialog-item--online': user.isOnline,
        'dialog-item--selected': currentDialogId === _id,
      })}
      onClick={onSelectDialog}
    >
      <div className="dialog-item__avatar">
        <Avatar user={user} />
      </div>
      <div className="item-info">
        <div className="item-info__top">
          <b>{user.fullname}</b>
          <span>{getMessageTime(new Date(created_at))}</span>
        </div>
        <div className="item-info__bottom">
          <p>{text}</p>
          {isMe && <IconReaded isMe isReaded />}
          {unreaded > 0 && <div className="item-info__count">{unreaded > 9 ? '+9' : unreaded}</div>}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
