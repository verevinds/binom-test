import React from 'react';
import { Input, DatePicker } from 'antd';
import ListName from './ListName/ListName';
import './InputTrip.scss';

const InputTrip = () => (
    
  <div className="InputName">
    <div className="mainBox__fromtoclient">
      <label className="mainBox_firstLevel_label label_from">Откуда</label>
      <Input className="mainBox_input mainBox_input_from mainBox_input_placeholder" placeholder="Санкт-Петербург"/>

      <label className="mainBox_firstLevel_label label_to">Куда</label>
      <Input className="mainBox_input mainBox_input_to mainBox_input_placeholder" placeholder="Австрия"/>

      <label className="mainBox_firstLevel_label label_date">Дата</label>
      <DatePicker className="mainBox_input mainBox_input_date mainBox_input_placeholder" placeholder="20.сен"  />
    </div>

    <div>
      <label className="mainBox_firstLevel_label label_client">Ф.И.О. участника</label>
      <Input className="mainBox_input mainBox_input_client" placeholder="Введите Ф.И.О. и выберите из списка"/>
    </div>

    <ListName/>
  </div>  
     
);

export default InputTrip;