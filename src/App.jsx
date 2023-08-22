import { useState } from 'react'
import './App.css'

import {AppRight, AppLeft} from './app-parts/index';

function App() {

  return (
    <div className='app-container'>
      <div className='app-component-wrapper'>
        <AppLeft />
        <AppRight />
       </div> 
   </div>
  )
}

export default App
