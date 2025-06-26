import { useSelector } from "react-redux";
import { formatDistanceToNow } from 'date-fns';
import Navbar from "./Components/Navbar";


function App() {
  const posts = useSelector((state) => state.posts.posts);
  const users = useSelector((state) => state.users.users);
  
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-4 bg-gray-50 min-h-screen">
        <div className="flex flex-col gap-4 border p-4 bg-white rounded-lg shadow">
          <div className="border p-4 rounded">
          </div>
          <div className="border p-4 rounded">.</div>
        </div>
        <div className="flex flex-col gap-4 border p-4 bg-white rounded-lg shadow">
          <div className="border p-4 rounded">.</div>
          <input 
            placeholder="What are you thinking about?"
            alt="Search"
            className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 "
            />
          <div className="flex flex-col gap-6">
            {posts.map((post) => {
              const author = users.find((u) => u.id === post.userId);
               return (
                  <div key={post.id} className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm space-y-4 ">
                    <div className="flex items-center gap-2 mb-2">
                      <img src={author.avatar} alt={author.name} className="w-10 h-10 rounded-full" />
                      <div className="flex flex-col">
                        <span className="font-bold">{author.name}</span>
                        <span className="text-sm text-gray-500">
                          {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                        </span>
                      </div>  
                    </div>
                    <p>{post.content}</p>

                    {post.image && (
                    <img src={post.image} alt="post image" className="w-full max-h-96 object-cover rounded-lg shadow-sm" 
                    />
                    )}
                    
                    <div className="flex items-center gap-2">
                      <div  className="flex items-center gap-1">
                        <img src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-thumb-up.png`} alt="like icon" className="w-5 h-5"/>
                        <span className="text-sm text-gray-600">{post.likes.length}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-comment.png`} alt="comment icon" className="w-5 h-5"/>
                        <span className="text-sm text-gray-600">{post.comments.length}comments</span>
                      </div>
                    </div>  
                  </div>
                );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 border p-4 bg-white rounded-lg shadow">
          <div className="border p-4 rounded">.</div>
          <div className="border p-4 rounded">.</div>
        </div>
      </div>
    </>
  );
};

export default App;
