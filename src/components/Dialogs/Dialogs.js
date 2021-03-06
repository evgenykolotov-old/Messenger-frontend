import React from 'react';
import { Input, Empty } from 'antd';
import { useSelector } from 'react-redux';

import './Dialogs.css';
import DialogItem from '../DialogItem/DialogItem';
import orderBy from 'lodash/orderBy';
import { useDialogs } from './hooks';
import { getUserId } from '../../store/selectors/user';

const Dialogs = () => {
  const userId = useSelector(getUserId);
  const { onChangeInput, inputValue, dialogs } = useDialogs();

  return (
    <div className='dialogs'>
      <div className='dialogs__search'>
        <Input.Search
          placeholder='Поиск среди контактов'
          onChange={(e) => onChangeInput(e.target.value)}
          value={inputValue}
        />
      </div>
      {dialogs.length ? (
        orderBy(dialogs, ['createdAt'], ['desc']).map((dialog) => (
          <DialogItem key={dialog._id} isMe={dialog.author._id === userId} {...dialog} />
        ))
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='Ничего не найдено' />
      )}
    </div>
  );
};

export default React.memo(Dialogs);
