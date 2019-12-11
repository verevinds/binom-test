import React from 'react';
import { Checkbox, Icon } from 'antd';
import './ServiceTabs.scss';

const ServiceTabs = () =>(
    <div className="service_tabs">
      <div className="service_tabs__tab service_tabs__tab-first">
        <Checkbox /><label className="service_tabs__titel">Перелет</label><Icon type="down" className="service_tabs__icon"/>
      </div> 
      
      <div className="service_tabs__tab service_tabs__tab-second">
        <Checkbox /><label className="service_tabs__titel">Отель</label><Icon type="down" className="service_tabs__icon"/>
      </div> 
      
      <div className="service_tabs__tab service_tabs__tab-third">
        <Checkbox /><label className="service_tabs__titel">ЖД</label><Icon type="down" className="service_tabs__icon"/>
      </div> 
      
      <div className="service_tabs__tab service_tabs__tab-fourth">
        <Checkbox /><label className="service_tabs__titel">Трансфер</label><Icon type="down" className="service_tabs__icon"/>
      </div> 
      
      <div className="service_tabs__tab service_tabs__tab-fifth">
        <Checkbox /><label className="service_tabs__titel">Аэроэкспресс</label><Icon type="down" className="service_tabs__icon"/>
      </div> 
      
      <div className="service_tabs__tab service_tabs__tab-sixth">
        <Checkbox /><label className="service_tabs__titel">Страховки</label><Icon type="down" className="service_tabs__icon"/>
      </div> 
    </div>
    
);

export default ServiceTabs;