import React, { useEffect, useState } from 'react';
import { AccessAlarm, ThreeDRotation, ThumbUpAlt } from '@material-ui/icons';

const App = () => {
  const [likeColor, setLikeColor] = useState('');
  const [users, setUsers] = useState([]);
  const [randomUser, setRandomUser] = useState([]);
  const [signleUser, setSingleUser] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(data[0].name);
      });
    // signle user
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => setSingleUser(data));

    fetch(`https://randomuser.me/api/`)
      .then((response) => response.json())
      .then((data) => setRandomUser(data.results));
  }, []);

  return (
    <div>
      <h1>hello</h1>
      <AccessAlarm></AccessAlarm>
      <ThreeDRotation></ThreeDRotation>
      <ThumbUpAlt
        onClick={() => setLikeColor(likeColor ? '' : 'primary')}
        color={likeColor}
      ></ThumbUpAlt>
      <h1>{signleUser.id}</h1>
      {users.map((user) => (
        <h1>{user.name}</h1>
      ))}
      {randomUser.map((random) => (
        <div>
          <h1>Name : {random.name.first}</h1>
          <h2>Email : {random.email}</h2>
        </div>
      ))}
    </div>
  );
};

export default App;
