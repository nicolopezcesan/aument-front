import React from 'react'
import { IPost } from '../../../services/PostService'
import Card from '../../ui/Card/Card'

interface IProps {
  post: IPost,
  onClick?: Function,
}

const Post = (props: IProps) => {

  const { post, onClick } = props;

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
        size={'sm'}/>
    </div>
  )
}

export default Post;