import React from 'react';
import classnames from 'classnames';

import './Button.css';
import { Button as BaseButton } from 'antd';

const Button = (props) => (
  <BaseButton
    {...props}
    className={classnames('button', props.className, {
      button__large: props.size === 'large',
    })}
  />
);

export default React.memo(Button);
