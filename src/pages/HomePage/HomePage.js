import React from 'react';
import Message from '../../components/Message/Message';

const HomePage = () => {
  return (
    <section className="home">
      <div className="dialogs">
        <Message
          avatar="https://sun1-23.userapi.com/impg/ANCgTmfAm_4J0wU_ZHPJqOLRZhWD0MTRJ6zqWg/3CirrRrlJTE.jpg?size=50x0&quality=96&crop=81,81,648,648&sign=dcb02c0c6a7b03852ac5fdfbe0c8b782&ava=1"
          text="Hello, I am Evgeny Kolotov"
          date="Sun Apr 21 2019 21:59:29"
          isMe={true}
          isReaded={true}
        />
      </div>
    </section>
  );
};

export default HomePage;
