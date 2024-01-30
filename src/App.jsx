import Post from "./components/Post";
import { useState } from "react";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisible, setModalVisible] = useState(true); 
  function hideModalHandler(event)
  {
      setModalVisible(false);
  }
  function showModalHandler(event)
  {
      setModalVisible(true);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
          <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
      </main>
    </>
  );
}

export default App;
