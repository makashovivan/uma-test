import React from 'react';
import { Card, Button } from 'antd';
import '../Fashion.less';

function ProductCard({pictUrl, shopName, shopLink, price}) {
  const formatedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  }).format(price)
  return (
    <div style={{ textAlign: 'center'}}>
      <Card>
        <div className='shop-title'>{shopName}</div>
        <div className='product-image-container'>
          <img src={pictUrl} alt='' className='limited-image'/>
        </div>
        <div>{formatedPrice}</div>
      </Card>
      <Button href={shopLink} target='_blank' className='to-shop-button'>В магазин</Button>
    </div>
  )
};

export default ProductCard;
