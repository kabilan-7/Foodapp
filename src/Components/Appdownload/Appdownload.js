import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'
const Appdownload = () => {
  return (
    <div className='appdownload' id='appdownload'>
      <p>Foe better Experience Download <br/> Tomato app</p>
      <div className='appdownload-platform'>
        <img src={assets.play_store}/>
        <img src={assets.app_store}/>
      </div>
    </div>
  )
}

export default Appdownload