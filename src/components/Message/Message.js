import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Message.css';
import Time from '../Time/Time';
import IconReaded from '../IconReaded/IconReaded';
import Avatar from '../Avatar/Avatar';

import waveSvg from '../../assests/wave.svg';
import playSvg from '../../assests/play.svg';
import pauseSvg from '../../assests/pause.svg';
import converCurrentTime from '../../utils/converCurrentTime';
import { useMessageAudio } from './messageHooks';

const MessageAudio = ({ audioSrc }) => {
  const { isPlaying, progress, currentTime, togglePlay, audioElem } = useMessageAudio();

  return (
    <div className="message-audio">
      <audio ref={audioElem} src={audioSrc} preload="auto" />
      <div className="message-audio__progress" style={{ width: progress + '%' }}></div>
      <div className="message-audio-info">
        <div className="message-audio-info__button">
          <button onClick={togglePlay}>
            {isPlaying ? (
              <img src={pauseSvg} alt="Pause svg" />
            ) : (
              <img src={playSvg} alt="Play svg" />
            )}
          </button>
        </div>
        <div className="message-audio-info__wave">
          <img src={waveSvg} alt="Wave svg" />
        </div>
        <span className="message-audio-info__duration">{converCurrentTime(currentTime)}</span>
      </div>
    </div>
  );
};

const Message = ({ user, text, created_at, isMe, isReaded, attachments, isTyping, audio }) => {
  return (
    <div
      className={classnames('message', {
        'message--isme': Boolean(isMe),
        'message--is-typing': Boolean(isTyping),
        'message--is-audio': Boolean(audio),
        'message--image': attachments && attachments.length === 1,
      })}
    >
      <div className="message-content">
        <IconReaded isMe={isMe} isReaded={isReaded} />

        <div className="message-avatar">
          <Avatar user={user} />
        </div>

        <div className="message-info">
          {(audio || text || isTyping) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}

              {isTyping && (
                <div className="message-typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}

              {audio && <MessageAudio audioSrc={audio} />}
            </div>
          )}

          {attachments && (
            <div className="message-attachments">
              {attachments.map((item) => (
                <div className="message-attachments__item">
                  <img className="message-attachments__image" src={item.url} alt={item.filename} />
                </div>
              ))}
            </div>
          )}

          {created_at && (
            <span className="message__date">
              <Time date={created_at} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  avatar: PropTypes.string || null,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  audio: PropTypes.string,
};

export default Message;
