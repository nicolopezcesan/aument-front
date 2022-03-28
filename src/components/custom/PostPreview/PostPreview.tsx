import React, { MouseEventHandler, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Post from '../Post/Post'
import IconButtons from '../../ui/IconButton/IconButton';
import { POST_NOT_EXIST } from '../../../constants/messages';
import PostService, { IPost } from '../../../services/PostService';
import EditIcon from '@mui/icons-material/Edit';
import './styles.css';
import { LG_SIZE } from '../../ui/Card/Card';

interface IProps {
  post: IPost,
  goBack: MouseEventHandler<HTMLInputElement>
}

const PostPreview = (props: IProps) => {
  const navigate = useNavigate();

  const { post, goBack } = props;

  const editPost = () => {
    const url = `/edit-post/${post._id}`;
    navigate(url);
  }

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
          <Post post={post} size={LG_SIZE} />
        </div>
      )}
    </div>
  )
}

export default PostPreview