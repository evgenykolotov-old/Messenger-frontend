import React from 'react';
import DialogItem from '../DialogItem/DialogItem';
import './Dialogs.css';

const Dialogs = ({ items }) => (
  <div className="dialogs">
    {items.map((item) => (
      <DialogItem key={item._id} user={item.user} message={item.lastMessage} unreaded={0} />
    ))}
  </div>
);

export default Dialogs;
