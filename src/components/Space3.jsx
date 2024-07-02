import space3 from '../assets/img/space3.jpg'
import PropTypes from 'prop-types'

export const Space3 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={space3} alt="Imágenes del espacio" className="image"/>
    </div>
  )
}

Space3.propTypes = {
  className: PropTypes.string
};