import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading,setloading]=useState(true);

  const fetchdata=async()=>{
    try{
    const response=await axios.get("http://localhost:4000/posts")
    setPosts(response.data);
    setloading(false);
    }catch(error){
        setError(error);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>loading...</div>;
  }


  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
