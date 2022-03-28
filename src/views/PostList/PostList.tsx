import React, { useEffect, useState } from 'react';
import PostService, { IPost } from '../../services/PostService';
import Title from '../../components/ui/Title/Title';
import Post from '../../components/custom/Post/Post';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const PostList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IPost[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const PostServicesInstance = new PostService();
      const result: IPost[] = await PostServicesInstance.getPost();
      setData(result);
    }

    getPosts();
  }, [])


  const goPost = (postId: string) => {
    const url = `/post/${postId}`;
    navigate(url);
  }

  return (
    <div className='main-container'>
      <Title title='Recent Posts' />

      <div className='cards-container'>
        {data && data.map((p: IPost) => {
          return <Post post={p} onClick={goPost} />
        })}
      </div>

    </div>
  );
};

export default PostList;
