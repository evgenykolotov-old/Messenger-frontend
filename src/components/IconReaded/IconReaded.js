import React from 'react';

import readedSvg from '../../assests/readed.svg';
import noReadedSvg from '../../assests/noreaded.svg';

const IconReaded = ({ isMe, isReaded }) =>
  (isMe &&
    (isReaded ? (
      <img className='message__icon--readed' src={readedSvg} alt='Readed icon' />
    ) : (
      <img
        className='message__icon--readed message__icon--no-readed'
        src={noReadedSvg}
        alt='Noreaded icon'
      />
    ))) ||
  null;

export default React.memo(IconReaded);
