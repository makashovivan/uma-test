import React from 'react';
import { Card } from 'antd';
import '../Fashion.less';


function FashionImageCard({pictUrl}) {
  return (
    <div className='card-size '>
      <div className='fashion-image-title'>Подборка одежды</div>
      <Card className='card-border'>
        <div className='fashion-image-container'>
          <img src={pictUrl} alt='' className='limited-image'/>
        </div>
      </Card>
    </div>
  )
}

export default FashionImageCard;
