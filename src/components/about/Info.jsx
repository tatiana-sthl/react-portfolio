import React from "react"
import { BsArrowRight } from "react-icons/bs"


export const Info = ({ items, Heading }) => {
  return (
    <>
      {" "}
      <Heading title='Mon histoire' />
      <div className='about_details_bio'>
        {items.bio.map((val) => (
          <>
            <div className='about_details_bio_box'>
              <div className='about_details_bio_box_item'>
                <p>{val.para1}</p>
              </div>
              <div className='about_details_bio_box_item'>
                <p>{val.para2}</p>
                <a href="http://localhost:3000/contact" className='about_details_bio_box_contact'><BsArrowRight />&nbsp;Pour me contacter, c'est par ici</a>
              </div>              
            </div>
          </>
        ))}
      </div>
    </>
  )
}
