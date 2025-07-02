import React from 'react'

const UserCard = ({ user, onClick, className = '' }) => {

  return user ? (
    <div
      className={`flex items-center gap-4 p-2 rounded text-wrap hover:bg-gray-100 hover:text-black cursor-pointer ${className}`}
      onClick={onClick}>
        <img 
          src={user.avatar}
          alt={user.name}
          className='icon'
          />
        <span className='font-semibold'>{user.name}</span>
    </div>
  ) : null;
};

export default UserCard;