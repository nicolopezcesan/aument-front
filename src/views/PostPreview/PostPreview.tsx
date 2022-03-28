import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Post from '../../components/custom/Post/Post'
import IconButtons from '../../components/ui/IconButton/IconButton';
import { POST_NOT_EXIST } from '../../constants/messages';
import PostService, { IPost } from '../../services/PostService';
import EditIcon from '@mui/icons-material/Edit';
import './styles.css';


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
    <div className='main-container'>
      <input type="button" value="Back to list" onClick={goBack} />

      <div className='post-preview-title'>
        <h1>Post Preview</h1>
        <IconButtons
          icon={<EditIcon />}
          onClick={editPost} />
      </div>

      {post && (
        <div className=''>
          <Post post={post} />
        </div>
      )}
    </div>
  )
}

export default PostPreview