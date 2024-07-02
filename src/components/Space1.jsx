import space1 from '../assets/img/space1.jpg'
import PropTypes from 'prop-types'

export const Space1 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={space1} alt="Imágenes del espacio" className="image" />
    </div>
  )
}

Space1.propTypes = {
  className: PropTypes.string
};