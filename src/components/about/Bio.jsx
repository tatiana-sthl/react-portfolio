import React from "react"
//import stack2023 from "../../images/stack_2023.png"
import htmlIcon from "../../images/svg/html5-white.svg"
import cssIcon from "../../images/svg/css3-fill.svg"
import mongodbIcon from "../../images/svg/mongodb-white.svg"


export const Bio = ({ items, Heading }) => {

  const competences = [
    { nom:"HTML5", icone: htmlIcon },
    { nom:"CSS3", icone: cssIcon },
    { nom:"MONGODB", icone: mongodbIcon }
    
  ];

  return (
    <>
      <Heading title="Mon stack" />
      <div className="competences">
        {competences.map((competence, index) => (
          <div key={index} className="competence">
            <div className="icone-wrapper">
            <img src={competence.icone} alt={competence.nom} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
