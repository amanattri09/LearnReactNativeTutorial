import {useMutation, useQuery} from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

export const usePosts = () => useQuery('posts', fetchPosts);

// post data to server

const addPost = async (post: {post: string}) => {
  const {data} = await axios.post('https://jsonplaceholder.typicode.com/posts');
  return data;
};

export const useAddPost = () => useMutation('posts', fetchPosts);
