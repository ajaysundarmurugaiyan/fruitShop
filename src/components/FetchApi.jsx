import { useEffect, useState } from 'react'

const FetchApi = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    const [posts,setPost] = useState([]);
    const [loading,setLoading] = useState(false);
        useEffect(() => {
        const fetchData =async () =>{
            setLoading(true)
            const response = await fetch(url);
            const data = await response.json();
            setPost(data);
            console.log(data);
            setLoading(false)
        };
        fetchData();
    },[]);
    
    if(loading) return <div>loading...</div>
    return (
        <div>
      fetch Api 
      {posts.map((post) => <div key={post.id}>{post.userId}</div>)}
    </div>
  )
  
}
export default FetchApi
