import React, { useState } from 'react';
import UserTable from './Components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './Components/AddUserForm';
import EditUserForm from './Components/EditUserForm';

function App() {
  const usersData = [];

  const [users, setUsers] = useState(usersData);
  //agrgar user

  const addUser = (user) => {
    user.id = uuidv4;
    setUsers([...users, user]);
  };

  //delete
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  //edit
  const [editing, setEditing] = useState(false);
  const [currentUser, setcurrentUser] = useState({
    id: null,
    name: '',
    username: '',
  });
  const editRow = (user) => {
    setEditing(true);
    setcurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">
      <h1>WOW-Users</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Editar pj</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser} />
            </div>
          ) : (
            <div>
              <h2>Añadir pj</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>Ver pjs</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
