import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import './HomePage.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Messages from '../../components/Messages/Messages';
import ChatInput from '../../components/ChatInput/ChatInput';
import Status from '../../components/Status/Status';
import { setCurrentDialogId } from '../../store/actions/dialogs';
import { fetchUserData } from '../../store/actions/user';

const HomePage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => dispatch(fetchUserData()), [dispatch]);

  useEffect(() => {
    const dialogId = pathname.split('/')[2];
    dispatch(setCurrentDialogId(dialogId));
  }, [dispatch, pathname]);

  return (
    <section className='home'>
      <div className='chat'>
        <Sidebar />

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
