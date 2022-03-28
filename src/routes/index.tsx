// eslint-disable-next-line no-use-before-define
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as Path from '../constants/routes';
import PostEdit from '../views/PostEdit/PostEdit';
import Posts from '../views/PostList/PostList';

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

      </Routes>

    </BrowserRouter>
  );
};

export default RouterApp;
