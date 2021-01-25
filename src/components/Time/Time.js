import React from 'react';
import PropsTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ru } from 'date-fns/locale';

const Time = ({ date }) => (
  <>{formatDistanceToNow(new Date(date), { addSuffix: true, locale: ru })}</>
);

Time.propTypes = {
  date: PropsTypes.string,
};

export default Time;
