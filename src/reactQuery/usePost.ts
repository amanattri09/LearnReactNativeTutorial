import { useQuery } from "react-query";
import axios from "axios";

const fetchPost = async (postId:string) => {
     const {data} = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
     return data
}

const usePost = (postId:string) => useQuery(['posts',postId],()=> fetchPost(postId))
export default usePost