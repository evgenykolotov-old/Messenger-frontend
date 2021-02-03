import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import './Status.css';

const Status = ({ online, fullname }) => (
  <div className="chat-dialog__header">
    <div />
    <div className="chat-dialog__header-center">
      <b className="chat-dialog__header-username">{fullname}</b>
      <div className="chat-dialog__header-status">
        <span className={classnames('status', { 'status--online': online })}>
          {online ? 'online' : 'offline'}
        </span>
      </div>
    </div>
    <Button type="ghost" shape="circle" icon={<EllipsisOutlined style={{ fontSize: '22px' }} />} />
  </div>
);

Status.defaultProps = {
  online: false,
  fullname: 'Фёдор Достоевский',
};

Status.propTypes = {
  online: PropTypes.bool,
  fullname: PropTypes.string,
};

export default Status;
