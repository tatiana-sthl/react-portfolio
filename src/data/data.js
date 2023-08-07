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
    url: "https://twitter.com/ThathiDev",
    class: "twitter",
  },
  {
    id: 2,
    icon: <FaGithub />,
    url: "https://github.com/tatiana-sthl",
    class: "dribbble",
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/tatiana-stahli/",
    class: "instagram",
  },
]


export const about = [
  {
    bio: [
      {
        para1: "Une jeune femme d'actuellement 28 ans, qui a suivi des études pour travailler dans le milieu de l'agriculture, puis des études pour travailler dans le milieu de la culture, qui a fait un service civique pour l'UNICEF, puis qui a travaillé dans deux musées et deux bibliothèques.",
        para2: "Et après moults aventures, décide en août 2021 d'apprendre à coder, comprend que cela lui plaît beaucoup, et veut en faire son métier. Je me passionne pour le trio HTML/CSS/Javascript avec son lot de framework tels que React ou Bootstrap, que j'apprends à dompter petit à petit.",
        para3: "",
        images: "",
      },
    ],

    
    review: [
      {
        id: 1,
        desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Edward Johnson",
        link: "gorkcoder.com",
        cover: "../images/portfolio/kasa.png",
      },
      {
        id: 2,
        desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Gork Coder",
        link: "gorkcoder.com",
        cover: "./images/aut2.jpg",
      },
      {
        id: 3,
        desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Edward Johnson",
        link: "gorkcoder.com",
        cover: "./images/aut3.jpg",
      },
    ],
  },
]
