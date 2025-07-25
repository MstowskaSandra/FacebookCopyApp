import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../Redux/Slices/modalSlice';



const Navbar = () => {
  const dispatch = useDispatch();
  
  return (
    <div className='flex items-center justify-between px-4 py-2 bg-slate-100 shadow-md '>
      <div className='text-3xl font-extrabold text-blue-600'>
        <span>Facebook</span>
      </div>
      <input 
        type='text'
        placeholder='Search...'
        className='px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/3'
      />
      <div className='flex items-center gap-4'>
        <button 
           className='bg-blue-600 text-white font-extrabold px-4 py-2 rounded-full hover:bg-blue-700 transition'
           onClick={() => dispatch(openModal({ modalType: 'createPost' }))}
        >
          Add post
        </button>
        <img 
           src={`${process.env.PUBLIC_URL}/Assets/Faces/Face1.jpg`}
           alt='avatar'
           className='icon'
        />
      </div>
    </div>
  );
};

export default Navbar;