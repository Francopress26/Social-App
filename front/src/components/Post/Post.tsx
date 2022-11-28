import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDownloadForOffline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { PostI, user } from '../../types';
import logo from '../../assets/download.svg'

const Post = (post:PostI) => {
  const [postHovered, setPostHovered] = useState(false);
  const [savingPost, setSavingPost] = useState(false);

  const navigate = useNavigate();

//   const { postedBy, image, _id, destination } = pin;

const user1:user = localStorage.getItem('user') !=='undefined' ? JSON.parse(localStorage.getItem('user')|| ""): localStorage.clear()





//   const savePin = (id) => {
//     if (alreadySaved?.length === 0) {
//       setSavingPost(true);

//       client
//         .patch(id)
//         .setIfMissing({ save: [] })
//         .insert('after', 'save[-1]', [{
//           _key: uuidv4(),
//           userId: user?.googleId,
//           postedBy: {
//             _type: 'postedBy',
//             _ref: user?.googleId,
//           },
//         }])
//         .commit()
//         .then(() => {
//           window.location.reload();
//           setSavingPost(false);
//         });
//     }
//   };

  return (
      <div className='display:flex'>
       <img src={post.image} className=" rounded-xl p-2 m-2 border-black"/>


       <Link to={"/"} className="flex gap-2 mt-2 items-center">
        <img
          className="ml-4 w-8 h-8 rounded-full object-cover"
          src={post.profilePic}
          alt="user-profile"
        />
        <p className="font-semibold capitalize">{post.postedBy}</p>
      </Link>
        
      </div>

      
  );
};

export default Post;