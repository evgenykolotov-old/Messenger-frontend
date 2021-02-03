import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { UploadField } from '@navjobs/upload';

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
        <UploadField
          onFiles={(files) => console.log(files)}
          containerProps={{
            className: 'chat-input__files',
          }}
          uploadProps={{
            accept: '.jpg, .jpeg, .png, .gif, .bmp, .pdf,.doc,.docx,.txt,.rtf',
            multiple: 'multiple',
          }}
        >
          <Button type="ghost" shape="circle" icon={<CameraOutlined />} />
        </UploadField>
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
