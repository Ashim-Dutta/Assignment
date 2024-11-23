import React, { useState } from 'react';


const initialRoles = [
  { name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
  { name: 'Editor', permissions: ['Read', 'Write'] }
];

function RoleManagement() {
  const [roles, setRoles] = useState(initialRoles);
  const [newRole, setNewRole] = useState({ name: '', permissions: [] });
  const [selectedPermission, setSelectedPermission] = useState('');

  const handleAddRole = () => {
    if (newRole.name) {
      setRoles([...roles, { ...newRole, permissions: [] }]);
      setNewRole({ name: '', permissions: [] });
    }
  };

  const addPermission = (roleName) => {
    setRoles(roles.map(role =>
      role.name === roleName && selectedPermission
        ? { ...role, permissions: [...role.permissions, selectedPermission] }
        : role
    ));
  };

  return (
    <div className="bg-[#d6eaf8] p-6 rounded-lg shadow-md w-full Role">
      <h2 className="text-xl font-semibold mb-4">Role Management</h2>
      <div className="mb-4">
        <input
          className="border p-2 rounded w-full mb-2"
          type="text"
          placeholder="Enter role name"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleAddRole}
        >
          Add Role
        </button>
      </div>
      <ul className="space-y-2">
        {roles.map(role => (
          <li key={role.name} className="border-b pb-2">
            <span className="font-bold">{role.name}</span> - Permissions: {role.permissions.join(', ') || 'None'}
            <div className="mt-2 flex">
              <input
                className="border p-1 rounded w-1/2 mr-2"
                type="text"
                placeholder="Add permission"
                onChange={(e) => setSelectedPermission(e.target.value)}
              />
              <button
                className="bg-green-500 text-white px-2 rounded hover:bg-green-600"
                onClick={() => addPermission(role.name)}
              >
                Add Permission
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default RoleManagement;
