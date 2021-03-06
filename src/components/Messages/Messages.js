import React, { useEffect, useRef, useCallback } from 'react';
import classnames from 'classnames';
import { Empty, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import socket from '../../core/socket';

import './Messages.css';
import Message from '../Message/Message';
import { getLoading, getMessages } from '../../store/selectors/messages';
import { getCurrentDialogId } from '../../store/selectors/dialogs';
import { getUserId } from '../../store/selectors/user';
import * as actions from '../../store/actions/messages';

const Messages = () => {
  const messagesRef = useRef(null);
  const dispatch = useDispatch();
  const messages = useSelector(getMessages);
  const isLoading = useSelector(getLoading);
  const userId = useSelector(getUserId);
  const currentDialogId = useSelector(getCurrentDialogId);

  const onNewMessage = useCallback(
    (message) => {
      dispatch(actions.addMessage(message));
    },
    [dispatch]
  );

  useEffect(() => {
    if (currentDialogId) {
      dispatch(actions.fetchMessages(currentDialogId));
    }

    socket.on('SERVER:NEW_MESSAGE', onNewMessage);

    return () => socket.removeListener('SERVER:NEW_MESSAGE', onNewMessage);
  }, [dispatch, currentDialogId, onNewMessage]);

  useEffect(() => {
    messagesRef.current.scrollTo(0, 999999);
  }, [messages]);

  return (
    <div className='chat-dialog__messages'>
      <div
        ref={messagesRef}
        className={classnames('messages', { 'messages--loading': isLoading })}
      >
        {isLoading ? (
          <Spin size='large' tip='Загрузка сообщений...' />
        ) : !isLoading && messages ? (
          messages.length > 0 ? (
            messages.map((message) => (
              <Message
                key={message._id}
                isMe={userId === message.user._id}
                {...message}
              />
            ))
          ) : (
            <Empty description='Диалог пуст' />
          )
        ) : (
          <Empty description='Откройте диалог' />
        )}
      </div>
    </div>
  );
};

export default React.memo(Messages);
