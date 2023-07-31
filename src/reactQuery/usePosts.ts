import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
       const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
       throw new Error("Something bad happened")
       return data
}

const usePosts = () => useQuery('posts', fetchPosts)
export default usePosts