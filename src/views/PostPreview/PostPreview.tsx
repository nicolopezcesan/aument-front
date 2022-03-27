import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Post from '../../components/custom/Post/Post'
import { POST_NOT_EXIST } from '../../constants/messages';
import PostService, { IPost } from '../../services/PostService';

const PostPreview = () => {
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

  const goBack = () => {
    navigate('/');
  }

  const editPost = () => {
    const url = `/edit-post/${postId}`;
    navigate(url);
  }

  if (errorMessage) return <h3>{errorMessage}</h3>;

  return (
    <div>
      <input type="button" value="Back" onClick={goBack} />

      <h1>Post Preview</h1>

      {post && (
        <div className=''>
          <Post post={post} />
        </div>
      )}

      <input type="button" value="Edit Post" onClick={editPost} />
    </div>
  )
}

export default PostPreview