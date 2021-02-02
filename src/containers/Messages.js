import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BaseMessages from '../components/Messages/Messages';
import * as actions from '../store/actions/messages';

const Messages = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.items);
  const currentDialogId = useSelector((state) => state.dialogs.currentDialogId);

  useEffect(() => {
    if (currentDialogId) {
      dispatch(actions.fetchMessages(currentDialogId));
    }
  }, [dispatch, currentDialogId]);

  return <BaseMessages items={messages} />;
};

export default Messages;
