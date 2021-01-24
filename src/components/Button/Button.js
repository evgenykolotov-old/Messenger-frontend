import React from 'react';
import { Button as BaseButton } from 'antd';
import PropsTypes from 'prop-types';
import classnames from 'classnames';
import './Button.css';

const Button = (props) => (
  <BaseButton
    {...props}
    className={classnames('button', props.className, {
      button__large: props.size === 'large',
    })}
  />
);

Button.propTypes = {
  className: PropsTypes.string,
};

export default Button;
