import React from 'react'
import { IPost } from '../../../services/PostService'
import Card, { LG_SIZE, SM_SIZE } from '../../ui/Card/Card'

interface IProps {
  post: IPost,
  onClick?: Function,
  size?: typeof LG_SIZE | typeof SM_SIZE
}

const Post = (props: IProps) => {

  const { post, onClick, size = SM_SIZE } = props;

  const clickPost = () => {
    onClick && onClick(post._id)
  }

  return (
    <div onClick={clickPost}>
      <Card
        _id={post._id}
        title={post.title}
        tag={post.tag}
        date={post.date}
        image={post.image}
        size={size} />
    </div>
  )
}

export default Post;