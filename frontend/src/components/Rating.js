import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
    return (
        <div className='rating' >
            <span>
                <i style={{ color }} className={value >= 1 ? "fas fa-star" : value >= 0.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            </span>
            <span>
                <i style={{ color }} className={value >= 2 ? "fas fa-star" : value >= 1.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            </span>
            <span>
                <i style={{ color }} className={value >= 3 ? "fas fa-star" : value >= 2.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            </span>
            <span>
                <i style={{ color }} className={value >= 4 ? "fas fa-star" : value >= 3.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            </span>
            <span>
                <i style={{ color }} className={value >= 5 ? "fas fa-star" : value >= 4.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            </span>
            <span>
                {text && text}
            </span>
        </div >
    )
}

// default values to be used, when caller function does not pass this values 
Rating.defaultProps = {
    color: '#f8e825',
}

// defining the types of props, 
//to ensure caller function passes values with correct data type
Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
}

export default Rating