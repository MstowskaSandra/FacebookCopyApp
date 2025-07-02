import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import Comment from './Components/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../../Redux/Slices/postsSlice';

const PostDetails = ({ postId }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const post = useSelector((state) => state.posts.posts.find((p) => p.id === postId));
  const author = useSelector((state) => state.users.users.find((u) => u.id === post?.userId));
  const [newCommentContent, setNewCommentContent] = useState('');

  return post && author ? (
    <div className='space-y-4'>
      <div className='flex items-center gap-2'>
        <img 
           src={author.avatar} 
           alt={author.name} 
           className='icon'
        />
        <div>
          <p className='font-bold'>{author.name}</p>
          <p className='text-sm text-gray-500'>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</p>
        </div>
      </div>

      <p>{post.content}</p>

      {post.image && (
        <img 
          src={post.image}
          alt="Post"
          className='w-full max-h-96 object-cover rounded-lg'
        />
      )}
      <div className='flex items-center gap-4'>
        <div  className="flex items-center gap-1">
            <img src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-thumb-up.png`} alt="like icon" className="w-5 h-5"/>
            <span className="text-sm text-gray-600">{post.likes.length}</span>
        </div>
        <div className="flex items-center gap-1">
            <img 
               src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-comment.png`} 
               alt="comment icon" 
               className="w-5 h-5"
            />
            <span className="text-sm text-gray-600">{post.comments.length}comments</span>
        </div>
      </div>  
      <div className='mt-4 space-y-4'> 
        {post.comments.map((comment) => {
          const commentAuthor = users.find((user) => user.id === comment.userId);
          return (
            <Comment key={comment.id} comment={comment} commentAuthor={commentAuthor} />
          ); 
        })}
      </div>
      <div>
         <input 
            className='border border-gray-100 hover:border-gray-300 px-2 py-1 rounded'
            value={newCommentContent}
            type='text'
            onChange={(e) => setNewCommentContent(e.target.value)}
            placeholder='Write a comment...'
         />
         <button 
            onClick={() => {
              if (!newCommentContent.trim()) return;
              dispatch(addComment({
                postId: post.id,
                comment: {
                  userId: 'user-1',
                  content: newCommentContent,
                },
              }))
              setNewCommentContent('');
            }}
            className='ml-2 bg-blue-500 text-white px-3 py-1 rounded'
         >
          Add
         </button>
      </div>
    </div>
  ) : null;
};

export default PostDetails;