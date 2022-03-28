import React, { useEffect, useState } from 'react'
import PostService, { IPost } from '../../services/PostService';
import { useParams, useNavigate } from 'react-router-dom';
import PostEditForm from '../../components/custom/PostEditForm/PostEditForm';
import { POST_NOT_EXIST } from '../../constants/messages';
import './styles.css';
import Post from '../../components/custom/Post/Post';
import { SnackbarProvider, useSnackbar, VariantType } from 'notistack';
import { LG_SIZE } from '../../components/ui/Card/Card';

const PostEdit = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
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
    try {
      await PostServicesInstance.updatePost(request);
      getSuccessSnackbar('Post has been modified successfull!');
    } catch (error) {
      getSuccessSnackbar('It was not possible to update the Post');
    }
  }

  const getSuccessSnackbar = (message: string) => {
    const variant: VariantType = 'success';
    enqueueSnackbar(message, { variant });
  };

  const backToList = () => {
    navigate('/');
  }

  if (errorMessage) return <h3>{errorMessage}</h3>;

  if (!post) return <>...Loading</>;

  return (
    post && (
      <div className='main-container'>
        <div>
          <input type="button" value="Back to list" onClick={backToList} />
        </div>

        <div className='edit-container'>
          <div className='form-container grid'>
            <PostEditForm
              data={post}
              onChange={setPost}
              submit={submit} />
          </div>

          <div className='post-container'>
            <Post post={post} size={LG_SIZE}/>
          </div>
        </div>
      </div >
    )
  )
}

export default PostEdit;