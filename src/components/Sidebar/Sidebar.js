import React, { useState } from 'react';
import { Button, Modal, Select } from 'antd';
import { TeamOutlined, FormOutlined } from '@ant-design/icons';

import './Sidebar.css';
import Dialogs from '../../components/Dialogs/Dialogs';

const { Option } = Select;

const Sidebar = () => {
  const options = users.map(user => (
  	<Option key={user._id} />
  ))
  const [visible, setVisible] = useState(false);

  const onClose = () => setVisible(false);
  const onShow = () => setVisible(true);
  
  return (
    <div className='chat-sidebar'>
      <div className='chat-sidebar__header'>
        <div>
          <TeamOutlined />
          <span>Список диалогов</span>
        </div>
        <Button onClick={onShow} type='ghost' shape='circle' icon={<FormOutlined />} />
      </div>

      <div className='chat-sidebar__dialogs'>
        <Dialogs />
      </div>

      <Modal
	    title="Создать диалог"
	    visible={visible}
	    onOk={onClose}
	    onCancel={onClose}
      >
	    <Select
		  showSearch
		  value={}
	    >
	      { options }
	    </Select>
      </Modal>
    </div>
  );
};

export default React.memo(Sidebar);
