import React from 'react'

const UserCard = ({ user, onClick, className = '' }) => {
    if (!user) return null;

  return (
    <div
      className={`flex items-center gap-4 p-2 rounded text-wrap hover:bg-gray-100 hover:text-black cursor-pointer ${className}`}
      onClick={onClick}>
        <img 
          src={user.avatar}
          alt={user.name}
          className='w-10 h-10 rounded-full object-cover border-2 border-white'
          />
        <span className='font-semibold'>{user.name}</span>
    </div>
  );
};

export default UserCard;