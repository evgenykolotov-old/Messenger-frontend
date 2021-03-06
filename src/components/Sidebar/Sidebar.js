import React from 'react';
import { Button } from 'antd';
import { TeamOutlined, FormOutlined } from '@ant-design/icons';

import './Sidebar.css';
import Dialogs from '../../components/Dialogs/Dialogs';

const Sidebar = () => {
  return (
    <div className='chat-sidebar'>
      <div className='chat-sidebar__header'>
        <div>
          <TeamOutlined />
          <span>Список диалогов</span>
        </div>
        <Button type='ghost' shape='circle' icon={<FormOutlined />} />
      </div>

      <div className='chat-sidebar__dialogs'>
        <Dialogs />
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
