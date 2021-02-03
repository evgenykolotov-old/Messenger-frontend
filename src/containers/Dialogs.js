import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BaseDialogs from '../components/Dialogs/Dialogs';
import * as actions from '../store/actions/dialogs';

const Dialogs = ({ userId }) => {
  const dispatch = useDispatch();
  const dialogs = useSelector((state) => state.dialogs.items);
  const currentDialogId = useSelector((state) => state.dialogs.currentDialogId);

  const [inputValue, setValue] = useState('');
  const [filtred, setFiltredItems] = useState(Array.from(dialogs));

  useEffect(() => {
    if (!dialogs.length) {
      dispatch(actions.fetchDialogs());
    } else {
      setFiltredItems(dialogs);
    }
  }, [dispatch, dialogs]);

  const onChangeInput = (value = '') => {
    setFiltredItems(
      dialogs.filter(
        (dialog) => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setValue(value);
  };

  return (
    <BaseDialogs
      items={filtred}
      userId={userId}
      onSearch={onChangeInput}
      inputValue={inputValue}
      currentDialogId={currentDialogId}
    />
  );
};

export default Dialogs;
