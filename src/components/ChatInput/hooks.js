import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/messages';
import { getCurrentDialogId } from '../../store/selectors/dialogs';

const useChatInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const dialogId = useSelector(getCurrentDialogId);

  const onSendMessage = () => {
    dispatch(actions.fetchSendMessage({ text: value, dialogId }));
    setValue('');
  };

  return { value, setValue, onSendMessage };
};

export default useChatInput;
