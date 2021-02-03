import React from 'react';
import { Input, Empty } from 'antd';

import './Dialogs.css';
import DialogItem from '../DialogItem/DialogItem';
import orderBy from 'lodash/orderBy';

const Dialogs = ({ items, userId, inputValue, onSearch, currentDialogId }) => (
  <div className="dialogs">
    <div className="dialogs__search">
      <Input.Search
        placeholder="Поиск среди контактов"
        onChange={(e) => onSearch(e.target.value)}
        value={inputValue}
      />
    </div>
    {items.length ? (
      orderBy(items, ['created_at'], ['desc']).map((item) => (
        <DialogItem
          key={item._id}
          isMe={item.user._id === userId}
          currentDialogId={currentDialogId}
          {...item}
        />
      ))
    ) : (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Ничего не найдено" />
    )}
  </div>
);

export default Dialogs;
