import React, { Component } from 'react';
import { Layout } from 'antd';
import InputTrip from './component/InputTrip/InputTrip';
import CheckService from './component/CheckService/CheckService';
import GroupButton from './component/GroupButton/GroupButton';
import './App.scss';

const { Header, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="mainBox">
          <Layout>
            <Header><span className="mainBox__titel">Командировки</span></Header>
            <Content>
              <InputTrip />
              <hr/>  
              <CheckService />
              <GroupButton />
            </Content>
          </Layout>
      </div>
    );
  }
}

export default App;