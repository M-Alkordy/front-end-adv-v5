import './PopularContainerStyle.css'
const PopularContainer = ({firstPic , SecPic , title , desc , reverse}) => {
  return (
    <div className={(reverse) ? "container reverse" : "container"} >
        <div className="imgs">
            <img src={firstPic} alt="" />
            <img src={SecPic} alt="" />
        </div>
        <div className="info">
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default PopularContainer