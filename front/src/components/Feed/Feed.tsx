import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch,useAppSelector } from '../../state/hooks';
import { PostI } from '../../types';
import MasonryLayout from '../MasonryLayout/MasonryLayout';
const Feed = () => {
  const [pins, setPins] = useState();
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  const posts:PostI[] = useAppSelector((state)=>state.posts)
  const ideaName = categoryId || 'new';

  
  if (loading) {
    return (
    //   <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
    <div>Loading</div>
    );
  }
  return (
    <div>
      {/* {pins && (
        <MasonryLayout posts={[]} />
      )} */}

      <div>MASONRY LAYOUT</div>
    </div>
  );
};

export default Feed;