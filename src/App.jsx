
import { useSelector } from "react-redux";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post/Post";
import UserCard from "./Components/UserCard";
import FriendsList from "./Components/Friends/FriendsList";
import Stories from "./Components/Stories";


function App() {
    const mainUser = useSelector(state => state.users.users.find(u => u.id === 'user-1'));
    const stories = useSelector(state => state.stories.stories);
    const users = useSelector(state => state.users.users);

  return (
    <>
      <Navbar />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-4 bg-gray-50 min-h-screen">
        <div className="flex flex-col gap-4 border p-4 bg-white rounded-lg shadow">
          <div className="border p-4 rounded">
            <UserCard user={mainUser} />
          </div>
          <div className="border p-4 rounded">
             ikony funkcji + nazwa
          </div>
        </div>


        <div className="md:col-span-2 flex flex-col gap-4 border p-4 bg-white rounded-lg shadow">
          <Stories />
          <input 
            placeholder="What are you thinking about?"
            alt="Search"
            className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm  "
            />
            <Post />
            <Modal />
        </div>


        <div className="md:col-span-1 flex flex-col gap-4 border p-4 bg-white rounded-lg shadow max-h-[90vh] overflow-y-hidden">
          <FriendsList />
          <div className="border p-4 rounded">x</div>
        </div>


      </div>
    </>
  );
};

export default App;
