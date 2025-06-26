import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const PostDetails = ({ post, author }) => {
  if (!post || !author) return null;

  return (
    <div className='space-y-4'>
      <div className='flex items-center gap-2'>
        <img src={author.avatar} alt={author.name} className='w-12 h-12 rounded-full'/>
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
          className='w-full nax-h-96 object-cover rounded-lg'
        />
      )}

      <div  className="flex items-center gap-1">
          <img src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-thumb-up.png`} alt="like icon" className="w-5 h-5"/>
          <span className="text-sm text-gray-600">{post.likes.length}</span>
      </div>
      <div className="flex items-center gap-1">
          <img src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-comment.png`} alt="comment icon" className="w-5 h-5"/>
          <span className="text-sm text-gray-600">{post.comments.length}comments</span>
      </div>
    </div>
  );
};

export default PostDetails;