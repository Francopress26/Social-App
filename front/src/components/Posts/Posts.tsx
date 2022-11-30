import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { user } from '../../types';
import Detail from '../Detail/Detail';
import Feed from '../Feed/Feed';
import Navbar from '../Navbar/Navbar';


const Posts = () => {

  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50">
        <Navbar/>
      </div>
      <div className=" h-screen ">
        <Routes>
          <Route path="/" element={<Feed />} />
          {/* <Route path="/category/:categoryId" element={<Feed />} /> */}
          <Route path="/detail/:id" element={<Detail />} />
          {/* <Route path="/create-pin" element={<CreatePin user={user && user} />} /> */}
          {/* <Route path="/search" element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Posts;