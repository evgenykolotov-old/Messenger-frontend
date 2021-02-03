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

const DialogItem = ({ _id, user, unreaded, isMe, created_at, text }) => {
  const dispatch = useDispatch();
  const currentDialogId = useSelector(getCurrentDialogId);
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
      <div className="dialog-item-info">
        <div className="dialog-item-info__top">
          <b>{user.fullname}</b>
          <span>{getMessageTime(created_at)}</span>
        </div>
        <div className="dialog-item-info__bottom">
          <p>{text}</p>
          {isMe && <IconReaded isMe isReaded />}
          {unreaded > 0 && (
            <div className="dialog-item-info__count">{unreaded > 9 ? '+9' : unreaded}</div>
          )}
        </div>
      </div>
    </div>
  );
};

DialogItem.propTypes = {
  _id: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  isMe: PropTypes.bool,
};

export default DialogItem;
