import React from 'react';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './DialogItem.css';
import IconReaded from '../../components/IconReaded/IconReaded';
import Avatar from '../Avatar/Avatar';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import { getCurrentDialogId } from '../../store/selectors/dialogs';

const getMessageTime = (date) => {
  const messageTime = new Date(date);
  if (isToday(messageTime)) {
    return format(messageTime, 'hh:mm');
  }
  return format(messageTime, 'dd.MM.yyyy');
};

const DialogItem = ({ _id, isMe, createdAt, lastMessage, partner }) => {
  const currentDialogId = useSelector(getCurrentDialogId);

  return (
    <Link to={`/dialog/${_id}`}>
      <div
        className={classnames('dialog-item', {
          'dialog-item--online': partner.isOnline,
          'dialog-item--selected': currentDialogId === _id,
        })}
      >
        <div className='dialog-item__avatar'>
          <Avatar user={partner} />
        </div>
        <div className='dialog-item-info'>
          <div className='dialog-item-info__top'>
            <b>{partner.fullname}</b>
            <span>{getMessageTime(createdAt)}</span>
          </div>
          <div className='dialog-item-info__bottom'>
            <p>{lastMessage.text}</p>
            {isMe && <IconReaded isMe isReaded />}
            {lastMessage.readed > 0 && (
              <div className='dialog-item-info__count'>
                {lastMessage.readed > 9 ? '+9' : lastMessage.readed}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(DialogItem);
