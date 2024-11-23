import React, { useState } from 'react';


const initialUsers = [
  { id: 1, name: 'Rahul', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Anish', role: 'Editor', status: 'Inactive' }
];

function UserManagement() {
  const [users, setUsers] = useState(initialUsers);
  const [newUser, setNewUser] = useState({ name: '', role: 'Viewer' });

  const handleAddUser = () => {
    if (newUser.name) {
      setUsers([...users, { ...newUser, id: users.length + 1, status: 'Active' }]);
      setNewUser({ name: '', role: 'Viewer' });
    }
  };

  const toggleStatus = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' } : user
    ));
  };

  return (
    <div className="bg-[#d6eaf8] p-6 rounded-lg shadow-md w-full User">
      <h2 className="text-xl font-semibold mb-4">User Management</h2>
      <div className="mb-4">
        <input
          className="border p-2 rounded w-full mb-2"
          type="text"
          placeholder="Enter user name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleAddUser}
        >
          Add User
        </button>
      </div>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="flex justify-between items-center border-b pb-2">
            <span>{user.name} - {user.role} - {user.status}</span>
            <button
              className={`px-3 py-1 rounded ${user.status === 'Active' ? 'bg-green-500' : 'bg-red-500'} text-white`}
              onClick={() => toggleStatus(user.id)}
            >
              {user.status === 'Active' ? 'Deactivate' : 'Activate'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default UserManagement;
