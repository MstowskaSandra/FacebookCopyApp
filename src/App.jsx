
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "./Redux/Slices/modalSlice";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post/Post";
import UserCard from "./Components/UserCard";
import FriendsList from "./Components/Friends/FriendsList";
import Stories from "./Components/Stories";


function App() {
  const dispatch = useDispatch();
    const mainUser = useSelector(state => state.users.users.find(u => u.id === 'user-1'));

  return (
    <>
      <Navbar />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-4 bg-gray-50 min-h-screen">
        <div className="flex flex-col gap-4 border p-4 bg-white rounded-lg shadow">
          <div className="border p-4 rounded">
            <UserCard user={mainUser} />
          </div>
          <div className="border p-4 rounded flex flex-col  gap-4">
             <div className="flex items-center gap-4">
                <img src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-friends.png`} alt="friends icon" className="w-10 h-10" />
                <span className="text-lg font-bold">Friends</span>
             </div>
             <div className="flex items-center gap-4">
                <img src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-memories.png`} alt="memories icon" className="w-10 h-10" />
                <span className="text-lg font-bold">Memories</span>
             </div>
             <div className="flex items-center gap-4">
                <img src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-reel.png`} alt="reel icon" className="w-10 h-10" />
                <span className="text-lg font-bold">Reels</span>
             </div>
             <div className="flex items-center gap-4">
                <img src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-group.png`} alt="group icon" className="w-10 h-10" />
                <span className="text-lg font-bold">Group</span>
             </div>
             <div className="flex items-center gap-4">
                <img src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-messenger.png`} alt="messengericon" className="w-10 h-10" />
                <span className="text-lg font-bold">Messenger</span>
             </div>
             <div className="flex items-center gap-4 hover:bg-gray-100">
                <img src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-market.png`} alt="market icon" className="w-10 h-10" />
                <span className="text-lg font-bold">Market</span>
             </div>
             <div className="flex items-center gap-4">
                <img src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-setting.png`} alt="setting icon" className="w-10 h-10" />
                <span className="text-lg font-bold">Setting</span>
             </div>
          </div>
        </div>


        <div className="md:col-span-2 flex flex-col gap-4 border p-4 bg-white rounded-lg shadow">
          <Stories />
          <input 
            placeholder="What are you thinking about?"
            alt="Search"
            className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm  "
            onClick={() => dispatch(openModal({ modalType: 'createPost' }))}
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
