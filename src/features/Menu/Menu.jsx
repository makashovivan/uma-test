import React from 'react';
import { Button, Row, Col } from 'antd';
import './Menu.less';

function Menu() {
  return (
    <div className='menu-container'>
      <Row
        gutter={[16]}
        justify='start'>
        <Col>
          <Button className='menu-button' ghost>Одежда</Button>
        </Col>
        <Col>
          <Button className='menu-button' ghost>Подборки</Button>
        </Col>
        <Col>
          <Button className='menu-button' ghost>Детям</Button>
        </Col>
        <Col>
          <Button className='menu-button' ghost>Книги</Button>
        </Col>
      </Row>
    </div>
  )
};

export default Menu;
