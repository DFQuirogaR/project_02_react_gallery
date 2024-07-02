import space2 from '../assets/img/space2.jpg'
import PropTypes from 'prop-types'

export const Space2 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={space2} alt="Imágenes del espacio" className="image"/>
    </div>
  )
}

Space2.propTypes = {
  className: PropTypes.string
};