import React from 'react';
import PropTypes from 'prop-types';
import readedSvg from '../../assests/readed.svg';
import noReadedSvg from '../../assests/noreaded.svg';

const IconReaded = ({ isMe, isReaded }) =>
  (isMe &&
    (isReaded ? (
      <img className="message__icon--readed" src={readedSvg} alt="Readed icon" />
    ) : (
      <img
        className="message__icon--readed message__icon--no-readed"
        src={noReadedSvg}
        alt="Noreaded icon"
      />
    ))) ||
  null;

IconReaded.propTypes = {
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
};

export default IconReaded;
