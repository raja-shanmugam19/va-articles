import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import ArticleComponent from './components/ArticleComponent';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ArticleComponent />}></Route>
    </Routes>
  );
}

export default App;
