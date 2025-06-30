import React from 'react'
import { useSelector } from 'react-redux';
import UserCard from './UserCard';

const Stories = () => {
    const stories = useSelector(state => state.stories.stories);
    const users = useSelector(state => state.users.users);
  
    return (
        <div className="flex gap-2 overflow-x-auto py-2 px-1 scrollbar-hide">
            {stories.map(storie => {
              const user = users.find(u => u.id === storie.userId);
              return (
                <div key={storie.id} className='flex-shrink-0 w-32 h-48 rounded-xl overflow-hidden shadow-md bg-gray-100 relative cursor-pointer'>
                    <img 
                      src={storie.image} 
                      alt="storie"
                      className='w-full h-full object-cover' 
                      />
                    <div className="absolute top-0 left-0 p-1">
                      <UserCard user={user} className='flex items-stretch gap-1 text-wrap text-xs text-white hover:bg-gray-100 hover:text-black cursor-pointer'/>
                    </div>
                </div>
              );
            })}
          </div>
  );
};

export default Stories;