import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ru } from 'date-fns/locale';

const Time = ({ date }) => (
  <>{formatDistanceToNow(new Date(date), { addSuffix: true, locale: ru })}</>
);

export default React.memo(Time);
