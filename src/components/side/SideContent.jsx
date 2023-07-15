import React from "react"
import { socialIcon } from "../../data/data"
import sideImg from "../../images/side.jpg"
import { FiDownloadCloud } from "react-icons/fi"


export const SideContent = () => {
  return (
    <>
      <section className='sideContent'>
        <div className='sideContent_top'>
          <div className='sideContent_top_img'>
            <img src={sideImg} alt='side' width='100%' />
          </div>
          <div className='sideContent_top_social'>
          {socialIcon.map((icons) => (
            <div className={icons.class}>
              <span>{icons.icon}</span>
            </div>
          ))}
        </div>
          
        </div>
        
        <div className='sideContent_bottom'>
          <div className='sideContent_bottom_buttonGroup'>
            
            <button className='sm_button'>
              <span>
                <FiDownloadCloud className='button_bicon' />
                <span>Télécharger mon CV</span>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
