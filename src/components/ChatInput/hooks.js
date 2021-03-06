import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/messages';
import { getCurrentDialogId } from '../../store/selectors/dialogs';

const useChatInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const dialogId = useSelector(getCurrentDialogId);

  const onSendMessage = useCallback(() => {
    dispatch(actions.fetchSendMessage({ text: value, dialogId }));
    setValue('');
  }, [dispatch, dialogId, value]);

  return { value, setValue, onSendMessage };
};

export default useChatInput;
