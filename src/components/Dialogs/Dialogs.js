import React from 'react';
import PropTypes from 'prop-types';
import { Input, Empty } from 'antd';

import './Dialogs.css';
import DialogItem from '../DialogItem/DialogItem';
import orderBy from 'lodash/orderBy';
import { useDialogs } from './hooks';

const Dialogs = ({ userId }) => {
  const { onChangeInput, inputValue, dialogs } = useDialogs();

  return (
    <div className="dialogs">
      <div className="dialogs__search">
        <Input.Search
          placeholder="Поиск среди контактов"
          onChange={(e) => onChangeInput(e.target.value)}
          value={inputValue}
        />
      </div>
      {dialogs.length ? (
        orderBy(dialogs, ['created_at'], ['desc']).map((dialog) => (
          <DialogItem key={dialog._id} isMe={dialog.user._id === userId} {...dialog} />
        ))
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Ничего не найдено" />
      )}
    </div>
  );
};

Dialogs.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default Dialogs;
