import React from 'react';
import { Button } from 'antd';
import { TeamOutlined, FormOutlined } from '@ant-design/icons';

import './HomePage.css';
import Dialogs from '../../containers/Dialogs';
import Messages from '../../containers/Messages';
import ChatInput from '../../components/ChatInput/ChatInput';
import Status from '../../components/Status/Status';

const HomePage = () => {
  return (
    <section className="home">
      <div className="chat">
        <div className="chat-sidebar">
          <div className="chat-sidebar__header">
            <div>
              <TeamOutlined />
              <span>Список диалогов</span>
            </div>
            <Button type="ghost" shape="circle" icon={<FormOutlined />} />
          </div>

          <div className="chat-sidebar__dialogs">
            <Dialogs userId={1} />
          </div>
        </div>

        <div className="chat-dialog">
          <Status />
          <Messages />
          <ChatInput />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
