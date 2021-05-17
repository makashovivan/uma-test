import React from 'react';
import { Avatar } from 'antd';

function UserPhoto({userPhotoUrl, mnem, insta}) {
  return (
    <>
      <a href={insta} rel='noreferrer' target='_blank'>
        <Avatar src={userPhotoUrl} size={118}/>
      </a>
      <div className='mnem'>
        <a href={insta} rel='noreferrer' target='_blank'>@{mnem}</a>
      </div>
    </>
  )
};

export default UserPhoto;
