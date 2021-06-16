import React, { useState } from 'react';
import { Button, Modal, Select, Input, Form } from 'antd';
import axios from '../../core/axios';
import { TeamOutlined, FormOutlined } from '@ant-design/icons';

import './Sidebar.css';
import Dialogs from '../../components/Dialogs/Dialogs';

const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [messageText, setMessageText] = useState('');

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
  	setSelectedUserId(userId);
  }
  const onAddDialog = async () => {
  	try {
  	  await axios.post('dialogs', { partner: selectedUserId, text: messageText });
  	  setIsLoading(false);
  	  onClose();
  	} catch (error) {
  	  setIsLoading(false);
  	}
  };
  const onChangeMessageText = (event) => setMessageText(event.target.value);
  
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
	    onOk={onAddDialog}
	    onCancel={onClose}
	    okText="Создать"
	    cancelText="Закрыть"
	    confirmLoading={isLoading}
	    footer={[
	      <Button key="back" onClick={onClose}>
	        Закрыть
	      </Button>,
	      <Button 
	        key="submit" 
	        type="priary" 
	        loading={isLoading} 
	        onClick={onAddDialog}
	        disabled={!messageText}
	      >
	        Создать
	      </Button>
	    ]}
      >
        <Form>
		  <Form.Item label="Введите имя пользователя или email">
		    <Select
			  showSearch
			  value={inputValue}
			  showArrow={false}
			  filterOption={false}
			  style={{ width: '100%' }}
			  onChange={onChangeInput}
			  onSearch={onSearch}
			  onSelect={onSelectUser}
			  notFoundContent={null}
		    >
		      { users.map(user => (
		          <Select.Option key={user._id}>{user.fullname}</Select.Option>
		        )) 
		      }
		    </Select>
		  </Form.Item>

		  {selectedUserId && (<Form.Item label="Введите текст сообщения">
			<Input.TextArea
		  	  autosize={{ minRows: 3, maxRows: 10 }}
		  	  value={messageText}
		  	  onChange={onChangeMessageText}
		  	/>
		  </Form.Item>)}
        </Form>
      </Modal>
    </div>
  );
};

export default React.memo(Sidebar);
