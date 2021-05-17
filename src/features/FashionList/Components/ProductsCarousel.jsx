import React, { useEffect, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Carousel } from 'antd';
import { getProductsData, selectProductsByFashionId } from '../../../store/reducers/fashionsSlice';
import ProductsContainer from './ProductsContainer';
import { separateArray } from '../../../common/utils';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useWindowSize } from '../../../common/useWindowSize';
import '../Fashion.less';

function ProductsCarousel({fashionId}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsData(fashionId));
  }, [fashionId, dispatch]);

  const productsList = useSelector(selectProductsByFashionId(fashionId));
  const windowSize = useWindowSize();
  const SIZE = windowSize.width <= 700 ? 3 : 8;
  const preparedProductsList = productsList ? separateArray(productsList, SIZE) : [[]];
  const isOnePage = productsList.length <= SIZE;
  const isEmpty = productsList.length === 0;

  let carouselRef = createRef();

  const nextClick = () => carouselRef.current.next();
  const prevClick = () => carouselRef.current.prev();

  return (
    <div>
      <Card className='card-size' style={{border: 'none'}}>
        <div className='carousel-header'>
          {!isEmpty && <div className='card-title'>Где купить похожее?</div>}
          {!isOnePage &&
          <div style={{marginRight: 30}}>
            <LeftOutlined onClick={prevClick} className='carousel-arrow'/>
            <RightOutlined onClick={nextClick} className='carousel-arrow'/>
          </div>}
        </div>
        <Carousel ref={carouselRef} dots={false}>
          {
            preparedProductsList[0].length && preparedProductsList.map(products => {
              return <ProductsContainer products={products}/>
            })
          }
        </Carousel>
      </Card>
    </div>
  )
}

export default ProductsCarousel;
