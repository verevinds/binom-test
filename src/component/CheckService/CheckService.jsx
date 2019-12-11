import React from 'react';
import ServiceTabs from './ServiceTabs/ServiceTabs';
import './CheckService.scss';

const CheckService = () => (

    <div className="check_service">
        <span className="check_service__titel">Необходимые услуги</span>
        <ServiceTabs />
        <div className="check_service__footer"></div>
    </div>

);

export default CheckService;