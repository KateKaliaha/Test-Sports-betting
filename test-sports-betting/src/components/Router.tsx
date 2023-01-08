import { ErrorPage } from 'pages/ErrorPage';
import { GamePage } from 'pages/GamePage';
import { Main } from 'pages/MainPage';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/game/:id" element={<GamePage />}></Route>
      <Route path="/404" element={<ErrorPage />}></Route>
      <Route path="*" element={<Navigate to={'/404'} />}></Route>
    </Routes>
  );
};
