import React, { useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin, BackTop } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import {
  getFashionsData,
  selectCurrentPage,
  selectFashionsList,
  selectIsLoading,
  selectPagesCount,
  setCurrentPage
} from '../../store/reducers/fashionsSlice';
import FashionCard from './Components/FashionCard';
import './Fashion.less'

function FashionsList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectCurrentPage);
  const pagesCount = useSelector(selectPagesCount);
  const fashionsList = useSelector(selectFashionsList);
  const isEmpty = fashionsList.length === 0;
  useEffect(() => {
    dispatch(getFashionsData(1));
  }, [dispatch]);
  const observer = useRef();
  const lastFashionRef = useCallback(node => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && currentPage !== pagesCount) {
          dispatch(setCurrentPage(currentPage + 1));
          dispatch(getFashionsData(currentPage));
        }
      })
      if(node) observer.current.observe(node)
    }, [isLoading, currentPage, pagesCount, dispatch]);
  return (
    <div className='fashions-list-container'>
    {
      fashionsList.map((fashion, index) => {
        if (fashionsList.length === index + 1) {
          return (
            <div ref={lastFashionRef}>
              <FashionCard
                key={fashion.fashionId}
                pictUrl={fashion.pictUrl}
                fashionId={fashion.fashionId}/>
            </div>
          )
        }
        return <FashionCard
          key={fashion.fashionId}
          pictUrl={fashion.pictUrl}
          fashionId={fashion.fashionId}/>
      })
    }
    {(isEmpty && !isLoading) && <div>Список подборок пуст</div>}
    <BackTop visibilityHeight={1500}>
      <div className='back-top'>
        <UpOutlined />
      </div>
    </BackTop>
    {isLoading && <Spin className='spin' size="large"/>}
  </div>
  )
}

export default FashionsList;
