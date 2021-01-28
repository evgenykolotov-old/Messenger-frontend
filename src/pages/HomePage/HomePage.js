import React from 'react';
import Dialogs from '../../components/Dialogs/Dialogs';
import Message from '../../components/Message/Message';

const HomePage = () => {
  return (
    <section className="home">
      {/* <Dialogs
        userId={1}
        items={[
          {
            _id: 'd95b',
            text: 'Мы все свидетельствуем Вам глубочайшее почтение и целлуем ручки',
            isReaded: false,
            created_at: new Date('Tue Jan 26 2021 22:12:15'),
            user: {
              _id: 'd95b',
              fullname: 'Фёдор Достоевский',
              avatar: null,
            },
          },
          {
            _id: 'du5b',
            text: 'Мы все свидетельствуем Вам глубочайшее почтение и целлуем ручки',
            isReaded: false,
            created_at: new Date(),
            user: {
              _id: 'du5b',
              fullname: 'Евгений Колотов',
              avatar: null,
            },
          },
        ]}
      /> */}

      {/* <Message
        date={new Date('Tue Jan 26 2021 22:12:15')}
        audio="https://notificationsounds.com/storage/sounds/file-sounds-1148-juntos.mp3"
        avatar="https://sun1-88.userapi.com/impg/c853520/v853520919/24a302/XGrlYioAMQE.jpg?size=50x0&quality=96&crop=3,202,1617,1617&sign=fd2f397a25205ee0b9ef1700fc755b76&ava=1"
      /> */}
    </section>
  );
};

export default HomePage;
