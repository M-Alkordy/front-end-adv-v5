import './HeroStyle.css'
const Hero = ({heroPic , title , secTitle , button }) => {
  return (
    <div className='hero'>
      <img src={heroPic} alt="" />
      <div className="info">
        <h1>{title}</h1>
        <h2>{secTitle}</h2>
        <button>{button}</button>
      </div>
    </div>
  )
}

export default Hero