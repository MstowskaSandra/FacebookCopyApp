
import Navbar from "./Components/Navbar";
import Post from "./Components/Post/Post";


function App() {

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
            <Post />
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
