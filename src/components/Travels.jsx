import Meiji_shrine from '../img/Meiji-shrine_op.jpg'
import Fuji_san from '../img/fuji-san_op.jpg'
// import imgg from props.imageUrl
import location_sym from '../img/location.svg'


export default function Travels(props) {
  
  return (
    <div className="travels">
      <div className="pic-div">
        <img className='pic-div__img' src={ Meiji_shrine }  alt="image failed" />
      </div>
      
      <div className="desc">
        <div className="desc__location">
          <img src={ location_sym } alt="" /> 
          <span>{ props.location }</span>
          <a href="#">View on Google Maps</a>
        </div>
        <div className="desc__title">{ props.title }</div>
        <div className="desc__date">{ props.startDate + props.endDate }</div>
        <div className="desc__desc">{ props.description }</div>
      </div>
    </div>
  )
};