import React from 'react'
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FetchApiUsingReactQuery = () => {

  const { data, error, isError, isLoading,refetch } = useQuery({
    queryKey:["posts"],
    queryFn:()=>{
     return axios.get("https://jsonplaceholder.typicode.com/posts")
    }

    // staleTime:10000,     //10 second
    // refetchInterval:1000,
    // refetchIntervalInBackground:true
    // enabled:false
  });


  
  if (isError) {
    return <div>Error: {error?.message || "An unknown error occurred"}</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }


  console.log(data); 

  //  output->ek object and object ke andar data hai and uss data ke andar
  //   pura posts ka data hai.. isliye humne data.data likhe h niche


  return (
    <div>
    <h1>Posts</h1>
    {/* <button onClick={refetch}>Fetch Posts</button> */}
    <ul>
      {data?.data?.map((post) => (
        <Link   key={post.id} to={`/post/${post.id}`}>
        <li>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </li>
        </Link>
      ))}
    </ul>
  </div>
  )
}

export default FetchApiUsingReactQuery