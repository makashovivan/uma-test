import React from 'react';
import { Divider } from 'antd';
import './PersonalInfo.less';

function Links({mysite, whatsapp, telegram, email}) {
  return (
    <div>
      <div>Ссылки автора</div>
      <Divider className='links-divider'></Divider>
      <ul className='links-list'>
        <li className='link'>
          <a href={mysite} rel='noreferrer' target='_blank'>Мой сайт</a>
        </li>
        <li className='link'>
          <a href={whatsapp} rel='noreferrer' target='_blank'>WhatsApp</a>
        </li>
        <li className='link'>
          <a href={telegram} rel='noreferrer' target='_blank'>Telegram</a>
        </li>
        <li className='link'>
          <a href={email} rel='noreferrer' target='_blank'>Сотрудничество</a>
        </li>
      </ul>
    </div>
  )
}

export default Links;
