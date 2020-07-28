import React from 'react';
import style from './App.module.css'
import Sidebar from "./Components/Sidebar/Sidebar";
import HeaderContainer from "./Components/Header/HeaderContainer";
import MainContainer from "./Components/Main/MainContainer";

function App() {
  return (
    <div className={style.app}>
      <HeaderContainer/>
      <Sidebar/>
      <MainContainer/>
    </div>
  );
}
export default App;
