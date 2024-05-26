import React from 'react';

const App = () => {
  const style = {
    padding: '100px',
    display: 'flex',
    gap: '12px',
  };

  // const vegetables = ['감자', '고구마', '오이', '가지', '옥수수'];
  const users = [
    {
      id: 1,
      age: 30,
      name: '송중기',
    },
    {
      id: 2,
      age: 24,
      name: '송강',
    },
    {
      id: 3,
      age: 21,
      name: '김유정',
    },
    {
      id: 4,
      age: 29,
      name: '구교환',
    },
  ];

  return (
    <div style={style}>
      {/* <div style={squareStyle}>감자</div>
        <div style={squareStyle}>고구마</div>
        <div style={squareStyle}>오이</div>
        <div style={squareStyle}>가지</div>
        <div style={squareStyle}>옥수수</div> */}
      {users.map(function (user) {
        return (
          // <div key={user.id} style={squareStyle}>
          //   {user.name}
          // </div>
          <User key={user.id} user={user} />
        );
      })}
    </div>
  );
};

export default App;

const User = ({ user }) => {
  const squareStyle = {
    width: '100px',
    height: '100px',
    border: '1px solid green',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const { age, name } = user;

  return (
    <div style={squareStyle}>
      {age}살 - {name}
    </div>
  );
};
