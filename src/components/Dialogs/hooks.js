import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDialogs } from '../../store/selectors/dialogs';
import * as actions from '../../store/actions/dialogs';
import socket from '../../core/socket';

export const useDialogs = () => {
  const dispatch = useDispatch();
  const dialogs = useSelector(getDialogs);
  const [inputValue, setValue] = useState('');
  const [filtred, setFiltredItems] = useState(Array.from(dialogs));

  const onChangeInput = useCallback(
    (value = '') => {
      setFiltredItems(
        dialogs.filter(
          (dialog) =>
            dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
            dialog.partner.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
        )
      );
      setValue(value);
    },
    [dialogs]
  );

  useEffect(() => {
    if (dialogs.length) {
      onChangeInput();
    }
  }, [onChangeInput, dialogs]);

  useEffect(() => {
    dispatch(actions.fetchDialogs());

    socket.on('SERVER:DIALOG_CREATED', () => {
      dispatch(actions.fetchDialogs());
    });
  }, [dispatch]);

  return {
    onChangeInput,
    inputValue,
    dialogs: filtred,
  };
};
