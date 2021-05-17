import React from 'react';
import PersonalInfo from './features/PersonalInfo/PersonalInfo';
import Menu from './features/Menu/Menu';
import FashionsList from './features/FashionList/FashionsList';
import './App.less';

function App() {
  return (
    <div className='main'>
      <PersonalInfo/>
      <div>
        <Menu/>
        <FashionsList/>
      </div>
    </div>
  )
}

export default App;
