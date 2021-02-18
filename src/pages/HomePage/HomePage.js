import React, { useEffect } from 'react';
import { Button } from 'antd';
import { TeamOutlined, FormOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import './HomePage.css';
import Dialogs from '../../components/Dialogs/Dialogs';
import Messages from '../../components/Messages/Messages';
import ChatInput from '../../components/ChatInput/ChatInput';
import Status from '../../components/Status/Status';
import { setCurrentDialogId } from '../../store/actions/dialogs';

const HomePage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    const dialogId = pathname.split('/')[2];
    dispatch(setCurrentDialogId(dialogId));
  }, [dispatch, pathname]);

  return (
    <section className='home'>
      <div className='chat'>
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

        <div className='chat-dialog'>
          <Status />
          <Messages />
          <ChatInput />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
