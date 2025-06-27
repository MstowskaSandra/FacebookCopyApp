import React from 'react'

const UserCard = ({ user, onClick, className = '' }) => {
    if (!user) return null;

  return (
    <div
      className={`flex items-center gap-4 p-2 rounded hover:bg-gray-100 cursor-pointer ${className}`}
      onClick={onClick}>
        <img 
          src={user.avatar}
          alt={user.name}
          className='w-10 h-10 rounded-full object-cover'
          />
        <span className='font-semibold'>{user.name}</span>
    </div>
  );
};

export default UserCard;