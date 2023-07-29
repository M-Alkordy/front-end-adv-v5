import Card from '../Card/Card'
import './RecentStyle.css'
import firstPic from './../../assets/img/5.jpg'
import secPic from './../../assets/img/6.jpg'
import thirdPic from './../../assets/img/8.jpg'
import { useRef, useState } from 'react'
const Recent = () => {
    const [info] = useState([{
        img : firstPic,
        title : "Trip in Indonesia",
        desc : "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
    },
    {
        img : thirdPic,
        title : "Trip in Malaysia",
        desc : "Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia"
    },
    {
        img : secPic,
        title : "Trip in France",
        desc : "France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans."
    },
]);
  return (
    <div className='resent'>
        <h1 className='title'>Recent Trips</h1>
        <p className='sec-title'>You can discover unique destination using Google Maps.</p>
        <div className="container">
            {info.map((e , i) => {
                return <Card key={i}
                img={e.img} 
                title = {e.title}
                desc = {e.desc} />
            } )}
        </div>
    </div>
  )
}

export default Recent