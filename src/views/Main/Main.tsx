import React, { useEffect, useState } from 'react';
import PostService, { IPost } from '../../services/PostService';
import Card from '../../components/Card/Card';
import './styles.css';

const Main = () => {
  const [data, setData] = useState<IPost[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const PostServicesInstance = new PostService();
      const result: IPost[] = await PostServicesInstance.getPost({});
      setData(result);
    }

    getPosts();
  }, [])


  return (
    <div className='main-container'>
      <p className='posts-title'>
        Recent Post
      </p>
      <div className='cards-container'>
        {data && data.map((p: IPost) =>
          <Card
            title={p.title}
            tag={p.tag}
            date={p.date}
            image={p.image} />
        )}
      </div>
    </div>
  );
};

export default Main;
