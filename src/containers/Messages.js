import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BaseMessages from '../components/Messages/Messages';
import * as actions from '../store/actions/messages';

const Messages = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.items);
  const currentDialogId = useSelector((state) => state.dialogs.currentDialogId);
  const messagesRef = useRef(null);

  useEffect(() => {
    if (currentDialogId) {
      dispatch(actions.fetchMessages(currentDialogId));
    }
  }, [dispatch, currentDialogId]);

  useEffect(() => {
    messagesRef.current.scrollTo(0, 999999);
  }, [messages]);

  return <BaseMessages blockRef={messagesRef} items={messages} />;
};

export default Messages;
