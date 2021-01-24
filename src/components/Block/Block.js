import React from 'react';
import classnames from 'classnames';
import './Block.css';

const Block = ({ children, className }) => (
  <div className={classnames('block', className)}>{children}</div>
);

export default Block;
