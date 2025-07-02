
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "./Redux/Slices/modalSlice";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
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
             <div className="icon-container">
                <img src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-friends.png`} alt="friends icon" className="icon" />
                <span className="text-lg font-bold">Friends</span>
             </div>
             <div className="icon-container">
                <img src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-memories.png`} alt="memories icon" className="icon" />
                <span className="text-lg font-bold">Memories</span>
             </div>
             <div className="icon-container">
                <img src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-reel.png`} alt="reel icon" className="icon" />
                <span className="text-lg font-bold">Reels</span>
             </div>
             <div className="icon-container">
                <img src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-group.png`} alt="group icon" className="icon" />
                <span className="text-lg font-bold">Group</span>
             </div>
             <div className="icon-container">
                <img src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-messenger.png`} alt="messengericon" className="icon" />
                <span className="text-lg font-bold">Messenger</span>
             </div>
             <div className="icon-container">
                <img src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-market.png`} alt="market icon" className="icon" />
                <span className="text-lg font-bold">Market</span>
             </div>
             <div className="icon-container">
                <img src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-setting.png`} alt="setting icon" className="icon" />
                <span className="text-lg font-bold">Setting</span>
             </div>
          </div>
        </div>


        <div className="md:col-span-2 flex flex-col gap-4 border p-4 bg-white rounded-xl shadow-sm">
          <Stories />
          <div className="flex items-center gap-3 px-2 py-1">
            <img 
               src={`${process.env.PUBLIC_URL}/Assets/Faces/Face1.jpg`} 
               alt="main user face" 
               className='icon' />
            <input 
              placeholder="What are you thinking about?"
              alt="Search"
              className="flex-1 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full  focus:outline-none text-sm cursor-pointer transition "
              onClick={() => dispatch(openModal({ modalType: 'createPost' }))}
              />
          </div>  
            <Post />
            <Modal />
        </div>


        <div className="md:col-span-1 flex flex-col gap-4 border p-4 bg-white rounded-lg shadow max-h-[90vh] overflow-y-hidden">
          <FriendsList />
          <div className="border p-4 rounded">
            <h2>Birthday!</h2>
            <div className="flex items-center gap-3 px-2 py-1">
              <img 
                 src={`${process.env.PUBLIC_URL}/Assets/Icons/fb-gift.png`} 
                 alt="gift icon" 
                 className="w-10 h-10" />
              <p><strong>Buba Mstowska</strong> has a birthday today.</p>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default App;
