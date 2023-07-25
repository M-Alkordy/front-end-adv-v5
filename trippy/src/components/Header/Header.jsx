import Hero from '../Hero/Hero'
import NavBar from '../NavBar/NavBar'
import './HeaderStyle.css'
import pic from './../../assets/img/12.jpg'
const Header = () => {
  return (
    <header>
      <NavBar logo ="Trippy" 
        list={[{name: "home" , icon : "fa-solid fa-house-chimney-user"}, 
              {name: "about" , icon : "fa-solid fa-circle-info"},
              {name: "service" , icon : "fa-solid fa-briefcase"},
              {name: "contact" , icon : "fa-solid fa-address-book"},]}
        button = "sign up" />
      <Hero heroPic={pic} title="Your Journey Your Story" secTitle="Choose Your Favourite Destination." button="Travel Now" />
    </header>
  )
}

export default Header