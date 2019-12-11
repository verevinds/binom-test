import React from 'react';
import { Button } from 'antd';
import './GroupButton.scss';

const GroupButton = () =>(
    <div className="group_button">
        <Button className="group_button__button">Сохранить командировку</Button>
        <Button className="group_button__button group_button__button-primary">Показать варианты</Button>
    </div>
);

export default GroupButton;