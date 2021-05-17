import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserPhoto from './UserPhoto';
import Links from './Links';
import './PersonalInfo.less';
import {
  selectUserPhotoUrl,
  selectMnem,
  selectTelegram,
  selectWhatsApp,
  selectMysite,
  selectEmail,
  getUserData,
  selectInstagram
} from '../../store/reducers/userInfoSlice';


function PersonalInfo() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);
  return (
    <div className='sidebar-container'>
      <div className='user-info-container'>
        <div className='user-photo-container'>
          <UserPhoto
            userPhotoUrl={useSelector(selectUserPhotoUrl)}
            mnem={useSelector(selectMnem)}
            insta={useSelector(selectInstagram)}/>
        </div>
        <Links
          mysite={useSelector(selectMysite)}
          whatsapp={useSelector(selectWhatsApp)}
          telegram={useSelector(selectTelegram)}
          email={useSelector(selectEmail)}/>
      </div>
    </div>
  )
};

export default PersonalInfo;
