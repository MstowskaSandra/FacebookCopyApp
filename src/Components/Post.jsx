
import { useDispatch, useSelector } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';
import { openModal } from '../Redux/Slices/modalSlice';
import { addLike } from '../Redux/Slices/postsSlice';


const Post = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const users = useSelector((state) => state.users.users);
    const mainUser = 'user-1';


  return (
    <div className="flex flex-col gap-6">
        {posts.map((post) => {
            const author = users.find((u) => u.id === post.userId);
            return (
                <div 
                 key={post.id} 
                 className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm space-y-4 "
                 onClick={() => dispatch(openModal({
                     modalType: 'postDetails',
                     modalData: { postId: post.id },
                 }))}
                 >
                    <div className="flex items-center gap-2 mb-2">
                        <img src={author.avatar} alt={author.name} className="icon" />
                        <div className="flex flex-col">
                            <span className=" font-bold">{author.name}</span>
                            <span className="text-sm text-gray-500">
                                {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                            </span>
                        </div>  
                    </div>
                    <p>{post.content}</p>

                    {post.image && (
                    <img 
                       src={post.image} 
                       alt="post image" 
                       className="w-full max-h-96 object-cover rounded-lg shadow-sm" 
                    />
                    )}
                    
                    <div className="flex items-center gap-6">
                        <div  className="flex items-center gap-1">
                            <img 
                              src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-thumb-up.png`} 
                              alt="like icon" 
                              className={`w-5 h-5 ${post.likes.includes(mainUser) ? 'brightness-200' : 'brightness-100'}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch(addLike({ postId: post.id, userId: mainUser }))
                              }}
                            />
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
                </div>
            );
        })}
    </div>
  );
};

export default Post;