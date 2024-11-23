import React from 'react';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import Contact from './components/Contact';
import 'remixicon/fonts/remixicon.css';
import gsap from 'gsap';



function App() {
  return (
    <div className="bg-[#e8f8f5] min-h-screen p-8 ">
      <h1 className="text-3xl font-bold text-center mb-8  font-[gilroy]">User & Role Management</h1>
      <div className="flex flex-col md:flex-row gap-10">
        <UserManagement/>
        <RoleManagement />
        
      </div>
      <div className='p-[10vh] '><Contact/></div>
    </div>
  );
}

gsap.from(".Role",{
  opacity: 0,
  y: 50,
  duration: 1.5,
 
});

gsap.from(".User",{
  opacity: 0,
  y: -50,
  duration: 1.5,
 delay: 0.5,
});

export default App;
