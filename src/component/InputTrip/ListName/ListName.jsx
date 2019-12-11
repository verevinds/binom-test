import React from 'react';
import {Icon} from 'antd';
import './ListName.scss';

const ListName = () => (
    <div className="list_name">
      <div className="list_name__element"><label>Еремина Анна Евгеньевна</label><Icon type="close-circle" theme="filled" className="close"/></div>
      <div className="list_name__element"><label>Козлова Константин Викторович</label><Icon type="close-circle" theme="filled" className="close"/></div>
      <div className="list_name__element"><label>Попова Яна Борисовна</label><Icon type="close-circle" theme="filled" className="close"/></div>
    </div>
);

export default ListName;