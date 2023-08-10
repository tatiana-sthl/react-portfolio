import React from "react"
//import stack2023 from "../../images/stack_2023.png"
import htmlIcon from "../../images/svg/html5-white.svg"
import cssIcon from "../../images/svg/css3-fill.svg"
import javaScriptIcon from "../../images/svg/javascript-fill-white.svg"
import reactIcon from "../../images/svg/react-fill-white.svg"
import phpIcon from "../../images/svg/php-fill-white.svg"
import mongodbIcon from "../../images/svg/mongodb-white.svg"
import bootstrapIcon from "../../images/svg/bootstrap-fill-white.svg"
import vscIcon from "../../images/svg/visualstudiocode-white.svg"
import figmaIcon from "../../images/svg/figma.svg"
import postmanIcon from "../../images/svg/postman-white.svg"
import wordpressIcon from "../../images/svg/wordpress-white.svg"



export const Bio = ({ items, Heading }) => {

  const competences = [
    { nom:"HTML5", icone: htmlIcon },
    { nom:"CSS3", icone: cssIcon },
    { nom: "JS", icone: javaScriptIcon },
    { nom: "react", icone: reactIcon },
    { nom: "php", icone: phpIcon },
    { nom:"MONGODB", icone: mongodbIcon },
    { nom:"bootstrap", icone: bootstrapIcon },    
    { nom:"VSC", icone: vscIcon },    
    { nom:"figma", icone: figmaIcon },    
    { nom:"wordpress", icone: wordpressIcon }, 
    { nom:"postman", icone: postmanIcon },    


  ];

  return (
    <>
      <Heading title="Mon stack" />
      <div className="competences">
        <div className="intercalated-row">
          {competences.slice(0, 5).map((competence, index) => (
            <div key={index} className="competence">
              <div className="icone-wrapper">
                <img src={competence.icone} alt={competence.nom} />
              </div>
            </div>
          ))}
        </div>
        <div className="intercalated-row">
          {competences.slice(5).map((competence, index) => (
            <div key={index} className="competence">
              <div className="icone-wrapper">
                <img src={competence.icone} alt={competence.nom} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
