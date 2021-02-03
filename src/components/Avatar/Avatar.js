import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.css';
import generateAvatarFromHash from '../../utils/generateAvatarFromHash';

const Avatar = ({ user }) => {
  if (user.avatar) {
    return <img className="avatar" src={user.avatar} alt={`Avatar ${user.fullname}`} />;
  } else {
    const { color, colorLighten } = generateAvatarFromHash(user._id);
    const firstChar = user.fullname[0].toUpperCase();
    return (
      <div
        className="avatar avatar--symbol"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`,
        }}
      >
        {firstChar}
      </div>
    );
  }
};

Avatar.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    avatar: PropTypes.string || null,
  }).isRequired,
};

export default Avatar;
