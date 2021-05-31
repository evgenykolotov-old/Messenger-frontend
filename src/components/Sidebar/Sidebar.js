import React, { useState } from 'react';
import { Button, Modal, Select } from 'antd';
import { TeamOutlined, FormOutlined } from '@ant-design/icons';

import './Sidebar.css';
import Dialogs from '../../components/Dialogs/Dialogs';

const { Option } = Select;

const Sidebar = ({ users }) => {
  const options = users.map(user => (
  	<Option key={user._id}>{user.fullname}</Option>
  ))
  
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const onClose = () => setVisible(false);
  const onShow = () => setVisible(true);
  const onChangeInput = (value) => setInputValue(value);
  const onSearch = () => {};
  
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
		  value={inputValue}
		  placeholder="Введите имя пользователя"
		  showArrow={false}
		  filterOption={false}
		  style={{ width: '100%' }}
		  onChange={onChangeInput}
		  onSearch={onSearch}
		  notFoundContent={null}
		  defaultActiveFirtsOption={false}
	    >
	      { options }
	    </Select>
      </Modal>
    </div>
  );
};

Sidebar.defaultProps = {
	users: []
}

export default React.memo(Sidebar);
