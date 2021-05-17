import React from 'react';
import { Row, Col, Divider } from 'antd';
import FashionImageCard from './FashionImageCard';
import ProductsCarousel from './ProductsCarousel';
import '../Fashion.less';

function FashionCard({pictUrl, fashionId }) {
  return (
      <Row className='fashion-container'>
        <Col style={{marginBottom: 15}} className='card-indent'>
          <FashionImageCard pictUrl={pictUrl}/>
        </Col>
        <Col style={{marginBottom: 15}}>
          <ProductsCarousel fashionId={fashionId}/>
        </Col>
        <Divider style={{backgroundColor: '#666666'}}/>
      </Row>
  )
}

export default FashionCard;
