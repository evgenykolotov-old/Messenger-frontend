import React from 'react';
import classnames from 'classnames';
import { Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { getCurrentDialogId, getDialogs } from '../../store/selectors/dialogs';
import { getUser } from '../../store/selectors/user';
import './Status.css';

const Status = () => {
  const dialogs = useSelector(getDialogs);
  const currentDialogId = useSelector(getCurrentDialogId);
  const dialog = dialogs.filter((dialog) => dialog._id === currentDialogId)[0] || {};
  const user = useSelector(getUser);

  if (!dialogs.length || !currentDialogId) {
    return null;
  }

  let partner = {};

  if (dialog.author._id === user._id) {
    partner = dialog.partner;
  } else {
    partner = dialog.author;
  }

  return (
    <div className='chat-dialog__header'>
      <div />
      <div className='chat-dialog__header-center'>
        <b className='chat-dialog__header-username'>{partner.fullname}</b>
        <div className='chat-dialog__header-status'>
          <span className={classnames('status', { 'status--online': partner.isOnline })}>
            {partner.isOnline ? 'online' : 'offline'}
          </span>
        </div>
      </div>
      <Button
        type='ghost'
        shape='circle'
        icon={<EllipsisOutlined style={{ fontSize: '22px' }} />}
      />
    </div>
  );
};

export default Status;
