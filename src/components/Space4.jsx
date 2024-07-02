import space4 from '../assets/img/space4.jpg'
import PropTypes from 'prop-types'

export const Space4 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={space4} alt="Imágenes del espacio" className="image"/>
    </div>
  )
}

Space4.propTypes = {
  className: PropTypes.string
};