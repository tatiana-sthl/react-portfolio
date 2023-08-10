import { AiOutlineHome } from "react-icons/ai"
import { FaRegLightbulb, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import { TbMailOpened } from "react-icons/tb"

export const menu = [
  {
    id: 1,
    text: "home",
    url: "/",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    text: "portfolio",
    url: "/portfolio",
    icon: <FaRegLightbulb />,
  },
  {
    id: 3,
    text: "contact",
    url: "/contact",
    icon: <TbMailOpened />,
  },
]

export const socialIcon = [
  {
    id: 1,
    icon: <FaTwitter />,
    class: "twitter",
  },
  {
    id: 2,
    icon: <FaGithub />,
    class: "dribbble",
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    class: "instagram",
  },
]


export const about = [
  {
    
    bio: [
      {
        para1: "Une jeune femme d'actuellement 28 ans, qui a suivi des études pour travailler dans le milieu de l'agriculture, puis des études pour travailler dans le milieu de la culture, qui a fait un service civique pour l'UNICEF, puis qui a travaillé dans deux musées et deux bibliothèques.",
        para2: "Et après moults aventures, décide en août 2021 d'apprendre à coder, comprend que cela lui plaît beaucoup, et veut en faire son métier. Je me passionne pour le trio HTML/CSS/Javascript avec son lot de framework tels que React ou Bootstrap, que j'apprends à dompter petit à petit.",
      },
    ],


    review: [
      {
        id: 1,
        desc: "Kasa est un exemple de projet que j'ai réalisé en React pour mon dernier projet afin de valider ma formation de développeuse web avec OpenClassrooms. J'ai réalisé plusieurs projets pour obtenir ce diplôme, vous pouvez les retrouver en détail ici :",
        link: "gorkcoder.com",
        cover: "./images/kasa.png",
      },
      {
        id: 2,
        desc: "Lors de mon alternance au sein de la start up Eté Indien, j'ai intégré les maquettes fournies par un UX/UI designer afin de permettre aux utilisateurs de la web app de naviguer dans un espace personnel plus moderne et intuitif. Vous pouvez retrouver quelques exemples de mon travail ici : ",
        link: "gorkcoder.com",
        cover: "./images/senior-dashboard.png",
      },
      {
        id: 3,
        desc: "My BookShelf est mon tout premier projet personnel développé dans le cadre du cours Computer Science dispensé par Harvard. Pour obtenir la certification, rendre un projet final utilisant le langage de programmation de son choix était obligatoire. Pour voir mes autres projets personnels, c'est par ici : ",
        link: "gorkcoder.com",
        cover: "./images/projet_final_cs50x.png",
      },
    ],
  },
]
