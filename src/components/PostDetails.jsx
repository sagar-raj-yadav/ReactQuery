import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';



const PostDetails = () => {

    const { postid } = useParams(); 

    const {data, error, isError, isLoading }=useQuery({
        queryKey:["post",postid],
        queryFn:()=>{
            return axios.get(`https://jsonplaceholder.typicode.com/posts/${postid}`);
        }
    });

      
    if (isError) {
        return <div>Error: {error?.message || "An unknown error occurred"}</div>;
      }

  if (isLoading) {
    return <div>loading...</div>;
  }
  

  const {title,body}=data?.data || {};

  return (
    <div>
    <div>{title}</div>
    <div>{body}</div>
    </div>
  )
}

export default PostDetails;