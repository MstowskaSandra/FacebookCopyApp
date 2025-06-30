import React from 'react'
import FriendsSearch from './Components/FriendsSearch'
import { useSelector } from 'react-redux'
import UserCard from '../UserCard';

const FriendsList = () => {
    const friends = useSelector(state => state.users.users);

  return (
    <div className='flex flex-col gap-2 border p-2 bg-white rounded-lg shadow max-h-[90vh] overflow-hidden'>
        <div className='flex items-stretch justify-beetween gap-4'>
            <h2 className='text-lg font-bold text-gray-700 '>Your Friends</h2>
            <FriendsSearch />  
        </div>
        <div className='border p-4 rounded space-y-2 overflow-y-auto '>
            {friends.map(friend => (
                <UserCard key={friend.id} user={friend} />
            ))}
        </div>
    </div>
  );
};

export default FriendsList;