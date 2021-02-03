import React, { useEffect, useRef } from 'react';
import classnames from 'classnames';
import { Empty, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import './Messages.css';
import Message from '../Message/Message';
import { getLoading, getMessages } from '../../store/selectors/messages';
import { getCurrentDialogId } from '../../store/selectors/dialogs';
import * as actions from '../../store/actions/messages';

const Messages = () => {
  const messagesRef = useRef(null);
  const dispatch = useDispatch();
  const messages = useSelector(getMessages);
  const isLoading = useSelector(getLoading);
  const currentDialogId = useSelector(getCurrentDialogId);

  useEffect(() => {
    if (currentDialogId) {
      dispatch(actions.fetchMessages(currentDialogId));
    }
  }, [dispatch, currentDialogId]);

  useEffect(() => {
    messagesRef.current.scrollTo(0, 999999);
  }, [messages]);

  return (
    <div className="chat-dialog__messages">
      <div ref={messagesRef} className={classnames('messages', { 'messages--loading': isLoading })}>
        {isLoading ? (
          <Spin size="large" tip="Загрузка сообщений..." />
        ) : !isLoading && messages ? (
          messages.length > 0 ? (
            messages.map((message) => <Message key={message._id} {...message} />)
          ) : (
            <Empty description="Диалог пуст" />
          )
        ) : (
          <Empty description="Откройте диалог" />
        )}
      </div>
    </div>
  );
};

export default Messages;
