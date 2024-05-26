import React, { useState } from 'react';
import Button from './components/Button';
import User from './components/User';

//퀴즈: age가 25세 이상인 user는 제외하고 렌더링 해보세요

const App = () => {
  const style = {
    padding: '100px',
    display: 'flex',
    gap: '12px',
  };

  // const vegetables = ['감자', '고구마', '오이', '가지', '옥수수'];

  const [users, setUsers] = useState([
    {
      id: new Date().getTime(),
      age: 30,
      name: '송중기',
    },
    {
      id: new Date().getTime() + 1,
      age: 24,
      name: '송강',
    },
    {
      id: new Date().getTime() + 2,
      age: 21,
      name: '김유정',
    },
    {
      id: new Date().getTime() + 3,
      age: 29,
      name: '구교환',
    },
  ]);

  const [age, setAge] = useState(0);
  const [name, setName] = useState('');

  const addUserHandeler = () => {
    const newUser = {
      id: new Date().getTime(),
      age: Number(age),
      name: name,
    };
    setUsers([...users, newUser]);
  };

  // 삭제
  const deleteUserHandeler = (id) => {
    // 삭제할 대상 id

    const deletedUsers = users.filter(function (user) {
      return user.id != id;
    });
    setUsers(deletedUsers);
  };

  return (
    <>
      <input
        type="number"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Button color="green" onClick={addUserHandeler}>
        추가
      </Button>
      {/* 유저 컴포넌트를 반복적으로 렌더링하는 부분 */}
      {/* 그냥 렌더링하는게 아니라 필터링을 걸고 돌려줘야함 */}
      {/* users가 배열이기 때문에 filter를 걸수있음 */}
      {/* filter의 역할: 새로운 배열을 return */}
      <div style={style}>
        {users
          // .filter(function (u) {
          //   return u.age < 25;
          // })
          .map(function (user) {
            if (user.age >= 25) {
              return null;
            }

            return (
              // <div key={user.id} style={squareStyle}>
              //   {user.name}
              // </div>
              <User key={user.id} user={user} deleteUserHandeler={deleteUserHandeler} />
            );
          })}
      </div>
    </>
  );
};

export default App;
