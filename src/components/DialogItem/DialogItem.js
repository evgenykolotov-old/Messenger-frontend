import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import './DialogItem.css';
import IconReaded from '../../components/IconReaded/IconReaded';
import Avatar from '../Avatar/Avatar';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import * as actions from '../../store/actions/dialogs';
import { getCurrentDialogId } from '../../store/selectors/dialogs';

const getMessageTime = (date) => {
  const messageTime = new Date(date);
  if (isToday(messageTime)) {
    return format(messageTime, 'hh:mm');
  }
  return format(messageTime, 'dd.MM.yyyy');
};

const DialogItem = ({ _id, isMe, createdAt, lastMessage, partner }) => {
  const dispatch = useDispatch();
  const currentDialogId = useSelector(getCurrentDialogId);
  const onSelectDialog = () => dispatch(actions.setCurrentDialog(_id));

  return (
    <div
      className={classnames('dialog-item', {
        'dialog-item--online': partner.isOnline,
        'dialog-item--selected': currentDialogId === _id,
      })}
      onClick={onSelectDialog}
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
  );
};

DialogItem.propTypes = {
  _id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  isMe: PropTypes.bool,
};

export default DialogItem;
