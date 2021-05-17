import React from 'react'
import './App.css';
import Col  from 'react-bootstrap/Col'
import ChatArea from './components/chatArea/chatArea';
import ChatComponent from './components/chatArea/chatComponent';
import JavaScriptHeader from './components/header/jsHeader';
import ReactHeader from './components/header/reactHeader';
import NarrowBar from './components/narrowbar/narrowBar';
import SideBar from './components/sidebar/sidebar';
import DescriptionCard from './components/Descriptioncard/DescriptionCard';


function App() {
  return (
    <div className="App">
          <NarrowBar className='narrowbar' />
          <SideBar />
          <ChatComponent />
          
    </div>
  );
}

export default App;
