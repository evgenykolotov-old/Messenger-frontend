import React from 'react';
import PropsTypes from 'prop-types';
import classnames from 'classnames';

import './Message.css';
import Time from '../Time/Time';
import IconReaded from '../IconReaded/IconReaded';

const Message = ({ avatar, user, text, date, isMe, isReaded, attachments, isTyping }) => (
  <div
    className={classnames('message', {
      'message--isme': isMe,
      'message--is-typing': isTyping,
      'message--image': attachments && attachments.length === 1,
    })}
  >
    <div className="message-content">
      <IconReaded isMe={isMe} isReaded={isReaded} />

      <div className="message-avatar">
        <img className="message-avatar__image" src={avatar} alt={`Avatar ${user.fullname}`} />
      </div>

      <div className="message-info">
        {(text || isTyping) && (
          <div className="message__bubble">
            {text && <p className="message__text">{text}</p>}
            {isTyping && (
              <div className="message-typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>
        )}
        <div className="message-attachments">
          {attachments &&
            attachments.map((item) => (
              <div className="message-attachments__item">
                <img className="message-attachments__image" src={item.url} alt={item.filename} />
              </div>
            ))}
        </div>
        {date && (
          <span className="message__date">
            <Time date={date} />
          </span>
        )}
      </div>
    </div>
  </div>
);

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropsTypes.string,
  text: PropsTypes.string,
  date: PropsTypes.string,
  user: PropsTypes.object,
  attachments: PropsTypes.array,
  isTyping: PropsTypes.bool,
  isMe: PropsTypes.bool,
  isReaded: PropsTypes.bool,
};

export default Message;
