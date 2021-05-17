import React from 'react';
import { Row, Col} from 'antd';
import ProductCard from './ProductCard';
import '../Fashion.less';

function ProductsContainer({products}) {
  return (
    <Row className='products-container'  wrap gutter={[11, 10]}>
        {products.map(product => (
            <Col>
              <ProductCard
                key={product.id}
                pictUrl={product.imgUrl}
                shopName={product.uproduct.shopName}
                shopLink={product.uproduct.xref}
                price={product.uproduct.price}/>
            </Col>
          ))
        }
    </Row>
  )
};

export default ProductsContainer;
