import space5 from '../assets/img/space5.jpg'
import PropTypes from 'prop-types'

export const Space5 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={space5} alt="Imágenes del espacio" className="image"/>
    </div>
  )
}

Space5.propTypes = {
  className: PropTypes.string
};