// eslint-disable-next-line no-use-before-define
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as Path from '../constants/routes';
import PostEdit from '../views/PostEdit/PostEdit';
import Posts from '../views/PostList/PostList';
import PostPreview from '../views/PostPreview/PostPreview';

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={Path.MAIN}
          element={<Posts />} />

        <Route
          path="/edit-post/:postId"
          element={<PostEdit />} />

        <Route
          path="/*"
          element={<Posts />}
        />

        <Route
          path="/post/:postId"
          element={<PostPreview />}
        />
      </Routes>

    </BrowserRouter>
  );
};

export default RouterApp;
