import space6 from '../assets/img/space6.jpg'
import PropTypes from 'prop-types'

export const Space6 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={space6} alt="Imágenes del espacio" className="image"/>
    </div>
  )
}

Space6.propTypes = {
  className: PropTypes.string
};