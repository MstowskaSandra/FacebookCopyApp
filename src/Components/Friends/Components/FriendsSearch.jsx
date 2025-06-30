import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import UserCard from '../../UserCard';

const FriendsSearch = () => {
    const [searchFriend, setSearchFriend] = useState('');
    const users = useSelector(state => state.users.users);
    const filtered = users.filter(user => user.name.toLowerCase().includes(searchFriend.toLocaleLowerCase()));

  return (
    <div className='space-y-2'>
        <input 
          type='text'
          value={searchFriend}
          onChange={e => setSearchFriend(e.target.value)}
          placeholder='Search...'
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focys:ring-blue-500 text-sm'
        />
        {searchFriend && (
            <div className='space-y-1 max-h-48 overflow-y-auto'>
                {filtered.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>    
        )}
    </div>
  );
};

export default FriendsSearch;