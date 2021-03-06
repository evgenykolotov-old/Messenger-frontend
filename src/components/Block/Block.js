import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Block.css';

const Block = ({ children, className }) => (
  <div className={classnames('block', className)}>{children}</div>
);

Block.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export default React.memo(Block);
