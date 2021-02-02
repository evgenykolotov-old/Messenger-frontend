import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

import './Messages.css';
import Message from '../Message/Message';

const Messages = ({ items = [] }) => {
  return (
    <div className="chat-dialog__messages">
      {items.length ? (
        <>
          {items.map((item) => (
            <Message key={item._id} {...item} />
          ))}
        </>
      ) : (
        <Empty description="Нет сообщений" />
      )}
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
