import React from 'react'

const Comment = ({ comment, commentAuthor}) => {
  return (
        <div className='flex items-start gap-2'>
          <img 
              src={commentAuthor?.avatar}
              alt={commentAuthor?.userName}
              className='w-8 h-8 rounded-full object-cover'
          />
          <div className='gap-6'>
            <div className='text-sm font-semibold'>{commentAuthor?.userName}</div>
            <div className='text-xs text-gray-400'>{new Date(comment.createdAt).toLocaleString()}</div>
            <div className='text-sm text-gray-700'>{comment.content}</div>
          </div>
        </div>
        );    
};

export default Comment;