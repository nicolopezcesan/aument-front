import React, { useEffect, useState } from 'react'
import PostService, { IPost } from '../../services/PostService';
import { useParams, useNavigate } from 'react-router-dom';
import PostEditForm from '../../components/custom/PostEditForm/PostEditForm';
import { POST_NOT_EXIST } from '../../constants/messages';
import './styles.css';
import Post from '../../components/custom/Post/Post';

const PostEdit = () => {
  const navigate = useNavigate();
  const PostServicesInstance = new PostService();

  const [post, setPost] = useState<IPost>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { postId } = useParams();

  useEffect(() => {
    const getPosts = async () => {
      if (postId) {
        try {
          const request = postId ? { _id: postId } : undefined;
          const result: IPost[] = await PostServicesInstance.getPost(request);
          const [post] = result;
          setPost(post);
        } catch (error) {
          setErrorMessage(POST_NOT_EXIST);
        }
      } else {
        setErrorMessage(POST_NOT_EXIST);
      }
    }

    getPosts();
  }, [])

  const submit = async () => {
    const request: IPost = { ...post, id: post?._id } as IPost;
    await PostServicesInstance.updatePost(request);
  }

  const backToList = () => {
    navigate('/');
  }

  if (errorMessage) return <h3>{errorMessage}</h3>;

  if (!post) return <>...Loading</>;

  return (
    post && (
      <div className='edit-container'>
        <div className='edit-container-item'>
          <PostEditForm
            data={post}
            onChange={setPost}
            submit={submit} />
        </div>

        <div className='edit-container-item'>
          <Post post={post} />
        </div>

        <input type="button" value="Back to list" onClick={backToList} />
      </div>
    )
  )
}

export default PostEdit;