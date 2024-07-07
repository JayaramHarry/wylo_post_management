import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostsDisplay from './components/PostsDisplay/PostsDisplay';
import CreatePost from './components/CreatePost/CreatePost';
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<PostsDisplay />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
