import React, { useState } from 'react';
import { Button, Input } from 'antd';

import './ChatInput.css';
import { SmileOutlined, CameraOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons';

const ChatInput = () => {
  const [value, setValue] = useState('');

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        <Button type="ghost" shape="circle" icon={<SmileOutlined />} />
      </div>
      <Input
        onChange={(event) => setValue(event.target.value)}
        value={value}
        size="large"
        placeholder="Введите текст сообщения..."
      />
      <div className="chat-input__actions">
        <Button type="ghost" shape="circle" icon={<CameraOutlined />} />
        {value ? (
          <Button type="ghost" shape="circle" icon={<SendOutlined />} />
        ) : (
          <Button type="ghost" shape="circle" icon={<AudioOutlined />} />
        )}
      </div>
    </div>
  );
};

export default ChatInput;
