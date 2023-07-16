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
            <a href={icons.url} target="_blank" rel="noreferrer" key={icons.id}>
              <div className={icons.class}>
                <span>{icons.icon}</span>
              </div>
            </a>
          ))}
        </div>
          
        </div>
        
        <div className='sideContent_bottom'>
          <div className='sideContent_bottom_buttonGroup'>
            
            <button className='sm_button'>
              <span className="span_svg">
                <FiDownloadCloud className='button_bicon' />
                <a href="/CV Tatiana Moula-Stahli.pdf" target="_blank">Télécharger mon CV </a>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
