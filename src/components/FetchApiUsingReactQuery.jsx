import React from 'react'
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const FetchApiUsingReactQuery = () => {

  const { data, error, isError, isLoading,refetch } = useQuery({
    queryKey:["posts"],
    queryFn:()=>{
      return axios.get("http://localhost:4000/posts");
    },
    // staleTime:10000,     //10 second
    // refetchInterval:1000,
    // refetchIntervalInBackground:true
    // enabled:false
  });


  
  if (isError) {
    return <div>Error: {error}</div>;
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
        <li key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default FetchApiUsingReactQuery