import React, { useState } from 'react';
import { Button, Modal, Select } from 'antd';
import axios from '../../core/axios';
import { TeamOutlined, FormOutlined } from '@ant-design/icons';

import './Sidebar.css';
import Dialogs from '../../components/Dialogs/Dialogs';

const { Option } = Select;

const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  
  const options = users.map(user => (
  	<Option key={user._id}>{user.fullname}</Option>
  ))

  const onClose = () => setVisible(false);
  const onShow = () => setVisible(true);
  const onChangeInput = (value) => setInputValue(value);
  const onSearch = async (value) => {
  	try {
	  setIsLoading(true);
	  const { data } = await axios.get('user/find?query=' + value);
	  setUsers(data.result);
	  setIsLoading(false);
  	} catch (error) {
  	  setIsLoading(false);
  	}
  };
  const onSelectUser = (userId) => {
  	console.log('UserId', userId);
  }
  const onAddDialog = () => {};
  
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
	    okText="Создать"
	    cancelText="Закрыть"
	    confirmLoading={isLoading}
      >
	    <Select
		  showSearch
		  value={inputValue}
		  placeholder="Введите имя пользователя"
		  showArrow={false}
		  filterOption={false}
		  style={{ width: '100%' }}
		  onChange={onChangeInput}
		  onSearch={onSearch}
		  onSelectUser={onSelectUser}
		  notFoundContent={null}
		  defaultActiveFirtsOption={false}
	    >
	      { users.map(user => (
	          <Option key={user._id}>{user.fullname}</Option>
	        )) 
	      }
	    </Select>
      </Modal>
    </div>
  );
};

export default React.memo(Sidebar);
