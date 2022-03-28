import React, { useEffect, useState } from 'react';
import PostService, { IPost } from '../../services/PostService';
import Title from '../../components/ui/Title/Title';
import Post from '../../components/custom/Post/Post';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import PostPreview from '../../components/custom/PostPreview/PostPreview';

const PostList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IPost[]>([]);
  const [postSelected, setPostSelected] = useState<IPost>();

  useEffect(() => {
    const getPosts = async () => {
      const PostServicesInstance = new PostService();
      const result: IPost[] = await PostServicesInstance.getPost();
      setData(result);
    }

    getPosts();
  }, [])


  const goPost = (post: IPost) => {
    setPostSelected(post)
  }

  const goBack = () => {
    setPostSelected(undefined)
  }

  return (
    <div>

      {!postSelected && (
        <div className='main-container'>
          <Title title='Recent Posts' />

          <div className='cards-container'>
            {data && data.map((p: IPost) => {
              return <Post post={p} onClick={() => goPost(p)} />
            })}
          </div>
        </div>
      )}

      {postSelected
        && <PostPreview post={postSelected} goBack={goBack} />}
    </div>
  );
};

export default PostList;
