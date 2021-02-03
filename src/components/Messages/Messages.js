import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Empty, Spin } from 'antd';
import { useSelector } from 'react-redux';

import './Messages.css';
import Message from '../Message/Message';

const Messages = ({ blockRef, items }) => {
  const isLoading = useSelector((state) => state.messages.isLoading);

  return (
    <div className="chat-dialog__messages">
      <div ref={blockRef} className={classnames('messages', { 'messages--loading': isLoading })}>
        {isLoading ? (
          <Spin size="large" tip="Загрузка сообщений..." />
        ) : !isLoading && items ? (
          items.length > 0 ? (
            items.map((item) => <Message key={item._id} {...item} />)
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

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
