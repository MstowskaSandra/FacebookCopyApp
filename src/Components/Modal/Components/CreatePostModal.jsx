import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../../../Redux/Slices/postsSlice';
import { closeModal } from '../../../Redux/Slices/modalSlice';

const CreatePostModal = () => {
     const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const mainUserId = 'user-1';
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content.trim()) return;
      
        const newPost = {
        id: crypto.randomUUID(),
        userId: mainUserId,
        content,
        likes: [],
        comments: [],
        createdAt: new Date().toISOString(),
    };

    dispatch(addPost(newPost));
    dispatch(closeModal());
    setContent('');
};    

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <h2 className='text-xl font-semibold text-gray-800'>Create a new post</h2>

        <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className='w-full p-3 border rounded-xl resize-none min-h-[6.25rem]'
        required
        />
       
        <button
         type='submit'
         className='self-end bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition'
        >Add new post
        </button>
    </form>
  );
};

export default CreatePostModal;